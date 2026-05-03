"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { BUSINESS, SERVICES } from "@/app/lib/business";
import { useI18n } from "@/app/lib/i18n";
import { CTAButton } from "@/app/components/CTAButton";
import { AlertCircle, Check, Message } from "@/app/components/icons";

type FieldKey = "name" | "phone" | "zip" | "appliance" | "brand" | "message";
type FormState = Record<FieldKey, string>;

const INITIAL: FormState = {
  name: "",
  phone: "",
  zip: "",
  appliance: "",
  brand: "",
  message: "",
};

function buildWhatsAppUrl(
  state: FormState,
  applianceLabel: string,
  t: (k: string) => string,
) {
  const lines = [
    t("wa_msg_intro"),
    "",
    `${t("contact_name")}: ${state.name}`,
    `${t("contact_phone")}: ${state.phone}`,
    `${t("contact_zip")}: ${state.zip}`,
    `${t("contact_appliance")}: ${applianceLabel}`,
    state.brand.trim() ? `${t("contact_brand")}: ${state.brand}` : null,
    `${t("wa_msg_issue")}: ${state.message}`,
    "",
    t("wa_msg_signature"),
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
  return `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(lines)}`;
}

export function LeadForm() {
  const { t } = useI18n();
  const [state, setState] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [lastUrl, setLastUrl] = useState<string | null>(null);

  const update =
    (k: FieldKey) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setState((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const e: Partial<Record<FieldKey, string>> = {};
    if (!state.name.trim()) e.name = t("form_required");
    if (!state.phone.trim()) e.phone = t("form_required");
    else if (state.phone.replace(/\D/g, "").length < 10) e.phone = t("form_phone_invalid");
    if (!state.zip.trim()) e.zip = t("form_required");
    if (!state.appliance) e.appliance = t("form_pick_appliance");
    if (!state.message.trim()) e.message = t("form_describe_help");
    return e;
  };

  const submit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const service = SERVICES.find((s) => s.id === state.appliance);
    const applianceLabel = service ? service.serviceType : state.appliance;
    const url = buildWhatsAppUrl(state, applianceLabel, t);

    // Open in a new tab from the click handler so the popup blocker allows it.
    // On mobile this hands off to the WhatsApp app via universal link.
    window.open(url, "_blank", "noopener,noreferrer");
    setLastUrl(url);
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-green-soft border border-green/30 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green text-white flex items-center justify-center mx-auto mb-4">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="text-[22px] font-bold text-ink mb-2">{t("contact_received_t")}</h3>
        <p className="text-ink-soft max-w-md mx-auto">{t("contact_received_s")}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          {lastUrl ? (
            <a
              href={lastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-semibold rounded-lg btn-primary focus-ring"
            >
              <Message size={18} /> {t("wa_open_again")}
            </a>
          ) : null}
          <CTAButton variant="outline" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
            {t("cta_call")} {BUSINESS.phone}
          </CTAButton>
        </div>
      </div>
    );
  }

  const label = (text: string, required = false) => (
    <span className="block text-[14px] font-semibold text-ink mb-1.5">
      {text} {required ? <span className="text-orange">*</span> : null}
    </span>
  );

  const errorLine = (msg?: string) =>
    msg ? (
      <p className="mt-1.5 text-[13px] text-red-600 flex items-center gap-1.5">
        <AlertCircle size={14} />
        {msg}
      </p>
    ) : null;

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          {label(t("contact_name"), true)}
          <input
            className={`input-base ${errors.name ? "error" : ""}`}
            placeholder="Jane Smith"
            value={state.name}
            onChange={update("name")}
          />
          {errorLine(errors.name)}
        </label>
        <label className="block">
          {label(t("contact_phone"), true)}
          <input
            type="tel"
            className={`input-base ${errors.phone ? "error" : ""}`}
            placeholder="(215) 555-0100"
            value={state.phone}
            onChange={update("phone")}
          />
          {errorLine(errors.phone)}
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          {label(t("contact_zip"), true)}
          <input
            className={`input-base ${errors.zip ? "error" : ""}`}
            placeholder="Upper Darby / 19082"
            value={state.zip}
            onChange={update("zip")}
          />
          {errorLine(errors.zip)}
          <p className="mt-1.5 text-[13px] text-ink-muted">{BUSINESS.serviceState}</p>
        </label>
        <label className="block">
          {label(t("contact_appliance"), true)}
          <select
            className={`input-base ${errors.appliance ? "error" : ""}`}
            value={state.appliance}
            onChange={update("appliance")}
          >
            <option value="">{t("contact_select")}…</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {t(`svc_short_${s.id}`)}
              </option>
            ))}
          </select>
          {errorLine(errors.appliance)}
        </label>
      </div>

      <label className="block">
        {label(t("contact_brand"))}
        <input
          className="input-base"
          placeholder="Whirlpool, GE, Samsung…"
          value={state.brand}
          onChange={update("brand")}
        />
      </label>

      <label className="block">
        {label(t("contact_describe"), true)}
        <textarea
          className={`input-base ${errors.message ? "error" : ""}`}
          value={state.message}
          onChange={update("message")}
        />
        {errorLine(errors.message)}
      </label>

      <div className="pt-2">
        <CTAButton variant="primary" size="lg" full icon="Message" type="submit">
          {t("contact_submit")}
        </CTAButton>
      </div>

      <div className="pt-3 border-t border-line">
        <p className="text-[14px] text-ink-muted mb-3">{t("cta_call_us")}:</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton variant="secondary" icon="Phone" href={`tel:${BUSINESS.phoneRaw}`}>
            {BUSINESS.phone}
          </CTAButton>
          <CTAButton variant="outline" icon="Message" href={BUSINESS.whatsappUrl}>
            {t("cta_text_instead")}
          </CTAButton>
        </div>
      </div>
    </form>
  );
}

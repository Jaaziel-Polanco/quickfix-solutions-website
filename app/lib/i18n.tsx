"use client";

import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import { altUrl, localePath, stripLocale, type Lang } from "@/app/lib/locale";

export { altUrl, localePath, stripLocale, type Lang };

type Dict = Record<string, string>;

const I18N: Record<Lang, Dict> = {
  en: {
    nav_services: "Services",
    nav_areas: "Service Areas",
    nav_landlords: "Landlords",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    cta_call: "Call",
    cta_text: "WhatsApp us",
    cta_send_details: "Send unit details",
    cta_call_us: "Call us",
    cta_check_address: "Check your address",
    cta_text_instead: "Message on WhatsApp",
    menu: "Menu",
    close: "Close",

    hero_pill: "Booking next-day visits across",
    hero_h1_a: "Appliance trouble?",
    hero_h1_b: "We fix it fast.",
    hero_sub:
      "Honest, residential appliance repair from a technician who shows up on time, diagnoses on the spot, and tells you exactly what it'll cost — before any work begins.",
    hero_check_1: "Diagnostic starts at $50 within 5 miles",
    hero_check_2: "30-day labor warranty",
    hero_check_3: "Residential only",
    hero_today_window: "Today's window",
    hero_booked_thru: "Booked through Thu",
    hero_fri_opens: "Fri opens at 8 AM",
    hero_next_day: "Most jobs booked next-day",
    hero_same_day: "Same-day available when scheduling allows",

    marq_residential: "Residential only",
    marq_nextday: "Next-day service",
    marq_warranty: "30-day warranty",
    marq_diagnostic: "Diagnostic credited",
    marq_pa: "PA-wide coverage",

    trust_nextday_t: "Next-day service",
    trust_nextday_s: "in most cases",
    trust_sameday_t: "Same-day available",
    trust_sameday_s: "when scheduling allows",
    trust_diag_t: "Diagnostic starts at $50",
    trust_diag_s: "within 5 miles, credited to repair",
    trust_warranty_t: "30-day labor warranty",
    trust_warranty_s: "on completed repairs",

    svc_eyebrow: "What we fix",
    svc_h2: "Six residential appliances. Done right, the first time.",
    svc_sub:
      "We stay in our lane on purpose. Specializing keeps our parts stock relevant, our diagnostics sharp, and our turnaround short.",
    svc_residential: "Residential",
    svc_common: "Common issues fixed",
    svc_learn: "Learn more",
    svc_washer_t: "Washer Repair",
    svc_washer_i: "Not draining, leaking, won't spin, loud during spin, won't start, error codes.",
    svc_dryer_t: "Dryer Repair",
    svc_dryer_i: "No heat, takes too long to dry, won't tumble, squealing, thermal fuse, vent issues.",
    svc_fridge_t: "Refrigerator Repair",
    svc_fridge_i: "Not cooling, water on the floor, ice maker stopped, fan noise, fridge running constantly.",
    svc_freezer_t: "Freezer Repair",
    svc_freezer_i: "Frost buildup, not freezing, defrost issues, door seal failure, temperature swings.",
    svc_gas_t: "Gas Stove Repair",
    svc_gas_i: "Burner won't ignite, weak flame, oven not heating, faulty igniter, gas smell at startup.",
    svc_electric_t: "Electric Stove Repair",
    svc_electric_i: "Coil not heating, surface element issues, oven temperature off, control board, broiler.",
    svc_short_washer: "Washer",
    svc_short_dryer: "Dryer",
    svc_short_fridge: "Refrigerator",
    svc_short_freezer: "Freezer",
    svc_short_gas: "Gas Stove",
    svc_short_electric: "Electric Stove",

    exc_eyebrow: "Scope",
    exc_h2: "What we do not service",
    exc_sub:
      "To save you time and a wasted visit, here's what's outside our scope. If it's on this list, we can't help — and we'd rather tell you up front.",
    exc_commercial: "Commercial appliances",
    exc_microwaves: "Microwaves",
    exc_blenders: "Blenders",
    exc_fryers: "Fryers",
    exc_small: "Small appliances",
    exc_parts: "Parts-only requests",

    diag_eyebrow: "Simple diagnostic pricing",
    diag_h2: "Diagnostic starts at $50 — credited toward your repair.",
    diag_p1:
      "Our diagnostic fee starts at $50 within 5 miles and varies by distance for longer trips. If you approve the repair, that fee is applied to the total. No diagnostic surcharge stacked on top of labor — you don't pay it twice.",
    diag_p2: "Final repair pricing is given in writing on-site, before any work starts.",

    ll_pill: "For landlords & property managers",
    ll_h2: "Tenant repairs handled — without you in the middle.",
    ll_sub:
      "Direct scheduling with the tenant, written estimates before approval, and itemized invoices with photos. We make your day easier.",
    ll_step1_t: "Tell us about the unit",
    ll_step1_b: "Send the address, appliance, and a quick description. We'll reply with a window.",
    ll_step2_t: "We coordinate with the tenant",
    ll_step2_b: "Direct scheduling — you don't have to relay messages back and forth.",
    ll_step3_t: "Diagnostic visit",
    ll_step3_b: "On-site assessment with a written estimate before any repair starts.",
    ll_step4_t: "You approve the work",
    ll_step4_b: "Repair authorization sent to the property contact. No surprise charges.",
    ll_step5_t: "Invoice + report",
    ll_step5_b: "Itemized invoice with photos and notes for your records.",

    areas_eyebrow: "Coverage",
    areas_h2_pre: "",
    areas_h2_post: "residential service areas",
    areas_sub:
      "Don't see your town? Call us — we cover plenty of nearby ZIPs that don't fit on the list.",

    rev_eyebrow: "Reviews",
    rev_h2: "We're collecting reviews now.",
    rev_sub:
      "Real reviews from real customers — coming soon. We don't post stock testimonials. If you've worked with us recently, we'd love a few words.",
    rev_verified: "Verified reviews appear here once collected.",

    faq_eyebrow: "Frequently asked",
    faq_h2: "Quick answers before you call.",
    faq_q1: "How quickly can you come out?",
    faq_a1:
      "Most jobs get a next-day window. Same-day visits happen when an opening fits — call early in the day for the best chance.",
    faq_q2: "What does the diagnostic visit cost?",
    faq_a2:
      "A flat diagnostic fee covers the on-site assessment. If you approve the repair, that fee is credited toward the total — you don't pay it twice.",
    faq_q3: "Do you stock parts?",
    faq_a3:
      "Common wear parts ride on the truck. Less common parts are ordered after diagnostic — typical turnaround is 2–5 business days.",
    faq_q4: "Is there a warranty?",
    faq_a4:
      "Yes — a 30-day labor warranty on the repair we performed. Manufacturer part warranties may extend longer; we pass those through when applicable.",
    faq_q5: "Do you service commercial kitchens or laundromats?",
    faq_a5:
      "No. We focus exclusively on residential appliances. Commercial work needs different licensing and parts channels.",

    cta_eyebrow: "Ready when you are",
    cta_h2: "Stop wrestling with the appliance.",
    cta_sub: "We're a phone call away. Tell us what's wrong — we'll tell you when we can come.",
    cta_avail: "Available now",

    contact_eyebrow: "Get in touch",
    contact_h2: "Tell us what's broken.",
    contact_sub:
      "Quickest answer is a phone call. If you'd rather write, this form goes straight to our scheduler.",
    contact_name: "Your name",
    contact_phone: "Phone number",
    contact_email: "Email",
    contact_appliance: "Which appliance?",
    contact_describe: "Describe the issue",
    contact_zip: "ZIP code",
    contact_consent: "I'd like to be contacted by phone or text.",
    contact_submit: "Send via WhatsApp",
    contact_sent: "Got it — we'll be in touch soon.",
    contact_select: "Select an appliance",
    contact_brand: "Brand",
    contact_received_t: "WhatsApp opened",
    contact_received_s:
      "We just opened WhatsApp with your details prefilled. Send the message to us and we'll reply during business hours to confirm a window. If it didn't open, call us directly.",
    wa_msg_intro: "Hi QuickFix Solutions — I'd like to schedule a service:",
    wa_msg_issue: "Issue",
    wa_msg_signature: "Sent from quickfixsolutions.services",
    wa_open_again: "Reopen WhatsApp",
    form_required: "Required",
    form_phone_invalid: "Enter a 10-digit phone",
    form_pick_appliance: "Pick an appliance",
    form_describe_help: "A short description helps us prepare",

    foot_tagline: "Honest residential appliance repair across Pennsylvania.",
    foot_company: "Company",
    foot_about: "About",
    foot_services: "Services",
    foot_landlords: "Landlords",
    foot_contact: "Contact",
    foot_legal: "Legal",
    foot_terms: "Terms",
    foot_privacy: "Privacy",
    foot_rights: "All rights reserved.",
    foot_residential: "Residential repairs only.",

    lang_label: "Language",
    lang_en: "English",
    lang_es: "Español",
    skip_link: "Skip to main content",
    text_label: "WhatsApp",
    hours_label: "Availability",
    hours_value: "Online requests open 24/7",
    hours_note:
      "Real-time scheduling during business hours. Online requests (call, text, WhatsApp, contact form) are accepted any time.",

    // Generic page bits
    page_back_home: "Back to home",
    related_services: "Other services we provide",

    // Services index page
    pg_svc_h1: "Residential Appliance Repair Services",
    pg_svc_intro:
      "We provide residential appliance repair across Pennsylvania for homeowners, tenants, landlords, and property managers. Each appliance below has its own service page with common issues, process, and pricing notes.",
    pg_svc_choose: "Choose your appliance",

    // Common service-page sections (per appliance)
    sec_problems_h: "Common issues we fix",
    sec_process_h: "How a service visit works",
    sec_process_1_t: "Tell us what's wrong",
    sec_process_1_b:
      "Call or text. Share the appliance, brand if you know it, and a short description of the issue.",
    sec_process_2_t: "On-site diagnostic",
    sec_process_2_b:
      "We assess the appliance in your home and give you a written estimate before any work starts.",
    sec_process_3_t: "Approve, repair, warranty",
    sec_process_3_b:
      "If you approve the repair, the diagnostic fee is credited toward the total. Backed by a 30-day labor warranty.",
    sec_diag_h: "Diagnostic fee",
    sec_warranty_h: "Warranty",
    sec_warranty_b:
      "We back our work with a 30-day labor warranty on the repair we performed. Manufacturer part warranties may extend longer; we pass those through when applicable.",
    sec_areas_h: "Where we service",
    sec_areas_b:
      "We provide residential service across Pennsylvania communities near Philadelphia, Upper Darby, and Delaware County. See the full list on the service area page.",
    sec_cta_h: "Ready to schedule?",
    sec_cta_b: "Most appointments are booked next-day. Same-day visits when scheduling allows.",

    // Per-service short answer-first intros
    svc_intro_washer:
      "We provide residential washer repair for issues like draining problems, leaks, won't spin, loud spin cycles, won't start, and error codes. Most appointments are booked next-day, with same-day visits when scheduling allows.",
    svc_intro_dryer:
      "We provide residential dryer repair for no heat, long drying times, won't tumble, squealing, thermal fuse issues, and vent problems. Most appointments are booked next-day, with same-day visits when scheduling allows.",
    svc_intro_fridge:
      "We provide residential refrigerator repair for not cooling, water on the floor, ice makers that stopped, fan noise, and units running constantly. Most appointments are booked next-day, with same-day visits when scheduling allows.",
    svc_intro_freezer:
      "We provide residential freezer repair for frost buildup, not freezing, defrost issues, door seal failures, and temperature swings. Most appointments are booked next-day, with same-day visits when scheduling allows.",
    svc_intro_gas:
      "We provide residential gas stove repair for burners that won't ignite, weak flames, ovens not heating, faulty igniters, and gas smell at startup. Most appointments are booked next-day, with same-day visits when scheduling allows.",
    svc_intro_electric:
      "We provide residential electric stove repair for coils that don't heat, surface element issues, oven temperature problems, control boards, and broiler issues. Most appointments are booked next-day, with same-day visits when scheduling allows.",

    // Gas safety notice (mandatory on gas stove page)
    gas_safety_t: "Important gas safety note",
    gas_safety_b:
      "If you smell gas or suspect a gas leak, leave the area immediately and contact your gas provider or emergency services. QuickFix Solutions does not provide emergency gas leak response.",

    // Service Areas page
    pg_areas_h1: "Appliance Repair Service Area in Pennsylvania",
    pg_areas_intro:
      "We provide residential appliance repair across Pennsylvania communities near Philadelphia, Upper Darby, Drexel Hill, Lansdowne, Havertown, West Philadelphia, and surrounding areas in Delaware County.",
    pg_areas_distance:
      "Diagnostic starts at $50 within 5 miles and varies by distance for longer trips. Don't see your town? Call or text — we cover plenty of nearby ZIP codes that don't fit on the list.",
    pg_areas_send_zip: "Send us your ZIP code",

    // Landlords page
    pg_ll_h1: "Appliance Repair for Landlords and Property Managers",
    pg_ll_intro:
      "We support landlords and property managers with residential appliance repair across Pennsylvania. Direct scheduling with the tenant, written estimates before approval, and itemized invoices with photos for your records.",
    pg_ll_what_h: "What we service",
    pg_ll_what_b:
      "Residential washers, dryers, refrigerators, freezers, gas stoves, and electric stoves only.",
    pg_ll_dont_h: "What we don't service",
    pg_ll_dont_b:
      "We do not repair commercial appliances, microwaves, blenders, fryers, small appliances, or parts-only requests.",

    // FAQ page
    pg_faq_intro: "Quick answers about scheduling, pricing, warranty, and the service we provide.",

    // Reviews page
    pg_rev_intro:
      "Customer reviews will appear here as they are collected. We don't post stock testimonials. If you've worked with us recently, we'd love a few words.",
    pg_rev_h1: "What our customers say",
    pg_rev_intro_2:
      "Real feedback from homeowners, tenants, landlords, and property managers across Pennsylvania. If we worked on your appliance recently, we'd love a few words too — call or message us on WhatsApp.",
    rev_coming_t: "Customer reviews coming soon.",
    rev_coming_b:
      "QuickFix Solutions is building its local reputation one repair at a time. Verified reviews will appear here as they are collected — we don't post stock testimonials.",
    rev_coming_chip: "Verified reviews will appear here once collected.",
    rev_coming_long:
      "If you've worked with us recently, we'd love a few words. Honest feedback from every customer helps us serve our local Pennsylvania community better.",

    // About page
    nav_about: "About",
    pg_about_eyebrow: "About",
    pg_about_h1: "About QuickFix Solutions",
    pg_about_p1:
      "QuickFix Solutions is a local residential appliance repair service serving Pennsylvania communities near Philadelphia, Upper Darby, Delaware County, and surrounding areas.",
    pg_about_p2:
      "We help homeowners, tenants, landlords, and property managers request appliance repair service for washers, dryers, refrigerators, freezers, and gas or electric stoves.",
    pg_about_p3:
      "QuickFix Solutions is a service-area business. We do not operate a public storefront. Service is provided at the customer's location within our local Pennsylvania service area.",
    pg_about_p4:
      "We are currently building our local reputation one repair at a time and welcome honest feedback from every customer we serve.",

    // Service-model trust section (home)
    sm_eyebrow: "How we work",
    sm_h2: "A local service-area appliance repair business",
    sm_intro:
      "QuickFix Solutions provides residential appliance repair at the customer's location. We focus on clear communication, simple scheduling, and diagnostic visits for washers, dryers, refrigerators, freezers, and gas or electric stoves.",
    sm_b1: "Local Pennsylvania service area",
    sm_b2: "Residential appliance repair only",
    sm_b3: "Homeowners, tenants, landlords, and property managers welcome",
    sm_b4: "Diagnostic starts at $50 within 5 miles",
    sm_b5: "Diagnostic goes toward the repair if approved",
    sm_b6: "30-day labor warranty",
    sm_b7: "Online requests open 24/7",
    sm_storefront_t: "No public storefront",
    sm_storefront_b:
      "QuickFix Solutions is a service-area business. We do not operate a public storefront. Call or text your ZIP code to confirm availability in your area.",

    // Contact page
    pg_contact_intro:
      "Quickest answer is a phone call. If you'd rather write, the form on this page goes straight to our scheduler.",

    // Why-us positioning section
    why_eyebrow: "Why people choose us",
    why_h2: "A focused local team — not a national call center.",
    why_sub:
      "We are a small, local crew that specializes in residential appliance repair across Pennsylvania. We don't cover everything; we cover what matters in your home — well.",
    why_1_t: "Residential specialists",
    why_1_b:
      "We focus on six common household appliances, so our diagnostics are sharp and our parts stock stays relevant.",
    why_2_t: "Transparent diagnostic pricing",
    why_2_b:
      "Diagnostic starts at $50 within 5 miles. If you approve the repair, that fee is credited toward the total — you don't pay it twice.",
    why_3_t: "Same- or next-day scheduling",
    why_3_b:
      "Most jobs get a next-day window. Same-day visits happen when an opening fits — call early for the best chance.",
    why_4_t: "Written estimates before work",
    why_4_b:
      "On-site assessment with a written estimate before any repair starts. No surprise charges after the fact.",
    why_5_t: "30-day labor warranty",
    why_5_b:
      "We back the repair we performed for 30 days on labor. Manufacturer part warranties may extend longer; we pass those through when applicable.",
    why_6_t: "Direct contact, in English or Spanish",
    why_6_b:
      "Call or message us on WhatsApp. Real human answers — bilingual service for homeowners, tenants, landlords, and property managers.",
    why_cta: "Most customers reach us by phone or WhatsApp",
  },

  es: {
    nav_services: "Servicios",
    nav_areas: "Zonas de Servicio",
    nav_landlords: "Propietarios",
    nav_reviews: "Reseñas",
    nav_faq: "Preguntas",
    nav_contact: "Contacto",
    cta_call: "Llama",
    cta_text: "Escríbenos por WhatsApp",
    cta_send_details: "Enviar detalles",
    cta_call_us: "Llámanos",
    cta_check_address: "Verifica tu dirección",
    cta_text_instead: "Mejor por WhatsApp",
    menu: "Menú",
    close: "Cerrar",

    hero_pill: "Visitas al día siguiente en",
    hero_h1_a: "¿Problemas con un electrodoméstico?",
    hero_h1_b: "Lo arreglamos rápido.",
    hero_sub:
      "Reparación residencial honesta, con un técnico que llega a tiempo, diagnostica en sitio y te dice exactamente cuánto costará — antes de empezar cualquier trabajo.",
    hero_check_1: "Diagnóstico desde $50 (5 millas)",
    hero_check_2: "Garantía de 30 días en mano de obra",
    hero_check_3: "Solo residencial",
    hero_today_window: "Disponibilidad de hoy",
    hero_booked_thru: "Lleno hasta el jueves",
    hero_fri_opens: "Viernes abre a las 8 AM",
    hero_next_day: "La mayoría de visitas al día siguiente",
    hero_same_day: "Mismo día cuando hay disponibilidad",

    marq_residential: "Solo residencial",
    marq_nextday: "Servicio al día siguiente",
    marq_warranty: "Garantía de 30 días",
    marq_diagnostic: "Diagnóstico acreditable",
    marq_pa: "Cobertura en toda PA",

    trust_nextday_t: "Servicio al día siguiente",
    trust_nextday_s: "en la mayoría de casos",
    trust_sameday_t: "Mismo día disponible",
    trust_sameday_s: "cuando lo permita la agenda",
    trust_diag_t: "Diagnóstico desde $50",
    trust_diag_s: "dentro de 5 millas, acreditable a la reparación",
    trust_warranty_t: "Garantía de 30 días en mano de obra",
    trust_warranty_s: "sobre la reparación realizada",

    svc_eyebrow: "Lo que reparamos",
    svc_h2: "Seis electrodomésticos residenciales. Bien hechos, a la primera.",
    svc_sub:
      "Nos especializamos a propósito. Eso mantiene nuestro stock de piezas relevante, los diagnósticos certeros y los tiempos cortos.",
    svc_residential: "Residencial",
    svc_common: "Problemas comunes",
    svc_learn: "Saber más",
    svc_washer_t: "Reparación de Lavadora",
    svc_washer_i: "No drena, gotea, no centrifuga, ruidos al centrifugar, no enciende, códigos de error.",
    svc_dryer_t: "Reparación de Secadora",
    svc_dryer_i: "Sin calor, tarda en secar, no gira, chillidos, fusible térmico, problemas de ventilación.",
    svc_fridge_t: "Reparación de Refrigerador",
    svc_fridge_i:
      "No enfría, agua en el suelo, fábrica de hielo parada, ruidos del ventilador, funciona constantemente.",
    svc_freezer_t: "Reparación de Congelador",
    svc_freezer_i:
      "Acumulación de escarcha, no congela, problemas de descongelado, sello de puerta, cambios de temperatura.",
    svc_gas_t: "Reparación de Estufa de Gas",
    svc_gas_i:
      "Quemador no enciende, llama débil, horno no calienta, encendedor defectuoso, olor a gas al encender.",
    svc_electric_t: "Reparación de Estufa Eléctrica",
    svc_electric_i:
      "Resistencia que no calienta, problemas en superficies, temperatura del horno incorrecta, tarjeta de control, asador.",
    svc_short_washer: "Lavadora",
    svc_short_dryer: "Secadora",
    svc_short_fridge: "Refrigerador",
    svc_short_freezer: "Congelador",
    svc_short_gas: "Estufa de Gas",
    svc_short_electric: "Estufa Eléctrica",

    exc_eyebrow: "Alcance",
    exc_h2: "Lo que no reparamos",
    exc_sub:
      "Para ahorrarte tiempo y una visita en vano, esto está fuera de nuestro alcance. Si está en la lista, no podemos ayudar — y preferimos decirlo de frente.",
    exc_commercial: "Electrodomésticos comerciales",
    exc_microwaves: "Microondas",
    exc_blenders: "Licuadoras",
    exc_fryers: "Freidoras",
    exc_small: "Pequeños electrodomésticos",
    exc_parts: "Solicitudes solo de piezas",

    diag_eyebrow: "Precios de diagnóstico simples",
    diag_h2: "Diagnóstico desde $50 — acreditado a tu reparación.",
    diag_p1:
      "El diagnóstico inicia en $50 dentro de las 5 millas y varía por distancia para viajes más largos. Si apruebas la reparación, esa tarifa se aplica al total. Sin recargos extra de diagnóstico sobre la mano de obra — no lo pagas dos veces.",
    diag_p2: "El precio final de reparación se entrega por escrito en sitio, antes de comenzar cualquier trabajo.",

    ll_pill: "Para propietarios y administradores",
    ll_h2: "Reparaciones del inquilino atendidas — sin ti en medio.",
    ll_sub:
      "Coordinación directa con el inquilino, presupuestos por escrito antes de aprobar y facturas detalladas con fotos. Te facilitamos el día.",
    ll_step1_t: "Cuéntanos sobre la unidad",
    ll_step1_b:
      "Envía la dirección, el electrodoméstico y una descripción rápida. Respondemos con un horario.",
    ll_step2_t: "Coordinamos con el inquilino",
    ll_step2_b: "Programación directa — no tienes que pasar mensajes de un lado a otro.",
    ll_step3_t: "Visita de diagnóstico",
    ll_step3_b: "Evaluación en sitio con presupuesto por escrito antes de iniciar la reparación.",
    ll_step4_t: "Tú apruebas el trabajo",
    ll_step4_b: "Autorización de reparación enviada al contacto de la propiedad. Sin cargos sorpresa.",
    ll_step5_t: "Factura + reporte",
    ll_step5_b: "Factura detallada con fotos y notas para tus registros.",

    areas_eyebrow: "Cobertura",
    areas_h2_pre: "Áreas de servicio residencial en ",
    areas_h2_post: "",
    areas_sub:
      "¿No ves tu ciudad? Llámanos — cubrimos muchos códigos postales cercanos que no caben en la lista.",

    rev_eyebrow: "Reseñas",
    rev_h2: "Estamos recopilando reseñas.",
    rev_sub:
      "Reseñas reales de clientes reales — pronto. No publicamos testimonios genéricos. Si trabajaste con nosotros recientemente, nos encantaría unas palabras.",
    rev_verified: "Las reseñas verificadas aparecerán aquí una vez recopiladas.",

    faq_eyebrow: "Preguntas frecuentes",
    faq_h2: "Respuestas rápidas antes de llamar.",
    faq_q1: "¿Qué tan rápido pueden venir?",
    faq_a1:
      "La mayoría de trabajos tienen ventana al día siguiente. Las visitas el mismo día ocurren cuando hay un hueco — llama temprano para mejor oportunidad.",
    faq_q2: "¿Cuánto cuesta la visita de diagnóstico?",
    faq_a2:
      "Una tarifa fija de diagnóstico cubre la evaluación en sitio. Si apruebas la reparación, esa tarifa se acredita al total — no la pagas dos veces.",
    faq_q3: "¿Tienen piezas en stock?",
    faq_a3:
      "Las piezas comunes van en el camión. Las menos comunes se piden tras el diagnóstico — el plazo típico es de 2 a 5 días hábiles.",
    faq_q4: "¿Hay garantía?",
    faq_a4:
      "Sí — garantía de 30 días en mano de obra sobre la reparación realizada. Las garantías de fabricante pueden ser más largas; las trasladamos cuando aplica.",
    faq_q5: "¿Atienden cocinas comerciales o lavanderías?",
    faq_a5:
      "No. Nos enfocamos exclusivamente en electrodomésticos residenciales. El trabajo comercial requiere licencias y canales de piezas distintos.",

    cta_eyebrow: "Listo cuando quieras",
    cta_h2: "Deja de pelear con el electrodoméstico.",
    cta_sub: "Estamos a una llamada. Cuéntanos qué falla — te decimos cuándo podemos ir.",
    cta_avail: "Disponible ahora",

    contact_eyebrow: "Contáctanos",
    contact_h2: "Cuéntanos qué se rompió.",
    contact_sub:
      "La respuesta más rápida es por llamada. Si prefieres escribir, este formulario llega directo a nuestro programador.",
    contact_name: "Tu nombre",
    contact_phone: "Número de teléfono",
    contact_email: "Correo",
    contact_appliance: "¿Qué electrodoméstico?",
    contact_describe: "Describe el problema",
    contact_zip: "Código postal",
    contact_consent: "Quiero que me contacten por teléfono o mensaje.",
    contact_submit: "Enviar por WhatsApp",
    contact_sent: "Listo — te contactaremos pronto.",
    contact_select: "Selecciona un electrodoméstico",
    contact_brand: "Marca",
    contact_received_t: "WhatsApp abierto",
    contact_received_s:
      "Acabamos de abrir WhatsApp con tus datos precargados. Envíanos el mensaje y te respondemos en horario laboral para confirmar la ventana. Si no se abrió, llámanos directo.",
    wa_msg_intro: "Hola QuickFix Solutions — me gustaría agendar un servicio:",
    wa_msg_issue: "Problema",
    wa_msg_signature: "Enviado desde quickfixsolutions.services",
    wa_open_again: "Reabrir WhatsApp",
    form_required: "Requerido",
    form_phone_invalid: "Ingresa un teléfono de 10 dígitos",
    form_pick_appliance: "Elige un electrodoméstico",
    form_describe_help: "Una descripción corta nos ayuda a prepararnos",

    foot_tagline: "Reparación residencial honesta de electrodomésticos en Pensilvania.",
    foot_company: "Compañía",
    foot_about: "Nosotros",
    foot_services: "Servicios",
    foot_landlords: "Propietarios",
    foot_contact: "Contacto",
    foot_legal: "Legal",
    foot_terms: "Términos",
    foot_privacy: "Privacidad",
    foot_rights: "Todos los derechos reservados.",
    foot_residential: "Solo reparaciones residenciales.",

    lang_label: "Idioma",
    lang_en: "English",
    lang_es: "Español",
    skip_link: "Saltar al contenido principal",
    text_label: "WhatsApp",
    hours_label: "Disponibilidad",
    hours_value: "Solicitudes en línea 24/7",
    hours_note:
      "Programación en tiempo real durante horario laboral. Las solicitudes en línea (llamada, mensaje, WhatsApp, formulario) se aceptan en cualquier momento.",

    page_back_home: "Volver al inicio",
    related_services: "Otros servicios que ofrecemos",

    pg_svc_h1: "Servicios de Reparación de Electrodomésticos Residenciales",
    pg_svc_intro:
      "Ofrecemos reparación residencial de electrodomésticos en Pensilvania para propietarios, inquilinos, landlords y administradores de propiedades. Cada electrodoméstico abajo tiene su propia página con problemas comunes, proceso y notas de precio.",
    pg_svc_choose: "Elige tu electrodoméstico",

    sec_problems_h: "Problemas comunes que reparamos",
    sec_process_h: "Cómo funciona una visita",
    sec_process_1_t: "Cuéntanos qué falla",
    sec_process_1_b:
      "Llama o envía un mensaje. Comparte el electrodoméstico, la marca si la sabes, y una descripción breve del problema.",
    sec_process_2_t: "Diagnóstico en sitio",
    sec_process_2_b:
      "Evaluamos el equipo en tu casa y entregamos un presupuesto por escrito antes de iniciar cualquier trabajo.",
    sec_process_3_t: "Apruebas, reparamos, garantía",
    sec_process_3_b:
      "Si apruebas la reparación, la tarifa de diagnóstico se acredita al total. Respaldado por garantía de 30 días en mano de obra.",
    sec_diag_h: "Tarifa de diagnóstico",
    sec_warranty_h: "Garantía",
    sec_warranty_b:
      "Respaldamos nuestro trabajo con una garantía de 30 días en mano de obra sobre la reparación realizada. Las garantías de fabricante pueden ser más largas; las trasladamos cuando aplica.",
    sec_areas_h: "Dónde damos servicio",
    sec_areas_b:
      "Servicio residencial en comunidades de Pensilvania cerca de Philadelphia, Upper Darby y Delaware County. Consulta la lista completa en la página de zonas de servicio.",
    sec_cta_h: "¿Listo para agendar?",
    sec_cta_b:
      "La mayoría de citas se programan al día siguiente. Mismo día cuando hay disponibilidad.",

    svc_intro_washer:
      "Reparación residencial de lavadoras para problemas de drenaje, fugas, no centrifuga, ruidos al centrifugar, no enciende y códigos de error. Mayoría de citas al día siguiente, con mismo día cuando hay disponibilidad.",
    svc_intro_dryer:
      "Reparación residencial de secadoras para falta de calor, ciclos largos, no gira, chillidos, fusible térmico y problemas de ventilación. Mayoría de citas al día siguiente, con mismo día cuando hay disponibilidad.",
    svc_intro_fridge:
      "Reparación residencial de refrigeradores para no enfría, agua en el suelo, fábrica de hielo parada, ruidos del ventilador y unidades que funcionan constantemente. Mayoría de citas al día siguiente, con mismo día cuando hay disponibilidad.",
    svc_intro_freezer:
      "Reparación residencial de congeladores para escarcha, no congela, problemas de descongelado, sello de puerta y cambios de temperatura. Mayoría de citas al día siguiente, con mismo día cuando hay disponibilidad.",
    svc_intro_gas:
      "Reparación residencial de estufas de gas para quemadores que no encienden, llama débil, horno que no calienta, encendedores defectuosos y olor a gas al encender. Mayoría de citas al día siguiente, con mismo día cuando hay disponibilidad.",
    svc_intro_electric:
      "Reparación residencial de estufas eléctricas para resistencias que no calientan, problemas de superficies, temperatura del horno, tarjetas de control y asadores. Mayoría de citas al día siguiente, con mismo día cuando hay disponibilidad.",

    gas_safety_t: "Aviso importante de seguridad con gas",
    gas_safety_b:
      "Si hueles gas o sospechas una fuga, sal del área de inmediato y contacta a tu proveedor de gas o servicios de emergencia. QuickFix Solutions no brinda respuesta de emergencia ante fugas de gas.",

    pg_areas_h1: "Zona de Servicio de Reparación de Electrodomésticos en Pensilvania",
    pg_areas_intro:
      "Brindamos reparación residencial de electrodomésticos en comunidades de Pensilvania cerca de Philadelphia, Upper Darby, Drexel Hill, Lansdowne, Havertown, West Philadelphia y áreas cercanas en Delaware County.",
    pg_areas_distance:
      "El diagnóstico inicia en $50 dentro de las 5 millas y varía por distancia para viajes más largos. ¿No ves tu ciudad? Llama o envía un mensaje — cubrimos varios ZIP cercanos que no caben en la lista.",
    pg_areas_send_zip: "Envíanos tu código postal",

    pg_ll_h1: "Reparación de Electrodomésticos para Landlords y Administradores",
    pg_ll_intro:
      "Apoyamos a landlords y administradores con reparación residencial de electrodomésticos en Pensilvania. Programación directa con el inquilino, presupuestos por escrito antes de aprobar y facturas detalladas con fotos para tus registros.",
    pg_ll_what_h: "Qué reparamos",
    pg_ll_what_b:
      "Solo lavadoras, secadoras, refrigeradores, congeladores, estufas de gas y estufas eléctricas residenciales.",
    pg_ll_dont_h: "Qué no reparamos",
    pg_ll_dont_b:
      "No reparamos electrodomésticos comerciales, microondas, licuadoras, freidoras, pequeños electrodomésticos ni solicitudes solo de piezas.",

    pg_faq_intro: "Respuestas rápidas sobre programación, precios, garantía y el servicio que ofrecemos.",

    pg_rev_intro:
      "Las reseñas de clientes aparecerán aquí cuando se recopilen. No publicamos testimonios genéricos. Si trabajaste con nosotros recientemente, nos encantarían unas palabras.",
    pg_rev_h1: "Lo que dicen nuestros clientes",
    pg_rev_intro_2:
      "Comentarios reales de propietarios, inquilinos, landlords y administradores de propiedades en Pensilvania. Si trabajamos en tu electrodoméstico recientemente, también nos encantarían unas palabras — llámanos o escríbenos por WhatsApp.",
    rev_coming_t: "Reseñas de clientes — pronto.",
    rev_coming_b:
      "QuickFix Solutions está construyendo su reputación local una reparación a la vez. Las reseñas verificadas aparecerán aquí cuando se recopilen — no publicamos testimonios genéricos.",
    rev_coming_chip: "Las reseñas verificadas aparecerán aquí una vez recopiladas.",
    rev_coming_long:
      "Si trabajaste con nosotros recientemente, nos encantarían unas palabras. La retroalimentación honesta de cada cliente nos ayuda a servir mejor a la comunidad local de Pensilvania.",

    nav_about: "Acerca de",
    pg_about_eyebrow: "Acerca de",
    pg_about_h1: "Acerca de QuickFix Solutions",
    pg_about_p1:
      "QuickFix Solutions es un servicio local de reparación residencial de electrodomésticos que atiende comunidades de Pensilvania cerca de Philadelphia, Upper Darby, Delaware County y áreas vecinas.",
    pg_about_p2:
      "Ayudamos a propietarios, inquilinos, landlords y administradores de propiedades a solicitar servicio de reparación para lavadoras, secadoras, refrigeradores, congeladores y estufas de gas o eléctricas.",
    pg_about_p3:
      "QuickFix Solutions es un negocio de área de servicio. No operamos una tienda física al público. El servicio se brinda en la ubicación del cliente, dentro de nuestra zona local de Pensilvania.",
    pg_about_p4:
      "Actualmente estamos construyendo nuestra reputación local una reparación a la vez y damos la bienvenida a comentarios honestos de cada cliente que atendemos.",

    sm_eyebrow: "Cómo trabajamos",
    sm_h2: "Un negocio local de área de servicio para reparación de electrodomésticos",
    sm_intro:
      "QuickFix Solutions brinda reparación residencial de electrodomésticos en la ubicación del cliente. Nos enfocamos en comunicación clara, programación simple y visitas de diagnóstico para lavadoras, secadoras, refrigeradores, congeladores y estufas de gas o eléctricas.",
    sm_b1: "Zona local de servicio en Pensilvania",
    sm_b2: "Solo reparación residencial de electrodomésticos",
    sm_b3: "Propietarios, inquilinos, landlords y administradores bienvenidos",
    sm_b4: "Diagnóstico desde $50 dentro de 5 millas",
    sm_b5: "El diagnóstico se acredita a la reparación si se aprueba",
    sm_b6: "Garantía de 30 días en mano de obra",
    sm_b7: "Solicitudes en línea 24/7",
    sm_storefront_t: "Sin tienda física al público",
    sm_storefront_b:
      "QuickFix Solutions es un negocio de área de servicio. No operamos una tienda física al público. Llama o envía un mensaje con tu código postal para confirmar disponibilidad en tu zona.",

    pg_contact_intro:
      "La respuesta más rápida es por llamada. Si prefieres escribir, el formulario en esta página llega directo a nuestro programador.",

    why_eyebrow: "Por qué nos eligen",
    why_h2: "Un equipo local enfocado — no un call center nacional.",
    why_sub:
      "Somos un equipo pequeño y local especializado en reparación residencial de electrodomésticos en Pensilvania. No abarcamos todo; lo que importa en tu casa, lo hacemos bien.",
    why_1_t: "Especialistas residenciales",
    why_1_b:
      "Nos enfocamos en seis electrodomésticos comunes del hogar, así nuestros diagnósticos son precisos y el stock de piezas se mantiene relevante.",
    why_2_t: "Precios de diagnóstico transparentes",
    why_2_b:
      "Diagnóstico desde $50 dentro de 5 millas. Si apruebas la reparación, esa tarifa se acredita al total — no la pagas dos veces.",
    why_3_t: "Mismo día o día siguiente",
    why_3_b:
      "La mayoría de citas tienen ventana al día siguiente. Mismo día cuando hay un hueco — llama temprano para mejor oportunidad.",
    why_4_t: "Presupuestos por escrito antes del trabajo",
    why_4_b:
      "Evaluación en sitio con presupuesto por escrito antes de iniciar la reparación. Sin cargos sorpresa.",
    why_5_t: "Garantía de 30 días en mano de obra",
    why_5_b:
      "Respaldamos la reparación realizada por 30 días en mano de obra. Las garantías de fabricante pueden ser más largas; las trasladamos cuando aplica.",
    why_6_t: "Contacto directo, en inglés o español",
    why_6_b:
      "Llama o escríbenos por WhatsApp. Respuestas humanas reales — servicio bilingüe para propietarios, inquilinos, landlords y administradores.",
    why_cta: "La mayoría de clientes nos contacta por teléfono o WhatsApp",
  },
};

type I18nValue = {
  lang: Lang;
  t: (key: string) => string;
  /** Prefix a canonical EN path with /es when current lang is es. */
  localePath: (path: string) => string;
  /** Build the equivalent URL in the OTHER language. */
  altUrl: (currentPath: string) => string;
};

const I18nContext = createContext<I18nValue>({
  lang: "en",
  t: (k) => k,
  localePath: (p) => p,
  altUrl: (p) => p,
});

export function I18nProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  const t = useCallback(
    (key: string) => {
      const dict = I18N[lang];
      return dict[key] ?? I18N.en[key] ?? key;
    },
    [lang],
  );

  const localePathBound = useCallback((p: string) => localePath(p, lang), [lang]);
  const altUrlBound = useCallback((p: string) => altUrl(p, lang), [lang]);

  const value = useMemo<I18nValue>(
    () => ({ lang, t, localePath: localePathBound, altUrl: altUrlBound }),
    [lang, t, localePathBound, altUrlBound],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

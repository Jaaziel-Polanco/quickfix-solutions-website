import type { Metadata } from "next";
import { PAGE_SEO, abs, pageMetadata } from "@/app/lib/seo";
import { localePath } from "@/app/lib/locale";
import { FAQClient } from "@/app/components/pages/FAQClient";
import { FAQJsonLd } from "@/app/components/seo/FAQJsonLd";
import { ServiceJsonLd } from "@/app/components/seo/ServiceJsonLd";
import { BreadcrumbsJsonLd } from "@/app/components/seo/BreadcrumbsJsonLd";

const seo = PAGE_SEO.es.faq;

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  enPath: seo.path,
  lang: "es",
});

const FAQ_FOR_SCHEMA_ES = [
  {
    question: "¿Qué tan rápido pueden venir?",
    answer:
      "La mayoría de trabajos tienen ventana al día siguiente. Las visitas el mismo día ocurren cuando hay un hueco — llama temprano para mejor oportunidad.",
  },
  {
    question: "¿Cuánto cuesta la visita de diagnóstico?",
    answer:
      "El diagnóstico inicia en $50 dentro de las 5 millas y varía por distancia para viajes más largos. Si apruebas la reparación, esa tarifa se acredita al total — no la pagas dos veces.",
  },
  {
    question: "¿Tienen piezas en stock?",
    answer:
      "Las piezas comunes van en el camión. Las menos comunes se piden tras el diagnóstico — el plazo típico es de 2 a 5 días hábiles.",
  },
  {
    question: "¿Hay garantía?",
    answer:
      "Sí — garantía de 30 días en mano de obra sobre la reparación realizada. Las garantías de fabricante pueden ser más largas; las trasladamos cuando aplica.",
  },
  {
    question: "¿Atienden cocinas comerciales o lavanderías?",
    answer:
      "No. Nos enfocamos exclusivamente en electrodomésticos residenciales. El trabajo comercial requiere licencias y canales de piezas distintos.",
  },
];

export default function Page() {
  return (
    <>
      <FAQClient />
      <FAQJsonLd items={FAQ_FOR_SCHEMA_ES} />
      <ServiceJsonLd
        name="Reparación Residencial de Electrodomésticos"
        serviceType="Residential Appliance Repair"
        description={seo.description}
        url={abs(localePath(seo.path, "es"))}
      />
      <BreadcrumbsJsonLd
        lang="es"
        items={[
          { name: "Inicio", path: "/" },
          { name: seo.h1, path: seo.path },
        ]}
      />
    </>
  );
}

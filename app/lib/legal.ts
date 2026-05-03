import { BUSINESS } from "@/app/lib/business";
import { SITE_URL } from "@/app/lib/seo";

export const LEGAL_LAST_UPDATED = "2026-05-03";

type Section = { h: string; body: string[] };
export type LegalDoc = { title: string; lastUpdated: string; intro: string; sections: Section[] };

export const TERMS: Record<"en" | "es", LegalDoc> = {
  en: {
    title: "Terms of Service",
    lastUpdated: `Last updated: ${LEGAL_LAST_UPDATED}`,
    intro: `These Terms of Service ("Terms") govern your use of ${SITE_URL} and the residential appliance repair services provided by ${BUSINESS.name} ("we", "us"). By using our website, contacting us, or scheduling a repair, you agree to these Terms.`,
    sections: [
      {
        h: "1. Services",
        body: [
          "We provide residential appliance repair for washers, dryers, refrigerators, freezers, and gas or electric stoves in Pennsylvania, near Philadelphia and Delaware County.",
          "We do not service commercial appliances, microwaves, blenders, fryers, small appliances, or accept parts-only requests.",
        ],
      },
      {
        h: "2. Scheduling and availability",
        body: [
          "Online intake (call, text, WhatsApp, contact form) is open at any time. On-site visits are scheduled during normal working hours; this is not a 24/7 emergency repair service.",
          "Most appointments are booked next-day. Same-day visits happen when scheduling allows. We do not guarantee a same-day visit.",
        ],
      },
      {
        h: "3. Diagnostic fee",
        body: [
          "Our diagnostic fee starts at $50 within 5 miles of our base of operations and varies by distance for longer trips. The exact fee is confirmed before the visit.",
          "If you approve the repair after the on-site assessment, the diagnostic fee is credited toward the total repair cost. If you decline the repair, the diagnostic fee is due in full.",
        ],
      },
      {
        h: "4. Written estimates and approval",
        body: [
          "After the on-site assessment, we provide a written estimate listing parts, labor, and total. No repair work begins until you approve the estimate.",
          "If we discover additional issues during the repair that require additional cost, we will pause and request your approval before continuing.",
        ],
      },
      {
        h: "5. Warranty",
        body: [
          "We back the repair we performed with a 30-day labor warranty starting the day the repair is completed. The warranty covers the specific issue we repaired.",
          "Manufacturer part warranties may extend longer than our labor warranty; we pass those through when applicable.",
          "The warranty does not cover misuse, accidental damage, power surges, water damage, or unrelated failures.",
        ],
      },
      {
        h: "6. Customer responsibilities",
        body: [
          "You are responsible for providing accurate information about the appliance, the issue, and the service address.",
          "You agree to provide reasonable access to the appliance and a safe work area. If we cannot complete the visit due to access, the diagnostic fee may still apply.",
          "You confirm you have the authority to authorize repairs at the service address (homeowner, tenant with permission, landlord, or property manager).",
        ],
      },
      {
        h: "7. Gas safety",
        body: [
          "If you smell gas or suspect a gas leak, leave the area immediately and contact your gas provider or emergency services. We are not an emergency response service.",
          "Gas stove repair is performed only when conditions are safe. We will not start work where a gas hazard is present.",
        ],
      },
      {
        h: "8. Payment",
        body: [
          "Payment is due upon completion of the repair, unless otherwise agreed in writing.",
          "We accept the payment methods communicated at the time of booking.",
        ],
      },
      {
        h: "9. Cancellations and rescheduling",
        body: [
          "Please give us as much notice as possible if you need to reschedule or cancel.",
          "Repeated no-shows or last-minute cancellations may, at our discretion, require a deposit before booking future visits.",
        ],
      },
      {
        h: "10. Limitation of liability",
        body: [
          "To the fullest extent permitted by law, our total liability for any claim arising from a service we performed is limited to the amount you paid for that service.",
          "We are not liable for indirect, incidental, or consequential damages, including lost food due to refrigerator or freezer failure.",
        ],
      },
      {
        h: "11. Reviews and testimonials",
        body: [
          "Where customer reviews appear on this site, names may be abbreviated and locations limited to the city level for privacy. We do not represent unverified testimonials as third-party verified reviews.",
        ],
      },
      {
        h: "12. Changes to these Terms",
        body: [
          "We may update these Terms occasionally. The version posted on this page with the most recent \"last updated\" date is the version in effect.",
        ],
      },
      {
        h: "13. Governing law",
        body: [
          "These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of laws principles. Disputes will be resolved in the appropriate state or federal courts located in Pennsylvania.",
        ],
      },
      {
        h: "14. Contact",
        body: [
          `Questions about these Terms? Reach us at ${BUSINESS.phone} or ${BUSINESS.email}.`,
        ],
      },
    ],
  },
  es: {
    title: "Términos del Servicio",
    lastUpdated: `Última actualización: ${LEGAL_LAST_UPDATED}`,
    intro: `Estos Términos del Servicio ("Términos") rigen el uso de ${SITE_URL} y los servicios de reparación residencial de electrodomésticos prestados por ${BUSINESS.name} ("nosotros"). Al usar nuestro sitio web, contactarnos o agendar una reparación, aceptas estos Términos.`,
    sections: [
      {
        h: "1. Servicios",
        body: [
          "Brindamos reparación residencial de electrodomésticos: lavadoras, secadoras, refrigeradores, congeladores y estufas de gas o eléctricas en Pensilvania, cerca de Philadelphia y Delaware County.",
          "No reparamos electrodomésticos comerciales, microondas, licuadoras, freidoras ni pequeños electrodomésticos, ni aceptamos solicitudes solo de piezas.",
        ],
      },
      {
        h: "2. Programación y disponibilidad",
        body: [
          "La toma de solicitudes en línea (llamada, mensaje, WhatsApp, formulario) está abierta en cualquier momento. Las visitas en sitio se programan en horario laboral; este no es un servicio de reparación de emergencia 24/7.",
          "La mayoría de citas se programan al día siguiente. Las visitas el mismo día ocurren cuando hay disponibilidad. No garantizamos una visita el mismo día.",
        ],
      },
      {
        h: "3. Tarifa de diagnóstico",
        body: [
          "La tarifa de diagnóstico inicia en $50 dentro de las 5 millas de nuestra base de operaciones y varía por distancia para viajes más largos. La tarifa exacta se confirma antes de la visita.",
          "Si apruebas la reparación tras la evaluación en sitio, la tarifa de diagnóstico se acredita al total de la reparación. Si declinas la reparación, la tarifa de diagnóstico se cobra completa.",
        ],
      },
      {
        h: "4. Presupuestos por escrito y aprobación",
        body: [
          "Tras la evaluación en sitio entregamos un presupuesto por escrito con piezas, mano de obra y total. La reparación no inicia hasta que apruebes el presupuesto.",
          "Si durante la reparación descubrimos problemas adicionales que requieren costo extra, pausamos y pedimos tu aprobación antes de continuar.",
        ],
      },
      {
        h: "5. Garantía",
        body: [
          "Respaldamos la reparación realizada con una garantía de 30 días en mano de obra a partir del día de finalización. La garantía cubre el problema específico reparado.",
          "Las garantías de fabricante pueden ser más largas que nuestra garantía en mano de obra; las trasladamos cuando aplica.",
          "La garantía no cubre uso indebido, daño accidental, picos de voltaje, daño por agua ni fallas no relacionadas.",
        ],
      },
      {
        h: "6. Responsabilidades del cliente",
        body: [
          "Eres responsable de brindar información precisa sobre el electrodoméstico, el problema y la dirección de servicio.",
          "Aceptas brindar acceso razonable al electrodoméstico y un área de trabajo segura. Si no podemos completar la visita por falta de acceso, la tarifa de diagnóstico puede aplicarse igualmente.",
          "Confirmas que tienes la autoridad para autorizar reparaciones en la dirección de servicio (propietario, inquilino con permiso, landlord o administrador).",
        ],
      },
      {
        h: "7. Seguridad con gas",
        body: [
          "Si hueles gas o sospechas una fuga, sal del área de inmediato y comunícate con tu proveedor de gas o servicios de emergencia. No somos un servicio de emergencia.",
          "La reparación de estufas de gas se realiza solo cuando las condiciones son seguras. No iniciamos trabajo donde haya un riesgo de gas presente.",
        ],
      },
      {
        h: "8. Pago",
        body: [
          "El pago se realiza al finalizar la reparación, salvo acuerdo por escrito en contrario.",
          "Aceptamos los métodos de pago comunicados al momento de agendar.",
        ],
      },
      {
        h: "9. Cancelaciones y reprogramación",
        body: [
          "Por favor avísanos con la mayor anticipación posible si necesitas reprogramar o cancelar.",
          "Las ausencias repetidas o cancelaciones de último momento pueden, a nuestra discreción, requerir un depósito antes de futuras citas.",
        ],
      },
      {
        h: "10. Limitación de responsabilidad",
        body: [
          "En la máxima medida permitida por la ley, nuestra responsabilidad total por cualquier reclamo derivado de un servicio prestado se limita al monto pagado por ese servicio.",
          "No somos responsables por daños indirectos, incidentales o consecuentes, incluyendo pérdida de alimentos por falla del refrigerador o congelador.",
        ],
      },
      {
        h: "11. Reseñas y testimonios",
        body: [
          "Cuando aparecen reseñas de clientes en este sitio, los nombres pueden estar abreviados y la ubicación limitada al nivel de ciudad por privacidad. No representamos testimonios no verificados como reseñas verificadas por terceros.",
        ],
      },
      {
        h: "12. Cambios a estos Términos",
        body: [
          "Podemos actualizar estos Términos ocasionalmente. La versión publicada en esta página con la fecha de \"última actualización\" más reciente es la versión vigente.",
        ],
      },
      {
        h: "13. Ley aplicable",
        body: [
          "Estos Términos se rigen por las leyes del Commonwealth de Pensilvania, sin atender a principios de conflicto de leyes. Las disputas se resolverán en los tribunales estatales o federales correspondientes ubicados en Pensilvania.",
        ],
      },
      {
        h: "14. Contacto",
        body: [
          `¿Dudas sobre estos Términos? Contáctanos al ${BUSINESS.phone} o ${BUSINESS.email}.`,
        ],
      },
    ],
  },
};

export const PRIVACY: Record<"en" | "es", LegalDoc> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: `Last updated: ${LEGAL_LAST_UPDATED}`,
    intro: `This Privacy Policy describes how ${BUSINESS.name} ("we", "us") handles personal information provided through ${SITE_URL} and the channels we use to communicate with customers.`,
    sections: [
      {
        h: "1. Information we collect",
        body: [
          "When you contact us by phone, WhatsApp, the contact form, or email, we collect what you choose to share — typically name, phone number, ZIP / city, appliance type, brand, and a description of the issue.",
          "When you visit the website, our hosting provider may collect basic technical data (IP address, browser, pages visited) for security and operational purposes.",
        ],
      },
      {
        h: "2. How we use your information",
        body: [
          "To respond to your request, schedule a diagnostic visit, perform the repair, and follow up about warranty matters.",
          "To process payment for services rendered.",
          "To comply with legal obligations and resolve disputes.",
        ],
      },
      {
        h: "3. WhatsApp messages from the contact form",
        body: [
          'When you submit the contact form, we generate a prefilled WhatsApp message with the details you entered and open it in WhatsApp on your device. The message is only sent to us when you tap "Send" inside WhatsApp. WhatsApp\'s own privacy practices apply to that conversation.',
        ],
      },
      {
        h: "4. Sharing",
        body: [
          "We do not sell your personal information.",
          "We may share information with service providers we rely on to operate (for example, payment processors, parts suppliers when ordering a part, or our website host). They are bound to use the information only to provide the service.",
          "We may disclose information when required by law, valid legal process, or to protect our rights, property, or safety.",
        ],
      },
      {
        h: "5. Cookies and analytics",
        body: [
          "This website does not currently use third-party tracking or advertising cookies. If we add analytics in the future, we will update this policy.",
        ],
      },
      {
        h: "6. Data retention",
        body: [
          "We retain customer records for as long as needed to provide service, honor warranties, comply with legal and tax obligations, and resolve disputes. After that, we delete or anonymize the data.",
        ],
      },
      {
        h: "7. Children",
        body: [
          "Our services are intended for adults. We do not knowingly collect personal information from children under 13.",
        ],
      },
      {
        h: "8. Your choices",
        body: [
          "You may request access to, correction of, or deletion of personal information we hold about you by contacting us. Some information may be retained where required by law (for example, completed-service records for tax purposes).",
          "You may opt out of non-essential communications at any time by replying to a message or asking us by phone or WhatsApp.",
        ],
      },
      {
        h: "9. Security",
        body: [
          "We use reasonable safeguards to protect customer information. No method of transmission or storage is 100% secure; we cannot guarantee absolute security.",
        ],
      },
      {
        h: "10. Changes to this Policy",
        body: [
          "We may update this Privacy Policy occasionally. The version posted on this page with the most recent \"last updated\" date is the version in effect.",
        ],
      },
      {
        h: "11. Contact",
        body: [
          `Questions about this Privacy Policy? Reach us at ${BUSINESS.phone} or ${BUSINESS.email}.`,
        ],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    lastUpdated: `Última actualización: ${LEGAL_LAST_UPDATED}`,
    intro: `Esta Política de Privacidad describe cómo ${BUSINESS.name} ("nosotros") maneja la información personal proporcionada a través de ${SITE_URL} y los canales que usamos para comunicarnos con los clientes.`,
    sections: [
      {
        h: "1. Información que recopilamos",
        body: [
          "Cuando nos contactas por teléfono, WhatsApp, el formulario o correo, recopilamos lo que decides compartir — normalmente nombre, número de teléfono, ZIP/ciudad, tipo de electrodoméstico, marca y descripción del problema.",
          "Cuando visitas el sitio, nuestro proveedor de hosting puede recopilar datos técnicos básicos (dirección IP, navegador, páginas vistas) por motivos de seguridad y operativos.",
        ],
      },
      {
        h: "2. Cómo usamos tu información",
        body: [
          "Para responder a tu solicitud, agendar una visita de diagnóstico, realizar la reparación y dar seguimiento sobre garantía.",
          "Para procesar el pago por los servicios prestados.",
          "Para cumplir obligaciones legales y resolver disputas.",
        ],
      },
      {
        h: "3. Mensajes de WhatsApp desde el formulario",
        body: [
          'Cuando envías el formulario de contacto, generamos un mensaje de WhatsApp pre-llenado con los datos que ingresaste y lo abrimos en WhatsApp en tu dispositivo. El mensaje solo se nos envía cuando tocas "Enviar" dentro de WhatsApp. Las prácticas de privacidad de WhatsApp aplican a esa conversación.',
        ],
      },
      {
        h: "4. Compartir",
        body: [
          "No vendemos tu información personal.",
          "Podemos compartir información con proveedores que usamos para operar (por ejemplo, procesadores de pago, proveedores de piezas al hacer un pedido, o nuestro proveedor de hosting). Están obligados a usar la información solo para prestar el servicio.",
          "Podemos revelar información cuando lo exija la ley, un proceso legal válido, o para proteger nuestros derechos, propiedad o seguridad.",
        ],
      },
      {
        h: "5. Cookies y analítica",
        body: [
          "Este sitio actualmente no usa cookies de seguimiento ni publicidad de terceros. Si agregamos analítica en el futuro, actualizaremos esta política.",
        ],
      },
      {
        h: "6. Retención de datos",
        body: [
          "Conservamos los registros del cliente el tiempo necesario para prestar el servicio, honrar garantías, cumplir obligaciones legales y fiscales, y resolver disputas. Después eliminamos o anonimizamos los datos.",
        ],
      },
      {
        h: "7. Menores",
        body: [
          "Nuestros servicios están dirigidos a adultos. No recopilamos a sabiendas información personal de menores de 13 años.",
        ],
      },
      {
        h: "8. Tus opciones",
        body: [
          "Puedes solicitar acceso, corrección o eliminación de la información personal que tenemos sobre ti contactándonos. Cierta información puede conservarse cuando la ley lo exige (por ejemplo, registros de servicios completados con fines fiscales).",
          "Puedes optar por dejar de recibir comunicaciones no esenciales en cualquier momento respondiendo a un mensaje o pidiéndolo por teléfono o WhatsApp.",
        ],
      },
      {
        h: "9. Seguridad",
        body: [
          "Usamos salvaguardas razonables para proteger la información del cliente. Ningún método de transmisión o almacenamiento es 100% seguro; no podemos garantizar seguridad absoluta.",
        ],
      },
      {
        h: "10. Cambios a esta Política",
        body: [
          "Podemos actualizar esta Política de Privacidad ocasionalmente. La versión publicada en esta página con la fecha de \"última actualización\" más reciente es la versión vigente.",
        ],
      },
      {
        h: "11. Contacto",
        body: [
          `¿Dudas sobre esta Política? Contáctanos al ${BUSINESS.phone} o ${BUSINESS.email}.`,
        ],
      },
    ],
  },
};

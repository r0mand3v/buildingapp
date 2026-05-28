import { useEffect } from "react";

const sections = [
  { id: "interpretacion", num: "01", title: "Interpretación y Definiciones" },
  { id: "recopilacion",   num: "02", title: "Datos que Recopilamos" },
  { id: "integraciones",  num: "03", title: "Integraciones de Terceros" },
  { id: "kyc",            num: "04", title: "Verificación de Identidad (KYC)" },
  { id: "ubicacion",      num: "05", title: "Ubicación y Datos del Dispositivo" },
  { id: "contenido",      num: "06", title: "Contenido Generado por Usuarios" },
  { id: "cookies",        num: "07", title: "Cookies y Seguimiento" },
  { id: "uso",            num: "08", title: "Uso de tus Datos" },
  { id: "compartir",      num: "09", title: "Con quiénes Compartimos tus Datos" },
  { id: "retencion",      num: "10", title: "Retención de Datos" },
  { id: "derechos",       num: "11", title: "Tus Derechos" },
  { id: "edad",           num: "12", title: "Edad Mínima" },
  { id: "contacto",       num: "13", title: "Contacto" },
];

const Tag = ({ label }: { label: string }) => (
  <span style={{
    background: "#f0ede8", color: "#1a1a18", fontSize: 12, fontWeight: 400,
    padding: "4px 12px", borderRadius: 20, border: "1px solid #e0ded7", display: "inline-block",
  }}>{label}</span>
);

const InfoBox = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: "#e8f0ec", borderLeft: "3px solid #2a5c45", borderRadius: "0 8px 8px 0",
    padding: "1rem 1.25rem", margin: "1.25rem 0", fontSize: 14, color: "#2a4a3a",
  }}>{children}</div>
);

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Inter', sans-serif",
      background: "#faf9f6", color: "#1a1a18",
      lineHeight: 1.75, fontSize: 15, fontWeight: 300, minHeight: "100vh",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .pp-h2 { font-family: 'Lora', serif; font-size: 1.35rem; font-weight: 600;
          color: #1a1a18; margin-bottom: 1rem; padding-bottom: 0.5rem;
          border-bottom: 1px solid #e0ded7; }
        .pp-h3 { font-size: 0.9rem; font-weight: 500; text-transform: uppercase;
          letter-spacing: 0.07em; color: #2a5c45; margin: 1.5rem 0 0.5rem; }
        .pp-p { margin-bottom: 0.85rem; }
        .pp-ul { padding-left: 1.25rem; margin-bottom: 0.85rem; }
        .pp-ul li { margin-bottom: 0.4rem; }
        .pp-a { color: #2a5c45; }
        .pp-a:hover { text-decoration: underline; }
      `}</style>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "3rem 2rem 6rem" }}>

        {/* Header */}
        <header style={{ borderBottom: "1px solid #e0ded7", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 13, letterSpacing: "0.08em",
            color: "#2a5c45", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            pipol.ar
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 600, lineHeight: 1.2, color: "#1a1a18", marginBottom: "0.75rem" }}>
            Política de Privacidad
          </h1>
          <p style={{ fontSize: 13, color: "#6b6b60", fontWeight: 400 }}>
            Última actualización: 25 de mayo de 2026
          </p>
        </header>

        {/* TOC */}
        <div style={{ background: "#fff", border: "1px solid #e0ded7", borderRadius: 12,
          padding: "1.5rem 2rem", marginBottom: "3rem" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em",
            color: "#6b6b60", fontWeight: 500, marginBottom: "1rem" }}>Contenido</p>
          <ol style={{ listStyle: "none", padding: 0, display: "grid",
            gridTemplateColumns: "1fr 1fr", gap: "4px 2rem" }}>
            {sections.map((s) => (
              <li key={s.id} style={{ fontSize: 13 }}>
                <span style={{ color: "#6b6b60" }}>{s.num}. </span>
                <a href={`#${s.id}`} className="pp-a" style={{ textDecoration: "none" }}>{s.title}</a>
              </li>
            ))}
          </ol>
        </div>

        <p className="pp-p">
          Esta Política de Privacidad describe cómo <strong>pipol.ar</strong> y los servicios asociados
          (incluyendo <strong>Zappy</strong>, plataforma de automatización de comunicaciones) recopilan,
          utilizan y protegen tu información personal cuando usás nuestros productos.
        </p>

        {/* 01 */}
        <section id="interpretacion" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">01 — Interpretación y Definiciones</h2>
          <p className="pp-p">Las palabras con mayúscula inicial tienen los significados definidos a continuación y aplican tanto en singular como en plural.</p>
          <h3 className="pp-h3">Definiciones clave</h3>
          <ul className="pp-ul">
            <li><strong>Servicio</strong>: los sitios web, aplicaciones móviles y APIs operadas por pipol.ar y Zappy.</li>
            <li><strong>Datos Personales</strong>: toda información que permita identificar a una persona física.</li>
            <li><strong>Procesamiento</strong>: cualquier operación sobre datos personales (recopilación, almacenamiento, uso, transferencia, eliminación).</li>
            <li><strong>Proveedor de Servicio</strong>: persona física o jurídica que procesa datos en nombre del Servicio.</li>
            <li><strong>Tokens de Acceso</strong>: credenciales OAuth otorgadas por el usuario para que Zappy actúe en su nombre ante plataformas de terceros (Meta, Instagram, WhatsApp, Google, etc.).</li>
          </ul>
        </section>

        {/* 02 */}
        <section id="recopilacion" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">02 — Datos que Recopilamos</h2>
          <h3 className="pp-h3">Datos de cuenta</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "1rem 0" }}>
            {["Nombre y apellido","Correo electrónico","Número de teléfono","Fecha de nacimiento","Fotos y videos"].map(t => <Tag key={t} label={t} />)}
          </div>
          <h3 className="pp-h3">Datos de integraciones (Zappy)</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "1rem 0" }}>
            {["Tokens de acceso OAuth","ID de cuentas de Instagram","ID de páginas de Facebook","Número de teléfono de WhatsApp Business","Historial de conversaciones","Webhooks recibidos"].map(t => <Tag key={t} label={t} />)}
          </div>
          <p className="pp-p">Los tokens de acceso se almacenan cifrados en reposo mediante NaCl SecretBox. Nunca se almacenan contraseñas de plataformas externas.</p>
          <h3 className="pp-h3">Datos de uso</h3>
          <p className="pp-p">Registramos logs de actividad, errores, direcciones IP, tipo de dispositivo y métricas de uso para mejorar el servicio y diagnosticar problemas.</p>
        </section>

        {/* 03 — Integraciones */}
        <section id="integraciones" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">03 — Integraciones de Terceros</h2>
          <p className="pp-p">
            <strong>Zappy</strong> es una plataforma de automatización que se conecta con servicios externos mediante OAuth y APIs oficiales.
            Al conectar una integración, autorizás a Zappy a actuar en tu nombre ante esas plataformas.
          </p>

          <h3 className="pp-h3">Instagram y Meta</h3>
          <p className="pp-p">
            Zappy se integra con la <strong>Instagram API with Instagram Login</strong> (Meta Platforms, Inc.) para permitir automatizaciones
            sobre mensajes directos (DMs), respuestas a historias y comentarios. Al conectar tu cuenta de Instagram:
          </p>
          <ul className="pp-ul">
            <li>Obtenemos un <em>Instagram User Access Token</em> mediante el flujo OAuth de Instagram (<code>instagram.com/oauth/authorize</code>).</li>
            <li>Solicitamos los permisos: <code>instagram_business_basic</code>, <code>instagram_business_manage_messages</code>, <code>instagram_business_manage_comments</code>.</li>
            <li>El token se almacena cifrado y se usa exclusivamente para ejecutar las automatizaciones que vos configurás.</li>
            <li>Recibimos webhooks de Meta con eventos de mensajes y comentarios entrantes.</li>
            <li>Nunca publicamos contenido sin tu instrucción explícita mediante automatizaciones que vos mismo creaste.</li>
          </ul>
          <InfoBox>
            Podés revocar el acceso de Zappy en cualquier momento desde{" "}
            <strong>Configuración de Instagram → Seguridad → Aplicaciones y sitios web</strong>.
          </InfoBox>

          <h3 className="pp-h3">WhatsApp Business</h3>
          <p className="pp-p">
            Zappy se integra con la <strong>WhatsApp Business Cloud API</strong> (Meta) para enviar y recibir mensajes de WhatsApp Business.
            Almacenamos el <em>Phone Number ID</em> y el <em>Access Token</em> de WhatsApp Business cifrados.
            Los mensajes se procesan para ejecutar automatizaciones configuradas por el usuario.
          </p>

          <h3 className="pp-h3">Google Calendar</h3>
          <p className="pp-p">
            Si conectás Google Calendar, almacenamos tokens OAuth de Google con acceso de lectura/escritura a tu calendario,
            usados únicamente para las automatizaciones que vos configurás (recordatorios, confirmaciones, etc.).
          </p>

          <h3 className="pp-h3">Otros proveedores</h3>
          <p className="pp-p">
            Zappy puede integrarse con Telegram, Twilio, MercadoPago, Resend y otros servicios.
            En todos los casos, los tokens se cifran en reposo y se usan solo para ejecutar tus automatizaciones.
          </p>
        </section>

        {/* 04 */}
        <section id="kyc" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">04 — Verificación de Identidad (KYC)</h2>
          <p className="pp-p">Para garantizar la seguridad de la plataforma, combatir fraudes y verificar la identidad de los usuarios, ofrecemos un proceso de verificación (KYC).</p>
          <ul className="pp-ul">
            <li>Fotografía del frente y dorso de tu Documento Nacional de Identidad (DNI).</li>
            <li>Escaneo facial (<em>liveness detection</em>) para confirmar que sos una persona real y que coincidís con la foto del DNI.</li>
          </ul>
          <InfoBox>
            <strong>Importante:</strong> Los datos biométricos (escaneo facial) se procesan de forma segura
            y se eliminan después de completar la verificación, salvo que la ley exija su conservación.
          </InfoBox>
        </section>

        {/* 05 */}
        <section id="ubicacion" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">05 — Ubicación y Datos del Dispositivo</h2>
          <p className="pp-p">Recopilamos tu ubicación geográfica precisa para mostrar eventos cercanos en el mapa. Siempre solicitamos tu consentimiento explícito antes de acceder a tu ubicación.</p>
        </section>

        {/* 06 */}
        <section id="contenido" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">06 — Contenido Generado por Usuarios</h2>
          <p className="pp-p">Fotos, videos (Vibes), comentarios y mensajes que subís forman parte del contenido generado por el usuario y pueden ser visibles para otros usuarios según tu configuración de privacidad.</p>
          <p className="pp-p">Los mensajes y conversaciones procesadas por Zappy se almacenan temporalmente para ejecutar automatizaciones y pueden conservarse en logs de auditoría según configuración del operador.</p>
        </section>

        {/* 07 */}
        <section id="cookies" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">07 — Cookies y Seguimiento</h2>
          <p className="pp-p">Usamos cookies esenciales para el funcionamiento de la sesión y cookies de analítica (agregadas y anónimas) para mejorar el servicio. No usamos cookies de publicidad ni rastreo entre sitios.</p>
        </section>

        {/* 08 */}
        <section id="uso" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">08 — Uso de tus Datos</h2>
          <ul className="pp-ul">
            <li>Prestar y mantener el servicio.</li>
            <li>Ejecutar las automatizaciones que vos configurás en Zappy.</li>
            <li>Verificar tu identidad y prevenir fraudes.</li>
            <li>Gestionar tu cuenta y notificarte sobre cambios importantes.</li>
            <li>Mejorar la experiencia del usuario mediante análisis de uso agregado.</li>
            <li>Cumplir obligaciones legales.</li>
          </ul>
          <p className="pp-p">Nunca usamos tus datos de integraciones (tokens OAuth, mensajes de WhatsApp/Instagram) para ningún fin distinto a ejecutar tus automatizaciones.</p>
        </section>

        {/* 09 */}
        <section id="compartir" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">09 — Con quiénes Compartimos tus Datos</h2>
          <ul className="pp-ul">
            <li><strong>Meta Platforms / Instagram</strong>: para ejecutar automatizaciones de Instagram y WhatsApp Business mediante sus APIs oficiales.</li>
            <li><strong>Supabase</strong>: base de datos y autenticación (datos almacenados en infraestructura segura).</li>
            <li><strong>Proveedores de verificación de identidad</strong>: para el proceso KYC.</li>
            <li><strong>Procesadores de pago</strong>: para gestionar suscripciones (MercadoPago u otros).</li>
            <li><strong>Autoridades competentes</strong>: cuando lo exija la ley.</li>
          </ul>
          <p className="pp-p">No vendemos ni alquilamos tus datos personales a terceros.</p>
        </section>

        {/* 10 */}
        <section id="retencion" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">10 — Retención de Datos</h2>
          <ul className="pp-ul">
            <li><strong>Datos biométricos</strong>: se eliminan una vez completada la verificación KYC, salvo obligación legal.</li>
            <li><strong>Tokens de acceso OAuth</strong>: se conservan mientras la integración esté activa. Al desconectar una integración, el token se revoca y elimina.</li>
            <li><strong>Logs de conversaciones</strong>: se conservan según la configuración del operador, por defecto 90 días.</li>
            <li><strong>Datos de cuenta</strong>: se conservan mientras mantengas tu cuenta activa y durante el período legal aplicable tras su cierre.</li>
          </ul>
        </section>

        {/* 11 */}
        <section id="derechos" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">11 — Tus Derechos</h2>
          <p className="pp-p">Tenés derecho a:</p>
          <ul className="pp-ul">
            <li><strong>Acceder</strong> a los datos que tenemos sobre vos.</li>
            <li><strong>Rectificar</strong> datos incorrectos o desactualizados.</li>
            <li><strong>Eliminar</strong> tu cuenta y datos personales.</li>
            <li><strong>Portabilidad</strong>: recibir tus datos en formato legible por máquina.</li>
            <li><strong>Revocar integraciones</strong>: desconectar cualquier servicio en cualquier momento desde Zappy o desde la plataforma correspondiente.</li>
            <li><strong>Oponerte</strong> al procesamiento de tus datos para ciertos fines.</li>
          </ul>
          <p className="pp-p">Para ejercer cualquiera de estos derechos escribí a <a href="mailto:contacto@pipol.ar" className="pp-a">contacto@pipol.ar</a>.</p>
        </section>

        {/* 12 */}
        <section id="edad" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">12 — Edad Mínima</h2>
          <InfoBox>
            <strong>Pipol y Zappy están dirigidos a personas de 17 años o más.</strong><br /><br />
            No está permitida la creación de cuentas por menores de 17 años. Si detectamos que un usuario es menor de edad,
            cerraremos su cuenta y eliminaremos sus datos de forma permanente.
          </InfoBox>
        </section>

        {/* 13 */}
        <section id="contacto" style={{ marginBottom: "3rem", scrollMarginTop: "2rem" }}>
          <h2 className="pp-h2">13 — Contacto</h2>
          <p className="pp-p">Cualquier consulta sobre esta Política de Privacidad podés enviarla a:</p>
          <p className="pp-p"><strong>contacto@pipol.ar</strong></p>
          <p className="pp-p">
            Para solicitar la eliminación de datos de integraciones de Meta/Instagram específicamente,
            también podés usar el formulario de eliminación disponible en{" "}
            <a href="/data-deletion" className="pp-a">/data-deletion</a>.
          </p>
        </section>

        <footer style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #e0ded7",
          display: "flex", flexDirection: "column", gap: 4, fontSize: 13, color: "#6b6b60" }}>
          <span>© 2026 pipol.ar — Todos los derechos reservados.</span>
          <span>Política de Privacidad actualizada al 25 de mayo de 2026.</span>
        </footer>

      </div>
    </div>
  );
}

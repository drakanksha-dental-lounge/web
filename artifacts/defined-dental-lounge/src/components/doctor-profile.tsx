import { MoveUpRight } from 'lucide-react';

const clinicalExpertise = [
  'Root canal treatment and restorative dentistry',
  'Tooth extractions and impacted tooth management',
  'Fixed orthodontic treatment for misaligned teeth',
  'Ultrasonic scaling, polishing, and preventive dental care',
  'Composite restorations',
  'Prosthodontic treatment',
  'Gingival curettage',
  'Teeth bleaching and aesthetic dental procedures',
  'Paediatric dentistry',
];

export function DoctorProfile() {
  return (
    <section className="doctor-section" id="doctor" aria-labelledby="doctor-heading">
      <div className="doctor-introduction">
        <figure className="doctor-portrait">
          <div className="doctor-photo-frame">
            <img
              src={`${import.meta.env.BASE_URL}dr-akanksha-priya.jpg`}
              alt="Dr. Akanksha Priya"
              width={1848}
              height={4000}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>
            <span className="doctor-experience"><strong>15+</strong> years of professional experience</span>
            <span className="doctor-registration">Dental Registration No.<strong>3570/A</strong></span>
          </figcaption>
        </figure>

        <div className="doctor-biography">
          <div className="section-label">02 — Meet your dentist</div>
          <h2 id="doctor-heading">Meet<br /><em>Dr. Akanksha Priya.</em></h2>
          <p className="doctor-qualification">BDS · Dental Surgeon &amp; Consultant</p>
          <p>Dr. Akanksha Priya is an experienced dental professional with over 15 years of experience spanning clinical dentistry, patient care, clinic management, and healthcare operations. Her professional journey across dental clinics, multispecialty hospitals, and healthcare organisations has shaped her comprehensive approach to dentistry—one that combines clinical expertise, ethical practice, effective communication, and a deep commitment to patient wellbeing.</p>
          <p>A graduate of Buddha Institute of Dental Sciences and Hospital, Magadh University, Patna, Dr. Akanksha has built her career around the belief that good dentistry goes beyond treating a dental problem. It begins with understanding the patient, identifying the underlying concern, explaining treatment options clearly, and developing a personalised plan that prioritises long-term oral health.</p>
          <p>Her professional experience includes working with Focus Dental Care, Continental Hospitals, Apollo Hospitals, and Dr. Sankpal’s Dental Centre, among other healthcare organisations. These roles have strengthened her understanding of clinical care, patient relationships, healthcare administration, and the importance of maintaining high standards of service.</p>
          <a className="text-link doctor-contact-link" href="#request">Plan your first visit <MoveUpRight size={13} aria-hidden="true" /></a>
        </div>
      </div>

      <div className="doctor-details" aria-label="More about Dr. Akanksha Priya">
        <details className="doctor-detail">
          <summary>Clinical expertise</summary>
          <div className="doctor-detail-content">
            <p>Dr. Akanksha brings a broad range of dental procedures to Defined Dental Lounge, with expertise under one roof, including:</p>
            <ul className="doctor-expertise-list">
              {clinicalExpertise.map((expertise) => <li key={expertise}>{expertise}</li>)}
            </ul>
            <p>She has also completed a certification course in orthodontics under Dr. Akshay Rathi, Mumbai, further strengthening her interest in the correction of misaligned teeth (orthodontics).</p>
          </div>
        </details>

        <details className="doctor-detail">
          <summary>A patient-first philosophy</summary>
          <div className="doctor-detail-content">
            <p>Dr. Akanksha believes that informed patients make confident decisions. She places great importance on listening to patients, explaining diagnoses and available treatment options, and ensuring that patients understand the purpose and benefits of their treatment.</p>
            <p>Her approach emphasises preventive dentistry, conservative treatment wherever clinically appropriate, transparent communication, and compassionate care. She strives to create an environment where patients feel comfortable discussing their concerns and confident about their dental health decisions.</p>
          </div>
        </details>

        <details className="doctor-detail">
          <summary>Beyond the clinic</summary>
          <div className="doctor-detail-content">
            <p>Her commitment to dental awareness extends beyond clinical practice. Dr. Akanksha has organised dental screening and treatment camps at schools, banks, IT companies, and educational institutions, including the Indian School of Business, Hyderabad. She has also participated in dental conferences organised by the Indian Dental Association and featured in a live dental health awareness programme on ETV Urdu’s <em>Aadab Doctor</em>, answering viewers’ dental queries.</p>
            <p>A recipient of first prize in a Dentist’s Day presentation competition on Modern Orthodontics, she brings a spirit of continuous learning and professional development to her work.</p>
            <p>Outside dentistry, her interests include classical vocal music, for which she holds a diploma, reflecting her appreciation for creativity, discipline, and lifelong learning.</p>
          </div>
        </details>

        <details className="doctor-detail">
          <summary>Her vision for Defined Dental Lounge</summary>
          <div className="doctor-detail-content">
            <p>Through Defined Dental Lounge, Dr. Akanksha Priya aims to create a welcoming and professional dental care experience where clinical knowledge meets personalised attention. Her vision is to help patients understand their oral health, make informed treatment choices, and maintain healthy smiles with confidence.</p>
            <p>For her, dentistry is not simply about treating teeth—it is about building trust, relieving discomfort, preserving oral health, and creating lasting relationships with patients.</p>
            <p className="doctor-vision-signoff">Defined Dental Lounge — Thoughtful Dentistry. Confident Smiles.</p>
          </div>
        </details>
      </div>
    </section>
  );
}

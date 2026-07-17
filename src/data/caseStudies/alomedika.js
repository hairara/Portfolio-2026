export const alomedikaStudy = {
  layout: 'alomedika',
  projectId: 3,
  title: 'How We Increased Prescription Fulfillment by 65% in Rural Clinics',
  subtitle: 'Smart Prescription — Alodokter · 2024',
  cover: '/projects/alomedika.png?v=3',
  meta: [
    { label: 'Company', value: 'Alodokter' },
    { label: 'Year', value: '2024' },
    { label: 'Scope', value: 'UI/UX Design, Product Strategy' },
  ],
  opener: {
    headline: 'When Treatment Stops at the Prescription',
    narrative: [
      'A doctor in a small rural clinic finishes examining a patient. The diagnosis is clear. The treatment is straightforward.',
      'But then comes the real problem. There\'s no pharmacy nearby.',
      'The doctor writes a prescription on paper, hands it over, and hopes for the best. The patient now has to travel — sometimes hours — just to find one. And often, they don\'t.',
      'Not because they didn\'t want to get better. But because access itself became the barrier.',
    ],
  },
  stats: [
    { value: '60–70%', label: 'of rural doctors reported limited or no pharmacy access nearby' },
    { value: '~40%', label: 'of prescriptions at risk of not being redeemed' },
    { value: '2–10 km', label: 'average travel distance just to find medication' },
    { value: '0', label: 'traceability or follow-up on manual paper prescriptions' },
  ],
  opportunity: 'This isn\'t about prescribing medicine. It\'s about ensuring patients can actually receive it.',
  ecosystem: [
    { name: 'Alomedika', for: 'Doctors', desc: 'Create and send digital prescription directly without consultation flow in Alodokter' },
    { name: 'Alodokter', for: 'Patients', desc: 'Receive, review, and act on prescriptions without visiting a pharmacy' },
    { name: 'Alo Shop', for: 'Fulfillment', desc: 'Medication delivery straight to patients — removing distance as a barrier' },
  ],
  solution: {
    name: 'Patient CRM Prescription',
    desc: 'A lightweight prescription workflow embedded in Alomedika. Doctors create prescriptions digitally, send them instantly via WhatsApp, and patients are automatically connected to fulfillment in Alodokter — without any extra coordination.',
  },
  flows: {
    doctor: [
      'Select or add patient',
      'Create prescription digitally',
      'Send via WhatsApp — instantly',
    ],
    patient: [
      'Open link or notification',
      'Login or register',
      'Review prescription details',
      'Choose: delivery (Alo Shop) or nearest pharmacy pickup',
    ],
  },
  impact: [
    {
      group: 'Doctor Impact',
      metrics: [
        { direction: 'up', value: '+25%', label: 'feature adoption target among affiliated doctors' },
        { direction: 'up', value: '+20–30%', label: 'increase in prescription tracking visibility' },
      ],
    },
    {
      group: 'Patient Impact',
      metrics: [
        { direction: 'up', value: '+30–45%', label: 'increase in prescription redemption rate' },
        { direction: 'down', value: '-40%', label: 'drop-off after receiving prescription' },
        { direction: 'down', value: '0 km', label: 'travel needed when using delivery option' },
      ],
    },
    {
      group: 'Business Impact',
      metrics: [
        { direction: 'up', value: '+20–35%', label: 'conversion to Alo Shop transactions' },
        { direction: 'up', value: '↑ GMV', label: 'from prescription-based purchases' },
        { direction: 'up', value: 'Stronger', label: 'ecosystem retention: Doctor → Patient → Fulfillment' },
      ],
    },
  ],
  complexity: [
    'Doctor license and affiliation validation before prescribing',
    'Medication stock availability and substitution logic',
    'Multi-platform synchronization across Alomedika, Alodokter, and Alo Shop',
    'Prescription history tracking and full traceability',
  ],
  learnings: {
    headline: 'Clarity of problem = speed of execution',
    body: 'Because the problem was well-defined from the start, the design process moved efficiently. Collaboration with PM and engineers was smooth. Decisions were faster and more confident. This project reinforced that time spent framing the problem is never wasted.',
  },
  gaps: [
    'No direct rural field research conducted',
    'No motion study for last-mile delivery efficiency',
    'Limited insight into fulfillment success rate per region',
  ],
  reflection: 'A prescription is only as powerful as the patient\'s ability to access it. And sometimes, the best design decision is making sure the journey doesn\'t stop on paper.',
}

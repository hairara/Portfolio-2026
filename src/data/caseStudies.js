export const caseStudies = {
  'anesthesia-module': {
    layout: 'anesthesia',
    projectId: 1,
    title: 'From 30 Min to 10-13 Min Anesthesia Module',
    subtitle: 'EMR Surgery — Siloam Hospitals',
    cover: '/projects/anesthesia.png',
    meta: [
      { label: 'Company', value: 'Siloam Hospitals' },
      { label: 'Released', value: '2026' },
      { label: 'Scope', value: 'UI/UX Design, QA, Product Management' },
    ],
    overview: {
      context:
        'In the existing EMR Surgery system, anesthesia workflows were still fully paper-based — forcing anesthesiologists and nurses to document patient data manually during procedures.',
      pain: [
        'Record anesthesia documentation on paper',
        'Perform real-time monitoring charting separately',
        'Spend significant time transcribing and managing data',
      ],
    },
    problems: [
      {
        number: '01',
        title: 'Time-consuming',
        description: '~30+ minutes per patient for documentation & monitoring',
      },
      {
        number: '02',
        title: 'Double work',
        description: 'Separate recording for anesthesia and intraoperative monitoring',
      },
      {
        number: '03',
        title: 'High cognitive load',
        description: 'During critical procedures when clinician focus matters most',
      },
      {
        number: '04',
        title: 'No device integration',
        description: 'Patient monitoring devices were entirely disconnected from the EMR',
      },
      {
        number: '05',
        title: 'Human error risk',
        description: 'Manual transcription introduced risk of data inconsistency',
      },
    ],
    objective: [
      'Reduce documentation time significantly',
      'Integrate real-time data from medical devices',
      'Preserve existing user behavior to minimize learning curve',
      'Improve accuracy and workflow efficiency in the operating room',
    ],
    role: {
      title: 'Product Designer (End-to-End)',
      responsibilities: [
        'Problem framing & workflow analysis',
        'UX strategy & system design',
        'Data structuring & interaction modeling',
        'High-fidelity prototyping',
        'Developer collaboration & handoff',
        'QA validation & real-world testing',
      ],
    },
    process: [
      {
        number: '01',
        title: 'Understanding Clinical Workflow',
        body: 'I began by mapping the full anesthesia journey — pre-anesthesia assessment, pre-induction preparation, intraoperative monitoring, and post-anesthesia care — to understand where friction lived in each phase.',
        insight:
          'Clinicians were already highly accustomed to paper-based formats. Changing the structure too drastically would increase cognitive load and resistance.',
      },
      {
        number: '02',
        title: 'Digitizing Documentation',
        label: 'Behavior-Driven Design',
        body: 'Instead of redesigning from scratch, I intentionally replicated the paper format into a digital UI — preserving the same layout, grouping, and terminology clinicians already knew.',
        bullets: [
          '1:1 mapping from paper forms → digital interface',
          'Preserve familiar layout and terminology',
          'Focus on speed and zero relearning',
        ],
        outcome: 'Design completed in ~1 week. Minimal resistance from clinical staff.',
        images: [
          '/projects/anesthesia/anestesi after.png',
        ],
      },
      {
        number: '03',
        title: 'Monitoring & Charting System',
        label: 'Core Challenge',
        isComplex: true,
        body: 'The most technically demanding part — designing a real-time monitoring interface that integrates with physical medical devices while remaining usable under high-pressure conditions.',
        images: ['/projects/anesthesia/charting.png'],
        subSteps: [
          {
            id: 'a',
            title: 'System & Integration Understanding',
            body: 'I worked closely with engineers to map how data flows from patient monitors and anesthesia machines through an e-gateway into the EMR — aligning design decisions with real-time data behavior and technical constraints.',
          },
          {
            id: 'b',
            title: 'Data Complexity & Structuring',
            body: 'Each monitoring device could send 50–100+ parameters per transmission. I broke them into two clear categories to simplify the interface and reduce noise.',
            categories: [
              { label: 'Auto-captured', description: 'Pulled directly from devices — no clinician input required' },
              { label: 'Manual input', description: 'Entered by clinicians for contextual or non-device data' },
            ],
            impact: [
              'Reduced unnecessary UI complexity',
              'Helped developers define cleaner data logic',
              'Ensured only relevant parameters are surfaced',
            ],
          },
          {
            id: 'c',
            title: 'Hybrid Interaction Model',
            label: 'Key UX Decision',
            body: 'Real-time charting is difficult to make fully dynamic — yet clinicians still need manual control. I designed a hybrid model that supports both without conflict.',
            hybrid: [
              {
                category: 'Vital Signs (TTV)',
                approach: 'Real-time chart display',
                detail: 'Supported by table-based manual input',
              },
              {
                category: 'Other Parameters',
                approach: 'Structured table input',
                detail: 'Automatically visualized into charts afterward',
              },
            ],
            why: 'Balances usability with technical feasibility — supports both automation and manual override without adding cognitive load under pressure.',
          },
        ],
      },
      {
        number: '04',
        title: 'Prototyping & Validation',
        body: 'I built a high-fidelity interactive prototype using AI-assisted tools, then validated with developers for feasibility and edge cases, and with stakeholders for workflow alignment.',
      },
      {
        number: '05',
        title: 'Cross-functional Collaboration',
        body: 'I collaborated closely with engineering throughout the full development cycle — daily syncs for progress tracking, sprint reviews for iteration feedback, and continuous alignment on technical constraints.',
        quote: 'Not just designing UI, but ensuring it is buildable, scalable, and efficient.',
      },
      {
        number: '06',
        title: 'QA & Real-world Testing',
        body: 'I supported QA in UI/UX validation, interaction accuracy, and edge case handling — including live testing in the operating room to observe real clinician behavior under pressure.',
        images: [
          '/projects/anesthesia/testing.jpg',
          '/projects/anesthesia/testing 2.jpeg',
        ],
      },
    ],
    impact: {
      beforeMetric: '30+',
      metric: { value: '10–13', label: 'minutes per patient' },
      reduction: '60–65%',
      before: [
        '~30+ minutes per patient',
        'Manual & fragmented workflow',
        'High cognitive load during critical procedures',
      ],
      after: [
        'Fully integrated device → EMR system',
        'Faster, more accurate data entry',
        'Reduced mental load for clinicians',
      ],
    },
    principles: [
      { title: 'Behavior-Driven Design', desc: 'Preserve familiar workflows to reduce friction and adoption barriers' },
      { title: 'System-Aware UX', desc: 'Design decisions aligned with real-time data constraints and integrations' },
      { title: 'Progressive Complexity', desc: 'Keep simple flows simple — complex flows well-structured' },
      { title: 'Hybrid Interaction', desc: 'Combine automation with manual flexibility where it matters most' },
      { title: 'Cross-functional Thinking', desc: 'Balance user needs, technical feasibility, and clinical context' },
    ],
    reflection:
      'Great healthcare design is not about making things look modern — it\'s about making critical workflows faster, safer, and more reliable.',
  },
  'vidio-account-settings': {
    projectId: 4,
    badge: 'Case Study',
    title: 'Improving Account Setting and Navigation Menu',
    titleAccent: 'with Status Subscriptions and Vidio Rewards.',
    client: 'Vidio.com',
    role: 'UI/UX Designer',
    scope: ['UI Design', 'UX Design', 'Prototyping', 'Testing', 'Detailing'],
    year: '2023',
    cover: '/projects/vidio.png?v=2',
    overview:
      'Vidio is Indonesia’s largest OTT streaming platform, offering live TV, news, sports, and entertainment content to millions of users. This project focused on redesigning the Account Settings page to make subscription status, rewards, and personal information easier to find and understand.',
    problems: [
      {
        number: '01',
        title: 'Navigation Confusion',
        description:
          'Users struggled to locate the account menu because it lived in an unexpected spot — the top-right corner instead of the bottom navigation — paired with unfamiliar icons.',
      },
      {
        number: '02',
        title: 'Information Overload',
        description:
          'The settings page surfaced irrelevant elements that confused users, including obscure fields like usernames and unclear helper text scattered across menu options.',
      },
      {
        number: '03',
        title: 'Time-Consuming Tasks',
        description:
          'Simple actions — checking subscription status or updating personal data — took too long due to nested dropdowns, inconsistent colors, mismatched icons, and repeated information.',
      },
    ],
    goals: [
      'Support a better account setting experience',
      'Support an improved subscription and Vidio Rewards experience',
      'Provide more valuable widget information at a glance',
    ],
    process: {
      title: 'Competitive Analysis',
      description:
        'To understand best practices, I benchmarked four platforms — YouTube Premium, Tiket.com, Gojek, and Grab — comparing element layout, information hierarchy, and placement. The key takeaway: the strongest experiences balance rich information with visual restraint, surfacing what matters without overwhelming the user.',
    },
    solutions: [
      {
        number: '01',
        title: 'User Affinity Personalization',
        description:
          'Worked with cross-functional teams to define which elements should appear for different user personas, based on their context and current subscription status.',
      },
      {
        number: '02',
        title: 'Profile Section Redesign',
        description:
          'Revamped the profile area to improve visibility of key elements, clearly display subscription status, and increase awareness of Vidio Rewards — supporting a stronger subscription experience overall.',
      },
      {
        number: '03',
        title: 'Effortless Navigation Menu',
        description:
          'Removed dropdowns and unnecessary helper text so subscription information is accessible without extra clicks — resulting in a more direct, confident user experience.',
      },
    ],
    validation: [
      {
        title: 'Design Preference',
        description:
          'Participants strongly preferred the new design, valuing immediate access to information without needing to click through menus.',
      },
      {
        title: 'Element Attractiveness',
        description:
          'Users were pleasantly surprised by the visible subscription status, noting a clear distinction between free and paid accounts.',
      },
      {
        title: 'Flow Clarity',
        description:
          'The redesigned navigation menu felt intuitive and efficient, helping users complete tasks faster than before.',
      },
    ],
    insights: [
      'Immediate information visibility was the most-cited reason participants preferred the new design.',
      'Surfacing subscription status removed confusion about account type and entitlements.',
      'Clear visual differentiation between free and premium users improved overall account awareness.',
    ],
  },
}

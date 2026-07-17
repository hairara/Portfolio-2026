export const vidioStudy = {
  projectId: 4,
  badge: 'Case Study',
  title: 'Making Subscription Status and Rewards Impossible to Miss',
  client: 'Vidio.com',
  role: 'UI/UX Designer',
  scope: ['UI Design', 'UX Design', 'Prototyping', 'Testing', 'Detailing'],
  year: '2023',
  cover: '/projects/vidio.png?v=2',

  context: {
    intro: 'In a subscription-based product, clarity is everything.',
    body: 'Users don\'t just want access — they want to understand what they\'re paying for, what they\'re getting, and what they can do next. But in our case, that clarity was missing.',
    detail: 'Critical information like subscription status and rewards lived in separate places, buried inside a navigation structure that required effort to explore. As a result, users were often unsure:',
    questions: [
      '"Am I still subscribed?"',
      '"Where do I check my benefits?"',
      '"Do I even have rewards?"',
    ],
    close: 'This wasn\'t just a UX issue — it was a product experience gap.',
  },

  problem: {
    intro: 'Through observation and internal feedback, we identified a pattern: users weren\'t engaging with features — not because they didn\'t find them useful, but because they didn\'t know they existed or couldn\'t find them easily.',
    issues: [
      { label: 'Invisible status', desc: 'Subscription state (active, expired, trial) wasn\'t immediately visible.' },
      { label: 'Hidden value', desc: 'Rewards existed, but lacked presence and context.' },
      { label: 'Cognitive overload', desc: 'Navigation was cluttered, forcing users to scan and guess.' },
    ],
    quote: 'We made users think too much for something that should feel obvious.',
  },

  insight: {
    reframe: 'This is not a navigation problem. This is a prioritization problem.',
    body: 'The interface treated all menu items equally — while in reality, not all information has equal importance. Users don\'t open account settings to browse. They come with intent:',
    intents: ['Check subscription', 'Manage account', 'Access benefits'],
    close: 'So instead of adding more, we needed to surface what matters most.',
  },

  approach: [
    {
      number: '01',
      title: 'Make important things visible by default',
      desc: 'If users care about subscription status, it should not be hidden behind taps.',
    },
    {
      number: '02',
      title: 'Reduce decision-making',
      desc: 'Navigation should guide — not overwhelm.',
    },
    {
      number: '03',
      title: 'Connect value to context',
      desc: 'Rewards shouldn\'t feel like a separate feature — they should feel like part of the subscription experience.',
    },
  ],

  solutions: [
    {
      title: 'Subscription Status Card',
      label: 'Top-Level Placement',
      desc: 'A persistent, highly visible component showing current status — Active, Expired, or Trial.',
    },
    {
      title: 'Rewards Integration',
      label: 'Elevated into Main Flow',
      desc: 'Rewards were no longer hidden, but positioned as a key benefit alongside subscription status.',
    },
    {
      title: 'Simplified Navigation Structure',
      label: 'Reduced Complexity',
      desc: 'Reduced menu complexity and grouped related items logically to lower scanning effort.',
    },
    {
      title: 'Improved Labeling & Visual Hierarchy',
      label: 'Clarity at a Glance',
      desc: 'Clearer naming, better spacing, and stronger emphasis on key actions.',
    },
  ],

  impact: {
    bullets: [
      'Users could instantly understand their subscription status',
      'Rewards became more discoverable and actionable',
      'Navigation required less effort and fewer steps',
      'Overall experience felt faster, clearer, and more intentional',
    ],
    shiftBefore: '"Where do I find this?"',
    shiftAfter: '"Everything I need is already here."',
  },

  takeaway: {
    headline: 'Good navigation is not about adding structure. It\'s about removing ambiguity.',
  },
}

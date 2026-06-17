export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  category: string;
  readTime: string;
  keywords: string[];
  intro: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  checklist?: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const posts: BlogPost[] = [
  {
    slug: 'ai-automation-perth-business-guide',
    title: 'AI Automation for Perth Businesses: A Practical Starting Guide',
    description:
      'A practical guide for Perth businesses that want to use AI automation to reduce admin, improve customer response and simplify everyday operations.',
    published: '2026-06-17',
    updated: '2026-06-17',
    category: 'AI Automation',
    readTime: '7 min read',
    keywords: [
      'AI automation Perth',
      'business automation Perth',
      'AI integration Perth',
      'custom business systems Perth'
    ],
    intro: [
      'AI automation is most useful when it removes friction from the way a business already works. For a Perth business, that might mean fewer manual handovers, faster customer response, cleaner reporting, better quoting, safer document handling or simpler internal approvals.',
      'The mistake is starting with the tool. The better starting point is the workflow: who does the work, where the information comes from, what decisions are made, and where delays or mistakes appear.'
    ],
    sections: [
      {
        heading: 'Start with repeatable work, not novelty',
        body: [
          'Good automation usually begins with repetitive work that people already understand. If a task happens every day or every week, follows a predictable pattern, and uses information from known systems, it may be a strong candidate for AI-assisted automation.',
          'Examples include triaging enquiries, drafting first-response emails, summarising job notes, preparing meeting actions, checking forms for missing information, extracting details from supplier documents and creating management summaries from operational data.'
        ]
      },
      {
        heading: 'Keep people in control of important decisions',
        body: [
          'AI should not quietly make business-critical decisions without review. In most business settings, the safer model is assisted automation: AI prepares, sorts, drafts or checks information, while a person approves the final action.',
          'This matters for customer trust, privacy, legal exposure and internal accountability. A useful AI workflow should make the decision trail clearer, not blurrier.'
        ]
      },
      {
        heading: 'Connect systems before adding complexity',
        body: [
          'Many businesses already have the data they need, but it is spread across email, spreadsheets, accounting software, job systems, CRMs and cloud storage. AI integration becomes more valuable when those systems are connected in a controlled way.',
          'For a smaller business, this might be a simple workflow that turns a website enquiry into a qualified task and draft response. For a larger organisation, it might be an integration layer that connects approvals, asset records, document evidence and reporting.'
        ]
      },
      {
        heading: 'Build security into the automation',
        body: [
          'AI automation should be designed with access control, logging and data boundaries from the beginning. That means deciding which data the workflow can read, who can trigger it, where outputs are stored, and how mistakes are reviewed.',
          'This is especially important when automation touches customer records, financial information, legal documents, operational data or internal security information.'
        ]
      },
      {
        heading: 'A sensible first project',
        body: [
          'A good first AI automation project is useful, measurable and contained. It should save time or improve quality without needing to replace the whole business system.',
          'Start with one workflow, document the current steps, identify the bottleneck, define the approval point, and build a version that can be tested with real work before expanding.'
        ]
      }
    ],
    checklist: [
      'Choose one workflow that repeats often.',
      'Map the inputs, decisions, systems and handovers.',
      'Decide where a person must approve the output.',
      'Set clear data boundaries and access permissions.',
      'Measure saved time, error reduction or faster response.'
    ],
    faqs: [
      {
        question: 'What is the best first AI automation project for a Perth business?',
        answer:
          'The best first project is usually a repetitive workflow with clear inputs and a human approval point, such as enquiry triage, quote preparation, document summarisation or internal reporting.'
      },
      {
        question: 'Is AI automation only useful for large businesses?',
        answer:
          'No. Small businesses can often get value faster because their workflows are easier to map. Larger businesses may need more governance, integration and change management.'
      },
      {
        question: 'Can AI automation be secure?',
        answer:
          'Yes, if it is designed with access controls, logging, data limits and human review. Security should be part of the workflow design, not added after launch.'
      }
    ]
  },
  {
    slug: 'custom-business-systems-perth',
    title: 'Custom Business Systems in Perth: When Off-the-Shelf Software Is Not Enough',
    description:
      'How Perth businesses can decide when to use custom systems, integrations and AI-assisted workflows instead of forcing work through disconnected tools.',
    published: '2026-06-17',
    updated: '2026-06-17',
    category: 'Custom Systems',
    readTime: '8 min read',
    keywords: [
      'custom business systems Perth',
      'business systems Perth',
      'software integration Perth',
      'AI systems Perth'
    ],
    intro: [
      'Most businesses do not need custom software for everything. Off-the-shelf tools are often the right choice for accounting, email, file storage, payroll, ticketing, sales pipelines and job management.',
      'The problem starts when those tools do not fit the way the business actually operates. Work gets pushed into spreadsheets, inboxes and manual copying. Reporting becomes unreliable. Staff learn workarounds that only one person understands.'
    ],
    sections: [
      {
        heading: 'Custom does not mean complicated',
        body: [
          'A custom business system can be small. It might be an integration between two existing tools, a secure portal for collecting information, a workflow that routes approvals, or a dashboard that pulls together the information leaders need.',
          'The aim is not to build software for its own sake. The aim is to reduce friction, remove duplicate handling and make important work easier to see.'
        ]
      },
      {
        heading: 'Signs your business has outgrown disconnected tools',
        body: [
          'Common signs include double entry, manual status updates, staff relying on one shared spreadsheet, customers asking for updates that should be visible already, and managers rebuilding the same reports every week.',
          'Another sign is risk. When important information lives in personal inboxes or uncontrolled documents, the business becomes harder to secure, audit and recover.'
        ]
      },
      {
        heading: 'Where AI fits into custom systems',
        body: [
          'AI can make custom systems more useful when it is connected to the right workflow. It can summarise job notes, classify incoming requests, draft responses, detect missing information, prepare internal briefings and help teams search operational knowledge.',
          'The system still needs rules. AI should have boundaries around what it can access, how it can act and when a person must approve the result.'
        ]
      },
      {
        heading: 'Integration is often the highest-value step',
        body: [
          'For many Perth businesses, the biggest improvement comes from connecting existing tools rather than replacing them. A CRM, accounting package, form tool, document store and project system can often be joined into a simpler operating flow.',
          'This reduces manual handling while preserving the tools people already know.'
        ]
      },
      {
        heading: 'Build for maintenance, not just launch',
        body: [
          'A useful custom system should be understandable, documented and maintainable. It should have sensible permissions, logs, backups and clear ownership.',
          'The best system is not the most elaborate. It is the one the business can keep using, improving and explaining.'
        ]
      }
    ],
    checklist: [
      'List the tools people already use.',
      'Find repeated manual copying between systems.',
      'Identify the reports or approvals that slow decisions.',
      'Choose whether integration, automation or a small custom app is the right first step.',
      'Build permissions and support into the system from the start.'
    ],
    faqs: [
      {
        question: 'Should a business replace off-the-shelf software with a custom system?',
        answer:
          'Usually not at first. A better approach is often to keep strong off-the-shelf tools and build integrations or custom workflow layers around the gaps.'
      },
      {
        question: 'Are custom business systems expensive?',
        answer:
          'They can be, but they do not have to start large. A focused integration or workflow tool can deliver value before a larger platform is considered.'
      },
      {
        question: 'What makes a custom system secure?',
        answer:
          'Clear permissions, logging, backup strategy, secure hosting, least-privilege access and documented ownership all matter. The system should be designed as an operational asset, not a one-off script.'
      }
    ]
  },
  {
    slug: 'small-business-ai-workflow-automation-perth',
    title: 'Small Business AI Workflow Automation in Perth: Simple Wins Before Big Systems',
    description:
      'Practical AI workflow automation ideas for Perth small businesses that want to reduce admin, respond faster and keep operations simple.',
    published: '2026-06-17',
    updated: '2026-06-17',
    category: 'Small Business',
    readTime: '6 min read',
    keywords: [
      'small business automation Perth',
      'AI workflow automation Perth',
      'AI for small business Perth',
      'business process automation Perth'
    ],
    intro: [
      'Small businesses often feel the pain of admin more sharply than large organisations. One missed enquiry, one slow quote, one forgotten follow-up or one messy spreadsheet can directly affect cash flow and customer trust.',
      'AI workflow automation can help, but the first wins should be simple. The goal is to give the owner and team more time, fewer loose ends and better visibility.'
    ],
    sections: [
      {
        heading: 'Start where time leaks every week',
        body: [
          'Look for the small jobs that quietly consume time: rewriting similar emails, chasing missing information, copying details into spreadsheets, preparing status updates, naming files, sorting inboxes and summarising notes.',
          'These tasks may seem minor, but they compound. Automating even part of them can create breathing room.'
        ]
      },
      {
        heading: 'Use AI as a helper, not an invisible employee',
        body: [
          'For small businesses, AI works best when it helps a person move faster. It can draft, summarise, check, sort and prepare. The person still decides what goes to the customer, what gets approved and what becomes a record.',
          'This keeps quality high and avoids the risk of an automation making a promise the business did not intend.'
        ]
      },
      {
        heading: 'Examples of simple workflow automation',
        body: [
          'A website enquiry can become a structured lead with a suggested response. A job completion note can become a customer update. A supplier invoice can be checked for missing details before it reaches the owner. A weekly spreadsheet can become a short management summary.',
          'None of these require a huge system at the beginning. They require a clear workflow, secure access and a practical test.'
        ]
      },
      {
        heading: 'Avoid automation mess',
        body: [
          'The risk for small businesses is stacking too many disconnected automations. A handful of clever shortcuts can become hard to maintain if nobody knows what triggers what.',
          'Keep a simple register of automations: what they do, what they access, who owns them, and how to turn them off. This is basic, but it prevents confusion later.'
        ]
      },
      {
        heading: 'Make the first project measurable',
        body: [
          'Before building, define what success looks like. It might be faster response time, fewer missed follow-ups, fewer data-entry errors or one hour saved each week.',
          'Small measurable wins create trust in the process and make it easier to choose the next improvement.'
        ]
      }
    ],
    checklist: [
      'Find one recurring admin task that slows the team down.',
      'Keep the workflow small enough to test in days, not months.',
      'Require human approval for customer-facing output.',
      'Write down what the automation accesses and changes.',
      'Measure the result before adding more automations.'
    ],
    faqs: [
      {
        question: 'Can a small business use AI without a big software project?',
        answer:
          'Yes. Many useful AI workflows begin as small automations around email, forms, documents, notes and reporting.'
      },
      {
        question: 'What should small businesses avoid when automating?',
        answer:
          'Avoid automating unclear processes, connecting tools without access controls, and creating shortcuts that nobody documents or owns.'
      },
      {
        question: 'How quickly can a workflow automation project start?',
        answer:
          'A narrow workflow can often be mapped and prototyped quickly, especially when the systems and approval points are clear.'
      }
    ]
  },
  {
    slug: 'enterprise-ai-integration-roadmap-perth',
    title: 'AI Integration Roadmap for Larger Perth Businesses',
    description:
      'A roadmap for larger Perth organisations that want AI integration, automation and custom systems without losing governance, security or operational control.',
    published: '2026-06-17',
    updated: '2026-06-17',
    category: 'Enterprise Systems',
    readTime: '9 min read',
    keywords: [
      'enterprise AI integration Perth',
      'AI systems Perth',
      'business automation Perth',
      'custom systems Western Australia'
    ],
    intro: [
      'Larger businesses have a different AI challenge. The opportunity is bigger, but so is the risk. There are more systems, more data owners, more approval paths, more security requirements and more people affected by change.',
      'An AI integration roadmap helps the organisation move from experiments to controlled capability.'
    ],
    sections: [
      {
        heading: 'Separate experiments from operating systems',
        body: [
          'AI experiments are useful for learning, but they should not quietly become production systems without review. A roadmap should define what counts as a trial, what counts as an approved workflow and what controls are required before expansion.',
          'This protects the business from shadow AI, uncontrolled data use and unsupported automations.'
        ]
      },
      {
        heading: 'Map data ownership and system boundaries',
        body: [
          'AI integration often fails when ownership is unclear. Before connecting tools, the organisation needs to know which systems hold sensitive data, who owns the process, which teams need access and what audit trail is required.',
          'This is especially important across HR, finance, customer records, operations, legal, contracts, cyber security and executive reporting.'
        ]
      },
      {
        heading: 'Prioritise workflows with measurable value',
        body: [
          'Large organisations can identify many possible AI use cases. The practical move is to rank them by value, risk and implementation effort.',
          'Strong candidates often include knowledge search, document triage, customer-service support, project reporting, compliance evidence collection, supplier risk review, incident summaries and management briefings.'
        ]
      },
      {
        heading: 'Create reusable integration patterns',
        body: [
          'Rather than building every automation as a one-off, larger businesses benefit from reusable patterns: secure connectors, approval workflows, logging standards, prompt and output review practices, and clear deployment controls.',
          'This makes later AI projects faster and safer because the foundation is already understood.'
        ]
      },
      {
        heading: 'Governance should make adoption easier',
        body: [
          'Governance is often treated as a blocker. Good governance should do the opposite: make it clear how teams can use AI safely.',
          'A practical roadmap gives staff approved paths, reviewed tools, documented data rules and a route for proposing new workflows.'
        ]
      }
    ],
    checklist: [
      'Inventory current AI experiments and automation tools.',
      'Classify data and system access by risk.',
      'Choose high-value workflows with clear owners.',
      'Define approval, logging and monitoring requirements.',
      'Create reusable patterns before scaling across teams.'
    ],
    faqs: [
      {
        question: 'What is the first step in enterprise AI integration?',
        answer:
          'The first step is usually discovery: map current tools, data sources, workflows, ownership and unmanaged AI use before selecting implementation priorities.'
      },
      {
        question: 'How can larger businesses reduce AI risk?',
        answer:
          'They can reduce risk with approved tools, data boundaries, access controls, logging, human review and a clear process for moving from trial to production.'
      },
      {
        question: 'Why build custom systems around AI?',
        answer:
          'Custom systems can connect AI to the actual operating flow of the business while preserving permissions, approvals, records and reporting.'
      }
    ]
  }
];

export const featuredPosts = posts.slice(0, 3);

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

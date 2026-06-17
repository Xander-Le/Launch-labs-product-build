import { siteConfig } from "./site";

export type ServiceAreaPageContent = {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  driveTime: {
    title: string;
    summary: string;
    details: string[];
  };
  whyLocal: {
    title: string;
    summary: string;
    points: Array<{ title: string; description: string }>;
  };
  localDemand: {
    title: string;
    summary: string;
    details: string[];
  };
  useCases: {
    title: string;
    summary: string;
    examples: Array<{ title: string; description: string }>;
  };
  faqs: Array<{ id: string; question: string; answer: string }>;
};

export const serviceAreaPages = {
  golfSimulatorGarland: {
    breadcrumbLabel: "Golf Simulator Garland TX",
    eyebrow: "Golf Simulator Garland TX",
    title: "Private Trackman Golf",
    titleAccent: "In Garland.",
    intro:
      "Launch Labs is Garland's private Trackman golf simulator studio at 565 W Oates Rd #100. Reserve online, receive digital access, and practice in a clean self-service bay without the sports bar crowd.",
    driveTime: {
      title: "Drive time across Garland and east DFW",
      summary:
        "Because Launch Labs is located in Garland, most local golfers can reach the studio in a short, predictable drive.",
      details: [
        "Firewheel, Duck Creek, and central Garland neighborhoods are often 10–15 minutes away.",
        "Rowlett, Sachse, and south Richardson are commonly 15–25 minutes depending on traffic.",
        "Mesquite and east Dallas golfers often reach the studio in roughly 15–25 minutes via I-635 or LBJ.",
        "Launch Labs sits near major east-side corridors, so after-work or late-night sessions stay practical.",
      ],
    },
    whyLocal: {
      title: "Why Garland golfers choose Launch Labs",
      summary:
        "Garland has plenty of outdoor golf, but not enough private indoor space built for focused reps.",
      points: [
        {
          title: "A home-studio option in Garland",
          description:
            "Garland golfers get a local Trackman bay without driving into Dallas or settling for a crowded entertainment venue.",
        },
        {
          title: "Practice that fits real schedules",
          description:
            "Members can book early, late, or between commitments because the studio is built for 24/7 self-service access.",
        },
        {
          title: "Private bays for serious reps",
          description:
            "Launch Labs is reservation-only, camera-monitored, and designed for practice — not bar traffic.",
        },
        {
          title: "Useful for every skill level",
          description:
            "Beginners, league players, coaches, and competitive golfers all benefit from measurable feedback in a quiet bay.",
        },
      ],
    },
    localDemand: {
      title: "Nearby golf demand Launch Labs supports",
      summary:
        "Garland and the surrounding east DFW corridor have active public, private, and league golf — and golfers here want better off-course practice.",
      details: [
        "Year-round practice when heat, rain, or winter weather makes outdoor range time harder.",
        "Pre-league warmup before heading to Duck Creek, Firewheel-area courses, or local league nights.",
        "Equipment testing and fitting blocks where Trackman numbers matter more than guesswork.",
        "Small-group simulator rounds for friends, families, or playing partners who want a private bay.",
      ],
    },
    useCases: {
      title: "Booking examples for Garland golfers",
      summary:
        "Most Garland members and guests use Launch Labs for repeatable practice, not one-off entertainment.",
      examples: [
        {
          title: "Weeknight wedge and approach block",
          description:
            "Book 90 minutes after work, work through carry numbers, and leave with a clearer plan for the next outdoor round.",
        },
        {
          title: "Saturday simulator round with friends",
          description:
            "Reserve a private bay for a small group, play a virtual course, and keep the session focused without lounge distractions.",
        },
        {
          title: "Coach-led lesson block",
          description:
            "Bring an instructor into a quiet Trackman bay for swing changes, launch monitor feedback, and structured player development.",
        },
      ],
    },
    faqs: [
      {
        id: "garland-location",
        question: "Where exactly is Launch Labs in Garland?",
        answer:
          "Launch Labs is at 565 W Oates Rd #100, Garland, TX 75043. Directions and arrival details are shared after booking.",
      },
      {
        id: "garland-membership",
        question: "Do Garland golfers need a membership to book?",
        answer:
          "Founding memberships are the best fit for repeat practice. Public hourly booking will also be available after opening, depending on bay availability.",
      },
      {
        id: "garland-parking",
        question: "Is parking easy from Garland neighborhoods?",
        answer:
          "Yes. Launch Labs is designed for self-service arrival. Parking and entry details are included in your booking confirmation.",
      },
      {
        id: "garland-opening",
        question: "Is the Garland studio open yet?",
        answer:
          "Launch Labs is opening soon in Garland. Founding memberships are available now, and full public booking will roll out after launch.",
      },
    ],
  },
  indoorGolfGarland: {
    breadcrumbLabel: "Indoor Golf Garland TX",
    eyebrow: "Indoor Golf Garland TX",
    title: "Indoor Golf Built For",
    titleAccent: "Focused Practice.",
    intro:
      "When Texas heat, storms, or a packed weekend schedule get in the way, Launch Labs gives Garland golfers a private indoor studio with Trackman feedback and self-service bay access.",
    driveTime: {
      title: "Getting to indoor golf from around Garland",
      summary:
        "Launch Labs is centrally located on the west side of Garland for golfers across the city and nearby east DFW suburbs.",
      details: [
        "Garland residents near Firewheel, Duck Creek, and Oates corridor neighborhoods often arrive in under 15 minutes.",
        "Golfers coming from Rowlett or Sachse typically plan 15–25 minutes depending on time of day.",
        "East Richardson and Mesquite drives are usually manageable on I-635, LBJ, or local east-west routes.",
        "Because sessions are booked in advance, you know exactly when your bay is ready — no waiting for an open simulator.",
      ],
    },
    whyLocal: {
      title: "Why indoor golf matters here",
      summary:
        "North Texas weather and busy schedules make consistent outdoor practice difficult. Indoor golf fills the gap when you still want meaningful reps.",
      points: [
        {
          title: "Heat and storm protection",
          description:
            "Keep practicing through summer heat, sudden storms, and winter cold without losing a week of momentum.",
        },
        {
          title: "Structured practice blocks",
          description:
            "Use Trackman data for targeted work on launch, spin, carry, and dispersion instead of hitting balls without feedback.",
        },
        {
          title: "Cleaner environment than a sports bar",
          description:
            "Launch Labs is built as a private golf lab — not a loud lounge with simulators in the background.",
        },
        {
          title: "Better for repeat training",
          description:
            "Membership-style access makes indoor golf part of your routine, not a rare special occasion.",
        },
      ],
    },
    localDemand: {
      title: "What Garland-area golfers practice indoors",
      summary:
        "Indoor demand here is driven by consistency, not novelty.",
      details: [
        "Off-season and bad-weather maintenance for league players across Garland, Rowlett, and Mesquite.",
        "Approach and wedge work when outdoor ranges are crowded or too hot for long sessions.",
        "Simulator rounds for social golf that still feels private and focused.",
        "Short-game and full-swing blocks before trips, tournaments, or local course events.",
      ],
    },
    useCases: {
      title: "Indoor booking examples",
      summary:
        "These are the kinds of sessions Garland-area golfers book most often.",
      examples: [
        {
          title: "Rain-day replacement session",
          description:
            "Swap a cancelled outdoor range visit for a booked indoor block with the same practice goal.",
        },
        {
          title: "Early-morning reps before work",
          description:
            "Use a quiet morning bay to hit a structured session before the rest of the day gets away from you.",
        },
        {
          title: "Family indoor golf night",
          description:
            "Bring a small group into one private bay for a simulator round without the noise of a public venue.",
        },
      ],
    },
    faqs: [
      {
        id: "indoor-vs-outdoor",
        question: "Is indoor golf useful if I already play outdoor courses nearby?",
        answer:
          "Yes. Most serious golfers use indoor time for measurable practice, equipment testing, and bad-weather training — not as a replacement for every round.",
      },
      {
        id: "indoor-hours",
        question: "Can I practice indoors late at night?",
        answer:
          "Launch Labs is designed for 24/7 member access after opening. You reserve your bay and enter with your digital access instructions.",
      },
      {
        id: "indoor-technology",
        question: "What technology is in the indoor bays?",
        answer:
          "Every bay uses Trackman iO so you can measure ball flight, club delivery, and other performance data during practice or simulated play.",
      },
      {
        id: "indoor-membership",
        question: "How do I compare membership and hourly indoor options?",
        answer:
          "See the pricing page for founder memberships, guest access, and hourly booking details once public availability opens.",
      },
    ],
  },
  trackmanGarland: {
    breadcrumbLabel: "Trackman Golf Simulator Garland TX",
    eyebrow: "Trackman Golf Simulator Garland TX",
    title: "Trackman Precision.",
    titleAccent: "Private Access.",
    intro:
      "Launch Labs is Garland's private Trackman iO studio for golfers who want real numbers — ball speed, spin rate, launch angle, carry, and club delivery — in a self-service bay you reserve online.",
    driveTime: {
      title: "Drive time for data-focused practice",
      summary:
        "Garland-area golfers do not need to cross Dallas for tour-level launch monitor feedback.",
      details: [
        "Local Garland drives are often the shortest — many golfers arrive in 10–15 minutes.",
        "Rowlett, Sachse, and Firewheel-area players commonly reach Launch Labs in under 25 minutes.",
        "Mesquite and east Richardson golfers can use I-635 or LBJ for a straightforward east-side route.",
        "Because the studio is self-service, your session starts when your booking starts — not when a front desk gets to you.",
      ],
    },
    whyLocal: {
      title: "Why Trackman golfers use Launch Labs",
      summary:
        "Trackman is only valuable if you can access it consistently in an environment built for learning.",
      points: [
        {
          title: "Private bays for honest feedback",
          description:
            "Work on swing changes, gapping, and dispersion without distractions from a public simulator floor.",
        },
        {
          title: "Better for fitting and testing",
          description:
            "Compare clubs, shafts, and ball changes with repeatable Trackman numbers instead of outdoor guesswork.",
        },
        {
          title: "Useful for coaches and competitive players",
          description:
            "Instructors and serious golfers can run structured sessions with data they trust.",
        },
        {
          title: "Local alternative to one-off lessons only",
          description:
            "Membership access makes Trackman part of your weekly routine, not a rare appointment.",
        },
      ],
    },
    localDemand: {
      title: "Trackman demand in east DFW golf",
      summary:
        "Golfers across Garland, Rowlett, Sachse, Mesquite, and east Richardson increasingly expect data — not just ball flight on a screen.",
      details: [
        "Players working on distance control, spin management, and tighter dispersion patterns.",
        "Coaches who need a repeatable indoor environment for students across the east side.",
        "Competitive golfers preparing for leagues, club events, and tournament seasons.",
        "Equipment-focused golfers testing changes before committing on course or at a full fitting.",
      ],
    },
    useCases: {
      title: "Trackman session examples",
      summary:
        "These sessions are a strong fit for Launch Labs bays.",
      examples: [
        {
          title: "Driver optimization block",
          description:
            "Test launch, spin, and carry windows until you find a repeatable setup for your home course conditions.",
        },
        {
          title: "Wedge gapping session",
          description:
            "Use carry and spin data to build a tighter yardage chart for your scoring clubs.",
        },
        {
          title: "Lesson plus solo follow-up",
          description:
            "Take instruction in the bay, then book follow-up reps on your own schedule to make the change stick.",
        },
      ],
    },
    faqs: [
      {
        id: "trackman-io",
        question: "Does Launch Labs use Trackman iO?",
        answer:
          "Yes. Every Launch Labs bay is powered by Trackman iO for ball flight and club delivery data during practice or simulated play.",
      },
      {
        id: "trackman-beginners",
        question: "Is Trackman only for advanced golfers?",
        answer:
          "No. Beginners benefit too because the data makes practice more specific and less confusing than guessing from feel alone.",
      },
      {
        id: "trackman-pricing",
        question: "How much does Trackman access cost in Garland?",
        answer:
          "See the pricing page for founder memberships, guest access, and hourly options at Launch Labs.",
      },
      {
        id: "trackman-booking",
        question: "How do I book a Trackman bay?",
        answer:
          "Reserve online, receive your digital access instructions, and arrive during your booked window. See How It Works for the full flow.",
      },
    ],
  },
  rowlett: {
    breadcrumbLabel: "Rowlett",
    eyebrow: "Golf Simulator Near Rowlett TX",
    title: "Private Trackman Golf",
    titleAccent: "Near Rowlett.",
    intro:
      "Rowlett golfers can reach Launch Labs in Garland for private Trackman simulator bays, digital entry, and focused practice without driving deep into Dallas.",
    driveTime: {
      title: "Drive time from Rowlett to Launch Labs",
      summary:
        "Launch Labs is a practical indoor option for Rowlett players who want more than the nearest sports-bar simulator.",
      details: [
        "Many Rowlett golfers reach 565 W Oates Rd in roughly 12–20 minutes via I-30, I-635, or local east-west routes.",
        "South Rowlett and Lake Ray Hubbard-area drives are often on the shorter end of that range.",
        "Because the studio is reservation-only, you avoid waiting for a walk-in bay after the drive over.",
        "Late-night or early-morning sessions stay realistic for Rowlett commuters and shift workers.",
      ],
    },
    whyLocal: {
      title: "Why Rowlett golfers make the short drive",
      summary:
        "Rowlett has active golf on and around the lake, but fewer private indoor options built for repeat training.",
      points: [
        {
          title: "Better than fighting Dallas traffic",
          description:
            "Launch Labs gives east-side golfers a premium bay nearby instead of heading toward central Dallas venues.",
        },
        {
          title: "Private bays for focused practice",
          description:
            "No lounge crowd, no front desk bottleneck — just your booked Trackman session.",
        },
        {
          title: "Strong fit for league and social golfers",
          description:
            "Use simulator time for warmup, practice, or a private group round before your next outing.",
        },
        {
          title: "Membership value for repeat visits",
          description:
            "If you practice weekly, a Garland membership often beats paying premium hourly rates closer to entertainment districts.",
        },
      ],
    },
    localDemand: {
      title: "Golf demand around Rowlett",
      summary:
        "Rowlett and the Lake Ray Hubbard corridor have steady demand for better practice options.",
      details: [
        "Players at Waterview, Buffalo Creek, and nearby public courses who want off-course reps.",
        "Winter and summer practice when outdoor conditions or daylight are limiting.",
        "Groups looking for a private simulator night instead of a crowded venue.",
        "Coaches and competitive juniors who need measurable indoor feedback close to home.",
      ],
    },
    useCases: {
      title: "How Rowlett golfers use Launch Labs",
      summary:
        "Most Rowlett bookings are repeat practice, not one-time entertainment.",
      examples: [
        {
          title: "After-work practice before a weekend round",
          description:
            "Book a weeknight bay, work through your priorities, and play better on Saturday without changing your whole routine.",
        },
        {
          title: "Small-group simulator night",
          description:
            "Bring two or three friends from Rowlett for a private bay and a full simulated round.",
        },
        {
          title: "Coach session for a junior or competitive player",
          description:
            "Use Trackman feedback in a quiet bay for lessons, gapping work, or tournament prep.",
        },
      ],
    },
    faqs: [
      {
        id: "rowlett-worth-drive",
        question: "Is Launch Labs worth the drive from Rowlett?",
        answer:
          "For golfers who want private Trackman bays and 24/7 self-service access, the short Garland drive is often more convenient than central Dallas alternatives.",
      },
      {
        id: "rowlett-guests",
        question: "Can I bring guests from Rowlett?",
        answer:
          "Yes. Guest limits depend on your membership plan. See pricing for Player and VIP founder guest access details.",
      },
      {
        id: "rowlett-directions",
        question: "What address should I use for directions?",
        answer:
          "Launch Labs is at 565 W Oates Rd #100, Garland, TX 75043. Use the directions link after booking for the smoothest arrival.",
      },
      {
        id: "rowlett-membership",
        question: "Should Rowlett golfers choose membership or hourly play?",
        answer:
          "If you plan to practice regularly, compare founder memberships on the pricing page. Hourly booking will also be available after opening.",
      },
    ],
  },
  mesquite: {
    breadcrumbLabel: "Mesquite",
    eyebrow: "Golf Simulator Near Mesquite TX",
    title: "Private Trackman Golf",
    titleAccent: "Near Mesquite.",
    intro:
      "Mesquite golfers can reach Launch Labs in Garland for private Trackman bays, self-service booking, and focused indoor practice without crossing downtown Dallas.",
    driveTime: {
      title: "Drive time from Mesquite to Launch Labs",
      summary:
        "Launch Labs is positioned for east-side golfers who want a premium indoor studio without a long cross-town commute.",
      details: [
        "Central Mesquite drives are often 15–22 minutes to 565 W Oates Rd depending on traffic and starting point.",
        "Town East and south Mesquite routes commonly connect via I-635 or LBJ toward Garland.",
        "Because access is digital and self-service, your session starts on time once you arrive.",
        "Early-morning and late-night bookings stay practical for Mesquite commuters.",
      ],
    },
    whyLocal: {
      title: "Why Mesquite golfers choose Launch Labs",
      summary:
        "Mesquite players often want better indoor options than loud entertainment bays and long Dallas drives.",
      points: [
        {
          title: "East-side convenience",
          description:
            "Launch Labs keeps premium simulator access on the Garland side of the metro instead of forcing a downtown trip.",
        },
        {
          title: "Private environment for real practice",
          description:
            "Trackman data, reservation-only bays, and no front desk wait times make sessions more efficient.",
        },
        {
          title: "Flexible for busy schedules",
          description:
            "Book the time that works — early, late, or between family and work commitments.",
        },
        {
          title: "Useful for all player types",
          description:
            "Beginners, social golfers, league players, and competitive reps all benefit from a cleaner indoor option.",
        },
      ],
    },
    localDemand: {
      title: "Golf demand around Mesquite",
      summary:
        "Mesquite and nearby east Dallas communities have steady interest in better practice and indoor play.",
      details: [
        "Players looking for year-round reps when heat or weather limits outdoor range time.",
        "Social groups who want a private simulator bay instead of a crowded public venue.",
        "League and tournament golfers who need structured indoor warmup and feedback.",
        "Families and beginners who want a quieter first indoor golf experience.",
      ],
    },
    useCases: {
      title: "Booking examples for Mesquite golfers",
      summary:
        "These are common ways Mesquite members and guests use the studio.",
      examples: [
        {
          title: "Weekend practice before a local round",
          description:
            "Use a Saturday morning bay to dial in distances and leave for your afternoon tee time with clearer numbers.",
        },
        {
          title: "Heat-day indoor session",
          description:
            "Replace a scorching outdoor range visit with a booked indoor block and Trackman feedback.",
        },
        {
          title: "Private group play",
          description:
            "Reserve one bay for friends or family from Mesquite and play a full simulator round in a focused setting.",
        },
      ],
    },
    faqs: [
      {
        id: "mesquite-drive",
        question: "How long does it take to get to Launch Labs from Mesquite?",
        answer:
          "Most Mesquite golfers should plan roughly 15–22 minutes to 565 W Oates Rd #100 in Garland, depending on traffic and starting location.",
      },
      {
        id: "mesquite-membership",
        question: "Do Mesquite golfers need a membership?",
        answer:
          "Not necessarily. Founding memberships are best for repeat practice, and hourly booking will also be available after opening.",
      },
      {
        id: "mesquite-technology",
        question: "What simulator technology does Launch Labs use?",
        answer:
          "Every bay uses Trackman iO. See the Technology page for details on the data available during your session.",
      },
      {
        id: "mesquite-contact",
        question: "Who should Mesquite golfers contact with questions?",
        answer: `Email ${siteConfig.email} or call ${siteConfig.phone}. Launch Labs is at 565 W Oates Rd #100, Garland, TX 75043.`,
      },
    ],
  },
} as const satisfies Record<string, ServiceAreaPageContent>;

export type ServiceAreaPageKey = keyof typeof serviceAreaPages;

import React from 'react';
import SectionCard from '../components/SectionCard';
import FeedbackForm from '../components/FeedbackForm';

/**
 * FeedbackPage Component - User Feedback with Educational Content
 *
 * Contains extensive content about feedback systems, user experience,
 * and the importance of user input in product development.
 */
function FeedbackPage() {
  const contentSections = [
    {
      title: 'The Importance of User Feedback in Digital Products',
      content: `
        User feedback represents one of the most valuable resources in product development.
        It provides direct insight into how real people experience your product, revealing
        pain points, delights, and opportunities that internal teams might miss. For
        educational platforms especially, feedback helps ensure that content resonates
        with learners and that interfaces support rather than hinder the learning process.

        Feedback serves multiple purposes throughout a product's lifecycle. During initial
        development, user testing and early feedback shape core features and interaction
        patterns. After launch, ongoing feedback identifies bugs, suggests improvements,
        and reveals how users actually employ the product versus how designers expected
        them to use it. For mature products, feedback guides prioritization of new features
        and refinements.

        Qualitative feedback—written comments, interview transcripts, open-ended survey
        responses—provides rich, nuanced understanding of user experiences. Users describe
        their frustrations in their own words, share workarounds they've discovered, and
        articulate needs they didn't know could be addressed. This qualitative data
        complements quantitative metrics like completion rates and time-on-task.

        Quantitative feedback—ratings, scaled responses, usage analytics—enables statistical
        analysis and trend tracking. When 80% of users rate a feature as "very useful,"
        that signals something worth preserving and perhaps expanding. When satisfaction
        scores drop after a redesign, that flags a problem requiring investigation.

        The feedback form in this application collects both types of data. Scaled ratings
        (usefulness, overall rating) provide quantifiable metrics. The comments field
        invites qualitative insights. Together, they paint a comprehensive picture of
        user experience.
      `
    },
    {
      title: 'Designing Effective Feedback Forms',
      content: `
        Creating feedback forms that users actually complete requires thoughtful design.
        Every question should serve a clear purpose, and the burden on users should be
        minimized while maximizing insight quality.

        Question ordering matters. Start with easy, non-threatening questions that build
        momentum. Asking for an overall rating first is effective—it's simple and makes
        users feel their opinion is valued. Progress to more specific questions, then
        conclude with open-ended items that require more thought and typing.

        Question wording influences response quality. Leading questions ("How much did
        you love our amazing feature?") bias responses. Double-barreled questions
        ("How satisfied were you with the speed and accuracy?") confuse respondents
        who might feel differently about each aspect. Clear, neutral, specific questions
        yield reliable data.

        Response scale design affects data quality. Five to seven point scales typically
        provide enough granularity without overwhelming respondents. Labeling all points
        (not just endpoints) improves consistency—different users might interpret
        unlabeled middle points differently. Including a "not applicable" or "no opinion"
        option prevents forced choices that generate meaningless data.

        Open-ended questions should be optional and genuinely invited. A comments field
        that feels obligatory ("Please share any additional thoughts") may produce
        perfunctory responses. Framing that emphasizes genuine interest ("We'd love to
        hear anything else on your mind—suggestions, concerns, or things we're doing
        well") encourages authentic feedback.

        Form length directly impacts completion rates. Each additional question increases
        abandonment risk. Be ruthless about eliminating nice-to-know questions. If a
        piece of information won't directly inform decisions, don't ask for it.
      `
    },
    {
      title: 'Understanding Feedback Metrics',
      content: `
        Feedback data becomes actionable when transformed into metrics that track trends
        and enable comparisons. Several standard metrics have emerged in user experience
        practice.

        Net Promoter Score (NPS) asks one simple question: "How likely are you to
        recommend this product to a friend or colleague?" Responses on a 0-10 scale
        categorize users as Detractors (0-6), Passives (7-8), or Promoters (9-10).
        The NPS is calculated as % Promoters minus % Detractors. Despite its simplicity,
        NPS correlates with business growth and provides an easy-to-track trend line.

        Customer Satisfaction (CSAT) typically asks users to rate their satisfaction
        with a product, feature, or interaction on a 1-5 or 1-7 scale. Average scores
        provide a snapshot of overall satisfaction. Tracking CSAT over time reveals
        whether changes improve or worsen user sentiment.

        System Usability Scale (SUS) offers a standardized ten-question questionnaire
        producing a score from 0-100. While too long for casual feedback collection,
        SUS enables benchmarking against industry databases and provides reliable
        usability assessment.

        Task success rates and time-on-task, while not explicitly feedback, complement
        self-reported data. Users might report high satisfaction while struggling to
        complete basic tasks—a disconnect worth investigating.

        This application's feedback form collects data that could feed into these
        metrics. The overall rating maps to CSAT. The recommendation question provides
        NPS data. The usefulness rating tracks feature-specific satisfaction. Over
        time, aggregating these responses would reveal trends and priorities.
      `
    },
    {
      title: 'Acting on Feedback: From Data to Improvement',
      content: `
        Collecting feedback is only the first step. The real value emerges when feedback
        informs decisions and drives improvements. Organizations that excel at feedback
        loops—collecting, analyzing, acting, and communicating—build products that
        continuously improve and users who feel heard and valued.

        Analysis begins with aggregation. Individual responses matter less than patterns
        across many responses. A single complaint might reflect an outlier; fifty similar
        complaints indicate a systemic problem. Quantitative analysis calculates averages,
        distributions, and correlations. Qualitative analysis identifies themes and
        categories through coding and grouping similar comments.

        Prioritization frameworks help decide which feedback to act on first. Impact
        versus effort matrices plot potential improvements by their expected benefit
        and implementation cost. High-impact, low-effort items ("quick wins") deserve
        immediate attention. High-impact, high-effort items become strategic projects.
        Low-impact items, regardless of effort, typically don't warrant action.

        Some feedback requires no action. Requests for features that conflict with
        product vision, suggestions that would harm other users, or complaints about
        intentional design choices should be acknowledged but not implemented. The
        response should explain the reasoning, helping users understand the product's
        direction.

        Closing the loop with users who provided feedback builds trust and encourages
        future participation. When users see their suggestions implemented, they feel
        ownership and become product advocates. Even when feedback can't be acted upon,
        acknowledging and explaining demonstrates respect for users' contributions.
      `
    },
    {
      title: 'The Psychology of Feedback Giving',
      content: `
        Understanding why users do or don't provide feedback helps design better
        feedback systems. Most users don't complete feedback forms—not because they
        lack opinions, but because of psychological and practical barriers.

        Time pressure is the most obvious barrier. Users are focused on their primary
        task (learning about plants, in this case). Feedback is a secondary task that
        interrupts their flow. Minimizing friction—short forms, simple interfaces,
        optional fields—reduces this barrier.

        Perceived impact matters. Users who believe their feedback will be ignored
        won't bother providing it. Signals that feedback is genuinely valued—thoughtful
        form design, follow-up communications, visible changes based on user
        suggestions—increase participation.

        Emotional state influences feedback likelihood. Users who just completed a
        satisfying experience are more likely to provide positive feedback. Those
        who encountered frustration might provide negative feedback or might simply
        leave. Timing feedback requests after positive moments (quiz completion,
        learning milestone) can increase participation.

        Social dynamics play roles. Some users provide feedback to help the community
        ("If I report this bug, others won't experience it"). Others want to express
        appreciation for helpful products. Understanding these motivations enables
        messaging that resonates ("Help us improve for other learners" versus
        "Tell us what you think").

        The feedback form in this application incorporates these insights. It's
        positioned after users have engaged with content (when they have formed
        opinions). It explains why feedback matters. It respects users' time with
        a concise form. And it thanks users sincerely for their contributions.
      `
    },
    {
      title: 'Technical Implementation of the Feedback Form',
      content: `
        This feedback form demonstrates several React concepts working together to
        create a polished user experience.

        State management uses useState for form fields and submission status. The
        formData object contains properties for each field, updated through a
        generic handleChange handler that uses computed property names. This pattern
        scales well for forms of any size.

        The useEffect hook loads cached submission status on mount, preventing users
        from submitting multiple times accidentally. It also tracks submission count,
        displaying this to returning users as a engagement signal.

        Conditional rendering switches between the form and success message based
        on submission state. This provides immediate, clear feedback that submission
        succeeded. The success message includes a timeout auto-reset, demonstrating
        how setTimeout integrates with React state.

        Caching integrates with localStorage through the cache utility module.
        Submission status persists for a year, while the submission count enables
        the "Submission #X" display. This persistence creates a more personalized
        experience without requiring user accounts.

        The range slider for usefulness demonstrates handling non-text inputs. The
        onChange handler parses the value as an integer, and the display updates
        dynamically to show the current selection. This immediate feedback helps
        users understand their choice.

        The features checkbox group shows array state management. Checking a box
        adds the value to the array; unchecking filters it out. This pattern applies
        to any multi-select scenario.
      `
    },
    {
      title: 'Privacy and Ethics in Feedback Collection',
      content: `
        Feedback collection carries ethical responsibilities. Users share opinions
        and sometimes personal information with the expectation that it will be
        handled responsibly.

        Transparency about data use builds trust. Explain what feedback will be used
        for, who will see it, and how long it will be retained. The privacy notice
        at the bottom of this form models this transparency, assuring users that
        emails are only used for follow-up if needed and never shared with third
        parties.

        Anonymity options encourage honest feedback. Some users hesitate to criticize
        if their identity is attached. Offering anonymous submission (not implemented
        here, but common in professional tools) can increase candor.

        Data minimization applies to feedback forms as much as registration. Only
        collect information you need. Email addresses enable follow-up but aren't
        always necessary. Names personalize responses but create privacy obligations.
        Each field should justify its existence.

        Secure storage protects feedback data from breaches. While this demonstration
        logs feedback to the console, production systems must encrypt feedback data,
        restrict access to authorized personnel, and implement retention policies
        that delete data when no longer needed.

        Respect for users extends beyond legal compliance. Even when not required
        by regulation, treating feedback data with care honors the trust users
        place in you when they share their thoughts.
      `
    }
  ];

  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(90deg, #e65100, #ff9800)' }}>
        <h1>Feedback Form</h1>
        <p>Your input helps us create better learning experiences</p>
      </div>

      <div className="container">
        {/* Feedback Form */}
        <SectionCard title="" accentColor="#f57c00">
          <FeedbackForm />
        </SectionCard>

        {/* Educational Content */}
        {contentSections.map((section, index) => (
          <SectionCard key={index} title={section.title} accentColor="#f57c00">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} style={{ marginBottom: '15px' }}>
                {paragraph.trim()}
              </p>
            ))}
          </SectionCard>
        ))}

        {/* Summary */}
        <SectionCard title="Summary: The Value of Your Feedback" accentColor="#f57c00">
          <p>
            Feedback forms like this one serve as bridges between users and developers.
            They provide structured channels for communicating experiences, suggestions,
            and concerns. For learners using this platform, feedback shapes future
            improvements that will benefit both current and future users.
          </p>
          <p>
            From a technical perspective, this form demonstrates how React handles
            user input, manages state, implements caching, and provides interactive
            feedback. These patterns form the foundation for any application that
            values user input and continuous improvement.
          </p>
          <p>
            Whether you're providing feedback on this platform or building feedback
            systems for your own projects, remember that the goal is genuine dialogue.
            Feedback isn't just data collection—it's conversation, and conversations
            build relationships between creators and users.
          </p>
        </SectionCard>
      </div>
    </>
  );
}

export default FeedbackPage;

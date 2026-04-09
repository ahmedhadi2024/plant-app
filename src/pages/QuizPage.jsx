import React from 'react';
import SectionCard from '../components/SectionCard';
import Quiz from '../components/Quiz';

/**
 * QuizPage Component - Assessment Page with Educational Content
 *
 * Contains content about assessment methodology, learning science,
 * and the pedagogical value of quizzes.
 */
function QuizPage() {
  const contentSections = [
    {
      title: 'The Science of Assessment and Learning',
      content: `
        Assessment plays a crucial role in the learning process, serving multiple functions
        for both learners and educators. For learners, quizzes and tests provide opportunities
        to retrieve information from memory, strengthening neural pathways and improving long-term
        retention. This phenomenon, known as the "testing effect" or "retrieval practice," has
        been extensively documented in cognitive psychology research.

        The act of retrieving information from memory—rather than simply re-reading material—
        creates stronger, more durable memories. Each time you answer a quiz question correctly,
        you're not just demonstrating knowledge; you're actively building it. Incorrect answers
        also serve a valuable function, highlighting gaps in understanding that require attention.

        For educators (and for self-directed learners), assessments provide diagnostic information.
        Quiz results reveal which concepts have been mastered and which require additional study.
        This feedback enables targeted learning, focusing effort where it will be most productive.

        The quiz in this application implements several evidence-based assessment principles.
        Immediate feedback—showing correct answers and explanations right after submission—
        maximizes learning by correcting misconceptions before they solidify. Detailed
        explanations for each answer transform the quiz from a mere evaluation tool into a
        learning opportunity.
      `
    },
    {
      title: 'Understanding the Quiz Format',
      content: `
        Multiple-choice questions (MCQs) offer several advantages for assessment. They can be
        scored objectively and quickly, allowing for immediate feedback. Well-designed MCQs
        can test various cognitive levels, from simple recall to application and analysis.
        The format also enables coverage of broad content areas in a reasonable time frame.

        Each question in this quiz follows a deliberate structure. The stem (question text)
        presents a clear problem or query. The options include one correct answer and
        plausible distractors—incorrect options that reflect common misconceptions or
        partial understanding. This design reveals not just whether you know the answer,
        but what specific misunderstanding might exist if you choose incorrectly.

        The explanation provided for each question serves multiple purposes. For those who
        answered correctly, it reinforces understanding and provides additional context.
        For those who answered incorrectly, it offers a mini-lesson, correcting the
        misconception and explaining why the correct answer is right.

        Research on feedback timing suggests that immediate feedback (provided right after
        answering) is more effective than delayed feedback for learning. The quiz's design
        reflects this finding, showing explanations immediately upon submission rather than
        waiting for a separate review session.
      `
    },
    {
      title: 'How to Use This Quiz Effectively',
      content: `
        To maximize learning from this quiz, follow these evidence-based strategies:

        First, attempt all questions before looking at results. The struggle of retrieval—
        even if you're uncertain—is where learning happens. Resist the temptation to peek
        at answers or look up information mid-quiz. Complete the assessment under conditions
        that approximate testing.

        Second, pay close attention to explanations for questions you missed. Don't just
        note the correct answer; read the full explanation to understand why it's correct
        and why your answer was wrong. This metacognitive reflection—thinking about your
        thinking—strengthens understanding.

        Third, use the quiz multiple times. Spaced repetition—reviewing material across
        multiple sessions separated by time—is one of the most robust findings in learning
        science. Take the quiz, study the explanations, then retake it after a day or two.
        The cache feature enables this by preserving your previous results for comparison.

        Fourth, don't be discouraged by incorrect answers. Errors are not failures; they're
        information. Each wrong answer identifies a specific gap in your knowledge, giving
        you a clear target for study. Embrace mistakes as learning opportunities.

        Finally, try explaining concepts to others (or even to yourself) after reviewing
        explanations. The "protégé effect"—learning by teaching—deepens understanding and
        reveals any remaining confusion. After completing this quiz, try explaining plant
        classification to a friend or family member.
      `
    },
    {
      title: 'The Technology Behind the Quiz',
      content: `
        This quiz component demonstrates advanced React patterns for interactive assessment.
        State management tracks user answers in an object where keys are question IDs and
        values are selected options. This structure enables O(1) lookup time when checking
        answers and calculating scores.

        The scoring algorithm iterates through questions once, comparing user answers to
        correct answers and accumulating a score. It simultaneously builds a detailed
        results object containing not just the score but also which questions were answered
        correctly, enabling the per-question feedback display.

        Conditional rendering controls the quiz's two modes: question mode (showing questions
        and radio buttons) and results mode (showing score, grade, and explanations). The
        transition between modes is instant because both states exist in the component
        simultaneously; React simply renders different portions based on the submission state.

        The visual feedback system uses dynamic styling based on answer status. Correct
        answers receive green highlighting, incorrect answers receive red, and the correct
        answer is always shown even if the user selected differently. This design ensures
        users always see the right answer, regardless of their selection.

        Caching integration preserves quiz results across page refreshes, enabling users to
        review their performance later or compare multiple attempts. The cache stores not
        just the score but the complete answer history, allowing reconstruction of the full
        results view on subsequent visits.
      `
    },
    {
      title: 'Interpreting Your Results',
      content: `
        The quiz scoring system provides both quantitative and qualitative feedback:

        Score (X/15): The raw number of correct answers. This provides a straightforward
        measure of current knowledge but doesn't capture which concepts you understand.

        Percentage: The score expressed as a percentage of total questions. This normalized
        metric enables comparison across different assessments and tracking improvement over
        time.

        Grade: A qualitative label (Excellent, Good, Average, Needs Improvement) that
        contextualizes the numerical score. These categories are based on educational
        standards: 85%+ for Excellent, 60-84% for Good, 33-59% for Average, and below
        33% indicating need for additional study.

        Color coding: Visual feedback through color (green for excellent, yellow for good,
        orange for average, red for needs improvement) provides instant recognition of
        performance level without requiring interpretation of numbers.

        Per-question feedback: The most valuable feedback occurs at the question level.
        Seeing which specific questions you missed—and reading the explanations—provides
        actionable information for targeted study.

        Remember that a single quiz score is a snapshot, not a verdict. Your knowledge
        can grow with study and practice. Use your results as a starting point, not a
        final destination.
      `
    }
  ];

  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(90deg, #c2185b, #e91e63)' }}>
        <h1>Plant Classification Assessment</h1>
        <p>Test your knowledge and receive immediate feedback</p>
      </div>

      <div className="container">
        {/* Quiz Component */}
        <SectionCard title="" accentColor="#d81b60">
          <Quiz />
        </SectionCard>

        {/* Educational Content */}
        {contentSections.map((section, index) => (
          <SectionCard key={index} title={section.title} accentColor="#d81b60">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} style={{ marginBottom: '15px' }}>
                {paragraph.trim()}
              </p>
            ))}
          </SectionCard>
        ))}

        {/* Summary */}
        <SectionCard title="Summary: Assessment as Learning" accentColor="#d81b60">
          <p>
            This quiz embodies the principle that assessment and learning are not separate
            activities but intertwined processes. By engaging with the questions, receiving
            immediate feedback, and reviewing explanations, you're not just demonstrating
            what you know—you're building new knowledge.
          </p>
          <p>
            The technology implementation demonstrates React's capabilities for creating
            interactive, stateful user experiences. From answer tracking to score calculation
            to visual feedback, every feature serves both pedagogical and technical learning
            objectives.
          </p>
          <p>
            Whether you're studying botany, learning React, or both simultaneously, this
            quiz provides a practical application of assessment principles. Use it repeatedly,
            learn from each attempt, and watch your understanding grow.
          </p>
        </SectionCard>
      </div>
    </>
  );
}

export default QuizPage;

import React, { useState, useEffect } from 'react';
import { setCache, getCache, CACHE_KEYS } from '../utils/cache';

/**
 * Quiz Component - Plant Classification Assessment
 *
 * JavaScript/React Concepts Demonstrated:
 * - useState: Managing quiz state (answers, submitted state, score)
 * - useEffect: Loading cached results on mount
 * - map(): Rendering questions and options from arrays
 * - Conditional Rendering: Showing results only after submission
 * - Event Handlers: onChange for radio buttons, onClick for submit
 * - Template Literals: String interpolation for feedback messages
 * - Object destructuring: Extracting properties from question objects
 * - Array methods: forEach for score calculation, map for rendering
 * - Ternary operators: Inline conditionals for styling
 *
 * @component
 */
function Quiz() {
  // Comprehensive quiz questions with detailed explanations
  const questions = [
    {
      id: 1,
      text: 'Which plant type has soft green stems?',
      options: { a: 'Tree', b: 'Herb', c: 'Shrub' },
      correct: 'b',
      explanation: 'Herbs have soft, tender green stems that lack woody tissue. This is their defining characteristic that distinguishes them from trees and shrubs which have hard, woody stems.'
    },
    {
      id: 2,
      text: 'Shrubs are usually:',
      options: { a: 'Medium woody plants', b: 'Non-woody', c: 'Aquatic plants' },
      correct: 'a',
      explanation: 'Shrubs are medium-sized woody plants with multiple stems arising from the base. They are larger than herbs but smaller than trees, typically ranging from 1 to 6 meters in height.'
    },
    {
      id: 3,
      text: 'Trees have:',
      options: { a: 'Weak stems', b: 'Single trunk', c: 'No roots' },
      correct: 'b',
      explanation: 'Trees are characterized by a single, thick woody trunk that supports branches and leaves. This single trunk distinguishes them from shrubs which have multiple stems.'
    },
    {
      id: 4,
      text: 'Climbers require:',
      options: { a: 'Extra water', b: 'Support structure', c: 'Sand soil' },
      correct: 'b',
      explanation: 'Climbers have weak stems that cannot support their own weight vertically. They require external support structures like trellises, walls, or other plants to grow upward.'
    },
    {
      id: 5,
      text: 'Creepers grow:',
      options: { a: 'Vertically', b: 'Underground', c: 'Along the ground' },
      correct: 'c',
      explanation: 'Creepers are plants that spread horizontally along the ground surface. They produce roots at nodes where they touch the soil, allowing them to cover large areas.'
    },
    {
      id: 6,
      text: 'Mint is an example of:',
      options: { a: 'Herb', b: 'Tree', c: 'Shrub' },
      correct: 'a',
      explanation: 'Mint is a classic example of an herb. It has a soft green stem, short life cycle, and is widely used for culinary and medicinal purposes.'
    },
    {
      id: 7,
      text: 'Rose plant is a:',
      options: { a: 'Creeper', b: 'Shrub', c: 'Herb' },
      correct: 'b',
      explanation: 'Rose is a shrub with multiple woody stems arising from the base. It has a bushy growth habit and can live for many years with proper care.'
    },
    {
      id: 8,
      text: 'Banyan is a:',
      options: { a: 'Tree', b: 'Herb', c: 'Shrub' },
      correct: 'a',
      explanation: 'Banyan is a large tree known for its aerial prop roots. It can grow to enormous sizes and is one of the longest-living tree species.'
    },
    {
      id: 9,
      text: 'Grapevine is a:',
      options: { a: 'Climber', b: 'Tree', c: 'Creeper' },
      correct: 'a',
      explanation: 'Grapevine is a climbing plant that uses tendrils to attach to supports. It requires trellises or other structures for optimal growth and fruit production.'
    },
    {
      id: 10,
      text: 'Pumpkin plant is a:',
      options: { a: 'Tree', b: 'Creeper', c: 'Shrub' },
      correct: 'b',
      explanation: 'Pumpkin plants are creepers that spread along the ground. They produce long vines that can cover several square meters of ground space.'
    },
    {
      id: 11,
      text: 'Trees perform:',
      options: { a: 'Respiration only', b: 'Photosynthesis', c: 'None' },
      correct: 'b',
      explanation: 'Trees perform photosynthesis in their leaves, converting sunlight, carbon dioxide, and water into glucose and oxygen. They also perform respiration like all living organisms.'
    },
    {
      id: 12,
      text: 'Herbs usually have:',
      options: { a: 'Thick trunks', b: 'Soft stems', c: 'No leaves' },
      correct: 'b',
      explanation: 'Herbs are characterized by their soft, non-woody stems. These stems are typically green and can perform photosynthesis in addition to the leaves.'
    },
    {
      id: 13,
      text: 'Secondary growth is common in:',
      options: { a: 'Trees', b: 'Herbs', c: 'Creepers' },
      correct: 'a',
      explanation: 'Secondary growth (increase in thickness) occurs in trees due to the activity of vascular cambium. This produces wood and bark, allowing trees to grow taller and stronger.'
    },
    {
      id: 14,
      text: 'Climbers often use:',
      options: { a: 'Tendrils', b: 'Thick trunk', c: 'Underground stem' },
      correct: 'a',
      explanation: 'Climbers use specialized structures like tendrils, twining stems, or aerial roots to attach themselves to supports. Tendrils are thin, coiling structures that grasp onto objects.'
    },
    {
      id: 15,
      text: 'Creepers help prevent:',
      options: { a: 'Soil erosion', b: 'Sunlight', c: 'Oxygen' },
      correct: 'a',
      explanation: 'Creepers help prevent soil erosion by covering the ground surface with their spreading stems and leaves. Their roots at nodes also help bind the soil together.'
    }
  ];

  // State management using useState hook
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Load cached results on component mount using useEffect
  useEffect(() => {
    const cachedResults = getCache(CACHE_KEYS.QUIZ_RESULTS);
    if (cachedResults) {
      setResult(cachedResults.result);
      setAnswers(cachedResults.answers);
      setShowExplanation(true);
      console.log('[Quiz] Loaded cached results');
    }
  }, []);

  // Event handler: Handle answer selection
  // Uses arrow function and state updater pattern
  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  // Event handler: Calculate score and determine grade
  // Demonstrates: loops, conditionals, template literals, calculations
  const calculateScore = () => {
    let score = 0;
    const userAnswers = [];

    // Loop through questions to calculate score
    questions.forEach((q) => {
      const isCorrect = answers[q.id] === q.correct;
      if (isCorrect) {
        score++;
      }
      userAnswers.push({
        questionId: q.id,
        userAnswer: answers[q.id],
        correctAnswer: q.correct,
        isCorrect
      });
    });

    // Calculate percentage using arithmetic operations
    const percentage = ((score / questions.length) * 100).toFixed(2);

    // Conditional logic for grade determination
    let grade, color, message;
    if (score >= 13) {
      grade = 'Excellent';
      color = '#2e7d32';
      message = 'Outstanding! You have excellent knowledge of plant classification.';
    } else if (score >= 9) {
      grade = 'Good';
      color = '#1565c0';
      message = 'Good job! You have a solid understanding of plant types.';
    } else if (score >= 5) {
      grade = 'Average';
      color = '#f57c00';
      message = 'Not bad, but there\'s room for improvement. Review the material and try again!';
    } else {
      grade = 'Needs Improvement';
      color = '#c62828';
      message = 'Keep studying! Plant classification takes practice. Review the content and retry.';
    }

    const resultData = {
      score,
      percentage,
      grade,
      color,
      message,
      userAnswers,
      totalQuestions: questions.length,
      timestamp: Date.now()
    };

    // Cache the results
    setCache(CACHE_KEYS.QUIZ_RESULTS, { result: resultData, answers });
    setResult(resultData);
    setShowExplanation(true);
  };

  // Event handler: Reset quiz to try again
  const resetQuiz = () => {
    setAnswers({});
    setResult(null);
    setShowExplanation(false);
    removeCache(CACHE_KEYS.QUIZ_RESULTS);
  };

  // Helper function: Get option style based on answer status
  // Demonstrates: conditional logic, string interpolation
  const getOptionStyle = (questionId, optionKey) => {
    if (!showExplanation || !result) return {};

    const question = questions.find(q => q.id === questionId);
    const userAnswer = answers[questionId];

    // Correct answer - always show green
    if (optionKey === question.correct) {
      return { backgroundColor: '#c8e6c9', border: '2px solid #2e7d32' };
    }

    // Wrong answer selected - show red
    if (optionKey === userAnswer && userAnswer !== question.correct) {
      return { backgroundColor: '#ffcdd2', border: '2px solid #c62828' };
    }

    return {};
  };

  // Helper function: Get status icon
  const getStatusIcon = (questionId) => {
    if (!showExplanation || !result) return null;

    const userAnswer = answers[questionId];
    const question = questions.find(q => q.id === questionId);

    if (!userAnswer) {
      return <span className="status-icon missed">⊘</span>;
    }
    return userAnswer === question.correct
      ? <span className="status-icon correct">✓</span>
      : <span className="status-icon wrong">✗</span>;
  };

  return (
    <div className="quiz-container">
      <h1>Plant Classification Assessment</h1>
      <p className="quiz-instructions">
        Test your knowledge about plant classification. Select the best answer for each question.
        After submission, you'll see which answers were correct and detailed explanations.
      </p>

      <form className="quiz-form">
        {/* LISTS: Mapping over questions array to render question cards */}
        {questions.map((q, index) => (
          <div key={q.id} className="question-card">
            <div className="question-header">
              <p className="question-text">
                <span className="question-number">{index + 1}.</span>
                {q.text}
              </p>
              {getStatusIcon(q.id)}
            </div>

            {/* OPTIONS: Mapping over options object */}
            <div className="options-container">
              {Object.entries(q.options).map(([key, value]) => (
                <label
                  key={key}
                  className={`option-label ${showExplanation ? 'show-feedback' : ''}`}
                  style={getOptionStyle(q.id, key)}
                >
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value={key}
                    onChange={() => handleAnswerChange(q.id, key)}
                    checked={answers[q.id] === key}
                    disabled={showExplanation}
                  />
                  <span className="option-text">
                    <span className="option-key">{key.toUpperCase()}.</span>
                    {value}
                  </span>
                </label>
              ))}
            </div>

            {/* CONDITIONAL: Show explanation only after submission */}
            {showExplanation && (
              <div className="explanation-box">
                <strong>Explanation:</strong>
                <p>{q.explanation}</p>
                <p className="your-answer">
                  Your answer: <strong>{answers[q.id] ? q.options[answers[q.id]] : 'Not answered'}</strong>
                </p>
              </div>
            )}
          </div>
        ))}
      </form>

      {/* CONDITIONAL: Show action buttons based on submission state */}
      {!result ? (
        <button onClick={calculateScore} className="primary-btn submit-btn">
          Submit Assessment
        </button>
      ) : (
        <div className="results-section">
          <div className="result-card" style={{ backgroundColor: result.color }}>
            <h2>Assessment Results</h2>
            <div className="score-display">
              <div className="score-circle">
                <span className="score-number">{result.score}</span>
                <span className="score-total">/ {result.totalQuestions}</span>
              </div>
              <div className="score-details">
                <p>Percentage: <strong>{result.percentage}%</strong></p>
                <p>Grade: <strong>{result.grade}</strong></p>
              </div>
            </div>
            <p className="result-message">{result.message}</p>
          </div>

          <button onClick={resetQuiz} className="primary-btn reset-btn">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;

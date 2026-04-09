import React from 'react';
import SectionCard from '../components/SectionCard';
import RegistrationForm from '../components/RegistrationForm';

/**
 * RegisterPage Component - User Registration with Extensive Content
 *
 * Contains educational content about user registration, data privacy,
 * and the technical aspects of form handling in React.
 */
function RegisterPage() {
  const contentSections = [
    {
      title: 'Understanding User Registration Systems',
      content: `
        User registration represents a fundamental interaction pattern in modern web
        applications. It serves as the gateway between anonymous visitors and recognized
        users, enabling personalized experiences, data persistence, and secure access to
        features. While this educational demonstration does not implement full backend
        authentication, it showcases the frontend principles that underlie professional
        registration systems.

        Registration systems collect user information for various purposes. Account
        creation enables users to save progress, access personalized content, and
        maintain preferences across sessions. Educational platforms track learning
        progress, quiz scores, and completed modules. E-commerce sites store shipping
        addresses and order history. Social platforms build user profiles and connection
        networks.

        The registration process typically involves several steps. First, users provide
        basic identifying information—name, email, and a password. Additional optional
        fields might include demographic data, preferences, or profile details. The
        system then validates this information, checking for completeness, accuracy,
        and uniqueness. Finally, upon successful validation, the system creates the
        user account and provides confirmation.

        Modern registration systems balance information collection with user convenience.
        Every additional field increases friction, potentially causing users to abandon
        the process. However, collecting too little information limits personalization
        and security. The optimal balance depends on the application's purpose and
        audience expectations.
      `
    },
    {
      title: 'Form Validation: Ensuring Data Quality',
      content: `
        Form validation protects data integrity and user experience. Without validation,
        users might submit incomplete, incorrect, or malicious data that corrupts
        databases, breaks functionality, or creates security vulnerabilities. Proper
        validation catches errors early, providing immediate feedback that helps users
        correct mistakes.

        Client-side validation—validation performed in the browser before submission—
        offers immediate feedback. When a user enters an invalid email format, the
        form can indicate the error instantly rather than waiting for server response.
        This responsiveness improves user experience and reduces server load by
        preventing obviously invalid submissions.

        However, client-side validation alone provides false security. Malicious users
        can bypass browser validation entirely, submitting arbitrary data directly to
        servers. Professional applications always implement server-side validation as
        the authoritative check, treating client validation as a user experience
        enhancement rather than a security measure.

        Common validation types include format checks (email patterns, phone number
        formats), range checks (age minimums, password length), uniqueness checks
        (email already registered), and consistency checks (password confirmation
        matches). Each validation type addresses specific data quality concerns.

        Error messaging significantly impacts user experience. Effective error messages
        are specific ("Password must be at least 8 characters" rather than "Invalid
        password"), actionable (explaining how to fix the problem), and politely
        worded. Positioning errors near the relevant field helps users connect the
        message to the required action.
      `
    },
    {
      title: 'Controlled Components in React Forms',
      content: `
        React's approach to form handling differs fundamentally from traditional HTML
        forms. In standard HTML, form inputs maintain their own state. When a user
        types into a text field, the DOM updates automatically. JavaScript reads the
        current value only when needed—typically at submission time.

        React introduces controlled components, where form data flows through React
        state rather than residing in the DOM. Each input's value prop binds to a
        state variable, and each change triggers an onChange handler that updates
        state. This pattern makes React the "single source of truth" for form data.

        Controlled components offer several advantages. State updates trigger
        re-renders, enabling dynamic UI responses to user input—showing character
        counts, enabling submit buttons only when forms are valid, or providing
        real-time validation feedback. Centralizing form data in state simplifies
        complex forms where multiple fields interact or where values depend on each
        other.

        The implementation pattern follows a consistent structure. First, useState
        initializes state, often as an object with properties for each field. Change
        handlers extract the input's value and update state using the spread operator
        to preserve other fields. The input's value prop reads from state, completing
        the control loop.

        For large forms, managing many fields can become verbose. Patterns like
        computed property names ([e.target.id]: e.target.value) reduce repetition.
        Custom hooks can encapsulate common form logic. Form libraries like Formik
        and React Hook Form provide higher-level abstractions for complex forms.
      `
    },
    {
      title: 'Data Privacy and Security Considerations',
      content: `
        User registration inevitably involves personal data, raising important privacy
        and security considerations. Even educational demonstrations should model
        responsible data handling practices, instilling good habits in developers
        and reassuring users.

        Password security deserves special attention. Passwords should never display
        visibly—use type="password" to mask input. Never store passwords in plain
        text; production systems hash passwords using algorithms like bcrypt before
        database storage. Password requirements (minimum length, character variety)
        protect users from weak passwords vulnerable to guessing attacks.

        Data minimization—collecting only necessary information—reduces privacy risks
        and storage obligations. Every data field collected requires protection,
        creates potential liability in breaches, and may fall under regulations like
        GDPR or CCPA. Question whether each field truly serves a specific purpose
        before including it.

        Transparent communication builds user trust. Privacy policies explain what
        data is collected, how it will be used, who might access it, and how long it
        will be retained. Consent mechanisms—checkboxes for terms acceptance, opt-in
        for optional communications—respect user autonomy and comply with regulations.

        This demonstration implements local caching for user convenience, preserving
        form data across page reloads. While this feature improves experience, it also
        illustrates a security consideration: cached data persists on the device.
        Sensitive information like passwords should never cache on shared devices.
        Production systems must balance convenience against privacy risks.
      `
    },
    {
      title: 'Accessibility in Form Design',
      content: `
        Accessible forms ensure all users, including those with disabilities, can
        complete registration successfully. Accessibility benefits not only users
        with permanent disabilities but also those with temporary limitations
        (broken arm) or situational constraints (bright sunlight making screens
        hard to read).

        Semantic HTML provides the foundation for form accessibility. Label elements
        explicitly associated with inputs (via matching htmlFor and id attributes)
        enable screen readers to announce field purposes. Fieldset and legend elements
        group related fields, providing context for users navigating by keyboard or
        screen reader.

        Keyboard navigation must work flawlessly. All interactive elements—inputs,
        buttons, custom controls—must be reachable and operable via keyboard alone.
        Tab order should follow visual layout logically, typically left-to-right,
        top-to-bottom. Focus indicators must be visible, helping keyboard users
        understand which element is active.

        Error handling particularly impacts accessibility. Screen reader users need
        errors announced without requiring visual scanning. ARIA live regions can
        announce validation messages dynamically. Error summaries at the form top
        provide overview, while field-specific messages guide correction.

        Color alone should not convey information, as colorblind users may miss
        color-coded cues. Pairing color with icons or text ("Error:" prefix, checkmark
        icons for valid fields) ensures information reaches all users. Sufficient
        color contrast—dark text on light backgrounds—enables users with low vision
        to read content comfortably.
      `
    },
    {
      title: 'The Technology Behind the Registration Form',
      content: `
        This registration form demonstrates numerous React concepts working together.
        The useState hook manages form state, with a single state object containing
        properties for each field. This pattern scales well for forms with many inputs.

        Event handlers process user interactions. The handleChange function uses
        computed property names to update whichever field changed, identified by
        its id. Specialized handlers manage radio buttons, checkboxes, and range
        sliders, each requiring slightly different state update logic.

        Validation functions encapsulate business logic for each field type. The
        name validator checks length and character composition. The email validator
        applies a regular expression pattern. The password validator enforces
        complexity requirements. Separating validation logic into pure functions
        makes code more testable and maintainable.

        The useEffect hook implements automatic caching, saving form data to
        localStorage whenever it changes. This feature demonstrates React's
        lifecycle management—the effect runs after each render where dependencies
        (form data) have changed. A similar effect loads cached data on mount,
        restoring user progress.

        Conditional rendering displays validation errors only when relevant. The
        shouldShowError function checks both whether an error exists and whether
        the field has been touched (user has interacted with it). This prevents
        showing errors before users have a chance to enter valid data.

        The success state demonstrates form completion handling. Upon successful
        validation, the form generates a unique user ID using Date.now() and
        Math.random(), displays a confirmation message, and clears sensitive fields
        while preserving others for convenience.
      `
    },
    {
      title: 'Best Practices for Registration Forms',
      content: `
        Years of user experience research have identified best practices for
        registration forms that balance completion rates with data quality.

        Keep forms short. Every additional field reduces completion rates. Ask
        only for information you truly need immediately. Additional details can
        be collected later through progressive profiling as users engage with
        your platform.

        Use appropriate input types. Email inputs trigger email keyboards on
        mobile devices. Number inputs for numeric fields prevent accidental text
        entry. Date pickers standardize date formats and reduce errors. These
        small optimizations accumulate into noticeably better experiences.

        Enable autocomplete. Standard field names (email, name, password) allow
        browsers to autofill saved information, dramatically speeding completion.
        The autocomplete attribute provides hints to browsers about field purposes.

        Provide clear feedback. Show password strength indicators. Confirm email
        format validity in real-time. Display character counts for fields with
        limits. This feedback prevents submission surprises and helps users
        complete forms correctly the first time.

        Make errors constructive. Never blame users ("You entered an invalid
        email"). Instead, frame errors as opportunities ("Please enter a valid
        email address so we can contact you"). Explain what went wrong and how
        to fix it.

        This registration form incorporates these best practices while demonstrating
        React development patterns. Study the code to understand how each feature
        is implemented, then adapt these patterns to your own projects.
      `
    }
  ];

  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(90deg, #6a1b9a, #9c27b0)' }}>
        <h1>User Registration</h1>
        <p>Create your account to access premium features and track your progress</p>
      </div>

      <div className="container">
        {/* Registration Form */}
        <SectionCard title="" accentColor="#7b1fa2">
          <RegistrationForm />
        </SectionCard>

        {/* Educational Content */}
        {contentSections.map((section, index) => (
          <SectionCard key={index} title={section.title} accentColor="#7b1fa2">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} style={{ marginBottom: '15px' }}>
                {paragraph.trim()}
              </p>
            ))}
          </SectionCard>
        ))}

        {/* Summary */}
        <SectionCard title="Summary: Registration as a Learning Opportunity" accentColor="#7b1fa2">
          <p>
            The registration form in this application serves dual purposes. First, it
            provides a realistic example of a common web interaction pattern, demonstrating
            how professional registration systems collect and validate user information.
            Second, it showcases React's capabilities for building interactive, accessible,
            and user-friendly forms.
          </p>
          <p>
            By studying this form's implementation, you can understand controlled
            components, state management, validation patterns, accessibility considerations,
            and user experience best practices. These concepts transfer directly to any
            React project requiring form functionality.
          </p>
          <p>
            Whether you implement a simple contact form or a complex multi-step registration
            flow, the patterns demonstrated here provide a solid foundation. Adapt them to
            your specific requirements, always prioritizing user experience and data security.
          </p>
        </SectionCard>
      </div>
    </>
  );
}

export default RegisterPage;

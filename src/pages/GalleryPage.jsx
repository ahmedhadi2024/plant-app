import React from 'react';
import SectionCard from '../components/SectionCard';
import PlantGallery from '../components/PlantGallery';

/**
 * GalleryPage Component - Visual Plant Documentation
 *
 * Contains extensive educational content about visual plant documentation,
 * botanical photography, and the importance of visual learning.
 *
 * JavaScript Concepts Used:
 * - JSX for component structure
 * - Component composition
 * - Array methods for content rendering
 */
function GalleryPage() {
  const contentSections = [
    {
      title: 'The Power of Visual Documentation in Botany',
      content: `
        Visual documentation stands as one of the most critical tools in botanical science
        and education. Since the earliest days of plant study, illustrations and photographs
        have enabled scientists to record, share, and analyze plant characteristics across
        time and space. Before photography, botanical illustrators spent countless hours
        creating detailed drawings that captured every leaf vein, petal shape, and stem
        texture. These illustrations remain valuable today, but photography has revolutionized
        how we document and study plants.

        Modern botanical photography serves multiple purposes. Scientific documentation
        requires accurate, detailed images that capture diagnostic features—characteristics
        that distinguish one species from another. These might include leaf arrangement,
        flower structure, fruit type, or bark texture. Educational photography, while still
        accurate, emphasizes clarity and accessibility, helping students and enthusiasts
        learn plant identification. Artistic botanical photography captures the aesthetic
        beauty of plants, inspiring appreciation and conservation.

        The digital age has democratized botanical photography. Smartphone cameras enable
        anyone to document plants they encounter. Online databases like iNaturalist and
        PlantNet aggregate millions of user-submitted photos, creating vast resources for
        scientists and educators. Artificial intelligence now assists with plant identification
        from photos, though human expertise remains essential for verification.

        Visual documentation also preserves information about plants that may be difficult
        to observe directly. Time-lapse photography reveals growth patterns invisible to the
        naked eye. Macro photography exposes intricate details of flower anatomy. Aerial
        photography and satellite imagery document plant communities and ecosystem changes
        at scales impossible to observe from ground level.
      `
    },
    {
      title: 'Understanding Plant Structure Through Images',
      content: `
        Photographs enable detailed study of plant morphology—the form and structure of
        plants. Each plant category displays distinctive structural features that become
        apparent through careful visual observation.

        Herbs, with their soft green stems, show characteristics that distinguish them from
        woody plants. In photographs, look for the tender, often translucent quality of herb
        stems. The green color indicates chlorophyll presence, meaning the stem itself
        performs photosynthesis. Herb leaves often display prominent venation patterns, and
        the overall plant form tends toward flexibility rather than rigidity.

        Shrubs present a different visual signature. Multiple woody stems emerge from a
        common base, creating a bushy appearance. Bark texture becomes visible on older
        stems, distinguishing them from herbaceous growth. Shrubs often show a clear
        distinction between woody permanent branches and softer seasonal growth.

        Trees command attention through their size and single-trunk architecture. Photographs
        reveal bark patterns unique to each species—smooth beech bark versus furrowed oak
        bark, for instance. The branching pattern, whether alternate or opposite, provides
        identification clues. Crown shape—pyramidal, rounded, spreading, or weeping—offers
        another diagnostic feature.

        Climbers demonstrate their adaptation through visible climbing structures. Tendrils
        coil around supports, twining stems spiral upward, and aerial roots grip surfaces.
        These features tell the story of how the plant has evolved to reach sunlight without
        investing energy in thick supportive stems.

        Creepers spread horizontally, often showing roots at nodes where stems contact soil.
        This growth pattern creates extensive ground coverage, visible in photographs as a
        mat of vegetation. Fruits and flowers of creepers often sit prominently above the
        foliage, adapted for pollinator access and seed dispersal.
      `
    },
    {
      title: 'The Science of Plant Identification',
      content: `
        Plant identification combines observation, comparison, and reference to authoritative
        sources. Visual documentation provides the raw material for this process, but
        systematic analysis transforms images into knowledge.

        The identification process typically begins with gross morphology—the overall form
        and size of the plant. Is it herbaceous or woody? Does it grow upright, climb, or
        spread? These basic observations narrow the possibilities considerably.

        Next, examine the leaves. Leaf characteristics provide some of the most reliable
        identification features. Note whether leaves are simple (single blade) or compound
        (multiple leaflets). Observe the leaf arrangement on the stem—alternate, opposite,
        or whorled. Examine leaf shape—lanceolate, ovate, cordate, palmate—and margin
        type—entire, serrated, lobed.

        Flowers, when present, offer crucial identification data. Count the petals and note
        their arrangement. Observe flower color, size, and whether flowers grow singly or
        in clusters (inflorescences). The reproductive structures—stamens and pistils—provide
        taxonomically important features.

        Fruits and seeds complete the identification picture. Is the fruit fleshy or dry?
        Does it split open or remain closed? How are seeds dispersed? These features often
        distinguish closely related species.

        Modern field guides and apps combine photographs with dichotomous keys—systematic
        decision trees that lead users through identification steps. Each choice narrows
        possibilities until a single species remains. This methodical approach, combined
        with visual reference images, enables accurate identification even for beginners.
      `
    },
    {
      title: 'Visual Learning and Botanical Education',
      content: `
        Educational research consistently demonstrates that visual learning enhances
        comprehension and retention. When studying plants, seeing is believing—and
        remembering. Visual information processes through different neural pathways than
        text, creating multiple memory traces that improve recall.

        The interactive gallery in this application leverages several principles of visual
        learning. First, it provides immediate visual feedback—clicking an image highlights
        it and displays associated information. This interactivity engages learners more
        deeply than passive viewing. Second, it allows self-paced exploration, letting
        learners spend more time with challenging concepts and less with familiar material.
        Third, it connects visual information (the image) with verbal information (the
        description), reinforcing learning through dual coding.

        Comparative viewing—placing images side by side—enables learners to discern subtle
        differences between plant categories. Why is a shrub different from a small tree?
        Visual comparison reveals that shrubs have multiple stems from the base while trees
        have a single trunk, regardless of overall size.

        Sequential viewing builds understanding progressively. Starting with obvious examples
        (a classic herb like mint, a typical tree like oak) establishes mental prototypes.
        Then, examining borderline cases (plants that seem intermediate between categories)
        refines understanding and reveals the continuous nature of plant diversity.

        Research also shows that active engagement with visual material improves learning
        outcomes. The gallery's interactive features—selection, zooming, information
        toggling—transform passive viewing into active exploration. When learners choose
        what to examine and control the pace of information delivery, they learn more
        effectively.
      `
    },
    {
      title: 'Photography Techniques for Plant Documentation',
      content: `
        Capturing useful plant photographs requires attention to technique. Poor lighting,
        blurry focus, or confusing backgrounds can obscure the very features needed for
        identification. Understanding basic photographic principles improves the educational
        and scientific value of plant images.

        Lighting dramatically affects image quality. Natural, diffused light—such as on an
        overcast day or in open shade—reveals plant colors accurately without harsh shadows.
        Direct sunlight creates high contrast that can lose detail in shadows and highlights.
        For close-up shots, a reflector (even a white piece of paper) bounces light into
        shadowed areas.

        Focus determines which features appear sharp. For identification purposes, the
        diagnostic features must be in focus. When photographing flowers, focus on the
        reproductive structures. For leaves, ensure the leaf margin and venation are sharp.
        Modern cameras offer macro modes for close focusing; dedicated macro lenses provide
        even better results.

        Depth of field—the range of distances appearing sharp—requires careful management.
        Wide apertures (low f-numbers) create shallow depth of field, isolating subjects
        from backgrounds but potentially leaving parts of the plant out of focus. Narrow
        apertures (high f-numbers) keep more of the plant sharp but require longer exposures
        or higher ISO settings.

        Backgrounds should not compete with the subject. A simple, contrasting background
        makes plant features stand out. Professional botanical photographers often carry
        portable backgrounds—blue or white cards that slide behind subjects. In the field,
        finding natural simple backgrounds or creating them with available materials improves
        images.

        Scale provides crucial context. Including a familiar object—a coin, finger, or
        ruler—in some shots helps viewers gauge plant size. This matters because size
        distinguishes many species and categories.
      `
    },
    {
      title: 'Digital Archives and Plant Conservation',
      content: `
        Visual documentation contributes directly to plant conservation efforts. Digital
        herbaria—online collections of plant specimen images—make botanical collections
        accessible globally without risking damage to physical specimens. Researchers can
        study type specimens (the original specimens used to describe species) from anywhere,
        accelerating taxonomic research.

        Time-series photography documents changes in plant populations and distributions.
        Comparing historical photographs with current images reveals range expansions,
        contractions, and shifts. These changes often reflect climate change, habitat loss,
        or invasive species impacts. Conservationists use this visual evidence to prioritize
        protection efforts and measure intervention effectiveness.

        Citizen science projects harness public participation in plant documentation.
        Programs like Nature's Notebook ask volunteers to photograph plants at regular
        intervals, recording phenological events—budburst, flowering, fruiting, leaf drop.
        Aggregating thousands of observations reveals patterns invisible to individual
        observers, such as how flowering times shift with climate change.

        Visual documentation also raises public awareness about plant diversity and
        conservation needs. Striking images of rare or endangered plants capture attention
        in ways that statistics cannot. Social media amplifies this effect, with plant
        photographs reaching audiences who might never encounter botanical literature.

        The gallery feature in this application, while educational rather than scientific,
        participates in this broader tradition of visual plant documentation. By presenting
        clear, informative images of plant categories, it builds visual literacy that
        enables users to engage more meaningfully with the plant world around them.
      `
    },
    {
      title: 'Using the Interactive Gallery',
      content: `
        The interactive gallery in this application offers multiple ways to explore plant
        categories. Click on any plant image to select it—selected images highlight with
        a border and scale up slightly. The selection triggers an information panel
        displaying detailed botanical data about that plant category.

        The view toggle switches between grid and list layouts. Grid view emphasizes
        visual comparison, placing all plant images in a spatial arrangement that facilitates
        pattern recognition. List view prioritizes textual information, displaying descriptions
        alongside smaller thumbnails.

        The information panel can be shown or hidden based on your preference. Some learners
        prefer to examine images without distraction first, then read details. Others benefit
        from seeing text and images together. The choice accommodates different learning
        styles.

        For the full experience, click an image to open the lightbox—a full-screen modal
        viewer. The lightbox focuses attention on a single plant category, displaying its
        image prominently with comprehensive information below. Navigate between categories
        using the arrow buttons or keyboard arrows, creating a slideshow-like experience.

        The gallery tracks your selections using browser cache. If you leave the page and
        return, your last viewed selection persists. This feature, implemented with
        localStorage, creates a more seamless user experience across sessions.

        Whether you use the gallery for quick reference, detailed study, or casual
        exploration, it provides a visual foundation for understanding plant classification.
        The images, combined with textual information and interactive features, create a
        multi-modal learning experience that accommodates diverse learning preferences.
      `
    }
  ];

  return (
    <>
      <div className="page-header" style={{ background: 'linear-gradient(90deg, #1565c0, #42a5f5)' }}>
        <h1>Plant Image Gallery</h1>
        <p>Visual Documentation and Botanical Identification</p>
      </div>

      <div className="container">
        {/* Content sections */}
        {contentSections.map((section, index) => (
          <SectionCard key={index} title={section.title} accentColor="#1976d2">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} style={{ marginBottom: '15px' }}>
                {paragraph.trim()}
              </p>
            ))}
          </SectionCard>
        ))}

        {/* Interactive Gallery */}
        <SectionCard title="Interactive Plant Gallery" accentColor="#1976d2">
          <p>
            Explore our visual collection of plant categories below. Click on any image to
            view detailed botanical information, switch between grid and list views, or
            open the lightbox for a full-screen viewing experience. The gallery demonstrates
            how React state management creates interactive, engaging user experiences.
          </p>
          <PlantGallery />
        </SectionCard>

        {/* Summary */}
        <SectionCard title="Summary: Visual Learning in Botany" accentColor="#1976d2">
          <p>
            Visual documentation transforms abstract botanical concepts into concrete,
            memorable images. Through photography and interactive display, we can share
            the wonder of plant diversity with learners worldwide. The gallery feature
            in this application represents just one approach to visual botanical education—
            one that combines the timeless value of plant images with modern interactive
            technology.
          </p>
          <p>
            As you continue exploring plant classification, remember that observation is
            the foundation of botanical knowledge. Whether through photographs, illustrations,
            or direct examination of living plants, developing your visual literacy opens
            doors to deeper understanding of the plant kingdom.
          </p>
        </SectionCard>
      </div>
    </>
  );
}

export default GalleryPage;

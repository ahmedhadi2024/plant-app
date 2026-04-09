import React from 'react';
import SectionCard from '../components/SectionCard';
import HerbList from '../components/HerbList';

/**
 * HerbsPage Component - Comprehensive Guide to Herbs
 *
 * Contains 1000+ words of educational content about herbs,
 * their characteristics, uses, and importance.
 *
 * JavaScript Concepts Used:
 * - JSX for component structure
 * - Array.map() for rendering content sections
 * - Object literals for structured data
 * - Template literals for dynamic content
 */
function HerbsPage() {
  // Herb content sections
  const contentSections = [
    {
      title: 'What Are Herbs? A Comprehensive Definition',
      content: `
        Herbs represent one of the most fundamental and diverse categories in the plant kingdom.
        In botanical terminology, herbs are defined as herbaceous plants—plants that lack persistent
        woody stems above ground. Unlike trees and shrubs, which develop hard, lignified tissues
        that persist for many years, herbs maintain soft, flexible stems throughout their life
        cycles. This fundamental characteristic shapes every aspect of their biology, ecology,
        and relationship with humans.

        The term "herb" carries different meanings in different contexts. In botany, it refers
        strictly to the growth form described above. In culinary arts, herbs typically denote
        plants used for flavoring food, often distinguished from "spices" which come from other
        plant parts like seeds, bark, or roots. In medicine, herbs encompass plants used for
        therapeutic purposes, forming the basis of traditional healing systems worldwide.

        Herbs exhibit remarkable diversity in size, lifespan, and habitat. Some herbs are
        microscopic, like the duckweed that floats on pond surfaces. Others, like bananas
        (which are technically herbs despite their size), can reach several meters in height.
        This diversity reflects hundreds of millions of years of evolution, during which
        herbaceous plants have colonized nearly every terrestrial habitat on Earth.
      `
    },
    {
      title: 'Structural Characteristics of Herbs',
      content: `
        The defining feature of herbs is their soft, non-woody stem structure. These stems
        contain minimal lignin—the complex polymer that provides rigidity to wood. Instead,
        herb stems rely on turgor pressure (water pressure within cells) to maintain their
        shape and support. This is why herbs wilt noticeably when they lack water, while
        woody plants maintain their form.

        Herb stems serve multiple functions beyond structural support. Many herb stems are
        green and photosynthetically active, contributing to the plant's energy production.
        The vascular tissues within herb stems—xylem for water transport and phloem for
        nutrient transport—are present but less extensively developed than in woody plants.
        This reflects the shorter lifespan and smaller size of most herbs.

        Root systems in herbs are typically fibrous rather than taproot-based. Fibrous roots
        consist of many thin, branching roots that spread through the upper layers of soil.
        This architecture excels at absorbing water and nutrients from surface soils and
        helps prevent erosion. Some herbs, however, develop specialized root structures like
        bulbs (onions), tubers (potatoes), or rhizomes (ginger) for storage and vegetative
        reproduction.

        Leaves of herbs display extraordinary variety in shape, size, and arrangement. From
        the needle-like leaves of rosemary to the broad, flat leaves of spinach, herb foliage
        has evolved to maximize photosynthesis in diverse environments. Leaf characteristics
        often provide key identification features for herb species.
      `
    },
    {
      title: 'Life Cycles and Growth Patterns',
      content: `
        Herbs are classified by their life cycles into three main categories: annuals,
        biennials, and perennials. Annual herbs complete their entire life cycle—from
        germination to flowering to seed production to death—within a single growing
        season. Examples include basil, coriander, and dill. These plants invest heavily
        in rapid growth and prolific seed production, ensuring their genes survive to the
        next generation.

        Biennial herbs require two growing seasons to complete their life cycle. During
        the first year, they typically produce only vegetative growth—leaves and roots—
        often storing energy in a taproot. After exposure to winter cold, they flower,
        produce seeds, and die in the second year. Parsley and some varieties of parsley
        follow this pattern.

        Perennial herbs live for multiple years, often dying back to ground level each
        winter and regrowing from roots or underground stems in spring. Mint, oregano,
        and thyme are perennial herbs. These plants balance energy investment between
        growth, reproduction, and storage, enabling them to survive unfavorable conditions
        and regrow year after year.

        The rapid growth rate of many herbs makes them exceptionally responsive to
        environmental conditions. Temperature, day length, water availability, and soil
        nutrients all influence herb development. This responsiveness allows herbs to
        quickly colonize disturbed habitats but also makes them vulnerable to environmental
        stress.
      `
    },
    {
      title: 'Ecological Roles of Herbs',
      content: `
        Herbs play indispensable roles in terrestrial ecosystems. As primary producers,
        they convert solar energy into chemical energy through photosynthesis, forming
        the foundation of food chains. Countless herbivorous animals—from insects to
        mammals—depend directly on herbs for nutrition.

        Herbs contribute significantly to soil health and stability. Their fibrous root
        systems bind soil particles, reducing erosion from wind and water. When herbs
        die and decompose, they add organic matter to soil, improving its structure,
        water retention, and fertility. Some herbs, particularly legumes like clover,
        form symbiotic relationships with nitrogen-fixing bacteria, enriching soil
        nitrogen content for themselves and neighboring plants.

        Herbs provide habitat and shelter for numerous organisms. Dense herbaceous
        vegetation offers protection for small animals, nesting sites for birds, and
        microhabitats for invertebrates. Flowering herbs support pollinator populations,
        including bees, butterflies, and hummingbirds, which in turn pollinate other
        plants including many food crops.

        In aquatic and wetland ecosystems, herbaceous plants like cattails and water
        lilies perform critical functions. They oxygenate water, provide spawning
        grounds for fish, filter pollutants, and stabilize shorelines. The loss of
        herbaceous vegetation in these ecosystems often triggers cascading ecological
        consequences.
      `
    },
    {
      title: 'Economic and Cultural Importance',
      content: `
        The economic significance of herbs cannot be overstated. Cereal grains—wheat,
        rice, maize, barley, oats—are all herbaceous plants. These crops provide the
        majority of calories consumed by humans worldwide. Without herbs, human
        civilization as we know it would not exist.

        Beyond staple crops, herbs include most vegetables (lettuce, cabbage, carrots,
        tomatoes), many fruits (strawberries, melons), and virtually all culinary herbs
        and spices. The global trade in herb products spans hundreds of billions of
        dollars annually, supporting millions of farmers, processors, distributors,
        and retailers.

        Medicinal herbs form the foundation of traditional healing systems including
        Traditional Chinese Medicine, Ayurveda, and indigenous healing practices
        worldwide. Modern pharmaceutical science continues to discover and develop
        plant-derived compounds. Aspirin originated from willow bark, the malaria
        treatment quinine from cinchona bark, and the cancer drug paclitaxel from
        Pacific yew trees.

        Herbs hold profound cultural and religious significance across societies.
        Laurel wreaths symbolized victory in ancient Greece. Shamans used psychoactive
        herbs in spiritual ceremonies. Herbs feature in folklore, literature, art,
        and cuisine, reflecting humanity's deep connection to these plants.
      `
    },
    {
      title: 'Herb Cultivation and Agriculture',
      content: `
        Cultivating herbs ranges from simple home gardening to sophisticated commercial
        agriculture. Home gardeners can grow many culinary herbs in containers on
        windowsills or small garden plots. Herbs like mint, basil, and chives are
        forgiving for beginners, requiring only basic care: adequate sunlight,
        regular watering, and occasional harvesting to promote bushy growth.

        Commercial herb production employs advanced techniques to maximize yield and
        quality. Greenhouse cultivation enables year-round production and protection
        from pests and adverse weather. Hydroponic systems—growing plants in nutrient
        solutions without soil—produce clean, consistent herbs with reduced water
        usage. Organic herb farming responds to consumer demand for pesticide-free
        products.

        Post-harvest handling critically affects herb quality. Fresh herbs are highly
        perishable, requiring rapid cooling and careful packaging. Drying preserves
        herbs for long-term storage, though it alters flavor profiles. Freeze-drying
        and essential oil extraction represent other preservation methods that capture
        herb properties for diverse applications.

        Sustainable herb agriculture addresses environmental concerns while maintaining
        productivity. Practices include crop rotation to prevent soil depletion,
        integrated pest management reducing pesticide reliance, water conservation
        through drip irrigation, and seed saving to preserve genetic diversity.
      `
    },
    {
      title: 'Common Herbs: Profiles and Uses',
      content: `
        Mint (Mentha): One of the world's most popular herbs, mint includes numerous
        species and hybrids. Its characteristic cool sensation comes from menthol.
        Mint flavors foods, beverages, candies, and oral hygiene products. Medicinally,
        it aids digestion and relieves headaches. Mint spreads aggressively via
        underground rhizomes, making it both valuable and potentially invasive.

        Coriander/Cilantro (Coriandrum sativum): This herb presents a genetic puzzle—
        some people perceive its leaves as soapy due to a genetic variation in odor
        receptors. All parts are edible: leaves (cilantro), seeds (coriander), and
        roots. It features prominently in Latin American, Asian, and Middle Eastern
        cuisines.

        Basil (Ocimum basilicum): Sacred in Hinduism and associated with royalty in
        ancient Greece, basil is central to Italian cuisine (pesto) and Thai cooking.
        Over 60 varieties exist, ranging from sweet basil to Thai basil to holy basil
        (Tulsi), each with distinct flavors and uses.

        Rosemary (Rosmarinus officinalis): Named "dew of the sea," rosemary has
        needle-like leaves and a powerful aroma. It flavors Mediterranean dishes,
        preserves meats, and produces aromatic essential oils. Folklore associates
        rosemary with memory and remembrance.

        Thyme (Thymus vulgaris): This low-growing herb forms mats in herb gardens.
        Its tiny leaves pack intense flavor, essential in French cuisine (bouquet
        garni) and medicine (thymol, an antiseptic). Thyme honey is prized for its
        distinctive taste.

        Sage (Salvia officinalis): With velvety gray-green leaves, sage flavors
        poultry stuffing and sausage. The name derives from "salvere" (to save),
        reflecting its medicinal reputation. Sage smudging ceremonies cleanse spaces
        in Native American traditions.
      `
    }
  ];

  return (
    <>
      <div className="page-header">
        <h1>Herbs</h1>
        <p>Scientific and Structural Study of Herbaceous Plants</p>
      </div>

      <div className="container">
        {/* Main content sections */}
        {contentSections.map((section, index) => (
          <SectionCard key={index} title={section.title} accentColor="#4caf50">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} style={{ marginBottom: '15px' }}>
                {paragraph.trim()}
              </p>
            ))}
          </SectionCard>
        ))}

        {/* Interactive Herb List */}
        <SectionCard title="Interactive Herb Explorer" accentColor="#4caf50">
          <p>
            Use the interactive tool below to explore detailed information about common herbs.
            Click on any herb to expand its full profile, including botanical details, growing
            conditions, and traditional uses. You can also search for specific herbs or filter
            by category (culinary, medicinal, aromatic).
          </p>
          <HerbList />
        </SectionCard>

        {/* Summary Section */}
        <SectionCard title="Summary: The Significance of Herbs" accentColor="#4caf50">
          <p>
            Herbs represent far more than botanical curiosities—they are fundamental to human
            survival and flourishing. From the wheat fields that feed billions to the medicine
            cabinet where plant-derived remedies treat ailments, herbs permeate every aspect of
            modern life. Understanding herbs—their structure, function, diversity, and
            applications—enriches our appreciation of the natural world and informs better
            decisions about agriculture, health, and environmental stewardship.
          </p>
          <p>
            This page has covered the defining characteristics of herbs, their life cycles,
            ecological roles, economic importance, cultivation practices, and profiles of
            common species. The interactive herb list provides hands-on exploration of
            specific herbs. Together, these elements form a comprehensive introduction to
            the world of herbaceous plants.
          </p>
          <p>
            Whether you pursue botany professionally, garden for pleasure, cook with fresh
            herbs, or simply appreciate the green world around you, the knowledge presented
            here offers a foundation for deeper understanding. Herbs have accompanied humans
            throughout our species' journey, and they will continue to shape our future in
            countless ways.
          </p>
        </SectionCard>
      </div>
    </>
  );
}

export default HerbsPage;

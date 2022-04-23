const dressesProduct = [
  {
    name: "Bateau Neck Fit & Flare Dress",
    brand: "ELIZA J",
    description:
      "As blue as a robin's egg, this dress sings a sweet song with its fit-to-flatter silhouette, V-dipped back and elegant bateau-neck silhouette. A high/low hemline adds to the lovely flow.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9d083eac-b9f3-4722-b5d3-d54da50a7819.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "BB Dakota Fields of Gold Shift Dress",
    brand: "BB DAKOTA BY STEVE MADDEN",
    description:
      "A shift dress is cut from puckered, gauzy fabric that's easy and breezy, while puffy sleeves always keep things extra fun.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76e4eae9-d334-46fa-9688-e31e7f10cffa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Beaded Mesh Column Gown",
    brand: "PISARRO NIGHTS",
    description:
      "The scrolls of twinkling beads trailing across this slim tulle dress will have you looking positively radiant at your next event.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3d0649d5-0578-4742-923c-bd393306abfd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Boho Bouquet Maxi Dress",
    brand: "CITY CHIC",
    description:
      "Featuring a strategically-placed elongating floral print, this halter maxi will flaunt your curves with it's drawstring waist and leg-bearing dual-side splits.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8adb89ab-1495-4874-8c75-2a71f4f3ca95.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bow Neck Short Sleeve Dress",
    brand: "CECE",
    description:
      "A bubbly bow and a ripple of flounce add ebullient charm to this sweet dress that's ready to go from desk to dinner.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/649990ce-4f2f-46d0-819d-380b16e75031.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Brigitte Sleeveless Midi Dress",
    brand: "KAREN KANE",
    description:
      "A V-neck and vented midi hem bring sunny-day vibes to a swingy dress that's a must-have for your effortlessly chic wardorbe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1be246b0-0307-448a-b81f-2dc73ae565b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Calista Long Sleeve Cotton & Silk Minidress",
    brand: "RAG & BONE",
    description:
      "This soft silken mini is styled in an appealing hue with a smocked waist and a swingy skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/060d0fee-4503-4c98-b6e6-e2eb270a1437.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cassini One-Shoulder Dress",
    brand: "ELLIATT",
    description:
      "Steal the show in this rich, satiny dress styled in a sleek one-shoulder silhouette with shapely rippled ruching.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0c73c70-31ad-468f-94f8-9286e76cb661.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Catalina Fit & Flare Cocktail Dress",
    brand: "DRESS THE POPULATION",
    description:
      "The signature drape of sleek crepe fabric is the raison d'etre of this elegant fit-and-flare dress featuring always-welcome pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/defb758d-bcef-498a-9746-776e1fcd8cfb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cowl Slip Midi Dress",
    brand: "ASTR THE LABEL",
    description:
      "Satiny-smooth fabric skims your figure in a slinky slip dress with svelte straps that cross at the open back and a leg-baring slit at the front.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/601d2ed4-66ad-41f5-99fb-1908a9ee272e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cutout Tank Midi Dress",
    brand: "TOPSHOP",
    description:
      "Edgy waistline cutouts embolden this curve-skimming midi that's primed for a night on the town.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b942ef8-2e4c-4434-8a74-d64b87e7ceef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ella Flutter Strap Cotton Maxi Dress",
    brand: "BB DAKOTA BY STEVE MADDEN",
    description:
      "Move gracefully from the beach to cocktails in this flutter-strap maxi designed in a crinkled textured with a flouncy tiered skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a5a058d-ec92-4f24-86d7-4f6d9a2d600d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral Flutter Sleeve Dress",
    brand: "ELIZA J",
    description:
      "Gorgeous floral dances in and out of the ruffled edges of this charming dress styled with flouncy sleeves and sash-tied at the waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/adbdb72b-ce53-43a5-9c34-766859af4130.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral Halter Neck Popover High/Low Dress",
    brand: "ELIZA J",
    description:
      "A wearable watercolor popover dress delivers a floral motif accentuated by the flowy, high/low hemline and alluring halter-neck cut.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49ae6112-bd9c-4c3c-9f61-99bdef84d42b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral One-Shoulder Ruffle Dress",
    brand: "ASTR THE LABEL",
    description:
      "Beautiful flowers pattern a sweet and summery minidress fashioned with a one-shoulder neck and frilly ruffles at the tulip skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78035d04-1f28-4c84-b306-f35a3f73209f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral Ruched Chiffon Faux Wrap Dress",
    brand: "ELIZA J",
    description:
      "Aside from the bride herself, you'll be the best-dressed wedding guest in a flowery fil coupé frock that accentuates your curves with ruffles and ruching.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e0ef053-ec33-461a-9077-1d1c997baa0e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral Ruched Long Sleeve Minidress",
    brand: "VICI COLLECTION",
    description:
      "Floral branches bring subtle contrast and charm to a sunny-hued minidress that's gathered at the center seam and finished with semisheer long sleeves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f30c47e-48de-4244-a390-2734f73772a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral Ruffle A-Line Dress",
    brand: "ELIZA J",
    description:
      "Pretty ruffles cascade down the hem of this party-ready chiffon dress smocked at the waist and illustrated with blooming flowers.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c664ddbc-0ed4-4d44-866d-6b05f85b0f3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Florida Strapless Minidress",
    brand: "FRENCH CONNECTION",
    description:
      "A lavish side tie emboldens this sleek strapless mini that's primed for a night out.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/99af8475-2560-4015-8dea-d1a230f41f43.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Grecian Cover-Up Dress",
    brand: "ELAN",
    description:
      "A vacation must-have, this easy breezy cover-up patterned by a bold print fits seamlessly into your carry-on bag.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9635c5ea-7983-48d4-95d5-72e24c6e62e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High/Low Faux Wrap Dress",
    brand: "FRAICHE BY J",
    description:
      "A faux-wrap dress with a high/low skirt serves as a carefree standby for any occasion.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbaf5856-c6bf-43f5-a634-a374d34111e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Lina Lace Sheath Dress",
    brand: "BARDOT",
    description:
      "Large-scale openwork lace styles this sleek sheath dress that's perfect for a summer wedding or garden party.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc4e0c8d-ba75-44f9-879c-c5adb86a96d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Long Sleeve Faux Wrap Dress",
    brand: "FRAICHE BY J",
    description:
      "A head-turning dress showcases an airy fabric cut with beautiful puff sleeves and an elegant tulip hem.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3509f6ac-3c03-4ad0-9a25-e6162859950b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Lounge Ribbed Long Sleeve Maxi Dress",
    brand: "SKIMS",
    description:
      "A classic everyday style, this square-neck maxi dress in ribbed stretch modal from Kim Kardashian's SKIMS hugs your body with relaxed comfort.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/090b01a3-be3b-4d57-8053-0171f2dc8618.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Madison Sleeveless Maxi Dress",
    brand: "BB DAKOTA BY STEVE MADDEN",
    description:
      "A smocked bodice and dainty shoulder ties bring modern charm to an effortlessly chic maxi dress styled with a gauzy finish and flounce hem.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9aa52b4e-2e38-4e0e-a7cc-93f1e64644e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Maxi Dress",
    brand: "LOVEAPPELLA",
    description:
      "A great travel dress for sunny destinations, a breezy stretch-knit maxi suspended from slim straps is designed with a deep, rounded V-neckline and a full swishy skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a885202-c798-42ab-b89f-907d0bb62d7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Nicole Sweetheart Neck Cocktail Dress",
    brand: "DRESS THE POPULATION",
    description:
      "Classically sensual in a contemporary crepe construction, this cocktail sheath fits and flatters your every curve as well as your beguiling charm.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/244f3585-5142-49d3-8f4e-018b657a91a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Off the Shoulder Dress",
    brand: "CHARLES HENRY",
    description:
      "This vivid dress has a trendy off-the-shoulder neckline styled with a flirty ruffle that enhances the crisp, fluttery silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a0e2f64a-0295-4308-bfbe-c9f88a86b80e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "One-Shoulder Jersey Gown",
    brand: "LA FEMME",
    description:
      "Smooth and sultry, this jersey gown flows from a single shoulder to a pooled hemline, framing your beautiful back and a lovely length of leg along the way.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b21f3eb5-7a27-446c-803b-7737c9097555.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Open Stitch Sleeveless Cotton Blend Sweater Dress",
    brand: "OPEN EDIT",
    description:
      "Airy open knitting covers this sleeveless sweater-dress that's ideal from day to night.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c6c7232-33fe-4e6c-ad50-f9151e7a9792.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Plissé Empire Waist Midi Dress",
    brand: "ALL IN FAVOR",
    description:
      "A throw-on-and-go midi dress gets sophisticated style from an Empire waist, gathered cuffs and lightweight plissé fabric with a subtle sheen.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c2a12af0-7641-487b-bbd6-7571591efe89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Razor Cut Back Minidress",
    brand: "NAKED WARDROBE",
    description:
      "A solid hue lends styling versatility to this minidress that features a plunging neckline and a racerback design.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e90ab45f-cea5-4479-a9ea-e044b8c7170e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Real Love Print Maxi Dress",
    brand: "FREE PEOPLE",
    description:
      "A mix of prints and tassel ties add to the boho vibes of a billowy maxi dress with a full skirt and halter-style plunge neck.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ffa3c00b-4eca-40bd-ab1d-ccab3c0eba1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Renee Pointelle Cotton Blend Midi Dress",
    brand: "RAG & BONE",
    description:
      "Intricate pointelle stitching creates a geometric effect across a lightweight cotton-blend midi designed with a vented hemline for ultimate ease of movement.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b3ec320-248e-4c07-b237-1dd165bea16a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ribbed Long Slipdress",
    brand: "SKIMS",
    description:
      "A classic everyday style, this scoop-neck slipdress in ribbed stretch modal from Kim Kardashian West's SKIMS hugs your body with relaxed comfort.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4850c8ac-a32c-430c-af77-f597e0de42de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ruched Cotton Poplin Dress",
    brand: "TOPSHOP",
    description:
      "Cotton poplin brings structure to this ruched dress featuring ruffled straps and a square neck.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3f81309-f5ef-40bf-a3b0-8090d64f2de6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ruched Long Sleeve Body-Con Dress",
    brand: "BP.",
    description:
      "This gauzy mesh mini accented with shapely ruching is ready for a night out on the town.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/89eb50c1-0397-438b-80ee-d1282097f159.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Scalloped Lace Cocktail Dress",
    brand: "KAREN KANE",
    description:
      "Bring on the ooh-la-la with this sultry sheath tailored from scalloped lace with plenty of stretch so you can flit freely around the room.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f626fc41-1f16-4900-bebb-0803b15da180.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Scarf Print Crêpe de Chine Fit & Flare Maxi Dress",
    brand: "ELIZA J",
    description:
      "A graphic mix of dots, diamonds and dashes brightens a flowy, stretchy maxi dress with a high, pleated neckline and cutaway shoulders.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d760b976-6214-485b-989a-96b0c00f0abd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sheer Ruffle Shoulder Cocktail Dress",
    brand: "ELIZA J",
    description:
      "Shapely and sophisticated, this scuba-crepe frock features sheer shoulders trimmed with decadent frills.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/829b0575-28d2-4bd0-8fdc-ed63a2302512.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Shirred Puff Sleeve Cotton Prairie Dress",
    brand: "BP.",
    description:
      "Turn on the charm in this breezy cotton mini styled with a ruffled square neck, puff sleeves and a defining smocked waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b5e488b-427a-4f8b-af30-010e68f21eb3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Side Ruched Cocktail Dress",
    brand: "ALEX EVENINGS",
    description:
      "Elegant ruching gathers to a sparkling ornament at the side to create the faux-wrap silhouette of a chic dress with subtle compression designed to flatter.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16e874d5-1ee5-4e62-ab96-11afc5a59687.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sleeveless Faux Wrap Dress",
    brand: "CHELSEA28",
    description:
      "Date night is calling in this lightweight sleeveless frock styled with pleated trim and a layered skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc7df1e8-16ab-47a9-849a-487da13e327b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sleeveless Fit & Flare Dress",
    brand: "ELIZA J",
    description:
      "Princess seams structure this stretchy knit dress with a tiered ruffle hemline.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ba3afc7-5f76-47d3-8906-f9ba6850c242.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sleeveless Maxi Dress",
    brand: "CASLON®",
    description:
      "Top up your throw-on-and-go dress collection in this easygoing maxi done in a sleeveless silhouette with an elasticized waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a63ee11-5766-41d6-85ed-f70d8eadc086.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sleeveless Reversible Maxi Dress",
    brand: "OPEN EDIT",
    description:
      "A stretchy, floor-grazing maxi dress with a reversible design that allows the V-neck to be worn in the front or back for easy, versatile styling.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc8d0fdf-5022-499b-8e29-14e4f4bc4233.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sleeveless Swing Dress",
    brand: "CASLON®",
    description:
      "Top up your throw-on-and-go dress collection in a swingy number popped with a pair of handy pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71d26666-e41b-4914-acdc-24905e0d408e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Stripe Smocked Dress",
    brand: "FRENCH CONNECTION",
    description:
      "A stretchy smocked bodice hugs your frame in a versatile sleeveless dress patterned in crisp stripes.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0bbac039-cf80-4467-895c-2a2043bfabc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Tie Front Lettuce Edge Minidress",
    brand: "BP.",
    description:
      "Cute and casual for sunny weekends, this body-hugging minidress exudes '90s style with lettuce edges, an adjustable tie neckline and stretchy ribbed fabric.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19575ceb-35e5-4a8b-86ec-686295847539.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Tie Sleeve Shift Dress",
    brand: "CECE",
    description:
      "A joyful tie at the cuff jazzes up an essential dress that's what to wear to most any affair.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1eee6469-b6ae-4c4f-a430-45ed2d14bafb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Tiffany One-Shoulder Midi Dress",
    brand: "DRESS THE POPULATION",
    description:
      "An elegant one-shoulder neckline and figure-hugging silhouette style a sophisticated midi dress with two panels that cascade over the single shoulder.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a93dd005-c1cb-4b24-98de-c04b207b3e73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Ruched Side Sleeveless Dress",
    brand: "TREASURE&BOND",
    description:
      "Build a bevy of looks around this single sleeveless sheath styled with side ruching and a crossover hem.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b09af9d8-8bde-421e-a34d-20bd10302b8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Side Ruched Body-Con Dress",
    brand: "TREASURE&BOND",
    description:
      "This soft stretch-jersey dress is cut with a simple silhouette and ruched on one side, creating a minimalist look. When you buy Treasure & Bond, Nordstrom will donate 2.5% of net sales to organizations that work to empower youth.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d438cf5d-9ada-405d-bef8-e723f82096be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Woven Favorite Maxi Dress",
    brand: "TREASURE&BOND",
    description:
      "Step out in this breezy, comfortable maxi dress with a flowy silhouette perfect for layering and changing up your everyday style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6ecb87f-653e-411f-8e1a-32ac30b84811.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "V-Back Cover-Up Maxi Dress",
    brand: "ELAN",
    description:
      "Get an effortless look in this billowy maxi dress topped with thin spaghetti straps and a deep V-back that shows off just the right amount of skin.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d348e7b7-f058-456c-940f-b6e1e9046dc2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "V-Neck Jersey Maxi Dress",
    brand: "LOVEAPPELLA",
    description:
      "Soft gathers atop the wide straps and on either side of the smooth waistband shape the plunging V-neck and ankle-grazing lightweight skirt of a lithe maxi dress cut from soft, supple jersey.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/54d3ebef-82bb-435f-a81d-33e773ef8dff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Violet Minidress",
    brand: "FREE PEOPLE",
    description:
      "Geometric patterns add subtle textural intrigue to a swingy minidress complete with perfectly puffed sleeves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/221ef979-138a-4cf2-a1d6-bd10164be0b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Back Cutout A-Line Dress",
    brand: "FRENCH CONNECTION",
    description:
      "Puffed sleeves and the sweetest of necklines add romantic charm to this cotton-kissed dress that spices things up with a trend-right cutout at the back.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ad1962c4-2586-42a1-bb00-f6c8cc9b7736.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Light Sheath Minidress",
    brand: "FRENCH CONNECTION",
    description:
      "Extremely flattering with a square neck and a slim skirt, this minimalist dress is so easy to layer and accessorize.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/786a1343-c28a-4500-9c61-323d31f83402.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Ruffle Minidress",
    brand: "FRENCH CONNECTION",
    description:
      "Wedding-guest season demands dresses that layer on the charm, and this festive frock, finished with ruffles and fit to flatter, doesn't disappoint.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/beaca7f1-9903-40c8-bbec-c7cee9f6c47d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Ruffle Strap Minidress",
    brand: "FRENCH CONNECTION",
    description:
      "Frilly ruffles detail the shoulder straps of an effortlessly chic minidress in a crisp A-line silhouette",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a023df3-5625-4b33-bbf1-a8cd179cca8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "x Emma Rose Kenny Strapless Minidress",
    brand: "WAYF",
    description:
      "Perfectly gathered at the waist, this strapless minidress is a go-to for any warm-weather event.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/acd7323d-7511-4a0f-b6f8-7ffe559e0c65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const dressData = [
  {
    productName: "Bateau Neck Fit & Flare Dress",
    price: 148,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9d083eac-b9f3-4722-b5d3-d54da50a7819.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bateau Neck Fit & Flare Dress",
    price: 148,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19207c4f-87f0-4a44-8f96-743b649e9c73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "BB Dakota Fields of Gold Shift Dress",
    price: 69,
    color: "Punch",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76e4eae9-d334-46fa-9688-e31e7f10cffa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "BB Dakota Fields of Gold Shift Dress",
    price: 69,
    color: "Deep Lipstick",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/567d1af9-a02a-48af-99d7-282017038737.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "BB Dakota Fields of Gold Shift Dress",
    price: 69,
    color: "Bright White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/010c969d-02e8-46be-b21a-30827266b0cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "BB Dakota Fields of Gold Shift Dress",
    price: 69,
    color: "Blue Frosting",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3349b6ae-eac7-4697-b573-893ad142b0d7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "BB Dakota Fields of Gold Shift Dress",
    price: 69,
    color: "Sea Mist",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/48e84bb2-8937-4eb1-bbfd-e15b968e9722.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "BB Dakota Fields of Gold Shift Dress",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a76914d-77ee-4065-bd30-a369b0b94d86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Beaded Mesh Column Gown",
    price: 238,
    color: "Slate",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3d0649d5-0578-4742-923c-bd393306abfd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Beaded Mesh Column Gown",
    price: 238,
    color: "Mauve",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0795dac5-780e-4979-8481-221f5bbaa0e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Beaded Mesh Column Gown",
    price: 238,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f48e2c86-0fe2-4f21-884e-8d6366641add.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Beaded Mesh Column Gown",
    price: 238,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/467a6ea6-9968-4d1c-8d1a-19aab9082ff8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Beaded Mesh Column Gown",
    price: 238,
    color: "Ash/ Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7afbac5f-9429-4eb1-9d21-6a4b87b86c72.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boho Bouquet Maxi Dress",
    price: 79,
    color: "Navy Bouquet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8adb89ab-1495-4874-8c75-2a71f4f3ca95.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boho Bouquet Maxi Dress",
    price: 79,
    color: "Boho Bouquet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/746cb15e-bad2-4962-8309-2917f8d5a901.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bow Neck Short Sleeve Dress",
    price: 129,
    color: "Lush Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/649990ce-4f2f-46d0-819d-380b16e75031.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bow Neck Short Sleeve Dress",
    price: 129,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c51a7e6-0d24-4df7-9d4b-9a8cd9f4b0c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brigitte Sleeveless Midi Dress",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1be246b0-0307-448a-b81f-2dc73ae565b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brigitte Sleeveless Midi Dress",
    price: 98,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4b85fd0-de6f-4f41-bc37-33ee757bdf24.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Calista Long Sleeve Cotton & Silk Minidress",
    price: 395,
    color: "Dove",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/060d0fee-4503-4c98-b6e6-e2eb270a1437.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Calista Long Sleeve Cotton & Silk Minidress",
    price: 395,
    color: "Deep Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/992aa686-a9be-4c8a-882e-e6d7b6c9dfd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cassini One-Shoulder Dress",
    price: 187,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0c73c70-31ad-468f-94f8-9286e76cb661.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cassini One-Shoulder Dress",
    price: 187,
    color: "Copper",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/03ac203b-71a1-469d-a040-689d87ebacb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cassini One-Shoulder Dress",
    price: 187,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6803dfd3-ac13-4638-9fc2-e353f1c864c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cassini One-Shoulder Dress",
    price: 187,
    color: "Coral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c60b388-ac65-479c-ba48-9008679846c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cassini One-Shoulder Dress",
    price: 187,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7db7fc1-384d-4c59-b9ea-811bb81d462f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Garnet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/defb758d-bcef-498a-9746-776e1fcd8cfb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Dark Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/daecd30f-2762-48b9-8a08-efe234faa98b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Off White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4a99e9db-9054-4d03-a3f7-f2e948dedd4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bddfff33-856c-44d3-a71f-d249fdc1a895.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Bright Fuchsia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6da515a7-8d00-4f37-9056-b09d7b01f377.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Poppy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a85c4ff0-a127-48f9-ae1a-a89c86efddc3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Midnight Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/310a9091-c225-46f7-88dc-cc559260c4e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catalina Fit & Flare Cocktail Dress",
    price: 182,
    color: "Pine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b1800b53-8a68-41c0-befd-54da6da47ebb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cowl Slip Midi Dress",
    price: 89,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/601d2ed4-66ad-41f5-99fb-1908a9ee272e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cowl Slip Midi Dress",
    price: 89,
    color: "Sage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/42e826e9-e385-4bcb-96f5-5e4542767211.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cowl Slip Midi Dress",
    price: 89,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b0b3f36-0f73-4f03-85ee-ccd2705f4f42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cowl Slip Midi Dress",
    price: 89,
    color: "Wine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7befcb15-aabd-460f-91f2-19c02d3135da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cutout Tank Midi Dress",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b942ef8-2e4c-4434-8a74-d64b87e7ceef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ella Flutter Strap Cotton Maxi Dress",
    price: 39,
    color: "Surplus Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a5a058d-ec92-4f24-86d7-4f6d9a2d600d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ella Flutter Strap Cotton Maxi Dress",
    price: 39,
    color: "Deep Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/811a6fb6-fa9a-4ce5-8ad5-0fb3dcc262bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ella Flutter Strap Cotton Maxi Dress",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ffb01c3d-f6d0-4260-9704-1becf3aec0cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ella Flutter Strap Cotton Maxi Dress",
    price: 39,
    color: "Hibiscus",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/05b159c2-189a-4783-abac-fb7636589e55.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ella Flutter Strap Cotton Maxi Dress",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/97fe6c74-55b0-4d2f-95f4-2b6176ece1e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Flutter Sleeve Dress",
    price: 158,
    color: "Mint Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/adbdb72b-ce53-43a5-9c34-766859af4130.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Halter Neck Popover High/Low Dress",
    price: 148,
    color: "Pink Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49ae6112-bd9c-4c3c-9f61-99bdef84d42b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral One-Shoulder Ruffle Dress",
    price: 79,
    color: "Periwinkle Multi Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78035d04-1f28-4c84-b306-f35a3f73209f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Ruched Chiffon Faux Wrap Dress",
    price: 148,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e0ef053-ec33-461a-9077-1d1c997baa0e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Ruched Long Sleeve Minidress",
    price: 57.39,
    color: "Blue/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f30c47e-48de-4244-a390-2734f73772a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Ruched Long Sleeve Minidress",
    price: 57.39,
    color: "Mustard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6b64a627-3f9e-4dcf-892f-5b8f089f000c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Ruffle A-Line Dress",
    price: 148,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c664ddbc-0ed4-4d44-866d-6b05f85b0f3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Florida Strapless Minidress",
    price: 168,
    color: "Blazing Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/99af8475-2560-4015-8dea-d1a230f41f43.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Florida Strapless Minidress",
    price: 168,
    color: "Summer White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/82ab7187-6432-42d1-9124-d7119f0af7f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Grecian Cover-Up Dress",
    price: 74,
    color: "White Navy Arrow Pri",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9635c5ea-7983-48d4-95d5-72e24c6e62e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Grecian Cover-Up Dress",
    price: 74,
    color: "Black White Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/270e54e9-0e4d-4fad-89bd-7dd7e64c7235.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Grecian Cover-Up Dress",
    price: 74,
    color: "Rose Navy Arrow Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1bf21b1-cbd4-41f2-8981-75cf84e26de1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Faux Wrap Dress",
    price: 98,
    color: "Rust",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbaf5856-c6bf-43f5-a634-a374d34111e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Faux Wrap Dress",
    price: 98,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/79834774-6e52-404a-9106-f85d7ad01136.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Faux Wrap Dress",
    price: 98,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a93ef5b5-cb09-4993-b298-ff00dd1bdd11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Faux Wrap Dress",
    price: 98,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd2fbd29-2139-4ee4-bdde-c648e869b926.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lina Lace Sheath Dress",
    price: 83.4,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc4e0c8d-ba75-44f9-879c-c5adb86a96d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lina Lace Sheath Dress",
    price: 83.4,
    color: "Pink Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17c8f840-a0c5-49e9-951d-6f4377ee2d72.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Faux Wrap Dress",
    price: 105,
    color: "Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3509f6ac-3c03-4ad0-9a25-e6162859950b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Faux Wrap Dress",
    price: 105,
    color: "Rust",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8fb9f35-686a-4e5d-8ec4-256c8075ea8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lounge Ribbed Long Sleeve Maxi Dress",
    price: 88,
    color: "Heather Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/090b01a3-be3b-4d57-8053-0171f2dc8618.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lounge Ribbed Long Sleeve Maxi Dress",
    price: 88,
    color: "Onyx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/284f1e75-2f9c-4707-ab4b-7a15143846cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Madison Sleeveless Maxi Dress",
    price: 39,
    color: "Tropical Breeze",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9aa52b4e-2e38-4e0e-a7cc-93f1e64644e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Madison Sleeveless Maxi Dress",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/35f87488-5d85-442e-938a-3e01b4c0a8a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Maxi Dress",
    price: 68,
    color: "Red Lipstick",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a885202-c798-42ab-b89f-907d0bb62d7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Maxi Dress",
    price: 68,
    color: "Khaki",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae102704-0410-4238-af3e-70a8520f1254.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Maxi Dress",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf511bba-5771-40a2-8510-a7418cdc40ce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Maxi Dress",
    price: 68,
    color: "Midnight Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f8e1679-3b94-4293-be26-2002e0378e5b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Maxi Dress",
    price: 68,
    color: "Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c2d9ed6-e946-4eb2-98a0-3cc6095bac88.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Nicole Sweetheart Neck Cocktail Dress",
    price: 148,
    color: "Bright Fuchsia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/244f3585-5142-49d3-8f4e-018b657a91a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Nicole Sweetheart Neck Cocktail Dress",
    price: 148,
    color: "Dark Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a16870f5-7be7-4b43-9c9e-c33e570b7f1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Nicole Sweetheart Neck Cocktail Dress",
    price: 148,
    color: "Peacock Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9820363a-c774-4c0e-a621-478624cc0df1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Nicole Sweetheart Neck Cocktail Dress",
    price: 148,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/09d4e902-7017-44b3-ac00-01495d2b68ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Off the Shoulder Dress",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a0e2f64a-0295-4308-bfbe-c9f88a86b80e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One-Shoulder Jersey Gown",
    price: 228,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b21f3eb5-7a27-446c-803b-7737c9097555.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One-Shoulder Jersey Gown",
    price: 228,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/74684a90-fcd4-4cf2-9655-3e6617a906e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One-Shoulder Jersey Gown",
    price: 228,
    color: "Burgundy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49c2ad80-5f89-4d8d-96ab-a10ef09ad2d1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One-Shoulder Jersey Gown",
    price: 228,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a5ee52f-caf7-4915-9412-ca981de7eab9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One-Shoulder Jersey Gown",
    price: 228,
    color: "Emerald",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f67ef3a1-1ad0-4daf-90b9-9d09923b4a85.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One-Shoulder Jersey Gown",
    price: 228,
    color: "Royal Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d7dc0afd-3278-4c41-96c5-22fef0bd3878.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Stitch Sleeveless Cotton Blend Sweater Dress",
    price: 69,
    color: "Tan Lead",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c6c7232-33fe-4e6c-ad50-f9151e7a9792.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plissé Empire Waist Midi Dress",
    price: 39.2,
    color: "Desert Palm",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c2a12af0-7641-487b-bbd6-7571591efe89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plissé Empire Waist Midi Dress",
    price: 39.2,
    color: "Thrush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/713ebceb-61f8-4bd8-b86c-c247fc483add.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plissé Empire Waist Midi Dress",
    price: 39.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa7c05b8-87b4-40b3-9676-b9f98abd4f41.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plissé Empire Waist Midi Dress",
    price: 39.2,
    color: "Wild Ginger",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2dc2077-8284-4070-8b47-bc6757d87a9d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Razor Cut Back Minidress",
    price: 33.6,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e90ab45f-cea5-4479-a9ea-e044b8c7170e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Razor Cut Back Minidress",
    price: 33.6,
    color: "Chocolate",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d25ec98-1a34-4fcf-ab1b-40bd280aa462.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Real Love Print Maxi Dress",
    price: 168,
    color: "Meadow Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ffa3c00b-4eca-40bd-ab1d-ccab3c0eba1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Real Love Print Maxi Dress",
    price: 168,
    color: "Twilight Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f81e4472-eb57-45d7-8ddb-d71d29c575dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Real Love Print Maxi Dress",
    price: 168,
    color: "Daylight Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b16aeb86-d7bd-4565-bd62-d98854f5f78c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Renee Pointelle Cotton Blend Midi Dress",
    price: 450,
    color: "Deep Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b3ec320-248e-4c07-b237-1dd165bea16a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Renee Pointelle Cotton Blend Midi Dress",
    price: 450,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e0eef34d-a4a7-47b4-83e9-93aceb16bef0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Long Slipdress",
    price: 78,
    color: "Bubblegum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4850c8ac-a32c-430c-af77-f597e0de42de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Long Slipdress",
    price: 78,
    color: "Heather Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b40aee1b-63d6-4ade-9a8f-369dfc8bcfed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Long Slipdress",
    price: 78,
    color: "Peach",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c5d4403-00d3-4e72-a49f-4b9624d29cf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Long Slipdress",
    price: 78,
    color: "Sienna",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3accac1f-e744-4b81-b1ba-889b4247a98e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Long Slipdress",
    price: 78,
    color: "Onyx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/29d54c92-f481-45ee-a007-dd85e02ecdcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Long Slipdress",
    price: 78,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2a45393-3c6d-432f-af63-8e1459ee8532.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Cotton Poplin Dress",
    price: 54,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3f81309-f5ef-40bf-a3b0-8090d64f2de6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Cotton Poplin Dress",
    price: 54,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f398d76-98db-47a1-9287-83350cfb08ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Long Sleeve Body-Con Dress",
    price: 24.99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/89eb50c1-0397-438b-80ee-d1282097f159.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Long Sleeve Body-Con Dress",
    price: 24.99,
    color: "Beige Burnout Tiger Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e1ef55cd-5682-4f8f-8dc8-5dc881afdcfe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Long Sleeve Body-Con Dress",
    price: 24.99,
    color: "Green- Purple Aura Ao",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62604423-871c-4bd8-929b-38aa0ce85d51.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Long Sleeve Body-Con Dress",
    price: 24.99,
    color: "Black Bella Rose Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b795369-0f68-4a7d-b75b-1478a9418fc5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Scalloped Lace Cocktail Dress",
    price: 138,
    color: "Black/ Nude",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f626fc41-1f16-4900-bebb-0803b15da180.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Scalloped Lace Cocktail Dress",
    price: 138,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0471b990-8879-4e81-8043-589b077d1522.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Scalloped Lace Cocktail Dress",
    price: 138,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4da4166-12db-4c45-a6aa-0613ab64bddf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Scarf Print Crêpe de Chine Fit & Flare Maxi Dress",
    price: 158,
    color: "Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d760b976-6214-485b-989a-96b0c00f0abd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sheer Ruffle Shoulder Cocktail Dress",
    price: 158,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/829b0575-28d2-4bd0-8fdc-ed63a2302512.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shirred Puff Sleeve Cotton Prairie Dress",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b5e488b-427a-4f8b-af30-010e68f21eb3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shirred Puff Sleeve Cotton Prairie Dress",
    price: 39,
    color: "Ivory Seventies Flatfloral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5196c2a8-cae1-4fb3-92d1-7b90d1ad21e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shirred Puff Sleeve Cotton Prairie Dress",
    price: 39,
    color: "Coral Alyssa Groove Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72770574-bc7b-41df-9fdd-87edab4bff5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Cocktail Dress",
    price: 229,
    color: "Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16e874d5-1ee5-4e62-ab96-11afc5a59687.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Cocktail Dress",
    price: 229,
    color: "Summer Plum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8cbf1547-e134-407d-af92-f621904d4f9e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Cocktail Dress",
    price: 229,
    color: "Jade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a9b656b-a4a2-4f26-b5da-eddfc9f908e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Cocktail Dress",
    price: 229,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17d65257-2868-469b-975a-68a37a2a0ea0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Cocktail Dress",
    price: 229,
    color: "Lavender",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/932e32c4-2d4c-490f-b6d6-59a27913118f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Cocktail Dress",
    price: 229,
    color: "Royal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d9118e8b-8b7e-4d77-9d8e-f21fefb326a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Faux Wrap Dress",
    price: 99,
    color: "Teal Abstract Peonies",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc7df1e8-16ab-47a9-849a-487da13e327b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Faux Wrap Dress",
    price: 99,
    color: "Navy Leopard Sketch",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fec1c49f-538d-43f9-b7db-c23a3823a002.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Faux Wrap Dress",
    price: 99,
    color: "Teal Mirage Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aff4f197-a435-43ab-b256-2db24e974ae5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Faux Wrap Dress",
    price: 99,
    color: "Green- Pink Daisy Blur",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9b444139-b202-4576-90af-0b9a985f3f98.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Faux Wrap Dress",
    price: 99,
    color: "Black Brocade Blossom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10bb440b-2fde-4356-90b5-71ba2f451316.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Faux Wrap Dress",
    price: 99,
    color: "Black- Beige Distorted Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77127e48-67d1-4f08-a7c6-6132ae8c1173.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Faux Wrap Dress",
    price: 99,
    color: "Violet Ultra Oil",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8760d9b9-559e-46d9-953f-d46edfd6b168.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Fit & Flare Dress",
    price: 118,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ba3afc7-5f76-47d3-8906-f9ba6850c242.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Maxi Dress",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a63ee11-5766-41d6-85ed-f70d8eadc086.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Maxi Dress",
    price: 39,
    color: "Blue Surf",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8807119b-615d-4eb1-ae9f-2410dfcf216a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Maxi Dress",
    price: 39,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f812bdc-a387-4560-9c6a-6db610b07d8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Reversible Maxi Dress",
    price: 49,
    color: "Coral Amber",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc8d0fdf-5022-499b-8e29-14e4f4bc4233.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Reversible Maxi Dress",
    price: 49,
    color: "Tan Lead",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d26f0e3c-331c-4ff0-a94b-be60d472f56f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Reversible Maxi Dress",
    price: 49,
    color: "Rust Umber",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e4e6c8c3-6b72-455c-b34c-0b3286865819.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Reversible Maxi Dress",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b73dac45-12e9-4fca-a876-d1fbe5c42be1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Reversible Maxi Dress",
    price: 49,
    color: "Green Agave",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f1072ba-f6f4-489a-b101-f7378ae11c0b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Swing Dress",
    price: 35,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71d26666-e41b-4914-acdc-24905e0d408e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Swing Dress",
    price: 35,
    color: "Pink Bride",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a38e5a7f-b3af-420c-b6ba-49c938518b16.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Swing Dress",
    price: 35,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0df8ecf-a9cc-468c-af98-c05cab81c209.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sleeveless Swing Dress",
    price: 35,
    color: "Green Sorrel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49dda9bd-1912-4fc6-9d47-5f47fbef7c4f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stripe Smocked Dress",
    price: 51,
    color: "Blue/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0bbac039-cf80-4467-895c-2a2043bfabc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stripe Smocked Dress",
    price: 51,
    color: "Navy/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f43c0fac-10c6-4f55-9208-5420b07c5fa2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Front Lettuce Edge Minidress",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19575ceb-35e5-4a8b-86ec-686295847539.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Sleeve Shift Dress",
    price: 129,
    color: "Hot Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1eee6469-b6ae-4c4f-a430-45ed2d14bafb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Sleeve Shift Dress",
    price: 129,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fd225ab-d8de-4277-a0d5-1abbe97cca58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Sleeve Shift Dress",
    price: 129,
    color: "Lush Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ff649bb-b068-421e-93fc-f96de73873ce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Sleeve Shift Dress",
    price: 129,
    color: "Deep Royal Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ce4295c5-c1d3-4a99-8130-5a165846d583.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Sleeve Shift Dress",
    price: 129,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f876d82-d185-42b2-b3fa-c2d660738dc5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tiffany One-Shoulder Midi Dress",
    price: 148,
    color: "Peacock Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a93dd005-c1cb-4b24-98de-c04b207b3e73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tiffany One-Shoulder Midi Dress",
    price: 148,
    color: "Dark Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88744c1c-b317-4ca7-89ce-beadf4bfdb02.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tiffany One-Shoulder Midi Dress",
    price: 148,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9033bc27-7b03-473c-8ef8-4a36c441b3e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tiffany One-Shoulder Midi Dress",
    price: 148,
    color: "Garnet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87c875b2-9b85-49db-a2ce-bcf280e677f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Pink Dune Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b09af9d8-8bde-421e-a34d-20bd10302b8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Pink Rosette",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c33a949-7708-4cda-92fd-ccefe11ca56d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Green Vetiver Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d8426275-902a-45d7-a8b3-369653bfeb5e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Green Beetle Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3080e336-8b87-40b1-951c-34aac8178a0b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Pink Vivacious",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4596b642-27f8-433d-9b9e-da58c5a8dc5e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Green Basil",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa40f976-d6d1-48ab-afad-9ca508489cad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Blue Infinity",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a744dc6b-317e-4988-ae25-7b3da03c7df9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9729bf57-64cb-4a50-a99f-5c3116b0fea8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Tan Lead Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c86fc5dd-3d5c-4c69-a33e-67989ac799e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Navy Night Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9fd8e538-70f6-4f21-9e89-722f1766f2e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ff4b1d4-d9db-4b4b-8150-7e84c23e84e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ruched Side Sleeveless Dress",
    price: 49,
    color: "Grey Medium Charcoal Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cee78bcb-85ed-421e-b598-45b2c5b591f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Body-Con Dress",
    price: 59,
    color: "Green Basil",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d438cf5d-9ada-405d-bef8-e723f82096be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Body-Con Dress",
    price: 59,
    color: "Navy Iris Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f47c698-9df2-4460-a93d-8228c86918c9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Body-Con Dress",
    price: 59,
    color: "Brown Umber",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/93a12716-b9e6-44ca-a398-c94654f20ac9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Body-Con Dress",
    price: 59,
    color: "Navy Iris Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f47c698-9df2-4460-a93d-8228c86918c9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Body-Con Dress",
    price: 59,
    color: "Green Beetle Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dfee2621-6636-4030-ab91-0d920bc7766f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Body-Con Dress",
    price: 59,
    color: "Beige Oatmeal Medium Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b860aa65-873f-48c3-bf5c-12287227a23f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Body-Con Dress",
    price: 59,
    color: "Purple Evening",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b36ebf97-a118-4407-ac57-d652da28bcaf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6ecb87f-653e-411f-8e1a-32ac30b84811.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Blue Bel Air",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/105cea86-1f31-4bd0-9c89-08ffbf30d004.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c9acc9c-6ae6-4f43-a812-ad9604e67cfd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Blue Surf",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a8daffd-4248-491c-91d6-ccc4fbb490e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Green Basil",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/205b587c-d0f7-4c25-827a-41bce7239cc4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Grey Beluga",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/344a64cc-82b8-49b2-b81e-3aa831ae66b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Olive Sarma",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a18950ed-268c-4dc2-b671-975a5893d094.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Woven Favorite Maxi Dress",
    price: 39,
    color: "Pink Rosette",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd02c5ae-446f-4164-8836-6bcb809e74a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Back Cover-Up Maxi Dress",
    price: 58,
    color: "Blue Denim",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d348e7b7-f058-456c-940f-b6e1e9046dc2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Back Cover-Up Maxi Dress",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e1041a52-b5be-4afb-8e00-1ee6d8b1dcd7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Jersey Maxi Dress",
    price: 47.6,
    color: "Purple Dark",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/54d3ebef-82bb-435f-a81d-33e773ef8dff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Jersey Maxi Dress",
    price: 47.6,
    color: "Red Lipstick",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/42f6d0dd-c473-4de0-ad82-5747501c3e09.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Jersey Maxi Dress",
    price: 47.6,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8d73df9-5fd2-4a1f-a52e-c8d69a5ba9cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Jersey Maxi Dress",
    price: 47.6,
    color: "Pink Polish",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/203db3e9-7713-4576-979a-01a168cfe3a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Jersey Maxi Dress",
    price: 47.6,
    color: "Jade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63e38b64-4178-4be0-8edb-0a531e195f1e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Jersey Maxi Dress",
    price: 47.6,
    color: "Blue Mazarine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/69ec7059-a4de-43d5-9da7-2bc2aab2759a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Jersey Maxi Dress",
    price: 47.6,
    color: "Midnight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0591bddc-e959-46d5-b781-18f39971ac52.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Violet Minidress",
    price: 108,
    color: "Carrott Ginger",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/221ef979-138a-4cf2-a1d6-bd10164be0b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Back Cutout A-Line Dress",
    price: 148,
    color: "Summer White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ad1962c4-2586-42a1-bb00-f6c8cc9b7736.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Back Cutout A-Line Dress",
    price: 148,
    color: "Light Dream Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/90d4600a-5539-4378-884e-3a284b9a5e49.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Light Sheath Minidress",
    price: 128,
    color: "Morning Glory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/786a1343-c28a-4500-9c61-323d31f83402.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Light Sheath Minidress",
    price: 128,
    color: "Summer White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3c393ec9-0275-4725-a9f4-39f8008437b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Ruffle Minidress",
    price: 148,
    color: "Light Dream Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/beaca7f1-9903-40c8-bbec-c7cee9f6c47d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Ruffle Minidress",
    price: 148,
    color: "Summer White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ec8eacc-5611-4860-b60b-1266ee447967.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Ruffle Strap Minidress",
    price: 148,
    color: "Forget Me Not",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a023df3-5625-4b33-bbf1-a8cd179cca8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Ruffle Strap Minidress",
    price: 148,
    color: "Summer White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f0b695ca-3eed-4bb2-9b22-ab3325b695a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Ruffle Strap Minidress",
    price: 148,
    color: "Summer White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a037aae0-c399-4b96-bfa8-52961903d688.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Ruffle Strap Minidress",
    price: 148,
    color: "Chalk Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/304756d8-3a38-4d98-8946-cf9f593a9050.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Emma Rose Kenny Strapless Minidress",
    price: 29.5,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/acd7323d-7511-4a0f-b6f8-7ffe559e0c65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Emma Rose Kenny Strapless Minidress",
    price: 29.5,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ef2f03b8-1459-470f-b649-fc2cade3f586.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const topsProduct = [
  {
    name: "Absolute Camisole",
    brand: "HALOGEN®",
    description:
      "Adjustable straps and a simple scooped neckline style a stretchy camisole that's perfect for layering.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9fd6701d-020e-486f-bbe0-1891abaa9caf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "All Day Oversize T-Shirt",
    brand: "ZELLA",
    description:
      "A long and loose T-shirt with raw-edge seams and a ribbed V-neckline boasts supersoft and drapey jersey you'll want to wear all day.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e2c0a061-2059-4fea-87f6-21b532fd29cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ballet Neck Cotton & Modal Knit Elbow Sleeve Tee",
    brand: "CASLON®",
    description:
      "Micro-ribbing creates subtle texture and added stretch for a soft cotton-and-modal knit tee styled to be universally flattering with a ballet neckline and elbow sleeves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac142202-d277-4159-b6c6-773a60d6e5e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Boxy Camp Shirt",
    brand: "OPEN EDIT",
    description:
      "A boxy, oversized cut adds to the charm of this breezy camp shirt with cuffed elbow-length sleeves and a chest patch pocket with just-right droop.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d646a33-a985-44cb-a496-d6066306b3a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Boxy Crop T-Shirt",
    brand: "OPEN EDIT",
    description:
      "Top your high-waist styles with every color of this staple cropped T-shirt in soft organic cotton, and you'll be set for casual fun 24/7.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3c9980d6-67e8-44c0-8bac-d9a0ef64baff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Boyfriend T-Shirt",
    brand: "FREE PEOPLE",
    description:
      "This everyday-favorite T-shirt is made from organic fibers in an oversized fit with slouchy dropped shoulders.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49a92242-50cf-423e-aa49-2709dc23184e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Brightside Tank Top",
    brand: "MADEWELL",
    description:
      "Slim, sexy and streamlined, this year's perfect racerback tank has a high neckline and cutaway armholes. Made of ribbed jersey, it's a winner with just about any bottoms.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ad89ad7-9371-4b24-935f-1bf9a0bbf2ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bubble Sleeve Smocked Blouse",
    brand: "ASTR THE LABEL",
    description:
      "Decadent puffed sleeves frame this crisp poplin blouse styled with shapely smocking and a flouncy peplum.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ea9a6cd-1de7-4f65-afd9-12c36d1557ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cap Sleeve Satin Blouse",
    brand: "HALOGEN®",
    description:
      "This workhorse blouse is crafted from smooth satin with slight sleeves and an airy keyhole back.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46b22d95-83e9-4ccf-a53b-0129e6f6acf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Central Drapey Shirt",
    brand: "MADEWELL",
    description:
      "Madewell's feminine take on a slightly oversized shirt in a superdrapey fabric. Effortless and cool with a soft silhouette and easy open sleeves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b3b67a21-68c9-4a92-acdd-17365489c69a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Clean Stretch Cotton Tank Top",
    brand: "TOPSHOP",
    description:
      "A staple tank is made from stretch-kissed cotton for an easy way to layer some softness into your everyday looks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f7c5954-7269-4c82-9b62-6d5bbd34af84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Contrast Bound Tank",
    brand: "TOPSHOP",
    description:
      "A contrasting trim frames the neckline and shoulder straps of a knit tank top for a classic, relaxed appeal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2c394f8-1729-44f9-a681-f6ec4fcdc281.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cool Girl T-Shirt",
    brand: "BP.",
    description:
      "This closet-essential T-shirt is crafted in a cool cropped fit from soft organic cotton for effortless everyday charm.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95305c64-e9d4-4f26-a801-336721ca580e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cotton Tank",
    brand: "CASLON®",
    description:
      "This classic cotton tank is a wardrobe staple for layering or wearing solo.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45de25f2-2742-4e13-baac-4a7209f52e67.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Crewneck Rib Bodysuit",
    brand: "OPEN EDIT",
    description:
      "Lounge or layer in this everyday knit bodysuit fashioned with a fitted silhouette and soft rib fabric.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56bef3b9-3573-4b8f-a12b-66f26ba79bcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Crop Ribbed Tank",
    brand: "BP.",
    description:
      "This cropped rib-knit tank designed with a scoop neck is a cool, comfortable closet staple that's ready for warm weather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/452288dc-dc22-40bd-bc01-2311aa848b8f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cross Front Blouse",
    brand: "HALOGEN®",
    description:
      "Move easily from desk to dinner in this polished shirttail blouse detailed with a lightly draped crossed front.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fb6c971-3db1-432b-8341-63cb5754ac8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Energy Tank",
    brand: "ZELLA",
    description:
      "Add an extra jolt of energy to your next workout with this lightweight and breathable tank.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a43c3f98-d61d-4ff4-b35d-f6cc2e2e8a60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Everyday V-Neck T-Shirt",
    brand: "NORDSTROM",
    description:
      "Cut from an exceptionally soft, drapey knit, this classic V-neck is sure to work its way into your weekly lineup, either layered or in the spotlight on its own.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/39fa1b40-6fe9-4c94-a49a-a88a6f8bc20e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Eyelet Popover Top",
    brand: "WIT & WISDOM",
    description:
      "Eyelet embroidery sweetens a floaty popover blouse styled with a gathered split neck and blouson sleeves for boho flair.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/37953894-7e33-49f0-813a-c8ba4c666009.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Flutter Sleeve Rib Knit T-Shirt",
    brand: "1.STATE",
    description:
      "Woven flutter sleeves provide a dreamy contrast to the rib knit of a V-neck T-shirt that's an elevated take on a standby style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4bcc66ae-d884-4ba5-b797-b7593ba398a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Flutter Sleeve Top",
    brand: "CECE",
    description:
      "Airy flutter sleeves frame this versatile, lightweight top with smocked shoulders and a tie neck.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/234009d9-806b-4b21-b6db-d1fdf1d08a49.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Get Together Long Sleeve Top",
    brand: "FREE PEOPLE",
    description:
      "Charm all day long in this drapey dolman-sleeve pullover topped with an elongated neckline that dips off one or both shoulders.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d72c183-985d-4714-9b20-a449c0270660.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High/Low Crepe Blouse",
    brand: "NYDJ",
    description:
      "This lightweight crepe blouse has a roomy fit and relaxed high-low hem and comes in a closetful of lively colors and prints.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/853e3fa3-ab9d-4a64-82ca-2fb1d3fc5bcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jasmine Top",
    brand: "KUT FROM THE KLOTH",
    description:
      "Boast an ultrafeminine vibe in this pretty chiffon blouse with sleeves styled to wear buttoned at the wrists or neatly folded up and tabbed at the elbow.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a9939998-4f01-411c-8017-e467c9d666e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Long Sleeve Off the Shoulder Crop Top",
    brand: "TOPSHOP",
    description:
      "Channel retro glamour with this ruched long-sleeve top featuring a cropped hemline and off-the-shoulder neck.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/08c9f484-2213-4a0a-b9d4-73375ff72d00.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Long Sleeve Tee",
    brand: "HALOGEN®",
    description:
      "Cut from a tissue-weight stretch Tencel® modal with a soft and silky feel, a slim tee comes in a choice of rich shades.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8181f74-3e92-46c1-90c3-8ed8619ff2dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Night Owl Bodysuit",
    brand: "FREE PEOPLE",
    description:
      "Date night is calling with this blousy tank bodysuit styled with daring dipped necklines front and back.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77e689b2-ef6a-4aae-9cd5-9352a14f7b31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Off the Shoulder Sheer Chiffon Blouse",
    brand: "1.STATE",
    description:
      "Exposed shoulders and slender straps accentuate the feminine feel of this breezy and subtly sheer chiffon blouse.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19cf1e87-35a9-499b-a453-67c42f4e5b86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Oversize Button-Up Shirt",
    brand: "TREASURE & BOND",
    description:
      "The perfect white shirt is cut from smooth, crisp stretch cotton in an oversized fit so there's even more of it to love.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5257ef5-65a5-4a66-a8e5-858bbf53c7ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Pintuck Ruffle Short Sleeve Blouse",
    brand: "CECE",
    description:
      "No charm was spared in the making of this sweet top, from the ruffled accents to the covered buttons to the pintucked details lining the front.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc92e646-336e-478b-826f-2c66f97d682a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Puff Sleeve Mixed Media Top",
    brand: "CECE",
    description:
      "Swiss dots texture the puff sleeves of a stretchy crepe-jersey top with a slim fit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4951e3e6-bb7c-4bbe-b070-c935722ac881.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Puff Sleeve Rib Knit T-Shirt",
    brand: "1.STATE",
    description:
      "Beautifully puffed sleeves make this rib-knit style a fancier version of your favorite T-shirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/def55d79-dc0a-4ea0-9c23-19777bd3f968.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Raw Edge Tank",
    brand: "HALOGEN®",
    description:
      "Raw-edge chiffon whispers at the neckline and armholes of a day-to-night tank cut from light and drapey crepe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/64e1a001-d0dd-4321-9901-b9c4e70e22b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ready for This Long Sleeve T-Shirt",
    brand: "FREE PEOPLE",
    description:
      "A slouchy oversized silhouette and dropped shoulders add to the laid-back comfort and easygoing style of a comfy cotton shirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58150d16-d7a2-4954-b4f9-9526c31f961a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Relaxed Long Sleeve T-Shirt",
    brand: "ZELLA",
    description:
      "This relaxed long-sleeve T-shirt refuses to stay in the gym, so get one in every color so you have something to wear to lunch after your workouts.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/896f2309-0150-4fca-b4fe-163347f2aba2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ribbed Baby Tee",
    brand: "BP.",
    description:
      "Channel throwback vibes in this classic baby tee, made from a fine rib and finished with ruffled lettuce edging.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/00236838-d464-49f0-a23d-bae3409de9d1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rounded V-Neck T-Shirt",
    brand: "CASLON®",
    description:
      "A gently rounded V-neckline, short sleeves and chest pocket style a lightweight slub-knit T-shirt that's available in a multitude of colors.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/065d7902-d91e-4bf9-979a-af4eeda03592.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ruffle Sleeve Split Neck Blouse",
    brand: "VINCE CAMUTO",
    description:
      "When it comes to statement sleeves, there's no such thing as too many ruffles, as this split-neck blouse proves in the prettiest way.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32ee58ea-18de-4070-bc10-aba185c6ad4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rumple Fabric Blouse",
    brand: "VINCE CAMUTO",
    description:
      "A bit of a rumple adds richness to this versatile top with a casual V-neck and an easy pull-on style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b98fd65-95d4-4486-b432-2d8ba3e1b9bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rumpled Satin Blouse",
    brand: "VINCE CAMUTO",
    description:
      "Lustrous rumpled satin gives rich polish to a favorite V-neck blouse billowed with a pleated center and shirred back.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95bf9ff5-cd09-4cf4-8a75-2cb8a8a8fc9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Shrug It Off Cotton Blend Surplice Top",
    brand: "FREE PEOPLE",
    description:
      "Mini ribs detail a trim-fitting top from soft stretch cotton with a layered wrap look and a flattering surplice neck.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9d451c3-d336-4794-b828-3a2b200ec5c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Somethin Bout You One-Shoulder Bodysuit",
    brand: "FREE PEOPLE",
    description:
      "A single puffed sleeve adds throwback style to this one-shoulder bodysuit rendered in a versatile solid hue.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edd17b86-1797-41d3-9412-fde4110a5ef0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Split Neck Long Sleeve T-Shirt",
    brand: "CASLON®",
    description:
      "Change up your toss-on-a-T-shirt routine by adding this long-sleeve style cut from eco-friendly jersey and sporting a split neckline.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b33d1a3b-2087-4930-b214-2b4f9d583f8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Square Neck Puff Sleeve Top",
    brand: "ASTR THE LABEL",
    description:
      "Bring the romance to your OOTD in this charming top styled with pretty puffed sleeves, smocked details and an alluring square neckline.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95fbec5c-bf2c-401d-94a3-102abc9c00f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Stretch Cotton Tee",
    brand: "SKIMS",
    description:
      "A tried-and-true classic, this fitted tee made from stretch-cotton jersey is from Kim Kardashian West's highly sought-out SKIMS.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c5c5fd6-3df6-4e30-a5af-893041f219dc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Dobby Classic Shirt",
    brand: "TREASURE&BOND",
    description:
      "This classic button-down is a closet must-have that can be dressed up or down for the 9-to-5 and beyond.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a360981-180e-4ac9-8ae3-bd9cea33d964.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Drapey Classic Shirt",
    brand: "TREASURE&BOND",
    description:
      "An ultrasoft and lightweight cotton-blend shirt is perfectly drapey, with a partially hidden front-button closure adding sleek interest to the look. Tuck it in front to nail an effortlessly laid-back look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b268450-f130-4862-b4d5-35b904cdefec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Rib Tank",
    brand: "TREASURE&BOND",
    description:
      "Every closet needs this essential layering tank textured with fine ribbing.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/09a93b35-2178-47c8-a870-af1636329239.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Ringer V-Neck T-Shirt",
    brand: "TREASURE&BOND",
    description:
      "Ringer styling gives this heathered T-shirt a sporty, retro vibe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ba89322-8b00-4e30-bdac-be99f64a1040.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Stripe Woven Tunic",
    brand: "TREASURE&BOND",
    description:
      "Made from gauzy cotton, this loose-fitting woven tunic with classic menswear detailing easily styles from day to night.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1d8c5618-41e1-4644-b8a5-47c1ab11a5e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "U-Neck Tank",
    brand: "TOPSHOP",
    description:
      "Here's the scoop: this dipped-neck tank is the lightweight layer that every closet needs.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19954ca4-97a4-4e28-9b2c-0fce8d592d73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Washed Crop Swing Tank",
    brand: "BP.",
    description:
      "A cropped length and swingy cut enhance the warm-weather vibes of this scoop-neck tank cut from a supersoft washed cotton-and-modal blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31fb028e-0ed2-452f-b76d-2e54f5dd002c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Cotton Crewneck T-Shirt",
    brand: "MADEWELL",
    description:
      "The secret's out: Madewell has updated the crewneck on their best-selling T-shirt for even more vintage vibes. Fashioned of light and airy slub jersey, this T-shirt is live-in-it soft and perfectly cut—one to tell your friends about, in other words.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43ad9041-fade-4a6d-b18c-80c94fdaaa72.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Cotton V-Neck Pocket Tee",
    brand: "MADEWELL",
    description:
      "A classic pocket tee with a deep V-neckline is spun from soft, lightweight slub cotton in a spectrum of colors that add punch to your everyday wardrobe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3de94aea-d47c-45bd-92db-e7e7d139e5b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Cotton V-Neck T-Shirt",
    brand: "MADEWELL",
    description:
      "Madewell's updated their best-selling T-shirt, removing the pocket and giving it an easier, freshened-up fit along with a wider V-neck. Fashioned of light and airy slub cotton, this T-shirt is live-in-it soft and perfectly draped—one to tell your friends about, in other words.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d17ebd0-6cb8-478d-8fa3-2cd99bf68eb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Whisper Shout Cotton V-Neck Tank",
    brand: "MADEWELL",
    description:
      "Madewell updates its best-selling light and airy cotton tank with a relaxed fit and wider V-neck while keeping the lived-in softness the brand is known for.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/828537eb-f8ca-4e49-b9ca-89bbe185589a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Satin Button-Up Shirt",
    brand: "TOPSHOP",
    description:
      "Stand out in this versatile button-up crafted from smooth satin and framed by short dolman sleeves with rolled cuffs.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abef09d6-f3d4-4e54-9d8e-aae36590f677.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "You Rock T-Shirt",
    brand: "FREE PEOPLE",
    description:
      "A swingy slubbed-knit tee in a slightly cropped fit is one you can rock day and night—making it an extra-versatile pairing choice for other wardrobe faves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a066fdc-0f33-4bb9-9ab1-1ecbf1750a97.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const topsData = [
  {
    productName: "Absolute Camisole",
    price: 15,
    color: "Beige Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9fd6701d-020e-486f-bbe0-1891abaa9caf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Absolute Camisole",
    price: 15,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78c7caba-4ccb-441e-b011-1d88a9366d4d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Absolute Camisole",
    price: 15,
    color: "Purple Bloom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e4692cb6-c38d-4054-88e1-2c7f4b0628a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Absolute Camisole",
    price: 15,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/34be81a0-de99-4c3d-b9d3-b888fd29f1a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Absolute Camisole",
    price: 15,
    color: "Beige Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9fd6701d-020e-486f-bbe0-1891abaa9caf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "All Day Oversize T-Shirt",
    price: 45,
    color: "Burgundy Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e2c0a061-2059-4fea-87f6-21b532fd29cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "All Day Oversize T-Shirt",
    price: 45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1da15f6a-1213-4ca7-ac7d-65268a2bc80f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "All Day Oversize T-Shirt",
    price: 45,
    color: "Green Urban",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb086b20-2a64-48b2-9dc9-13446473f8e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "All Day Oversize T-Shirt",
    price: 45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1da15f6a-1213-4ca7-ac7d-65268a2bc80f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "All Day Oversize T-Shirt",
    price: 45,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d0503f20-0b93-4f27-ac75-5ad3a7448b22.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ballet Neck Cotton & Modal Knit Elbow Sleeve Tee",
    price: 25,
    color: "Navy- White Elmer Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac142202-d277-4159-b6c6-773a60d6e5e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ballet Neck Cotton & Modal Knit Elbow Sleeve Tee",
    price: 25,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fae4c56e-0993-429d-80ad-107e7b0915f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ballet Neck Cotton & Modal Knit Elbow Sleeve Tee",
    price: 25,
    color: "Pink Chintz",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b9ab11e-3f53-4240-8ce2-8bb401a13126.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ballet Neck Cotton & Modal Knit Elbow Sleeve Tee",
    price: 25,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c260a2f0-ee1d-4750-ad53-01234ce54b6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ballet Neck Cotton & Modal Knit Elbow Sleeve Tee",
    price: 25,
    color: "Navy- White Elmer Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac142202-d277-4159-b6c6-773a60d6e5e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Camp Shirt",
    price: 49,
    color: "Brown Shiitake",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d646a33-a985-44cb-a496-d6066306b3a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Camp Shirt",
    price: 49,
    color: "Orange- Ivory Daisy Distort",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc0e918d-95c5-4cc9-8ad6-6908d2156b35.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Camp Shirt",
    price: 49,
    color: "Ivory Dove",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e4e94c2a-cd82-464f-86e4-c3d56b9e02fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Camp Shirt",
    price: 49,
    color: "Teal- Ivory Current",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58bee786-5d5a-4f42-911c-a10b08d3b680.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Camp Shirt",
    price: 49,
    color: "Brown Shiitake",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d646a33-a985-44cb-a496-d6066306b3a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Crop T-Shirt",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3c9980d6-67e8-44c0-8bac-d9a0ef64baff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Crop T-Shirt",
    price: 19,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/651a583c-907e-4628-b2c8-563117a42c6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Crop T-Shirt",
    price: 19,
    color: "Yellow Elfin",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c04a893c-baf2-4445-92da-7e586a724ac3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Crop T-Shirt",
    price: 19,
    color: "Purple Spectre",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4d91e6f2-4ed3-4440-8c89-77899bbad918.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Crop T-Shirt",
    price: 19,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/53f5135a-a062-4ee3-a95b-78636be03c66.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boxy Crop T-Shirt",
    price: 19,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/53f5135a-a062-4ee3-a95b-78636be03c66.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend T-Shirt",
    price: 58,
    color: "Burnt Coral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49a92242-50cf-423e-aa49-2709dc23184e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend T-Shirt",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9bdd6b2-4a36-4a0a-b301-54b179758960.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend T-Shirt",
    price: 58,
    color: "Aphrodite",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea931d5a-fb49-4a61-805e-b47e4702ca94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend T-Shirt",
    price: 58,
    color: "Burnt Coral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49a92242-50cf-423e-aa49-2709dc23184e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend T-Shirt",
    price: 58,
    color: "Navy Peony",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c84431b8-eceb-49ff-a5d3-165a6d468346.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend T-Shirt",
    price: 58,
    color: "Quill",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/50ea877e-21d6-44f1-a54f-72ef01aa6a05.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ad89ad7-9371-4b24-935f-1bf9a0bbf2ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92ed1b85-d117-4427-93bf-1b77b173ac62.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/53339d73-265f-4fb4-8709-7dd03555504d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "Lighthouse",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c9eedd57-c8c0-4fa7-8e8a-5af92c756770.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "Dark Nightfall",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7ebe0d47-ee34-493d-88a0-dc9dcfe0c5b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/30821092-d93d-465f-9f64-00d94b06da34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/44b3c1db-ba8e-4265-93dc-b20a348655da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brightside Tank Top",
    price: 38,
    color: "Dark Nightfall",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7ebe0d47-ee34-493d-88a0-dc9dcfe0c5b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bubble Sleeve Smocked Blouse",
    price: 65,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ea9a6cd-1de7-4f65-afd9-12c36d1557ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bubble Sleeve Smocked Blouse",
    price: 65,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aee11bfd-a9ee-4782-bfb5-3b65d6b7c833.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bubble Sleeve Smocked Blouse",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c695ccac-c377-406c-9c24-1f9ec1b455c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bubble Sleeve Smocked Blouse",
    price: 65,
    color: "Lemonade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e968b6d-65c4-4f47-9c1a-dd2e6ebf503c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bubble Sleeve Smocked Blouse",
    price: 65,
    color: "Lemonade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e968b6d-65c4-4f47-9c1a-dd2e6ebf503c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Blue Geo Sticks",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46b22d95-83e9-4ccf-a53b-0129e6f6acf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/014e01ad-6d81-4e42-80f6-040b228f4954.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Black Floral Bunches",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ba12821-9ab4-43a8-8f79-8a6077aa92a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6397d30a-2042-417d-8b48-274c89c9a182.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "White Multi Floral Paint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/248f608d-70fd-4a01-8839-a7111791193f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3997055d-d83a-463a-9006-414efac1a622.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/014e01ad-6d81-4e42-80f6-040b228f4954.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Black- Ivory Fast Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/60e6c92d-3725-47aa-9373-757287dab663.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Green Floral Fresh",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b7289f9-16da-479d-981d-4f13d4cccd89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Green Foliage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3d88d39c-6ad0-43d4-aeed-64981e27e81a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Pink- Black Ink Strokes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b5197b7-a730-4b29-95b4-20573e3a0ef1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Black- Blue Fan Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8cb991ed-9197-4eca-b747-57e732118b81.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2275bdd2-5111-4613-918f-cefdddcffd2b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cap Sleeve Satin Blouse",
    price: 49,
    color: "Ivory Multi Vivid Strokes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bf21d28-2339-40d3-9462-25030e884586.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Central Drapey Shirt",
    price: 82,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b3b67a21-68c9-4a92-acdd-17365489c69a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Central Drapey Shirt",
    price: 82,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b3b67a21-68c9-4a92-acdd-17365489c69a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Stretch Cotton Tank Top",
    price: 18.5,
    color: "Black2",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f7c5954-7269-4c82-9b62-6d5bbd34af84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Stretch Cotton Tank Top",
    price: 18.5,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/412c7bc9-6cf9-4364-a1c8-ae623b61a385.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Stretch Cotton Tank Top",
    price: 18.5,
    color: "White2",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4a4afcfc-1fcd-4980-ac06-cf918aa90ffc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Stretch Cotton Tank Top",
    price: 18.5,
    color: "Black2",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f7c5954-7269-4c82-9b62-6d5bbd34af84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Contrast Bound Tank",
    price: 13,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2c394f8-1729-44f9-a681-f6ec4fcdc281.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Contrast Bound Tank",
    price: 13,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10e987bc-42a7-4968-84a7-a0e95adf311c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Contrast Bound Tank",
    price: 13,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ade8747-aa88-4c9a-b27c-cc075a2b8607.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Contrast Bound Tank",
    price: 13,
    color: "Light Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a26f38ae-959e-4fb2-aa19-61dc22f6e720.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Contrast Bound Tank",
    price: 13,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ade8747-aa88-4c9a-b27c-cc075a2b8607.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cool Girl T-Shirt",
    price: 7.8,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95305c64-e9d4-4f26-a801-336721ca580e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cool Girl T-Shirt",
    price: 7.8,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bcaf1dfa-0c51-4d8c-8f5f-1a71a5ccf3f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cool Girl T-Shirt",
    price: 7.8,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95305c64-e9d4-4f26-a801-336721ca580e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Tank",
    price: 19,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45de25f2-2742-4e13-baac-4a7209f52e67.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Tank",
    price: 11.4,
    color: "Pink Bride",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8e07edc-1ee6-4455-9613-6cf592d9a10d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Tank",
    price: 19,
    color: "Navy- White Nina Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43795e7c-a8f4-423d-b0a5-854c770b3b1c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Tank",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/84b0014d-b0bc-483d-954e-c1236dd79eed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Tank",
    price: 19,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45de25f2-2742-4e13-baac-4a7209f52e67.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Tank",
    price: 11.4,
    color: "Pink Bride",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8e07edc-1ee6-4455-9613-6cf592d9a10d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Tank",
    price: 19,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac66d06f-446b-4989-bab7-6a06eee1c9f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Rib Bodysuit",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56bef3b9-3573-4b8f-a12b-66f26ba79bcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Rib Bodysuit",
    price: 19,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/692451cd-fa27-41cd-a085-9de5540c1b59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Rib Bodysuit",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56bef3b9-3573-4b8f-a12b-66f26ba79bcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crop Ribbed Tank",
    price: 19,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/452288dc-dc22-40bd-bc01-2311aa848b8f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crop Ribbed Tank",
    price: 19,
    color: "Olive Mayfly",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0fb9f2c2-461c-4ab2-8497-06734532c70a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crop Ribbed Tank",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afa33a59-6c68-48f7-b7e5-93c108595641.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crop Ribbed Tank",
    price: 19,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c768ccdf-eb88-48e7-829a-04f728d9bfdb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crop Ribbed Tank",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afa33a59-6c68-48f7-b7e5-93c108595641.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Blue Palace",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fb6c971-3db1-432b-8341-63cb5754ac8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Black- Green Wildflower Fileds",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5f76fce0-20d5-4d26-9e22-355e143a4fbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c365184c-865d-410b-9262-49bb16c0cab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c365184c-865d-410b-9262-49bb16c0cab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Ivory Multi Vivid Strokes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23cc6388-b3d5-49c6-aba7-b5f21ee75c8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Black- Ivory Paper Specks",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ed7cd1d-fa6d-4632-b152-39913b098c61.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/60e0468a-d7ba-4a5a-951f-20afa2581669.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Black Multi Cloud Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0158cd82-9728-49a3-b702-62e15a8ad9ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Pink Fluid Lines",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cff41482-f1e6-416a-9b00-20cd59527dd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "White Multi Floral Paint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e308d9cf-0ee9-4140-82df-a7cd101598d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Pink- Black Ink Strokes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0acd6f7c-94b7-4dcc-a90c-639daa07f3e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Purple Bloom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/130ec275-b721-4809-9d16-adee84b4b473.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Blouse",
    price: 59,
    color: "Teal Nile",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d6a7648f-7ad3-4318-8c38-39f7718809a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a43c3f98-d61d-4ff4-b35d-f6cc2e2e8a60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "Pink Wild Aster",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f2bc8e7-1587-4a0f-afb1-648c3dd10a6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "Burgundy Spice",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/358f6f6e-cf8b-4a3d-be8e-7618c289f288.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "Green Berry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c76b9eba-41cc-4a9c-b634-5e3d23955a00.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "Orange Fiesta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/33c138a8-8026-48e3-a564-9c051e92a50a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6616da3-f09e-45cf-8a5f-c86dc1b680a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "Tan Dusk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e633252-f376-4107-8998-8dc6e07723c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Energy Tank",
    price: 25,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6616da3-f09e-45cf-8a5f-c86dc1b680a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday V-Neck T-Shirt",
    price: 19,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/39fa1b40-6fe9-4c94-a49a-a88a6f8bc20e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday V-Neck T-Shirt",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c074a4ad-2e1c-4319-a0df-8eb25759315f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday V-Neck T-Shirt",
    price: 19,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e2977cdb-7b1f-4409-be67-d554cd33ebe7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday V-Neck T-Shirt",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c074a4ad-2e1c-4319-a0df-8eb25759315f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday V-Neck T-Shirt",
    price: 19,
    color: "Tan Cobblestone Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b57ef89-6bbf-4119-86d4-ae692857843c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday V-Neck T-Shirt",
    price: 19,
    color: "Blue Falls",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/84b9e89b-6126-476e-87b6-28be986eaadd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday V-Neck T-Shirt",
    price: 19,
    color: "Pink Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/47248010-43f0-4a45-b9e8-33916d86cadb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Popover Top",
    price: 78,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/37953894-7e33-49f0-813a-c8ba4c666009.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Popover Top",
    price: 78,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31fa7d56-131b-4059-a8e3-2579cab141b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Popover Top",
    price: 78,
    color: "Jewel Lavender",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c7d556e-2977-4daf-aa7b-b684917c43d7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Popover Top",
    price: 78,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/37953894-7e33-49f0-813a-c8ba4c666009.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Popover Top",
    price: 78,
    color: "Rose Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1936c96c-1fe3-40a9-890c-b9f463c2e432.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Berry Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4bcc66ae-d884-4ba5-b797-b7593ba398a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Sunlight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a151e883-c66e-4bab-81a0-46f68054126f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3826b954-0e89-4177-b331-69372485cccc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Iris Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8034559a-dc62-4035-86d6-9c4924dc9127.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Soft Ecru",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1d351c2f-9110-473e-8391-6324571a095e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Sunlight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a151e883-c66e-4bab-81a0-46f68054126f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Violet Tulle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/22da1780-09d5-40f6-b21f-4b7a896ec640.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72b46664-2323-4fb6-867a-094d6efcf116.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d6c5e28a-2f37-4b18-983b-615f7cd3e46c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Rib Knit T-Shirt",
    price: 59,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/204f6706-a943-4463-8937-f5710084889e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Top",
    price: 79,
    color: "Garden Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/234009d9-806b-4b21-b6db-d1fdf1d08a49.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flutter Sleeve Top",
    price: 79,
    color: "Garden Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/234009d9-806b-4b21-b6db-d1fdf1d08a49.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Get Together Long Sleeve Top",
    price: 68,
    color: "Silver Brooke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d72c183-985d-4714-9b20-a449c0270660.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Get Together Long Sleeve Top",
    price: 68,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1da29af0-87a0-4aee-a1fd-1455e6a32640.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Get Together Long Sleeve Top",
    price: 68,
    color: "Dancing Queen",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e4157a4-8849-42c5-8eb4-176bcd636cce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Get Together Long Sleeve Top",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b1059275-f28f-486e-93c9-1b65153b8f39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Get Together Long Sleeve Top",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b1059275-f28f-486e-93c9-1b65153b8f39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Black Petals",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/853e3fa3-ab9d-4a64-82ca-2fb1d3fc5bcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Mangrove",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45bfcd84-f649-417e-beb4-8f8f694232a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Charlie Dots",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5458f758-fda6-4e25-a87f-54682a6b47d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Whistler Flowerets",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8156e8ea-bce6-4009-aff9-78cc26db544f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Printemps",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77446c04-9f53-4484-9876-6cec801a21b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Olivia Dots",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87ac4ac8-4948-4c22-8f26-e0640d987be2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Clear Sky",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/29513039-9cd8-4c02-af0c-b34b8c72d852.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Sanctuary",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea0292a8-82d3-42c7-9bd0-f748e158f023.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Beverly Abstract",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2361a372-f3d1-46ce-a04f-27a6da3260be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Palais Petals",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f165e21a-8494-4046-af66-d10d38b6e69e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Riviera Blossoms",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed63bfdd-6439-4602-86bf-1280787eecb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Ombre Reef",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26f9be6f-ad3e-4de9-85b6-39a7e43c8703.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Lowell Jaguar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7bb424c6-a182-476c-88b1-8736cdea1fdc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Frosted Willow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/833c8e06-1594-4b4b-831a-200871aeecf5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Ditsy Field",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/944a8be2-5a35-4778-bf02-fb87e493b0fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Montpellie",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df06828c-2834-4f12-8fbc-8552cb5dbfa3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Bonnieux",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fb2f2a1-0f37-490b-bf7a-0924d207eb69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Parisian Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06aa5911-0dcd-4a45-96cb-e7dc77eebe96.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Oakdale",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7eaf32d2-d59a-45b3-bb10-72af3131307b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Newberry Springs",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cb738234-8d8f-49dd-8b4a-b88bb647495a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Kingsley",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c763664d-ab12-44da-82fe-a0f07aeb5740.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Arabesque Dots Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4d6bd270-94e4-4d41-9999-19bf1826eb9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Eastford Blossoms",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/851c8ae6-6376-4e0c-99e5-a324c8c73ae2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Villaneuve",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/898c1c42-0dd7-4c27-a72c-45e93e7be57c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Carnation",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2696eb18-0b33-42fa-ba19-db990a7cfb9c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Bonnieux",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fb2f2a1-0f37-490b-bf7a-0924d207eb69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Isabella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20e1483e-327e-4cbe-9ad0-07624b2cde89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Twilight Blossom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7e887f8d-faf3-4d85-9bd2-ef1d977feeed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Piper Dots",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/29ff15cc-8c8f-46dd-ba21-ea76b5e47824.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Unfoulrdsu",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c6db29d9-085e-4d3c-b146-49531d98ecc0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Avignon Petals",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3605905b-bc1b-4916-a68b-de04cc78a9ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Peony Promenade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3c4882c8-beac-42d6-8f77-cec972d1de45.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Islandia Geo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46543f3c-6b83-4faf-8e6b-1eb9bc877de8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Pink Peony",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b76422a3-6ec3-4dfe-a046-ce36b5ad7352.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Gable Sprigs",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/42b0ca9b-77d7-4f0c-89a1-67a432580644.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Wintertide",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e0d08bd1-1162-4083-977a-84672cf664ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Floral Avenue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/741bc619-2d41-46a1-8bd3-2ddb5bc34c24.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Stone Cat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae76c1c7-fa16-47be-8780-1a5c04169ba9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Hugo Dots",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/21c84f8c-2b86-4d57-8bbe-0cce8cad8e18.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Copperhead",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/64ccfe81-f065-4c47-a9bb-7ca796f15311.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Brockton",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f6003ba8-b45c-4248-b727-0fe95882eb43.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Marceau",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d413cd6d-887a-49f6-8c1d-4432c30b65e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Ballast Blooms",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/14ee03ac-b74c-494c-a0af-da123675ff89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High/Low Crepe Blouse",
    price: 89,
    color: "Mirabeau",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0869a0f1-74c1-4184-9139-1d1d1c076141.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Versaille Boquet Ivory/ Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a9939998-4f01-411c-8017-e467c9d666e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Marseille Ivory/ Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76f1c1e9-ef98-4943-9c59-b1bf44aafd60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Albi Stripe Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/07503677-69df-444d-8002-c7683248b357.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Bordeaux Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e146a9cb-d54d-457a-bd03-daca3c0c2152.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Grenoble Blues",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3afdd866-5044-4b5b-9587-f64da95523c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Albi Stripe Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/beffe662-307e-4204-8886-7fcb8397ae7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Quartu Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/880db33a-a974-45cc-9a13-a5926b54baa6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Lyon Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d01b5aee-d6a2-4ca5-81cc-75bb09e463e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Quartu Ivory/ Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5570e7e1-e2b3-46d9-acc8-298dbf4d4d38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Black/ White Dot",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/153fa553-4336-4e0d-8c96-4530ee963bdc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Cuneo Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b277c54e-ab47-4d36-b6c1-0f7c980f7785.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Watercolor Ivory/ Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f0b72cc-ce43-4efd-bbcf-6546c007a944.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Lyon Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d01b5aee-d6a2-4ca5-81cc-75bb09e463e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Strauss Boquet Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f23dc7c1-ebb5-4fc3-aee5-a50186e86afa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jasmine Top",
    price: 69,
    color: "Bordeaux Coral/ Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/09a154ba-cb87-409c-8cbd-e7dd22adc353.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Off the Shoulder Crop Top",
    price: 52,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/08c9f484-2213-4a0a-b9d4-73375ff72d00.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Off the Shoulder Crop Top",
    price: 52,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5fe57c0c-f5d0-4c0b-91e5-4c11688087f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Off the Shoulder Crop Top",
    price: 52,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8c58b5e-ea2c-4bbe-9cb6-8257f010bdbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Off the Shoulder Crop Top",
    price: 52,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8c58b5e-ea2c-4bbe-9cb6-8257f010bdbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8181f74-3e92-46c1-90c3-8ed8619ff2dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Blue Stork",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf1c9ca3-de71-41c9-b0c1-dcdec7dd658a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Black- Ivory Cloud Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/59500421-f70a-4522-a9c4-db13420234db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Grey Dark Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3afa2d12-da61-410c-bdc0-75c64f7d56dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/efc83db3-133a-4df1-aa82-1aa137980923.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Purple Spectre",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/caff64c6-8107-412b-8ce7-37e23219a201.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/efc83db3-133a-4df1-aa82-1aa137980923.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Heather Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1a3e8c1-3d62-4449-a400-e589b95b50e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Blue Falls",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4334d9f2-dd96-4c73-831c-a2a75e756fcf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f37eee67-05fe-4959-b96b-f42b65892fe0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Pink Flamingo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/352697f5-254b-450c-969a-d3c5f2c7941a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Sleeve Tee",
    price: 39,
    color: "Pink Glass",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/980c5d27-66f8-420c-a58c-b999ad83f51c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77e689b2-ef6a-4aae-9cd5-9352a14f7b31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Nutmeg",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/993acb5c-4694-4579-b78e-f38f00f225fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Juneberry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/64003286-7b50-4a7d-b879-5160191b8e69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Nutmeg",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/993acb5c-4694-4579-b78e-f38f00f225fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77e689b2-ef6a-4aae-9cd5-9352a14f7b31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77e689b2-ef6a-4aae-9cd5-9352a14f7b31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77e689b2-ef6a-4aae-9cd5-9352a14f7b31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Night Owl Bodysuit",
    price: 68,
    color: "Juneberry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/64003286-7b50-4a7d-b879-5160191b8e69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Off the Shoulder Sheer Chiffon Blouse",
    price: 47.4,
    color: "Pink Taffeta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19cf1e87-35a9-499b-a453-67c42f4e5b86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Off the Shoulder Sheer Chiffon Blouse",
    price: 47.4,
    color: "Pink Taffeta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19cf1e87-35a9-499b-a453-67c42f4e5b86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Off the Shoulder Sheer Chiffon Blouse",
    price: 47.4,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b629d381-db62-4315-b686-395099bfe4b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Off the Shoulder Sheer Chiffon Blouse",
    price: 47.4,
    color: "Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02925a88-9fbf-4c4a-a8a7-14b580b205d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oversize Button-Up Shirt",
    price: 47.4,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5257ef5-65a5-4a66-a8e5-858bbf53c7ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oversize Button-Up Shirt",
    price: 47.4,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5257ef5-65a5-4a66-a8e5-858bbf53c7ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Ruffle Short Sleeve Blouse",
    price: 69,
    color: "Sweet Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc92e646-336e-478b-826f-2c66f97d682a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Ruffle Short Sleeve Blouse",
    price: 69,
    color: "Lush Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8fead70-f22f-45cb-b07b-869b7aed6207.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Ruffle Short Sleeve Blouse",
    price: 69,
    color: "Soft Ecru",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/48b0a8cb-ca16-499b-8061-0d27f2b2241c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Ruffle Short Sleeve Blouse",
    price: 69,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9343bb8c-75e5-4f98-87f1-52e000f3d7a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Ruffle Short Sleeve Blouse",
    price: 69,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a08b35b4-d321-44fb-ae95-736ea526ecf5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Ruffle Short Sleeve Blouse",
    price: 69,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b02e3a6e-cb5f-4af5-af76-5892f3231556.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Ruffle Short Sleeve Blouse",
    price: 69,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b02e3a6e-cb5f-4af5-af76-5892f3231556.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4951e3e6-bb7c-4bbe-b070-c935722ac881.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Lush Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e5778b4b-e389-410d-bc96-695bd848c827.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Pink Begonia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e1aaf059-e73e-4dd5-8e1c-6afe436656bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Fire Ball",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19b4e33b-0ece-4bfc-b42f-9873e1c2b0c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Geranium",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c4e3f5b4-2b34-42e7-bb13-3c8bbfe5ed03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4951e3e6-bb7c-4bbe-b070-c935722ac881.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Bright Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a9cdf47d-94f2-4ced-b614-de92c24a247b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Mixed Media Top",
    price: 49,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d26aa92c-a8bb-44aa-9b04-f52061ea4198.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Rib Knit T-Shirt",
    price: 49,
    color: "Sunlight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/def55d79-dc0a-4ea0-9c23-19777bd3f968.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Rib Knit T-Shirt",
    price: 49,
    color: "Violet Tulle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5ce2923-686c-463d-a472-13afe749199a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Rib Knit T-Shirt",
    price: 49,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8daa539a-8038-4174-a452-211f5a60eb55.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Rib Knit T-Shirt",
    price: 49,
    color: "Pink Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/14eab6b7-b8e3-4182-8938-3bbb7c66d713.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Rib Knit T-Shirt",
    price: 49,
    color: "Ultra White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4febddfe-d6c9-4765-bd1a-310e0f5493c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Rib Knit T-Shirt",
    price: 49,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed2bacf9-d421-43ea-8b9d-dd2806008ad1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Puff Sleeve Rib Knit T-Shirt",
    price: 49,
    color: "Sunlight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/def55d79-dc0a-4ea0-9c23-19777bd3f968.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/64e1a001-d0dd-4321-9901-b9c4e70e22b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea023d7d-429c-4f52-ae2a-af6a72927e8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Black Multi Cloud Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a67164d-24e8-4b58-80bf-6e2fd8856435.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Purple Bloom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2fc84d4-f5d8-4d8a-8500-8543e28240ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Blue Palace",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c8450d8-16b9-491c-9091-4f4b93d27967.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Teal Nile",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b984513e-06cd-472e-8e34-a021249cafef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Black- Ivory Paper Specks",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ee01d8c8-a758-4a65-8c4f-cfaa928db3dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Black- White Paint Dooodle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c2cf0499-b8bd-45cd-83ed-2adaeb88b678.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Black- Green Wildflower Fileds",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7ba38ec-9e43-40bc-9682-8c3834515c26.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d9461d5-c17c-4df3-968a-52eaa30bdf30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Green Floral Fresh",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/30db33ed-87da-4e4d-812a-e2c593943231.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ec893b2-d023-4156-9b2f-436dfadfd7d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "White Multi Pressed Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87c2a815-5cd9-4972-9f11-7c73719b01cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Pink Flamingo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d6311067-b789-48fb-9f06-4f916b65da93.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ec893b2-d023-4156-9b2f-436dfadfd7d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Pink- Black Ink Strokes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f26b2d6e-b3e6-41ae-9f66-555747deb9ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Edge Tank",
    price: 49,
    color: "Green Sorbet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ec302d7-204e-42a8-be81-96c66b665b44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ready for This Long Sleeve T-Shirt",
    price: 58,
    color: "Army Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58150d16-d7a2-4954-b4f9-9526c31f961a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ready for This Long Sleeve T-Shirt",
    price: 58,
    color: "Washed Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5c43e69-632b-4ecd-8275-472335334dba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ready for This Long Sleeve T-Shirt",
    price: 58,
    color: "Washed Amethyst",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26f8505d-38e3-4f4a-8315-89f4640f9509.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ready for This Long Sleeve T-Shirt",
    price: 58,
    color: "Warm Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b60df5a5-e314-4bbd-bdf8-6a4214f8b72b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ready for This Long Sleeve T-Shirt",
    price: 58,
    color: "Agean Sea",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a0ff5dd-84ff-4439-a95d-738e59407c03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ready for This Long Sleeve T-Shirt",
    price: 58,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b53438ee-e63a-41fa-9f46-5c0abbd4acb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/896f2309-0150-4fca-b4fe-163347f2aba2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Red Couture",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e94ce674-b434-482c-9e43-a52b87faeabe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Blue Clematis",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/39752447-ecbd-414e-bba2-25b7af19f7e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Blue Coronet Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/331d3f3e-2c36-46a3-94a9-713f3b204c35.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f251aee8-ee74-4ca1-9991-b4bf5f9e77ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Teal Reef",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c20a6e55-2934-4cc4-89ab-7dfb8051a80e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Blue Thistle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16b276cc-03ab-422e-9175-d1efbbf4bc47.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/896f2309-0150-4fca-b4fe-163347f2aba2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Green Katydid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3682730f-f84e-4545-92fe-deae93f6cab5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Relaxed Long Sleeve T-Shirt",
    price: 45,
    color: "Pink Atomic",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b3c3c6fd-0139-4f8a-a686-dd175c159dae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Baby Tee",
    price: 4.8,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/00236838-d464-49f0-a23d-bae3409de9d1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Baby Tee",
    price: 4.8,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a53fae4-ca3a-488d-a8f6-be0304495876.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Baby Tee",
    price: 4.8,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3974e80c-359f-4305-bc90-43ec6f348486.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Baby Tee",
    price: 4.8,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a53fae4-ca3a-488d-a8f6-be0304495876.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/065d7902-d91e-4bf9-979a-af4eeda03592.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Pink Bride- White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/35bc3dc9-abbf-4b51-bf81-94e6d659cc37.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c64d8ae4-13dc-45c2-aad7-26d8a2599b34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Black- White Julia Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13ba4942-0e57-4d9d-acf1-f6dc3b90ba98.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Heather Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6446eae3-89b8-4466-8405-4e14e0a4a9a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Blue Cornflower",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0cfb1545-39ce-4faf-bb92-1ce42efccffc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Pink Flamingo- White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/35bc3dc9-abbf-4b51-bf81-94e6d659cc37.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Blue Abstract Blots",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b117ce03-2439-4edb-b042-20aa8d4d76e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Blue Cashmere",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10c2c943-f960-4319-bc1f-98d186246bf3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9eb84b7e-356a-4c96-9b73-e65ac88b2f13.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Red Chinoise- White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b58506aa-c2ac-4eb9-888b-4d477c93db79.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Blue Vallarta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c4eb798-014d-4b74-99ac-9626a1aaa6f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Yellow Popcorn- White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c45eca9a-2456-4d09-a9b9-8b49267e5469.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a39f1155-9ee8-4a97-a1d2-6645229721fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Pink Flamingo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/529a99d9-8bf9-4f2b-91ff-9e48863e31b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Yellow Popcorn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a29a061-0f9e-434c-a35e-7fc1efa28f0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Blue Vallarta- White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/816a35b8-1d5b-427a-b7e4-19da3e7d05a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rounded V-Neck T-Shirt",
    price: 19,
    color: "Yellow Popcorn- White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c45eca9a-2456-4d09-a9b9-8b49267e5469.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Classic Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32ee58ea-18de-4070-bc10-aba185c6ad4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4716f51c-30d7-42f1-9bd7-b6936c11932c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e0a2ccf-1394-4460-829d-9eb4f7daca80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Blue Willow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78ff7564-cb63-48d5-8818-57b68b994e1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf0c329c-2a28-4d7c-9e04-e2a03d0eaa58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb048574-af60-4572-9868-06a3fe72af84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Canyon Coral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62614e7c-5428-457b-94aa-c85c5662f40d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/38a01efe-969c-4eac-a42b-057ab1dcf7b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/580dbc54-5ef0-4eb1-aedf-86f1cc5b0610.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Cozy Peach",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/487d1ef0-400d-44eb-b8a7-80a5042f9f3b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Iris Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5bb85e1-22c2-4e6c-9042-6a4a85c925fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Hot Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5d3cca9b-317d-437d-9729-0d3a14b34814.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Fresh Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ccb97556-a852-444d-bf6a-93f6a3d318cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Blue Jay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a18fdcf4-8426-4768-b5a6-63bbec294de9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruffle Sleeve Split Neck Blouse",
    price: 79,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/580dbc54-5ef0-4eb1-aedf-86f1cc5b0610.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b98fd65-95d4-4486-b432-2d8ba3e1b9bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "Hot Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/75f76347-8f52-454b-81f1-be09f6ebab89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c71b67b6-d100-44b4-96fd-652e78055894.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "Sunburst Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8e9b80e-4572-46ad-9536-4a19581144ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c71b67b6-d100-44b4-96fd-652e78055894.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "Deep Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/324f3564-9e98-4de3-8c08-6c62117adf87.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "Blue Jay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bdf7cb0d-4161-47c1-951d-5f8d0557574a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "Deep Azure",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a36dbac5-9438-4866-9bcd-55f312409257.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumple Fabric Blouse",
    price: 74,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d07cf116-ac2d-4246-8dfb-113360c3e570.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Hot Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95bf9ff5-cd09-4cf4-8a75-2cb8a8a8fc9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/64569ec4-7283-42d4-a456-28a5da8a100a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Blue Jay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/07e40eea-c4c2-4f25-b8fd-d229f371977c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a415d807-3510-4c8f-aade-9c682140a0f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Classic Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e34d3c3c-28c2-4233-a970-f709335ffd6d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Pink Horizon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a21713bd-b2df-4641-8bea-86bd5d94ba25.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Deep Azure",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62f5b50a-9f52-49a3-9e9e-c6d63fbd7a35.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Blaze Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f310cf40-e32e-47f6-a6cb-7935692f080e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a415d807-3510-4c8f-aade-9c682140a0f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rumpled Satin Blouse",
    price: 59,
    color: "Sunburst Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cab1b67d-ffdc-40a6-a572-6c409e59514a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shrug It Off Cotton Blend Surplice Top",
    price: 28.8,
    color: "April Dew",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9d451c3-d336-4794-b828-3a2b200ec5c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shrug It Off Cotton Blend Surplice Top",
    price: 28.8,
    color: "Bright White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a27720cc-a441-4353-815a-ef5464b82c49.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shrug It Off Cotton Blend Surplice Top",
    price: 28.8,
    color: "Galvanized",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a87762c-b94d-4859-b3a3-048535d40fb6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shrug It Off Cotton Blend Surplice Top",
    price: 28.8,
    color: "Bright White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a27720cc-a441-4353-815a-ef5464b82c49.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Somethin Bout You One-Shoulder Bodysuit",
    price: 68,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edd17b86-1797-41d3-9412-fde4110a5ef0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Somethin Bout You One-Shoulder Bodysuit",
    price: 68,
    color: "Dancing Queen",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5431d514-bdc2-4906-be4a-823f24b9642f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Somethin Bout You One-Shoulder Bodysuit",
    price: 68,
    color: "Crisp Morning",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e750460-1bc8-435c-8c95-5bc672b567e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Somethin Bout You One-Shoulder Bodysuit",
    price: 68,
    color: "Sunset Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5245187-2950-4649-8cfa-a988d86e6656.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Somethin Bout You One-Shoulder Bodysuit",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fe14f4e-5562-4383-9779-0d15cdcd738f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Somethin Bout You One-Shoulder Bodysuit",
    price: 68,
    color: "Honey Eyed",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/40d5c04a-7242-447d-abe0-88d7a7c2aaae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Somethin Bout You One-Shoulder Bodysuit",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fe14f4e-5562-4383-9779-0d15cdcd738f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Blue Cornflower",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b33d1a3b-2087-4930-b214-2b4f9d583f8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7378e28c-6604-4713-8911-5385e01b8aee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Olive Floral Camo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df02933e-f6ef-4097-8746-2f920a1368ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Purple Bloom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7220e625-4a84-4afa-abb9-063d0acfdc91.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Blue Cornflower",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b33d1a3b-2087-4930-b214-2b4f9d583f8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Yellow Popcorn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/61a985fc-007b-4274-9ada-0ff55a485c8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Green Sorrel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a9ce0a9-33b4-44ab-89e6-0db3610a6cb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Blue Vallarta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8d2554b-e031-4cc7-855f-1b78322c4a60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c60cb5d-a6b5-4c72-8c6a-9e44e4a02467.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5789e4f3-3e02-446d-aff0-ccce47baeafa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Pink Flamingo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f932fbba-8135-4926-a69e-2d236119e8b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Split Neck Long Sleeve T-Shirt",
    price: 39,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/38602830-4021-4d47-887e-beeb1b38e726.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Neck Puff Sleeve Top",
    price: 55,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95fbec5c-bf2c-401d-94a3-102abc9c00f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Neck Puff Sleeve Top",
    price: 55,
    color: "Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aabcc3bc-a9b2-4d13-b9a1-ec28fd03ae09.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Neck Puff Sleeve Top",
    price: 55,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/008c8bfe-0a54-4ddb-9edb-c94c0be184c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Neck Puff Sleeve Top",
    price: 55,
    color: "Pale Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0058e5b1-0ec4-433b-8c6a-18a0f69aea02.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Neck Puff Sleeve Top",
    price: 55,
    color: "Sage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20fc503b-7e5b-4bbc-a777-dfd633e58fc5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Neck Puff Sleeve Top",
    price: 55,
    color: "Pale Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0058e5b1-0ec4-433b-8c6a-18a0f69aea02.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Soot",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c5c5fd6-3df6-4e30-a5af-893041f219dc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Bone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb5b0ed4-41b9-439b-a56d-a9f549892451.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Light Heather Gray",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e354aaf8-5865-431b-b8d8-3cbccc6a2d83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0762da9a-4326-46fd-9b84-6db33035c0ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Bone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb5b0ed4-41b9-439b-a56d-a9f549892451.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Kyanite",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b0359253-5e23-4619-9123-34dfb35063e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Rose Clay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/35a9863f-feda-463c-aedf-a988329754c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Tee",
    price: 48,
    color: "Sedona",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d64c4a4d-ca98-46af-8ff4-efd7460e3321.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Dobby Classic Shirt",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a360981-180e-4ac9-8ae3-bd9cea33d964.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Dobby Classic Shirt",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a360981-180e-4ac9-8ae3-bd9cea33d964.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Dobby Classic Shirt",
    price: 59,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ff39ca8d-47ff-4d10-8b36-232a5602c38e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Drapey Classic Shirt",
    price: 69,
    color: "Blue Fog",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b268450-f130-4862-b4d5-35b904cdefec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Drapey Classic Shirt",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fde2bc9a-584f-489b-90e0-c15439755987.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Drapey Classic Shirt",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fde2bc9a-584f-489b-90e0-c15439755987.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Drapey Classic Shirt",
    price: 69,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13d654ad-723e-4b13-87ff-6faaebbd4612.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Brown Umber",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/09a93b35-2178-47c8-a870-af1636329239.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/75f2ef36-a647-420a-80a3-dc12fc3c555f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Red Poppy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f68cdff0-8ffd-4c31-b8da-9d27a3d16c89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Beige Oatmeal Medium Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/391de8c7-d076-4c80-ba61-bf7cc77ffeb0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Grey Medium Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1895295-34b1-4854-abbf-3be305aa8142.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Pink Geranium",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dae46723-343b-451a-abb0-82c44bcaa382.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de63bf92-c9d5-46fb-b72c-f3ca2626995a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Beige Oatmeal Medium Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/391de8c7-d076-4c80-ba61-bf7cc77ffeb0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Rib Tank",
    price: 20,
    color: "Green Charlock",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/019dd353-49d6-48ef-87d6-4e84e935fb48.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ringer V-Neck T-Shirt",
    price: 39,
    color: "Green Vetiver- Ivory Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ba89322-8b00-4e30-bdac-be99f64a1040.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ringer V-Neck T-Shirt",
    price: 39,
    color: "Pink Smoke- Red Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d42bb5ba-0074-454b-9aa7-2640e1b429c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ringer V-Neck T-Shirt",
    price: 39,
    color: "Grey Dark Charcoal White Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c4a4fa4-0db5-4149-9f83-3bffb15e2650.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ringer V-Neck T-Shirt",
    price: 39,
    color: "Green Vetiver- Ivory Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ba89322-8b00-4e30-bdac-be99f64a1040.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ringer V-Neck T-Shirt",
    price: 39,
    color: "White- Navy Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/133cd48e-25e8-4063-a475-4c4a416a949c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Stripe Woven Tunic",
    price: 27.97,
    color: "Blue- White Larch Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1d8c5618-41e1-4644-b8a5-47c1ab11a5e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Stripe Woven Tunic",
    price: 27.97,
    color: "Blue- White Larch Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1d8c5618-41e1-4644-b8a5-47c1ab11a5e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "U-Neck Tank",
    price: 16,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19954ca4-97a4-4e28-9b2c-0fce8d592d73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "U-Neck Tank",
    price: 16,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac018982-5262-4f41-9a60-ae1807a86602.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "U-Neck Tank",
    price: 16,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6902d8de-170c-4aa9-b90c-9e70acc748c9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "U-Neck Tank",
    price: 16,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6902d8de-170c-4aa9-b90c-9e70acc748c9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Washed Crop Swing Tank",
    price: 6,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31fb028e-0ed2-452f-b76d-2e54f5dd002c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Washed Crop Swing Tank",
    price: 6,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc8504e5-2da3-49ff-9f12-54ceac18df34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Washed Crop Swing Tank",
    price: 6,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc8504e5-2da3-49ff-9f12-54ceac18df34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "Faraway Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43ad9041-fade-4a6d-b18c-80c94fdaaa72.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0081f41f-72ac-4594-a7e1-3731fe0747f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "Dusty Twilight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d720d112-9eb5-47ee-a989-1c2c2145fc82.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "Rusty Torch",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43a6200c-0238-46e9-981e-5f7e5f1fb569.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "Sun Faded Mint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d334f597-bf64-49df-a55b-95a3d494f9bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "Sun Faded Mint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d334f597-bf64-49df-a55b-95a3d494f9bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "Heather Iron",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f39010c2-1fe6-41e5-8fbd-47d288f1abcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton Crewneck T-Shirt",
    price: 19.5,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/533a1f7f-a9af-459d-a476-50a45ae68184.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck Pocket Tee",
    price: 19.5,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3de94aea-d47c-45bd-92db-e7e7d139e5b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck Pocket Tee",
    price: 19.5,
    color: "Heather Mercury",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e50099bc-b0f3-49b4-96b9-9128eb79813e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck Pocket Tee",
    price: 19.5,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c74c4515-d608-4a63-b784-197053928f4f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck Pocket Tee",
    price: 19.5,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c74c4515-d608-4a63-b784-197053928f4f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Afterglow Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d17ebd0-6cb8-478d-8fa3-2cd99bf68eb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1fae42e0-c827-442f-899f-2d354053b34e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bc4f1329-82dd-47d2-a7d3-4b9c14076006.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Distant Surplus",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Distant Surplus",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8806b49c-da94-4e48-9131-47e33079e98b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Coastal Coral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ba57ef0-6c3d-4d6d-a89c-df310338f1af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Faded Palm",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/203463c3-e60f-4299-9335-0ddc245164d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/158ac05d-5e81-4c38-a370-e06a3fd8a06e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7bf60297-1253-4134-a99c-3a49ed571081.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Ashen Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b1dd2c6-9ccf-4647-a083-875260e1b52b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Hthr Iron",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/25f40247-7147-4557-b03c-8277bb0aa945.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Cotton V-Neck T-Shirt",
    price: 19.5,
    color: "Dusty Pool",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b266a67-945e-48b7-aa23-84240923d168.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Shout Cotton V-Neck Tank",
    price: 16.5,
    color: "Hthr Iron",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/828537eb-f8ca-4e49-b9ca-89bbe185589a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Shout Cotton V-Neck Tank",
    price: 16.5,
    color: "Hthr Iron",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/828537eb-f8ca-4e49-b9ca-89bbe185589a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Shout Cotton V-Neck Tank",
    price: 16.5,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5d396d5c-63c2-4c6e-bdde-73eb6e7a5da0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Whisper Shout Cotton V-Neck Tank",
    price: 16.5,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0d5d8216-e9a5-45e7-8c40-b672e2cc637d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Satin Button-Up Shirt",
    price: 52,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abef09d6-f3d4-4e54-9d8e-aae36590f677.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Satin Button-Up Shirt",
    price: 52,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b18b40b-fdd7-48ed-bb36-08c77395d390.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Satin Button-Up Shirt",
    price: 52,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b18b40b-fdd7-48ed-bb36-08c77395d390.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "You Rock T-Shirt",
    price: 38,
    color: "Larkspur",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a066fdc-0f33-4bb9-9ab1-1ecbf1750a97.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "You Rock T-Shirt",
    price: 38,
    color: "Larkspur",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a066fdc-0f33-4bb9-9ab1-1ecbf1750a97.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "You Rock T-Shirt",
    price: 38,
    color: "Washed Army",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4762d8b1-40d6-40c2-88ff-1a3e5e171160.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "You Rock T-Shirt",
    price: 38,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1bbaf688-68b4-4a06-aa5a-a967ef60d49f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "You Rock T-Shirt",
    price: 38,
    color: "Washed Army",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4762d8b1-40d6-40c2-88ff-1a3e5e171160.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "You Rock T-Shirt",
    price: 38,
    color: "Sweetheart Sunrise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6cb126ba-4c1e-47c8-aa40-cda0bbe49147.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "You Rock T-Shirt",
    price: 38,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e9236a1-56df-421c-8f08-5188f6d0c212.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const leggingsProduct = [
  {
    name: "1822 Butter Jeggings",
    brand: "1822 DENIM",
    description:
      "As fresh and bright as a sunshine-filled day, these supersoft jeggings are cropped to an ankle-baring length that’s just right for warmer weather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9401e19-cf91-4024-afd6-9f9aeba427c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "adidas Trefoil Logo High Waist Tights",
    brand: "ADIDAS ORIGINALS",
    description:
      "A tiny Trefoil logo subtly brands the front of second-skin tights made from a stretchy cotton knit that's both comfy and versatile.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d634fab-f945-46ad-9c2e-edd9267c99cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Airbrush 7/8 High Waist Leggings",
    brand: "ALO",
    description:
      "Chafe-preventing flatlock seams perfect the athletic fit of midi-length leggings that flatter with a very wide, high waistband.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76d87f2c-0568-4016-8bf2-bd3b08991151.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Airbrush High Waist Split Hem 7/8 Leggings",
    brand: "ALO",
    description:
      "Elongate your legs in these stretchy high-waist leggings designed with split, gently flared hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46a51c2b-154d-4c6d-bbc9-a5a93448bbd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Airlift High Waist Midi Leggings",
    brand: "ALO",
    description:
      "Chafe-preventing flatlock seams perfect the second-skin fit of midi leggings that are perfect for your gym routine.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/623e59db-42b7-48ae-998b-c5ab18ced7d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "At Your Leisure High Waist Leggings",
    brand: "BEYOND YOGA",
    description:
      "A wide elastic waistband tops a pair of workout-ready leggings cut from soft, stretchy fabric that moves with you.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17a0eda9-7350-46a0-a0b5-74d1e7d6b31e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Booty Boost Active 7/8 Leggings",
    brand: "SPANX®",
    description:
      "Look like you hit the gym before you even head out the door in sweat-wicking leggings that smooth all over with Slim-X® compression fabric. To make them even more flattering, the double-layer, dig-free waistband is contoured to create the illusion of a perkier rear.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c4d237e1-1ade-46ea-a9fd-019ef9f58674.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Butter Jeggings",
    brand: "1822 DENIM",
    description:
      "These soft and stretchy skinny jeans with a low rise and clean, uncluttered styling are a pair you'll reach for again and again.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cadb654d-61e1-4d44-a883-73272b0766f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Caught in the Midi High Waist Leggings",
    brand: "BEYOND YOGA",
    description:
      "These ankle-length leggings are designed with a high waist and stretchy, moisture-wicking fabric that will keep your gym routine fiercely fresh.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/285ddb16-7d54-43e0-ad17-4758e4d49e30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Classic 3-Stripes Tights",
    brand: "ADIDAS",
    description:
      "Signature 3-Stripes race down the sides of these sleek second-skin leggings made from a stretchy cotton knit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1fd14a3-2204-462a-9efe-83f3d1a5ff4a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Clean Elevation High Waist 7/8 Leggings",
    brand: "VUORI",
    description:
      "Elevate your workout standards with these ankle-length leggings designed with a hidden zip pocket for your keys or cards.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/358d1604-d591-41b2-8a7a-1458eadaaeeb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Control Top Faux Leather Leggings",
    brand: "COMMANDO",
    description:
      "Figure-firming fabric and an extra-high control waist make these faux-leather leggings an impeccably smooth base layer with all sorts of styling options.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31667b72-e0dc-48b0-a7cc-65842d2625d6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Control Top Faux Patent Leather Leggings",
    brand: "COMMANDO",
    description:
      "High-shine faux-leather leggings come with a serious dose of attitude you can totally see and a tummy-smoothing panel that only you need to know about.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9cab5a28-64fa-460f-bb45-fa267c817b74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cotton Rib Thermal Leggings",
    brand: "SKIMS",
    description:
      "Soft thermal leggings that hug the body yet allow skin to breathe with ribbed stretch cotton are from Kim Kardashian West's highly sought-out SKIMS. Available in a range of five complementary colors, this comfortable style with a no-cut design and cover-stitch details, is destined to be a part of your regular lounge rotation.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ff2bb2c-bc86-4671-a8b7-c37f3354ba30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cozy Patterned Baselayer Leggings",
    brand: "ZELLA",
    description:
      "The ribbed high waist of these baselayer leggings offers a secure yet stretchy fit that will keep you warm as you get in your outdoor workout.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/57a183cc-7463-4241-bd92-7a2332b50624.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Crop Leggings",
    brand: "VINCE",
    description:
      "As sleek as they are comfortable, these flattering leggings are made with plenty of stretch and kicky, ankle-baring hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f0a6ff1f-852a-4e76-9102-96da6bb92feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Daily Leggings",
    brand: "VUORI",
    description:
      "Get the best of jogger styling in a super-comfy pair of leggings that you're going to need several of, because they're named 'daily' for good reason.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/738c2d2d-d2a4-4d0a-81e8-9fb92234a8ef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Elevate High Waist Seamless Leggings",
    brand: "ZELLA",
    description:
      "A high, softly ribbed waistband tops these seamless leggings that keep the comfort level high whether you're in down dog or hanging with the girls.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c42cfde5-a6f0-422e-ba6d-147e3b4edbe7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ellie High Rise Jeggings",
    brand: "STS BLUE",
    description:
      "Classic black jeggings in a flattering high-waist silhouette are woven with stretch for a slim, comfortable fit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df48e24a-3c41-4a28-a06f-41e3c4d34376.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Faux Leather Leggings",
    brand: "SPANX®",
    description:
      "These best-selling faux-leather leggings are a must-have staple for your closet. The signature Power Waistband and glossy finish create a chic, flattering look for any occasion, and no center seam means a streamlined, confidence-boosting silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbfaa64f-f0ce-44af-9761-499f251db33d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Go-To High Waist Leggings",
    brand: "NORDSTROM",
    description:
      "Easy to layer, mix and match, these high-rise leggings are a comfortable wardrobe staple.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7f0a3940-05ef-4bc5-96d1-78cc4b641f0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Rise Leggings",
    brand: "BP.",
    description:
      "An extra-high waistband ensures a supersmooth fit in these must-have, stretch-cotton leggings.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28ac5cbf-a988-4268-bbf1-6459d7d388c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Faux Leather Hybrid Leggings",
    brand: "ZELLA",
    description:
      "Faux-leather front panels elevate these sleek leggings designed with a comfy high waist and knit back panels for work-to-weekend versatility.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06a1f6e7-0a4f-41a9-a743-0d4702b64562.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Lounge Leggings",
    brand: "ALO",
    description:
      "Cut from the softest Alosoft performance fabric, these leggings can handle everything from the toughest workouts to chilling on the comfiest sofa.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/22a4e5b6-41a0-4573-9789-b87ca498d1b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Renew Pocket Leggings",
    brand: "ZELLA",
    description:
      "Hit the ground running in these sleek and shapely high-waist leggings designed with a hidden waistband pocket to hold your essentials.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d8e5f479-f888-4567-85f2-8be085188641.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Stirrup Leggings",
    brand: "GOOD AMERICAN",
    description:
      "Refresh your layered look with the retro style of high-rise stirrup leggings made from lightly compressive stretch-cotton jersey.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4199d273-aed9-4319-86e7-3077343dd812.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Studio Lite Pocket 7/8 Leggings",
    brand: "ZELLA",
    description:
      "Work up a sweat in these incredibly lightweight leggings made from moisture-wicking fabric that keeps you cool at the studio and beyond.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a61276de-10d8-4f16-b6bc-410bde09ea3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jayne Slit Cuff Leggings",
    brand: "REISS",
    description: "Slim leggings get styled up with a kicky slit hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9c01a5d-9b86-490c-adc0-bdff2fc715c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jean-ish Leggings",
    brand: "SPANX®",
    description:
      "The power of SPANX shapers teams up with the look of skinny jeans in these leggings crafted with a comfy elastic waist, flattering back pockets and hems that hit right at the ankles.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65aaaca5-d4f6-4a41-a8b2-92b3c8fa51a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jeggings",
    brand: "WIT & WISDOM",
    description:
      "Light whiskering enhances the svelte skinny fit of closet-essential jeans cut from exceptionally soft and comfortable stretch denim.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1f6d2d6-19b7-4a54-940d-58f79e239ba7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Kick Flair Crop Leggings",
    brand: "LYSSÉ",
    description:
      "These smooth, shaping leggings are sure to put a kick in your step with their cropped flared legs that are slit up the sides.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/66dc1e86-481a-49ad-984a-077289f02925.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Knit Leggings",
    brand: "HALOGEN®",
    description:
      "Say hello to comfort with these go-to leggings made from an ultrasoft and stretchy double-knit in a footwear-flaunting length.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae18c08b-6c36-43e8-a9f3-62f848278766.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In High Waist Leggings",
    brand: "ZELLA",
    description:
      "Moisture-wicking construction keeps you cool as your workout warms up in stretchy, figure-sculpting leggings with a high, slip-free waistband.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c98192d2-aca7-471b-bb53-ea57aaf2a7f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In High Waist Pocket 7/8 Leggings",
    brand: "ZELLA",
    description:
      "These go-to ankle-length leggings support muscles, smooth curves and optimize your range of motion. The stretch fabric wicks away moisture to keep you cool and comfortable during intense workouts, while handy side pockets stash your phone so you never forget it on equipment.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In High Waist Pocket Crop Leggings",
    brand: "ZELLA",
    description:
      "The original Live In leggings support muscles, smooth curves and optimize your range of motion. This version wicks away moisture to keep you cool and comfortable during intense workouts, while handy side pockets stash your phone so you never forget it on equipment.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1ef0cd1-a438-41e7-a4c2-f38bb241c4a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In High Waist Pocket Mini Flare Leggings",
    brand: "ZELLA",
    description:
      "A slightly flared bootcut hem brings on-trend style to these stretchy leggings with a high waist for a comfortable fit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/82586380-6d69-4d2a-85c6-2e04a8d3ac52.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In Maternity Crop Leggings",
    brand: "ZELLA",
    description:
      "A stretchy, supportive panel expands with your growing bump in lean, cropped leggings ideal for working out or wearing out and about.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/283d5cc2-cfff-4a49-ba30-7f1871e820a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In Rib Pocket High Waist Leggings",
    brand: "ZELLA",
    description:
      "Ribbed fabric provides a highly compressive fit for these high-waist leggings that will inspire you to move with confidence.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3c1c973-6866-4684-ab83-0b90a929edce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Look at Me Now Seamless Leggings",
    brand: "SPANX®",
    description:
      "A stretchy knit and seamless design team up for a flattering and comfy fit in essential leggings topped with a figure-smoothing double-layer waistband. Constructed with soft, flexible yarns, it's designed to move with you and offers smoothing, shaping support.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f81650e0-12f8-4fcd-9744-4ddc077ba49f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Mamasana Live In Maternity Ankle Leggings",
    brand: "ZELLA",
    description:
      "A stretchy, supportive panel expands with your growing bump in these lean, ankle-skimming leggings. Ideal for working out or wearing out and about, they're cut from a moisture-wicking Zeltek fabric and sewn with flatlock seaming for incredible comfort.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4be763f8-9e9b-4cb0-b759-920dab27d489.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "One Dri-FIT Leggings",
    brand: "NIKE",
    description:
      "Whether you're ready to work up a sweat or chill on the couch, feel confident in svelte leggings featuring a mid rise and a comfy contoured waistband. The stretchy, opaque fabric features signature Dri-FIT moisture-wicking technology to help you stay dry and comfortable.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5dd2de4-97cb-4c4c-a063-22cbe4cc0f33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Organic Cotton Blend Pocket Leggings",
    brand: "NORDSTROM",
    description:
      "A soft and stretchy organic cotton blend fabric moves with you every which way in sleek leggings complete with handy pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1300cc0-af63-4760-a125-1676be33ab77.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Power Pocket Workout Leggings",
    brand: "SWEATY BETTY",
    description:
      "Equipped with a handy back pocket, bum-sculpting leggings perform well for barre class or the track in high-tech fabric with reflective details.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a2c6b8d-c313-415d-9b2f-e8b2eeeac4ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Restore High Waist Soft Cross Band 7/8 Leggings",
    brand: "ZELLA",
    description:
      "A cross-dye finish adds a stylish element to sporty leggings that support muscles, smooth curves and optimize your range of motion.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d59ab1b9-74c6-4255-a1d2-b48dbfd1fe31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Restore Soft High Waist Leggings",
    brand: "ZELLA",
    description:
      "Built from moisture-wicking fabric and fitted with a supportive waistband, these stretchy, figure-sculpting leggings keep you cool as your workout warms up.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/21701eda-5b74-4cff-a9e4-549db65a2612.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Restore Soft Pocket Leggings",
    brand: "ZELLA",
    description:
      "Soft and shapely, these high-waist leggings feature ribbing at the high waistband and ankle cuffs for comfy yet sporty vibes.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c118134d-e4f4-415d-833e-3c591caa56c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rich Tie Waist Leggings",
    brand: "NAKED WARDROBE",
    description:
      "These soft and stretchy leggings boast a ruched accent at the front and a delicate tie detail that fastens in the back.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9ccab468-cd7c-4707-a2b7-0ffb6d386156.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Run High Waist Pocket Performance Ankle Leggings",
    brand: "ZELLA",
    description:
      "Cut from lightweight, wicking fabric with reflective details, these bright leggings will keep you seen, safe and comfortable no matter when you get your run in.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/61e0cb83-91b1-4446-b2f2-77b684c5240f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Snatched to the Side Ribbed Leggings",
    brand: "NAKED WARDROBE",
    description:
      "Rib-knit fabric with lightweight compression adds a second-skin feel to these curve-flaunting high-waist leggings.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7328ea94-536c-4082-ba22-21f787a72959.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sportswear Essential 7/8 Leggings",
    brand: "NIKE",
    description:
      "Essential leggings simply detailed with a swish at one ankle wick away moisture and are great for weekend workouts or hangouts.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16ad0bca-2557-449a-a04a-e44aa114a70f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Studio AEROREADY High Rise Flare Leggings",
    brand: "ADIDAS",
    description:
      "Move the way you want in supersoft and stretchy leggings updated with flared legs perfect for an early morning yoga class that leads to a coffee date.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f04d13a6-0f91-42e8-a448-949daa2bb08a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Studio Lite Crop Leggings",
    brand: "ZELLA",
    description:
      "Work up a sweat in these incredibly lightweight crops made from moisture-wicking fabric that keeps you cool at the studio and beyond.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4f887697-4981-4379-ac01-7434dc01afd4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Studio Lite Pocket Kick Flare Crop Pocket Leggings",
    brand: "ZELLA",
    description:
      "Work up a sweat in these cropped leggings made with moisture-wicking fabric that keeps you cool and roomy pockets for your workout essentials.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de8f5579-bef5-42da-bbc6-fce58e62f616.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Super Sculpt High Waist Yoga Pocket Leggings",
    brand: "SWEATY BETTY",
    description:
      "Designed with a comfortable high rise that supports your waist, these action-ready leggings are perfect for your next yoga class.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/93cb7e72-c40f-4881-9953-a0875257fbfb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Super Sculpt Pocket 7/8 Leggings",
    brand: "SWEATY BETTY",
    description:
      "Designed with a comfortable high rise that supports your waist, these action-ready leggings are perfect for your next gym session or cycle class.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4a89921-526b-429a-841b-9ac54c8c59c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Supersoft Pocket 7/8 Leggings",
    brand: "SWEATY BETTY",
    description:
      "Machine wash, A supersoft and stretchy knit hugs your figure in action-ready leggings with a convenient pocket at the side for storing your phone, keys or cash.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e3d5f6b4-da7f-4f8e-81a2-a7e4e00dae9b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The NW High Waist Leggings",
    brand: "NAKED WARDROBE",
    description:
      "Achieve legs for days with these high-rise double-lined leggings that are comfortable and look fabulous with just about anything.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7cf2beec-aba2-4025-b595-8d2b0d5b1f95.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Perfect Black Pant Back Seam Skinny Pants",
    brand: "SPANX®",
    description:
      "With all the comfort of leggings, these perfect black pants are go-tos for any outfit or occasion. The pull-on design hits at your natural waist, creating a flat front without forming a muffin top, and tailored back seams finish the look with a lovely, elongating effect.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ff31922b-ab2f-48cb-ba4b-6ea3c0f58794.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Perfect Pant Ankle Joggers",
    brand: "SPANX®",
    description:
      "With flattering details and all the comfort of leggings, these perfect black joggers are go-tos for any outfit or occasion.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bea45519-77f5-4731-8c1c-c6687509e944.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Perfect Pants Four-Pocket Ankle Pants",
    brand: "SPANX®",
    description:
      "The perfect pant will become an instant go-to in your everyday wardrobe with classic four-pocket styling and seriously smooth ponte fabric. With a pull-on design that hits at your natural waist to create a flat front with no muffin top, this style flatters you from every angle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b262e9c-cae7-4395-81be-2c79ec5ea454.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Trefoil Tights",
    brand: "ADIDAS ORIGINALS",
    description:
      "A Trefoil logo is printed at the front of stretchy cotton leggings that will take you from running errands to the gym or grabbing lunch with friends.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10cfd28c-d241-47aa-922d-eeb94d28c67e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Two by Vince Camuto Seamed Back Leggings",
    brand: "VINCE CAMUTO",
    description:
      "Back seams that run from waist to hem accentuate the slim, sleek fit of essential stretch-knit leggings.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8117e81-31ae-498f-b153-e21cf739953a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ultra Wide Waistband Leggings",
    brand: "HUE",
    description:
      "A wide, waist-smoothing band flatters these lightweight leggings perfect for lounging or layering.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/af116e0d-6127-4349-96ad-9af59d10c3df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ultrasoft Denim Leggings",
    brand: "HUE",
    description:
      "Pull-on styling adds another level of ease and comfort to these soft and stretchy denim leggings with functional back pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc12cbf5-e366-4598-975a-812c4d455999.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Run High Waist Performance Ankle Leggings",
    brand: "ZELLA",
    description:
      "Designed with a high waist and cut from lightweight stretchy fabric, these ankle leggings will keep you comfortable and warm so you can enjoy every run.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0695211d-38f5-4f34-b34b-5bacd92e4eb2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const leggingsData = [
  {
    productName: "1822 Butter Jeggings",
    price: 49,
    color: "Rumba Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9401e19-cf91-4024-afd6-9f9aeba427c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "1822 Butter Jeggings",
    price: 49,
    color: "Forest Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/90e8b07e-d4a2-4bd4-a2e8-471198178f60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "1822 Butter Jeggings",
    price: 49,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ca41a6c-238f-4832-80a6-80f64e22ba65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "1822 Butter Jeggings",
    price: 49,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ca41a6c-238f-4832-80a6-80f64e22ba65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "adidas Trefoil Logo High Waist Tights",
    price: 23.45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d634fab-f945-46ad-9c2e-edd9267c99cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "adidas Trefoil Logo High Waist Tights",
    price: 23.45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d634fab-f945-46ad-9c2e-edd9267c99cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "adidas Trefoil Logo High Waist Tights",
    price: 23.45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d634fab-f945-46ad-9c2e-edd9267c99cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "adidas Trefoil Logo High Waist Tights",
    price: 23.45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d634fab-f945-46ad-9c2e-edd9267c99cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airbrush 7/8 High Waist Leggings",
    price: 82,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76d87f2c-0568-4016-8bf2-bd3b08991151.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airbrush 7/8 High Waist Leggings",
    price: 82,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76d87f2c-0568-4016-8bf2-bd3b08991151.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airbrush High Waist Split Hem 7/8 Leggings",
    price: 108,
    color: "Espresso",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46a51c2b-154d-4c6d-bbc9-a5a93448bbd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airbrush High Waist Split Hem 7/8 Leggings",
    price: 108,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88d50931-a36e-49b7-9c1b-46bf04fb1ecb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airbrush High Waist Split Hem 7/8 Leggings",
    price: 108,
    color: "Espresso",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46a51c2b-154d-4c6d-bbc9-a5a93448bbd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airbrush High Waist Split Hem 7/8 Leggings",
    price: 108,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e020eb8a-8bba-4549-986d-ec57503f0387.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/623e59db-42b7-48ae-998b-c5ab18ced7d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Tile Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae184064-f3d2-4ec2-9c6c-a680f9d4fabf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/623e59db-42b7-48ae-998b-c5ab18ced7d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Steel Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb75e9a7-86ff-48e8-8e07-665774095463.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Rust",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d0909e3d-a845-4856-b29c-9788e60c1e26.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "True Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a64ed7e1-421c-4f12-9928-8a4a77630f0e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Cranberry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4349c9b5-9f2e-4218-9237-a280655e6f63.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Dark Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/645fe425-686f-4497-b140-53c6d89662fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "True Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a64ed7e1-421c-4f12-9928-8a4a77630f0e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Airlift High Waist Midi Leggings",
    price: 118,
    color: "Ocean Teal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc18bcec-3d4d-486f-8bf0-e5c51fc0b286.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "At Your Leisure High Waist Leggings",
    price: 99,
    color: "Chai",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17a0eda9-7350-46a0-a0b5-74d1e7d6b31e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "At Your Leisure High Waist Leggings",
    price: 99,
    color: "Chai",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17a0eda9-7350-46a0-a0b5-74d1e7d6b31e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "At Your Leisure High Waist Leggings",
    price: 99,
    color: "Redflower-Scarlet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/392defc7-8c2a-44cd-853b-882734cf987d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "At Your Leisure High Waist Leggings",
    price: 99,
    color: "Redflower-Scarlet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/392defc7-8c2a-44cd-853b-882734cf987d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "At Your Leisure High Waist Leggings",
    price: 99,
    color: "Redflower-Scarlet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/392defc7-8c2a-44cd-853b-882734cf987d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "At Your Leisure High Waist Leggings",
    price: 99,
    color: "Redflower-Scarlet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/392defc7-8c2a-44cd-853b-882734cf987d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Booty Boost Active 7/8 Leggings",
    price: 98,
    color: "Very Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c4d237e1-1ade-46ea-a9fd-019ef9f58674.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Booty Boost Active 7/8 Leggings",
    price: 98,
    color: "Dark Fig",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/027b34c5-3a45-4dc1-a71a-da619ddb203f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Booty Boost Active 7/8 Leggings",
    price: 98,
    color: "Storm Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/481a742c-337e-43cd-9d53-f92ec88a8daa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Booty Boost Active 7/8 Leggings",
    price: 98,
    color: "Storm Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/481a742c-337e-43cd-9d53-f92ec88a8daa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Booty Boost Active 7/8 Leggings",
    price: 98,
    color: "Navy Haze",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edc4cc46-d273-43d3-9e47-75c934b06d03.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Butter Jeggings",
    price: 49,
    color: "Lennox",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cadb654d-61e1-4d44-a883-73272b0766f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Butter Jeggings",
    price: 49,
    color: "Lennox",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cadb654d-61e1-4d44-a883-73272b0766f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Darkest Night",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/285ddb16-7d54-43e0-ad17-4758e4d49e30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Pale Plum Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aef152e4-825f-48fe-91d4-8cf96072d41b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Rainforest Blue Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3c1d9eab-958f-4354-8e8c-e1bf2eb8abae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb835e09-4807-4efa-8df3-0804992e5ed6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Pink Crush-Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d541afa8-6dd4-46ad-9831-a0abb56ae28b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Capri Blue-Grotto",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a93f299a-bcdf-4353-9915-882a527574c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Pink Crush-Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d541afa8-6dd4-46ad-9831-a0abb56ae28b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Black Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/115bd032-c347-46c4-a9ea-fdc009ee943d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Chai",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/625e89e8-c711-4e9b-b5f5-5e4a6ee5dc6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Garnet Red Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9bc8ac9b-c2a4-40a3-b4d8-e6cd885aa251.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Nocturnal Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/67000299-ccea-416e-8bfa-9bf054494aa5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caught in the Midi High Waist Leggings",
    price: 97,
    color: "Gulf Stream-Oceana",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/080f9df9-856d-4568-b92d-bf36bbafc684.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Classic 3-Stripes Tights",
    price: 40,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1fd14a3-2204-462a-9efe-83f3d1a5ff4a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Classic 3-Stripes Tights",
    price: 40,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1fd14a3-2204-462a-9efe-83f3d1a5ff4a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Elevation High Waist 7/8 Leggings",
    price: 89,
    color: "Dogwood Washed Flower",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/358d1604-d591-41b2-8a7a-1458eadaaeeb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Elevation High Waist 7/8 Leggings",
    price: 89,
    color: "Desert Rose Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71b82d42-1223-4b09-ac64-c9b0e6bbf3e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Elevation High Waist 7/8 Leggings",
    price: 89,
    color: "Desert Rose Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71b82d42-1223-4b09-ac64-c9b0e6bbf3e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Elevation High Waist 7/8 Leggings",
    price: 89,
    color: "Brick Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d302a32-8359-4c03-b4ce-a74108276d4d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Elevation High Waist 7/8 Leggings",
    price: 89,
    color: "Black Camo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/629b1ecd-0b5d-47e1-862c-b6f50dc1f509.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Clean Elevation High Waist 7/8 Leggings",
    price: 89,
    color: "Midnight Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cef0580f-42a2-4c4e-86c1-4fdd7395ad4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Leather Leggings",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31667b72-e0dc-48b0-a7cc-65842d2625d6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Leather Leggings",
    price: 118,
    color: "Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/830de499-6d6e-4571-8f46-31c0c58595e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Leather Leggings",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31667b72-e0dc-48b0-a7cc-65842d2625d6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Patent Leather Leggings",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9cab5a28-64fa-460f-bb45-fa267c817b74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Patent Leather Leggings",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9cab5a28-64fa-460f-bb45-fa267c817b74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Patent Leather Leggings",
    price: 118,
    color: "Aubergine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/79a3cc53-5013-493d-aa71-a43b1821d3d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Patent Leather Leggings",
    price: 118,
    color: "Sienna",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/59c92bea-79c8-4c4d-af06-ceffb3e4b2b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Patent Leather Leggings",
    price: 118,
    color: "Cocoa",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/59ce5217-cb2e-4d76-a6e7-648b1591d258.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Control Top Faux Patent Leather Leggings",
    price: 118,
    color: "Cinnamon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e23971d-f876-4924-9c0b-03b854824a91.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ff2bb2c-bc86-4671-a8b7-c37f3354ba30.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Kyanite",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c04eb91-fe99-4ee8-834e-2dd1c5ded2ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Light Heather Gray",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fe002553-477b-46ce-99f4-e06dece351d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Pacific",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf9c3749-bdfb-4b07-9ade-cc709b3783e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Bone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23adb0db-eadd-42e2-898a-bd2728154cc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Soot",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7cdb31cd-3f13-404f-8730-9a51cb9d2936.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Sedona",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f08a2f6-8adf-4ecb-aee4-91e2767476e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Umber",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bfc53da5-10b6-4673-8319-641f910e9e42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Garnet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fc5897b-9913-4450-864c-1c791cba649d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Mineral Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c695a9a-2bdb-43be-aba1-5223e5d94065.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cotton Rib Thermal Leggings",
    price: 52,
    color: "Bone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23adb0db-eadd-42e2-898a-bd2728154cc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Patterned Baselayer Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/57a183cc-7463-4241-bd92-7a2332b50624.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Patterned Baselayer Leggings",
    price: 65,
    color: "Red Couture",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28f9247d-c5ba-4e9f-bb55-2b5b70087edb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Patterned Baselayer Leggings",
    price: 65,
    color: "Purple Nebula",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c395c6d4-a4cd-46a0-826f-a876b86c755b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Patterned Baselayer Leggings",
    price: 65,
    color: "Pink Sphinx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c8abcea-eb78-438b-bf2c-64f5e8745d4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Patterned Baselayer Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/57a183cc-7463-4241-bd92-7a2332b50624.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crop Leggings",
    price: 295,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f0a6ff1f-852a-4e76-9102-96da6bb92feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crop Leggings",
    price: 295,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f0a6ff1f-852a-4e76-9102-96da6bb92feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Leggings",
    price: 84,
    color: "Cinnamon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/738c2d2d-d2a4-4d0a-81e8-9fb92234a8ef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Leggings",
    price: 84,
    color: "Pool Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46afa4bf-0995-496d-80fd-8db27bdcbb0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Leggings",
    price: 84,
    color: "Black Camo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a322fd7a-aca2-48fe-843e-9fc1edd2c81b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Leggings",
    price: 84,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac8c3e31-6d16-4e77-9203-145fede8bab5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Leggings",
    price: 84,
    color: "Brick",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/113011c5-70aa-4b6a-84a4-e5ddd104ebdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Leggings",
    price: 84,
    color: "Cinnamon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/738c2d2d-d2a4-4d0a-81e8-9fb92234a8ef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Leggings",
    price: 84,
    color: "Dusk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/815e54b1-afaa-4edb-a412-429eb8e84cb3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elevate High Waist Seamless Leggings",
    price: 59,
    color: "Grey Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c42cfde5-a6f0-422e-ba6d-147e3b4edbe7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elevate High Waist Seamless Leggings",
    price: 59,
    color: "Grey Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c42cfde5-a6f0-422e-ba6d-147e3b4edbe7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elevate High Waist Seamless Leggings",
    price: 59,
    color: "Tan Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ccc1a5dc-13ea-44ce-8942-fdaedee6fad1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ellie High Rise Jeggings",
    price: 49,
    color: "Black Jm",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df48e24a-3c41-4a28-a06f-41e3c4d34376.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ellie High Rise Jeggings",
    price: 49,
    color: "Black Jm",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df48e24a-3c41-4a28-a06f-41e3c4d34376.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Leggings",
    price: 98,
    color: "Very Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbfaa64f-f0ce-44af-9761-499f251db33d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Leggings",
    price: 10.79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8ef02dbb-ea0d-4797-85c5-2308a8a4ce42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Leggings",
    price: 10.79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8ef02dbb-ea0d-4797-85c5-2308a8a4ce42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ee0dd53-8574-4915-9834-b16b932e00ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ee0dd53-8574-4915-9834-b16b932e00ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Leggings",
    price: 98,
    color: "Very Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbfaa64f-f0ce-44af-9761-499f251db33d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Go-To High Waist Leggings",
    price: 35,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7f0a3940-05ef-4bc5-96d1-78cc4b641f0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Go-To High Waist Leggings",
    price: 35,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7f0a3940-05ef-4bc5-96d1-78cc4b641f0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Rise Leggings",
    price: 16,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28ac5cbf-a988-4268-bbf1-6459d7d388c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Rise Leggings",
    price: 16,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28ac5cbf-a988-4268-bbf1-6459d7d388c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Faux Leather Hybrid Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06a1f6e7-0a4f-41a9-a743-0d4702b64562.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Faux Leather Hybrid Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06a1f6e7-0a4f-41a9-a743-0d4702b64562.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Lounge Leggings",
    price: 108,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/22a4e5b6-41a0-4573-9789-b87ca498d1b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Lounge Leggings",
    price: 108,
    color: "Tile Blue/ White Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/90427fc2-1378-461d-9188-53edc93eeca3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Lounge Leggings",
    price: 108,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/22a4e5b6-41a0-4573-9789-b87ca498d1b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Lounge Leggings",
    price: 108,
    color: "Rich Navy Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/44383f92-9d95-435f-bbcf-b593a089b76c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Lounge Leggings",
    price: 108,
    color: "Athletic Heather Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b922fa9f-08f5-4364-b789-4382f436ed33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Lounge Leggings",
    price: 108,
    color: "Dark Heather Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b91b4e5f-a1e9-4783-bcfa-e2e969645de6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Lounge Leggings",
    price: 108,
    color: "Zinc Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6eaf073d-c93a-4757-b8ed-f5e598431bc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Renew Pocket Leggings",
    price: 55.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d8e5f479-f888-4567-85f2-8be085188641.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Renew Pocket Leggings",
    price: 55.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d8e5f479-f888-4567-85f2-8be085188641.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Stirrup Leggings",
    price: 41.4,
    color: "Black001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4199d273-aed9-4319-86e7-3077343dd812.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Stirrup Leggings",
    price: 41.4,
    color: "Black001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4199d273-aed9-4319-86e7-3077343dd812.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Studio Lite Pocket 7/8 Leggings",
    price: 65,
    color: "Green Katydid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a61276de-10d8-4f16-b6bc-410bde09ea3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Studio Lite Pocket 7/8 Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4770621a-812d-45cf-9cd0-944245602c33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Studio Lite Pocket 7/8 Leggings",
    price: 65,
    color: "Purple Spectre",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/90a652a3-8246-4922-86f8-4e085b6eeadf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Studio Lite Pocket 7/8 Leggings",
    price: 65,
    color: "Purple Opera",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f40e06c9-b5e7-49ec-af29-fa68d6a66900.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Studio Lite Pocket 7/8 Leggings",
    price: 65,
    color: "Navy Nightfall",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1282d1e3-1fcf-4a8e-82f8-af0c50bc3e42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Studio Lite Pocket 7/8 Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4770621a-812d-45cf-9cd0-944245602c33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jayne Slit Cuff Leggings",
    price: 180,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9c01a5d-9b86-490c-adc0-bdff2fc715c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jayne Slit Cuff Leggings",
    price: 180,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9c01a5d-9b86-490c-adc0-bdff2fc715c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jean-ish Leggings",
    price: 98,
    color: "Twilight Rinse",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65aaaca5-d4f6-4a41-a8b2-92b3c8fa51a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jean-ish Leggings",
    price: 98,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/57b11f39-e903-44a0-b924-c689972f2dae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jean-ish Leggings",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b12e65d-48cd-4a51-9e4f-16aeb5c5a892.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jean-ish Leggings",
    price: 98,
    color: "Twilight Rinse",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65aaaca5-d4f6-4a41-a8b2-92b3c8fa51a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jean-ish Leggings",
    price: 98,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/57b11f39-e903-44a0-b924-c689972f2dae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeggings",
    price: 64,
    color: "Dark Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1f6d2d6-19b7-4a54-940d-58f79e239ba7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeggings",
    price: 64,
    color: "Dark Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1f6d2d6-19b7-4a54-940d-58f79e239ba7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeggings",
    price: 64,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63b57246-0698-416e-926b-ab041d3e5d63.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kick Flair Crop Leggings",
    price: 78,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/66dc1e86-481a-49ad-984a-077289f02925.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kick Flair Crop Leggings",
    price: 78,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/142a27cd-06f7-4f5e-b18c-1593d923ce9c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kick Flair Crop Leggings",
    price: 78,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/66dc1e86-481a-49ad-984a-077289f02925.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Knit Leggings",
    price: 24.99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae18c08b-6c36-43e8-a9f3-62f848278766.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Knit Leggings",
    price: 24.99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae18c08b-6c36-43e8-a9f3-62f848278766.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c98192d2-aca7-471b-bb53-ea57aaf2a7f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1171d5e9-e380-4c10-b6d4-f21c13bb3b04.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Purple Amaranth",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9d2c29c-ad01-4d67-b805-532b6b887cea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Olive Dusk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3c2c914b-c102-4a77-8d0a-5ac8a7c1dad3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Pink Atomic",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d0bb6be1-d6ef-45b2-b8cf-62fa9349650a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Brown Taupe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9ece1a6-43fd-40cb-8fde-0f77f1f75184.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c98192d2-aca7-471b-bb53-ea57aaf2a7f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d7ddc0c2-9394-4742-bbdb-2f1febbd2608.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Teal Hydro",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae4a174d-c19d-44b2-beb9-11b416e7a8aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/532f599c-3846-476d-a41f-7863625b22fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Purple Caspia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23df2a7e-4ab7-495f-9767-237acf42c508.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Blue Thistle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/25ef4b36-0793-4e09-b9de-bb28dd23435a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Leggings",
    price: 59,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/532f599c-3846-476d-a41f-7863625b22fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Pocket 7/8 Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Pocket 7/8 Leggings",
    price: 59,
    color: "Blue Rapid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c9098429-386f-4506-b8ca-8fcfa295a3c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Pocket 7/8 Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Pocket Crop Leggings",
    price: 55,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1ef0cd1-a438-41e7-a4c2-f38bb241c4a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Pocket Crop Leggings",
    price: 55,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1ef0cd1-a438-41e7-a4c2-f38bb241c4a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Pocket Mini Flare Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/82586380-6d69-4d2a-85c6-2e04a8d3ac52.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In High Waist Pocket Mini Flare Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/82586380-6d69-4d2a-85c6-2e04a8d3ac52.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Maternity Crop Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/283d5cc2-cfff-4a49-ba30-7f1871e820a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Maternity Crop Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/283d5cc2-cfff-4a49-ba30-7f1871e820a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Rib Pocket High Waist Leggings",
    price: 69,
    color: "Purple Nectar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3c1c973-6866-4684-ab83-0b90a929edce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Rib Pocket High Waist Leggings",
    price: 69,
    color: "Teal Reef",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c29f8c6e-e9c0-451a-99ff-71d3e7b13cbb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Rib Pocket High Waist Leggings",
    price: 69,
    color: "Purple Mulled",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5770f7de-7942-49e5-9cef-63367d844ef8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Rib Pocket High Waist Leggings",
    price: 69,
    color: "Pink Lavender",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1fcbc81-d3b4-410f-9025-992df71d6e8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Rib Pocket High Waist Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/220858d7-6f27-49eb-ae50-13804c33e253.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Rib Pocket High Waist Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/220858d7-6f27-49eb-ae50-13804c33e253.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Look at Me Now Seamless Leggings",
    price: 68,
    color: "Black Camo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f81650e0-12f8-4fcd-9744-4ddc077ba49f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Look at Me Now Seamless Leggings",
    price: 68,
    color: "Very Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/472d1ce5-c919-4ece-ac64-e05970f1bdc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Look at Me Now Seamless Leggings",
    price: 68,
    color: "Black Camo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f81650e0-12f8-4fcd-9744-4ddc077ba49f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mamasana Live In Maternity Ankle Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4be763f8-9e9b-4cb0-b759-920dab27d489.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mamasana Live In Maternity Ankle Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4be763f8-9e9b-4cb0-b759-920dab27d489.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One Dri-FIT Leggings",
    price: 55,
    color: "Iron Grey/ Heather/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5dd2de4-97cb-4c4c-a063-22cbe4cc0f33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One Dri-FIT Leggings",
    price: 55,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e98df89b-ddba-4058-ab13-f820e0e3baea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "One Dri-FIT Leggings",
    price: 55,
    color: "Iron Grey/ Heather/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5dd2de4-97cb-4c4c-a063-22cbe4cc0f33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Organic Cotton Blend Pocket Leggings",
    price: 35,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1300cc0-af63-4760-a125-1676be33ab77.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Organic Cotton Blend Pocket Leggings",
    price: 35,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9040a0e1-fe93-4342-8089-fa406ed0d9e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Organic Cotton Blend Pocket Leggings",
    price: 35,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/deae5a06-268f-44ed-8eec-13e7e8c3e133.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Organic Cotton Blend Pocket Leggings",
    price: 35,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/deae5a06-268f-44ed-8eec-13e7e8c3e133.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Blue Leaf Scatter Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a2c6b8d-c313-415d-9b2f-e8b2eeeac4ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Pink Tonal Camo Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7877ecc1-e534-4b0b-9298-d97e10762b7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Blue Sb Move Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/450f264c-3a59-42fb-b713-9e7ea532dfdf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Blue Perspective Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc9df2a9-87c1-42ba-9751-c7adffafbfa5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Green Geo Maze Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13ecc7c4-e45b-4743-8ff0-c9eda79cea58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Blue Leaf Scatter Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a2c6b8d-c313-415d-9b2f-e8b2eeeac4ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Black Confetti Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4d249d66-c33f-4d9a-9b87-04c9dc77ec08.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Blue Jot Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae8fa865-b5af-471b-9e35-e639acb6a5d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Ultra Black Camo Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f033214a-a31e-44f8-85f4-1d4aca3054f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Power Pocket Workout Leggings",
    price: 100,
    color: "Pink Petal Camo Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aacea519-fedf-439d-978a-25cc657e80de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore High Waist Soft Cross Band 7/8 Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d59ab1b9-74c6-4255-a1d2-b48dbfd1fe31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore High Waist Soft Cross Band 7/8 Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d59ab1b9-74c6-4255-a1d2-b48dbfd1fe31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft High Waist Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/21701eda-5b74-4cff-a9e4-549db65a2612.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft High Waist Leggings",
    price: 65,
    color: "Blue Coronet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c088ab1d-146e-4c32-9cf0-d650afc17110.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft High Waist Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/21701eda-5b74-4cff-a9e4-549db65a2612.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft Pocket Leggings",
    price: 65,
    color: "Green Grass",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c118134d-e4f4-415d-833e-3c591caa56c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft Pocket Leggings",
    price: 65,
    color: "Teal Reef",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9ba7eb7-14e5-418b-a118-b0cc804417fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft Pocket Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c1bfdc2-3c89-45b2-97ef-2d05fe661d5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft Pocket Leggings",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c1bfdc2-3c89-45b2-97ef-2d05fe661d5d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft Pocket Leggings",
    price: 65,
    color: "Blue Clematis",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/000c553f-4cf5-4813-9547-908be9127fa3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft Pocket Leggings",
    price: 65,
    color: "Pink Wild Aster",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/360d8541-443d-4ddd-b6db-c71fe25c0ebc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Restore Soft Pocket Leggings",
    price: 65,
    color: "Grey Shade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c86f4d3-1a3a-4417-a145-b3ece1467f52.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rich Tie Waist Leggings",
    price: 34.8,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9ccab468-cd7c-4707-a2b7-0ffb6d386156.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rich Tie Waist Leggings",
    price: 34.8,
    color: "Oat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/750b750b-4f5b-4586-9817-9ab6ffb1da88.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rich Tie Waist Leggings",
    price: 34.8,
    color: "Chocolate",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72a64eb9-3cfa-4eb5-9116-0cf22ad3241d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rich Tie Waist Leggings",
    price: 34.8,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9ccab468-cd7c-4707-a2b7-0ffb6d386156.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Run High Waist Pocket Performance Ankle Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/61e0cb83-91b1-4446-b2f2-77b684c5240f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Run High Waist Pocket Performance Ankle Leggings",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/61e0cb83-91b1-4446-b2f2-77b684c5240f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Snatched to the Side Ribbed Leggings",
    price: 31.2,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7328ea94-536c-4082-ba22-21f787a72959.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Snatched to the Side Ribbed Leggings",
    price: 31.2,
    color: "Coco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/187fb5f6-3cf4-40ce-a2f1-044d016d07ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Snatched to the Side Ribbed Leggings",
    price: 31.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa401b15-f580-426b-a86e-769603c5801a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Snatched to the Side Ribbed Leggings",
    price: 31.2,
    color: "Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6728532e-491e-4069-b823-5adb6024790a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Snatched to the Side Ribbed Leggings",
    price: 31.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa401b15-f580-426b-a86e-769603c5801a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential 7/8 Leggings",
    price: 40,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16ad0bca-2557-449a-a04a-e44aa114a70f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential 7/8 Leggings",
    price: 40,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16ad0bca-2557-449a-a04a-e44aa114a70f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential 7/8 Leggings",
    price: 40,
    color: "Thunder Blue/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d15cd67-5eb1-4e55-85d9-198f898c3783.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio AEROREADY High Rise Flare Leggings",
    price: 46.9,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f04d13a6-0f91-42e8-a448-949daa2bb08a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio AEROREADY High Rise Flare Leggings",
    price: 46.9,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f04d13a6-0f91-42e8-a448-949daa2bb08a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio Lite Crop Leggings",
    price: 41.25,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4f887697-4981-4379-ac01-7434dc01afd4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio Lite Crop Leggings",
    price: 41.25,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4f887697-4981-4379-ac01-7434dc01afd4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio Lite Crop Leggings",
    price: 41.25,
    color: "Grey December",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb895751-30bb-441c-94a5-63c267c62aa1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio Lite Pocket Kick Flare Crop Pocket Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de8f5579-bef5-42da-bbc6-fce58e62f616.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio Lite Pocket Kick Flare Crop Pocket Leggings",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de8f5579-bef5-42da-bbc6-fce58e62f616.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Studio Lite Pocket Kick Flare Crop Pocket Leggings",
    price: 59,
    color: "Purple Starling",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3de14696-031a-4761-96c6-04270ed7f95f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt High Waist Yoga Pocket Leggings",
    price: 64.8,
    color: "Black Marl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/93cb7e72-c40f-4881-9953-a0875257fbfb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt High Waist Yoga Pocket Leggings",
    price: 64.8,
    color: "Black Marl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/93cb7e72-c40f-4881-9953-a0875257fbfb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt Pocket 7/8 Leggings",
    price: 108,
    color: "Pink Texture Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4a89921-526b-429a-841b-9ac54c8c59c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt Pocket 7/8 Leggings",
    price: 108,
    color: "Blue Flower Check Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aade2b39-f0e2-4a2f-b2f6-13a024e33899.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt Pocket 7/8 Leggings",
    price: 108,
    color: "Blue Flow Parchment Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5d5112a6-e23e-4527-8f6b-3b0f76580fc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt Pocket 7/8 Leggings",
    price: 108,
    color: "Pink Art Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77eb7faa-5440-4c27-98da-e062050efc3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt Pocket 7/8 Leggings",
    price: 108,
    color: "Blue Flow Parchment Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5d5112a6-e23e-4527-8f6b-3b0f76580fc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Super Sculpt Pocket 7/8 Leggings",
    price: 108,
    color: "Blue Texture Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f43e885-2c5a-45b2-a305-dbcea28d1a9d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Supersoft Pocket 7/8 Leggings",
    price: 108,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e3d5f6b4-da7f-4f8e-81a2-a7e4e00dae9b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Supersoft Pocket 7/8 Leggings",
    price: 108,
    color: "Navy Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2cfb179d-4888-46a1-a058-32a793fe5654.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Supersoft Pocket 7/8 Leggings",
    price: 108,
    color: "Plum Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a0186b6-de7a-4e16-9c08-c9cd44e109b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Supersoft Pocket 7/8 Leggings",
    price: 108,
    color: "Urban Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/042f2cc9-5024-41f8-a9b0-930b157f3f37.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Supersoft Pocket 7/8 Leggings",
    price: 108,
    color: "Urban Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/042f2cc9-5024-41f8-a9b0-930b157f3f37.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The NW High Waist Leggings",
    price: 54,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7cf2beec-aba2-4025-b595-8d2b0d5b1f95.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The NW High Waist Leggings",
    price: 54,
    color: "Coco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dfc96a4e-9b1f-4998-bc24-ceb82abdb54f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The NW High Waist Leggings",
    price: 54,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7cf2beec-aba2-4025-b595-8d2b0d5b1f95.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The NW High Waist Leggings",
    price: 54,
    color: "Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/763a6fe3-efe1-4867-8971-7523065c16ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The NW High Waist Leggings",
    price: 54,
    color: "Heather Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf093b6a-867a-43d9-b8d4-fdfe1ef73bf9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Black Pant Back Seam Skinny Pants",
    price: 128,
    color: "Classic Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ff31922b-ab2f-48cb-ba4b-6ea3c0f58794.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Black Pant Back Seam Skinny Pants",
    price: 128,
    color: "Classic Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3806fb85-55ee-4255-aa5a-b244f70d3547.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Black Pant Back Seam Skinny Pants",
    price: 128,
    color: "Classic Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3806fb85-55ee-4255-aa5a-b244f70d3547.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Pant Ankle Joggers",
    price: 128,
    color: "Classic Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bea45519-77f5-4731-8c1c-c6687509e944.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Pant Ankle Joggers",
    price: 128,
    color: "Classic Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bea45519-77f5-4731-8c1c-c6687509e944.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Pants Four-Pocket Ankle Pants",
    price: 110,
    color: "Classic Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b262e9c-cae7-4395-81be-2c79ec5ea454.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Pants Four-Pocket Ankle Pants",
    price: 110,
    color: "Very Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2989bffa-38cd-414e-9dfc-7b0672211ddb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect Pants Four-Pocket Ankle Pants",
    price: 110,
    color: "Very Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2989bffa-38cd-414e-9dfc-7b0672211ddb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Trefoil Tights",
    price: 25,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10cfd28c-d241-47aa-922d-eeb94d28c67e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Trefoil Tights",
    price: 25,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10cfd28c-d241-47aa-922d-eeb94d28c67e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Two by Vince Camuto Seamed Back Leggings",
    price: 49,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8117e81-31ae-498f-b153-e21cf739953a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Two by Vince Camuto Seamed Back Leggings",
    price: 49,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8117e81-31ae-498f-b153-e21cf739953a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ultra Wide Waistband Leggings",
    price: 36,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/af116e0d-6127-4349-96ad-9af59d10c3df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ultra Wide Waistband Leggings",
    price: 36,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/af116e0d-6127-4349-96ad-9af59d10c3df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ultrasoft Denim Leggings",
    price: 48,
    color: "Black Indigo Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc12cbf5-e366-4598-975a-812c4d455999.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ultrasoft Denim Leggings",
    price: 48,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ce8290d9-cf5d-462f-aa0e-e072834dde31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ultrasoft Denim Leggings",
    price: 48,
    color: "Windsor Blue Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1017f151-466b-431b-ad63-7daa7131e3fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ultrasoft Denim Leggings",
    price: 48,
    color: "Black Indigo Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc12cbf5-e366-4598-975a-812c4d455999.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ultrasoft Denim Leggings",
    price: 48,
    color: "Black Acid Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b416af79-5df6-4c75-972f-bafc1ce03b71.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Run High Waist Performance Ankle Leggings",
    price: 79,
    color: "Blue Mazarine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0695211d-38f5-4f34-b34b-5bacd92e4eb2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Run High Waist Performance Ankle Leggings",
    price: 79,
    color: "Green Park",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fc90817-b186-49f5-99cf-45f64938f58e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Run High Waist Performance Ankle Leggings",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6354526b-b023-4f1d-8309-9ee156ef7456.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Run High Waist Performance Ankle Leggings",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6354526b-b023-4f1d-8309-9ee156ef7456.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const jeansProduct = [
  {
    name: "501® High Waist Straight Leg Jeans",
    brand: "LEVI'S®",
    description:
      "Classic fading and whiskering style a pair of Levi's iconic nonstretch jeans cut with straight legs and an ultra-high waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27a72ee7-a040-4d3e-a9b4-45dc30c42107.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "501® Original Cutoff Denim Shorts",
    brand: "LEVI'S®",
    description:
      "Shredded hems and strategic distressing add to the vintage vibe of denim shorts designed with a classic button fly and an edgy look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1b960cc8-7edd-4b63-b68e-c897cfc895c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "501® Original Cutoff Shorts",
    brand: "LEVI'S®",
    description:
      "Shredded hems and strategic whiskering add to the vintage vibe of nonstretch denim shorts designed with a classic button fly and an edgy summertime look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a94ce089-714b-4ad8-8193-9fe4064b6ceb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "501® Skinny Jeans",
    brand: "LEVI'S®",
    description:
      "The 501—possibly the world's most famous pair of jeans—has been updated for today with a sun-baked wash that adds a retro-cool vibe to the look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa9733e8-7cbc-4475-b217-51ea291ec367.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "A-Line Mom Shorts",
    brand: "TOPSHOP",
    description:
      "Nonstretch denim finished with raw-cut hems gives these relaxed-fit shorts a vintage, cool mom vibe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/720b6b2f-d6f8-4dbd-9fd6-61550f0d2fc1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-solution Ankle Skinny Jeans",
    brand: "WIT & WISDOM",
    description:
      "Everyday skinnies of faded and whiskered stretch denim ensure a flattering fit with 'Ab-solution' powermesh panels to mold and hold, a waistband with interior control and booty-lift construction.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7afd14b4-bfd3-42ea-86e4-3f3b6895bc3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution Denim Shorts",
    brand: "WIT & WISDOM",
    description:
      "When it's time to put away the parka and slip into shorts, this pair, with exclusive mold-and-hold fit technology, is the one to live in.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3d94f72-7e82-4ef2-a2c9-ce8323345a1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution High Waist Ankle Skinny Jeans",
    brand: "WIT & WISDOM",
    description:
      "Stretchy, ankle-grazing skinny jeans are designed for a slimming fit with Ab-solution technology to shape, smooth and lift in all the right places.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1fbb7d75-e711-4fd9-917d-f3863c053123.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution High Waist Itty Bitty Bootcut Jeans",
    brand: "WIT & WISDOM",
    description:
      "Strategic fading adds to the relaxed feel of stretch-denim jeans featuring a slightly flared leg and a fit system that's designed to comfortably shape and hold.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/51a8e341-56a4-4e85-9729-6cef2cdfe4e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution High Waist Raw Hem Skinny Crop Jeans",
    brand: "WIT & WISDOM",
    description:
      "These raw-hem jeans in a vintage-inspired cut enhance your shape with Ab-solution technology that slims, shapes and lifts in all the right places.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1b9ecaa1-d328-439e-9a32-abdb6abc6113.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution Itty Bitty Bootcut Jeans",
    brand: "WIT & WISDOM",
    description:
      "Stretch jeans in a polished dark wash get a lean and leggy look from a slim cut balanced with a narrow boot-leg opening. The ‘Ab-solution’ construction flatters with power-mesh panels to mold and hold, including a waistband with interior control and booty-lift construction.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e053c863-1976-44d2-a91b-26638bd7d9b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-solution Modern Ankle Skinny Jeans",
    brand: "WIT & WISDOM",
    description:
      "Wear-with-anything skinny jeans feature chic ankle-length hems and stretchy indigo denim that creates a svelte silhouette. The 'Ab-solution' design flatters with power-mesh panels to mold and hold, plus a waistband with interior control and booty-lift construction.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/86f1b2b0-a600-488e-8aea-e0db5c2febad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution Raw Hem Ankle Skinny Jeans",
    brand: "WIT & WISDOM",
    description:
      "Raw-hem skinnies are cut to flatter with Ab-solution power mesh panels to shape, smooth and lift in all the right places.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ee6dd84-3360-42d0-9ca4-b6fc7e06faeb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution Raw Hem Skinny Jeans",
    brand: "WIT & WISDOM",
    description:
      "Cut with trendy raw hems, these jeans are made from supersoft Ab-Solution stretch denim that shapes, smoothes and lifts in all the right places.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/01615d76-4bc4-4afe-831e-27f02180b20d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-solution Raw Hem Slim Straight Jeans",
    brand: "WIT & WISDOM",
    description:
      "Classic meets cool in these timeless jeans enhanced with a raw finish on the cuffs and a stylish dark wash.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/adb61a0b-d6c0-49fb-8edc-87485215d074.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-solution Skinny Ankle Jeans",
    brand: "WIT & WISDOM",
    description:
      "A slimming inky black wash enhances the sleek, legging-like fit of jeans cut from exceptionally soft and comfortable stretch denim. The 'Ab-solution' design flatters with power-mesh panels to mold and hold, including a waistband with interior control and booty-lift construction.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed01e711-8b32-4a1b-bf97-1bd4cf7386d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Boyfriend Denim Shorts",
    brand: "BLANKNYC",
    description:
      "Threadbare abrasions and shadow creases add lived-in charm to stretch-denim shorts cut with a loose boyfriend fit and casually cuffed hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3c5382e-b810-45e0-94ee-7fc676b3ca3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Boyfriend Shorts",
    brand: "CASLON®",
    description:
      "Front whiskering and a touch of distressing ages essential denim shorts in a boyfriend cut with a hint of slouch and rolled hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/08a44d7d-a797-49c3-88ef-ef7bacc269a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Donna Fab Ab High Waist Raw Hem Ankle Skinny Jeans",
    brand: "KUT FROM THE KLOTH",
    description:
      "Designed with a front pocket technique that's flattening, slenderizing and comfortable, these raw-hem skinny jeans are the ones you'll reach for on repeat.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d01c5ee-1f7b-4e70-a9f7-7ef99f6edd94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Edison Relaxed Fit Jeans",
    brand: "CLOSED",
    description:
      "Faded denim perfectly ages these super-relaxed Italian-made jeans that give your casual weekend plans a hint of chic nonchalance.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/08b3a47f-1ffb-4453-af8e-464f8f453f34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Fayna Side Panel Balloon Jeans",
    brand: "CLOSED",
    description:
      "Contrasting side panels give these scuffed and faded balloon jeans a DIY vibe without you having to lift a finger.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9522fea7-c088-43a1-aaec-2c90cd7332a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Gidget Denim Shorts",
    brand: "KUT FROM THE KLOTH",
    description:
      "Summer-essential cutoffs have the look of a loved-forever favorite in a perfectly faded and whiskered wash.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e5c6055-a088-4cd7-a41d-93e53d759752.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Girlfriend Jeans",
    brand: "WIT & WISDOM",
    description:
      "The perfect balance of boyish and curve-conscious, these girlfriend jeans look as soft as they feel in faded stretch denim with light distressing.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/53064f72-147f-4410-86ed-93235b11327d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Good Classic Raw Hem High Waist Slim Jeans",
    brand: "GOOD AMERICAN",
    description:
      "Designed to flatter every curve and make your legs look extra-long, these slim-cut jeans have a gap-proof contoured waist and trendy raw hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abe7742a-a8f3-4960-a7fc-96e323a83be1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Good Legs High Rise Skinny Jeans",
    brand: "GOOD AMERICAN",
    description:
      "Inspired by the belief that every body deserves to be shown off, these stretchy skinny jeans are designed to hug every curve and flawlessly retain their shape from day to night. The cotton-blend pair features a classic five-pocket design and a gap-free contoured waistband.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae2fa614-3bab-4b08-9a55-3abd9d4e01af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Good Legs Skinny Jeans",
    brand: "GOOD AMERICAN",
    description:
      "Designed to fit every body, these shapely skinnies feature a cool indigo wash and a smoothing high waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95c62830-e1dc-4ce8-b584-f346c58e20ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Good Straight High Waist Raw Hem Straight Leg Jeans",
    brand: "GOOD AMERICAN",
    description:
      "Designed to flatter every body, these super-stretchy straight-leg jeans feature a contoured high waist for a gap-free fit and raw hems for laid-back style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98e1d82f-d108-4fa0-b0e4-f894f2d0e58c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Button Fly Mom Jeans",
    brand: "BP.",
    description:
      "Smooth buttons pop from the fly of these light-washed nonstretch jeans cut with a high waist, straight legs and cropped hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/05664bbd-0a58-48f9-ac68-bb3cc09b70c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jamie Skinny Jeans",
    brand: "TOPSHOP",
    description:
      "Try the high-waist trend in skinny jeans that feature a vintage-inspired rise and a classic blue wash.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/39a8232a-77c8-4bd7-a95c-ab5e09534f94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jeggings",
    brand: "WIT & WISDOM",
    description:
      "Light whiskering enhances the svelte skinny fit of closet-essential jeans cut from exceptionally soft and comfortable stretch denim.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1f6d2d6-19b7-4a54-940d-58f79e239ba7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Levi’s® Ribcage Ripped High Waist Ankle Straight Leg Jeans",
    brand: "LEVI'S®",
    description:
      "Take your casual look up a notch with sky-high, low-stretch jeans that define your waist and relax into a true straight-leg profile.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/12afa5ee-3abf-4bdf-96e5-bb7680c66d33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Loving Good Vibes Denim Shorts",
    brand: "FREE PEOPLE",
    description:
      "Keep it casual and cool in these nonstretch denim shorts punctuated with a feathery frayed hem.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/033303ae-5b8d-48fe-b42f-3ccd6feb0a2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Luxe Touch Fray Hem Ankle Skinny Jeans",
    brand: "WIT & WISDOM",
    description:
      "With a soft wash on these authentically faded, destruction-dashed jeans, you may have found the perfect pair.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/79b991b0-1dda-4b8d-9ee2-12c5d189e9ed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Luxe Touch High Waist Skinny Ankle Jeans",
    brand: "WIT & WISDOM",
    description:
      "A dark indigo wash enhances the leggy look of these curve-skimming jeans with just a bit of whiskering to give them the look of well-loved faves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/321decfe-a015-4d77-92a7-8fb4af35e051.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Marilyn Straight Leg Jeans",
    brand: "NYDJ",
    description:
      "Soft, stretchy straight-leg jeans create a streamlined silhouette and feature exclusive lift-tuck technology to help flatten the tummy and lift the rear.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf6ff19e-784f-4757-b0c6-3c8a94bb08fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Naomi Fab Ab High Waist Crop Slim Straight Leg Jeans",
    brand: "KUT FROM THE KLOTH",
    description:
      "Nicked patches and raw hems bring an easy dose of lived-in style to slim-cut straight-leg jeans made with comfortably slimming Fab Ab front pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/91c2a05e-79c9-42ca-ae2a-baaf31850b56.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Parker Distressed Denim Shorts",
    brand: "AGOLDE",
    description:
      "A relaxed, laid-back fit and premium nonstretch denim create plenty of vintage attitude on high-rise shorts finished with ragged raw-edge hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c88db528-07f8-40aa-8e15-c31b7e4a1bb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Parker High Waist Cutoff Denim Shorts",
    brand: "AGOLDE",
    description:
      "A relaxed fit and light-wash nonstretch denim create plenty of vintage-style attitude on these high-rise shorts finished with ragged raw-edge hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a3f5605e-bdae-4488-945e-f2f453a60718.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Prima Mid Rise Ankle Cigarette Jeans",
    brand: "AG",
    description:
      "A brilliant white wash helps streamline the silhouette of cropped skinny jeans crafted from ultrasoft Japanese stretch denim.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/957e2f36-6515-441b-926f-8c41b6eacb2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Raw Hem Crop Straight Leg Jeans",
    brand: "TOPSHOP",
    description:
      "Trendy light-wash jeans with a flattering high waist are cut with raw cropped cuffs that gain more edgy fraying over time.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9dae9759-ee15-46f2-949e-40e01181ed57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ribcage High Waist Ankle Straight Leg Jeans",
    brand: "LEVI'S®",
    description:
      "Take it up a notch with these sky-high jeans that define your waist and relax into a cropped straight-leg profile.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26dfa87c-cfd4-450a-882b-c93847e4d86e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ripped High Waist Denim Mom Shorts",
    brand: "BP.",
    description:
      "Chase a sunny day in these casual-cool high-rise shorts made from nonstretch denim with edgy distressing.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/83daf6f5-8743-4cee-bf41-194c19e465c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sheri Side Slit Slim Ankle Jeans",
    brand: "NYDJ",
    description:
      "These slim ankle-slit jeans flatter with exclusive lift-tuck technology that helps flatten the tummy and lift the rear.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/611b1de0-f138-4147-812e-8fd7814655e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Straight Leg Raw Hem Jeans",
    brand: "TOPSHOP",
    description:
      "Frayed hems add an element of lived-in appeal to straight-leg jeans fashioned with just the right hint of stretch.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31824991-7b45-4303-b807-324a1c0e2b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Dazzler Crop Fray Hem Skinny Jeans",
    brand: "MOTHER",
    description:
      "Strut your stuff in these cropped skinny jeans cut from distressed denim. Raw, frayed hems and ripped knees provide a rebellious flourish.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a0bb9e8f-57ef-4ecd-97cc-9391f7be9bf6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The High-Rise Perfect Vintage Jean",
    brand: "MADEWELL",
    description:
      "The cut: With their waist-accentuating high rise and tapered legs, these are mom jeans—if your mom was a '90s supermodel. The fabric: Premium white denim with zero see-through and a touch of body-hugging stretch so they won't bag out.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4c28821-5104-46ec-b6a5-f371e827bc82.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Hustler High Waist Ankle Fray Jeans",
    brand: "MOTHER",
    description:
      "Ragged cutoff hems highlight the trend-right cropped flare silhouette of ultra-dark high-rise jeans that transition seamlessly from day to night.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f2ab2a8-c836-4542-8f51-72bff5189e2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Insider High Waist Crop Step Chew Hem Jeans",
    brand: "MOTHER",
    description:
      "Vintage-inspired faded and distressed jeans are updated with a high waist and chewed-up step hems for a fresh look that flaunts your footwear.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f84532bb-ad5e-4438-846d-cfa0ed7acef8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Insider Step Hem Crop Bootcut Jeans",
    brand: "MOTHER",
    description:
      "Frayed step hems make a cool, so-current update to cropped bootcut jeans styled with a leg-lengthening high waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c8598f9-7cd0-46eb-86bc-0e9c6505b1f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Looker High Waist Crop Skinny Jeans",
    brand: "MOTHER",
    description:
      "A faded blue wash lends vintage appeal to a pair of stretchy skinnies that are cropped at the ankles for wear-with-everything style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/826ed27b-e9c9-47de-9a3a-d99b21eb4fb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Perfect High Waist Ripped Jeans",
    brand: "MADEWELL",
    description:
      "The cut: With their waist-accentuating high rise and tapered legs, these are 'mom jeans' (if your mom was a '90s supermodel). The fabric: Premium denim that combines the holds-you-in structure of rigid with a touch of flattering stretch for day-one comfort.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0540453a-3ab2-4d02-a065-81064fd0accd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Perfect High Waist Tapered Jeans",
    brand: "MADEWELL",
    description:
      "With their waist-accentuating high rise and tapered legs, these are 'mom jeans' (if your mom was a '90s supermodel). Plus, they're made of Heritage Stretch denim that has an old-school look and a touch of give for a perfectly broken-in feel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d74b3349-27b2-42cc-82ac-57dda70770bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "We the Free Makai Ripped Cutoff Denim Shorts",
    brand: "FREE PEOPLE",
    description:
      "Edgy distressing energizes these high-waist nonstretch shorts finished with feathery frayed hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72591f18-3dce-4013-85c7-197eabf9a0a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wedgie High Waist Crop Straight Leg Jeans",
    brand: "LEVI'S®",
    description:
      "These cropped, high-waist jeans are designed with special construction that lifts the backside and hugs the hips to showcase your curves to greatest effect.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c9575718-5651-4122-a922-f572831e9710.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wedgie Icon Fit High Waist Jeans",
    brand: "LEVI'S®",
    description:
      "Inspired by vintage Levi's, these faded jeans have a super-high waist that showcases your curves to greatest effect.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/beec9d7f-f71b-4417-88a8-48b3aed064f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wedgie Icon Fit High Waist Straight Leg Jeans",
    brand: "LEVI'S®",
    description:
      "Inspired by vintage Levi's, these medium-wash nonstretch jeans have a super high-waist that showcases your curves and trendy weathered seams.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32d0c66f-dc21-44e2-bcbc-6943edd4c951.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wedgie Icon Ripped High Waist Ankle Slim Jeans",
    brand: "LEVI'S®",
    description:
      "Inspired by vintage Levi's and slimmed down for today, these nonstretch jeans have a super-high waist to highlight your curves and give your backside a lift.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/94ffcb91-04d5-4d30-8e7f-06b60d860edc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wedgie Ripped High Waist Crop Straight Leg Crop",
    brand: "LEVI'S®",
    description:
      "These nonstretch jeans with a busted knee have a cheeky, lifting seat and a high waist to show off your curves and make you feel like a '90s supermodel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8602735-3afa-4a3f-ae5d-a5a0cf7ea16f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wide Leg Jeans",
    brand: "BP.",
    description:
      "Rock a modern silhouette in these light-wash jeans featuring a flattering high waist and elongating wide legs.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/851282ec-243d-4e0c-b764-8956fdb7bd04.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Relaxed Ripped Mid Length Denim Shorts",
    brand: "MADEWELL",
    description:
      "The cut: Slouchy and relaxed, these cutoff jean shorts sit lower on the hips for a laid-back '90s feel. The fabric: Premium 100 percent cotton denim from the Cone® mill with zero stretch, artfully ripped for a broken-in look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/04a4cc57-65eb-4c82-a6b2-4cca11d6dc07.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's The Tomcat High Waist Raw Hem Ankle Jeans",
    brand: "MOTHER",
    description:
      "A faded finish and fraying hems add unmistakable lived-in appeal to stretch-denim jeans styled in an abbreviated straight-leg cut.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/341b9304-d4a7-4043-96c0-085c6dc088b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const jeansData = [
  {
    productName: "501® High Waist Straight Leg Jeans",
    price: 68.6,
    color: "Athens Dark",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27a72ee7-a040-4d3e-a9b4-45dc30c42107.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "501® Original Cutoff Denim Shorts",
    price: 48.65,
    color: "Salsa Destiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1b960cc8-7edd-4b63-b68e-c897cfc895c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "501® Original Cutoff Denim Shorts",
    price: 48.65,
    color: "Luxor Heat Short",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ca0a3b0-aeb3-4b94-847d-433c78852d8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "501® Original Cutoff Denim Shorts",
    price: 48.65,
    color: "Wise Up",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc8ca848-375c-42e7-bee9-f58f2fc967e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "501® Original Cutoff Shorts",
    price: 48.65,
    color: "Athens Mid Short",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a94ce089-714b-4ad8-8193-9fe4064b6ceb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "501® Skinny Jeans",
    price: 68.6,
    color: "Tango Light",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa9733e8-7cbc-4475-b217-51ea291ec367.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "A-Line Mom Shorts",
    price: 56,
    color: "Mid Denim",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/720b6b2f-d6f8-4dbd-9fd6-61550f0d2fc1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-solution Ankle Skinny Jeans",
    price: 68,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7afd14b4-bfd3-42ea-86e4-3f3b6895bc3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Denim Shorts",
    price: 58,
    color: "Bl-Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3d94f72-7e82-4ef2-a2c9-ce8323345a1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Jeans",
    price: 68,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1fbb7d75-e711-4fd9-917d-f3863c053123.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Itty Bitty Bootcut Jeans",
    price: 78,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/51a8e341-56a4-4e85-9729-6cef2cdfe4e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Raw Hem Skinny Crop Jeans",
    price: 78,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1b9ecaa1-d328-439e-9a32-abdb6abc6113.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Itty Bitty Bootcut Jeans",
    price: 68,
    color: "Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e053c863-1976-44d2-a91b-26638bd7d9b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Itty Bitty Bootcut Jeans",
    price: 78,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8392197-4a27-430a-b087-ebb650c9356a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-solution Modern Ankle Skinny Jeans",
    price: 78,
    color: "Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/86f1b2b0-a600-488e-8aea-e0db5c2febad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Raw Hem Ankle Skinny Jeans",
    price: 68,
    color: "Bl-Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ee6dd84-3360-42d0-9ca4-b6fc7e06faeb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Raw Hem Skinny Jeans",
    price: 68,
    color: "Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/01615d76-4bc4-4afe-831e-27f02180b20d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-solution Raw Hem Slim Straight Jeans",
    price: 78,
    color: "Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/adb61a0b-d6c0-49fb-8edc-87485215d074.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-solution Skinny Ankle Jeans",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed01e711-8b32-4a1b-bf97-1bd4cf7386d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-solution Skinny Ankle Jeans",
    price: 68,
    color: "Dark Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6535c596-3d41-4531-a73e-5d61dff37d79.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend Denim Shorts",
    price: 47.6,
    color: "Dress Down",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3c5382e-b810-45e0-94ee-7fc676b3ca3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boyfriend Shorts",
    price: 49,
    color: "Medium Destruct",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/08a44d7d-a797-49c3-88ef-ef7bacc269a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Donna Fab Ab High Waist Raw Hem Ankle Skinny Jeans",
    price: 89,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d01c5ee-1f7b-4e70-a9f7-7ef99f6edd94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Edison Relaxed Fit Jeans",
    price: 298,
    color: "Mid Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/08b3a47f-1ffb-4453-af8e-464f8f453f34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fayna Side Panel Balloon Jeans",
    price: 385,
    color: "Mid Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9522fea7-c088-43a1-aaec-2c90cd7332a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Gidget Denim Shorts",
    price: 59,
    color: "Consolidated",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e5c6055-a088-4cd7-a41d-93e53d759752.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Girlfriend Jeans",
    price: 78,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/53064f72-147f-4410-86ed-93235b11327d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Good Classic Raw Hem High Waist Slim Jeans",
    price: 83.4,
    color: "Blue940",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abe7742a-a8f3-4960-a7fc-96e323a83be1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Good Legs High Rise Skinny Jeans",
    price: 129,
    color: "Black001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae2fa614-3bab-4b08-9a55-3abd9d4e01af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Good Legs Skinny Jeans",
    price: 139,
    color: "Blue224",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95c62830-e1dc-4ce8-b584-f346c58e20ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Good Straight High Waist Raw Hem Straight Leg Jeans",
    price: 99,
    color: "White037",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98e1d82f-d108-4fa0-b0e4-f894f2d0e58c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Button Fly Mom Jeans",
    price: 22.49,
    color: "Blue Light Vintage Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/05664bbd-0a58-48f9-ac68-bb3cc09b70c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jamie Skinny Jeans",
    price: 74,
    color: "Mid Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/39a8232a-77c8-4bd7-a95c-ab5e09534f94.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeggings",
    price: 64,
    color: "Dark Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1f6d2d6-19b7-4a54-940d-58f79e239ba7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Levi’s® Ribcage Ripped High Waist Ankle Straight Leg Jeans",
    price: 75.6,
    color: "Samba Done",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/12afa5ee-3abf-4bdf-96e5-bb7680c66d33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Loving Good Vibes Denim Shorts",
    price: 68,
    color: "Somerset",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/033303ae-5b8d-48fe-b42f-3ccd6feb0a2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Luxe Touch Fray Hem Ankle Skinny Jeans",
    price: 78,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/79b991b0-1dda-4b8d-9ee2-12c5d189e9ed.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Luxe Touch High Waist Skinny Ankle Jeans",
    price: 78,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/321decfe-a015-4d77-92a7-8fb4af35e051.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Marilyn Straight Leg Jeans",
    price: 119,
    color: "Marcel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf6ff19e-784f-4757-b0c6-3c8a94bb08fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Marilyn Straight Leg Jeans",
    price: 69.3,
    color: "Quinn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0bf3e220-3276-4d47-88b7-4cc2da46ddb0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Naomi Fab Ab High Waist Crop Slim Straight Leg Jeans",
    price: 89,
    color: "Diascia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/91c2a05e-79c9-42ca-ae2a-baaf31850b56.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Parker Distressed Denim Shorts",
    price: 138,
    color: "Skywave",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c88db528-07f8-40aa-8e15-c31b7e4a1bb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Parker Distressed Denim Shorts",
    price: 138,
    color: "Swapmeet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d4a1fc8-455a-40ea-8fba-2e418cb016e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Parker High Waist Cutoff Denim Shorts",
    price: 138,
    color: "Swapmeet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a3f5605e-bdae-4488-945e-f2f453a60718.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Parker High Waist Cutoff Denim Shorts",
    price: 138,
    color: "Panna Cotta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06a8d020-1c17-4d80-b52c-ef97af183ba1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Prima Mid Rise Ankle Cigarette Jeans",
    price: 198,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/957e2f36-6515-441b-926f-8c41b6eacb2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Raw Hem Crop Straight Leg Jeans",
    price: 75,
    color: "Bleach",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9dae9759-ee15-46f2-949e-40e01181ed57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribcage High Waist Ankle Straight Leg Jeans",
    price: 68.6,
    color: "Feelin Cagey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26dfa87c-cfd4-450a-882b-c93847e4d86e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ripped High Waist Denim Mom Shorts",
    price: 29,
    color: "Vintage Light Destroy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/83daf6f5-8743-4cee-bf41-194c19e465c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sheri Side Slit Slim Ankle Jeans",
    price: 99,
    color: "Marisol Carnation",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/611b1de0-f138-4147-812e-8fd7814655e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Straight Leg Raw Hem Jeans",
    price: 75,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31824991-7b45-4303-b807-324a1c0e2b7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Dazzler Crop Fray Hem Skinny Jeans",
    price: 238,
    color: "Weekend Warrior",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a0bb9e8f-57ef-4ecd-97cc-9391f7be9bf6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The High-Rise Perfect Vintage Jean",
    price: 128,
    color: "Tile White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4c28821-5104-46ec-b6a5-f371e827bc82.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Hustler High Waist Ankle Fray Jeans",
    price: 198,
    color: "Not Guilty",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f2ab2a8-c836-4542-8f51-72bff5189e2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Insider High Waist Crop Step Chew Hem Jeans",
    price: 248,
    color: "Dancing On Coals",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f84532bb-ad5e-4438-846d-cfa0ed7acef8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Insider Step Hem Crop Bootcut Jeans",
    price: 228,
    color: "Wish On A Star",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c8598f9-7cd0-46eb-86bc-0e9c6505b1f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Looker High Waist Crop Skinny Jeans",
    price: 238,
    color: "Let'S Be Friends",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/826ed27b-e9c9-47de-9a3a-d99b21eb4fb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect High Waist Ripped Jeans",
    price: 94.5,
    color: "Denman Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0540453a-3ab2-4d02-a065-81064fd0accd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Perfect High Waist Tapered Jeans",
    price: 94.5,
    color: "Fiore Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d74b3349-27b2-42cc-82ac-57dda70770bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "We the Free Makai Ripped Cutoff Denim Shorts",
    price: 68,
    color: "Army",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72591f18-3dce-4013-85c7-197eabf9a0a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wedgie High Waist Crop Straight Leg Jeans",
    price: 62.65,
    color: "Jive Sound",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c9575718-5651-4122-a922-f572831e9710.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wedgie Icon Fit High Waist Jeans",
    price: 62.65,
    color: "Tango Light",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/beec9d7f-f71b-4417-88a8-48b3aed064f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wedgie Icon Fit High Waist Straight Leg Jeans",
    price: 43.19,
    color: "These Dreams",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32d0c66f-dc21-44e2-bcbc-6943edd4c951.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wedgie Icon Ripped High Waist Ankle Slim Jeans",
    price: 68.6,
    color: "Athens Asleep",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/94ffcb91-04d5-4d30-8e7f-06b60d860edc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wedgie Ripped High Waist Crop Straight Leg Crop",
    price: 62.65,
    color: "After Sunset",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8602735-3afa-4a3f-ae5d-a5a0cf7ea16f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Jeans",
    price: 45,
    color: "Authentic Light Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/851282ec-243d-4e0c-b764-8956fdb7bd04.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Relaxed Ripped Mid Length Denim Shorts",
    price: 78,
    color: "Steenwick",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/04a4cc57-65eb-4c82-a6b2-4cca11d6dc07.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's The Tomcat High Waist Raw Hem Ankle Jeans",
    price: 248,
    color: "Let S Just",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/341b9304-d4a7-4043-96c0-085c6dc088b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const pantsProduct = [
  {
    name: "Ab-Solution High Waist Ankle Skinny Pants",
    brand: "WIT & WISDOM",
    description:
      "Stretchy, ankle-grazing skinny pants are designed for a slimming fit with Ab-solution technology to shape, smooth and lift in all the right places.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a3e0c37-f526-4a25-84ea-d6201c573b4a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution High Waist Trousers",
    brand: "WIT & WISDOM",
    description:
      "Stretch-kissed staple pants have the corner on comfort and style thanks to design technology meant to mold, shape and hold with ease.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81dcf1c6-bf35-47a8-bb8c-b433f8c9e183.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ab-Solution Plaid Ankle Trousers",
    brand: "WIT & WISDOM",
    description:
      "Tonal plaid makes these ankle-length trousers ideal for the office, while Ab-solution power-mesh panels shape, smooth and lift in all the right places.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65f2dcdc-da40-4ca4-a350-ae29e69ec818.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Caden Crop Twill Trousers",
    brand: "AG",
    description:
      "Trouser styling gives these slim crops a bit more polish while the exceptionally soft Italian stretch twill makes them ready to explore everything the weekend has to offer.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf36bf10-9055-43c5-9e5a-b7613bc44d74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cara Pocket Joggers",
    brand: "ZELLA",
    description:
      "Soft and snuggly joggers are topped with a comfy drawstring waist for a weekend-perfect vibe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6df4d92d-dd1d-478a-b6c4-37936474a01d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Catch a Crush Fringe Crop Pants",
    brand: "LULUS",
    description:
      "Dramatic fringe cuffs add vintage-inspired charm to cropped pants featuring a pull-on design.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bd5fc19-7bf5-4f86-93fc-d2fe67bb225b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cozy Active Pocket Joggers",
    brand: "ZELLA",
    description:
      "A stretchy, wide waistband and cuffs provide a comfy fit in relaxed joggers made from a stretchy knit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f838aeb6-a32e-433d-80c4-8b71850960af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cristina Martinez Print Pants",
    brand: "NORDSTROM",
    description:
      "A lively print and a mostly recycled fabric mean these pants are all about the feel-good factor.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6004aed2-c3cc-416c-b32c-95678d2e31e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Daily Jogger Pants",
    brand: "VUORI",
    description:
      "Get active in these sporty tie-waist joggers styled with an elastic waist and comfy ribbed trim.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db03b202-0063-4614-bd93-ce44d8edf18f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Diana Stretch Corduroy Skinny Pants",
    brand: "KUT FROM THE KLOTH",
    description:
      "Stretchy pinwale corduroy defines the leg-hugging fit of jean-style pants available in a wide range of colors.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3d40ac0-8a21-4961-add9-8bfdde534ffa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Drawstring Joggers",
    brand: "WIT & WISDOM",
    description:
      "Cozy and comfy with an abbreviated length, these lightweight joggers are the perfect choice for lounging at home or running into town.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6e1abb1a-fc35-458d-a6bb-0c6afd6e5ac9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Drawstring Ripstop Pants",
    brand: "VUORI",
    description:
      "Built for adventure but comfortable enough for every day, these stretch-cotton pants are great for everything from hiking to hanging out.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5493f653-d200-4f47-af93-0a66e45e16af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Drawstring Wide Leg Pants",
    brand: "OPEN EDIT",
    description:
      "If you have to put pants on, keep it kicked back and casual with this pair, wide-legged and drawstring-tied at the elastic waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92edf156-9cea-43e6-85a6-58248427ac54.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Essential Pocket Joggers",
    brand: "SWEATY BETTY",
    description:
      "These sporty drawstring-waist joggers are soft, slouchy and ideal for getting active or being cozy.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5dbe6d2-692e-436a-be77-4658232a7d65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Essential Track Joggers",
    brand: "GOOD AMERICAN",
    description:
      "These perfectly plush pants with a relaxed silhouette and elastic waist and hems are destined to be your favorite style for days you want to treat yourself.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1ac9d23-2a48-4576-8483-52426f34e571.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Faux Leather Jogger Pants",
    brand: "SPANX®",
    description:
      "Joggers take an edgy, rocker turn cut from soft faux leather with comfortable stretch, and finished with front pockets because pockets make everything better.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a41979c7-5253-4883-b374-7cc6333e67b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Faux Leather Joggers",
    brand: "TOPSHOP",
    description:
      "Get in the game with faux-leather joggers popped with side utility pockets for a look that serves both sporty and swaggy.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fdc4c991-fcf1-4b90-8884-65676e35e919.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Feelin' Good Linen Blend Utility Pants",
    brand: "FREE PEOPLE",
    description:
      "Utility pockets mean you're ready for anything when you wear these slouchy drawstring pants in a breathable linen-and-cotton-blend herringbone twill.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e98d841-849f-43dd-bc60-91b8cc5f5ff2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Flex-ellent High Waist Cargo Pants",
    brand: "WIT & WISDOM",
    description:
      "Grab your gear and go in slim-leg stretch-cotton pants made with a high waist and plenty of pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/168bda5e-aaed-4e0c-bd0d-8e0f126015f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Getaway Ankle Pocket Pants",
    brand: "ZELLA",
    description:
      "These comfy elastic-waistband pants with a slim, tapered leg are made from a stretchy, woven recycled polyester blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8dfa465-4d78-4a1a-9b21-f197c14ea82a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Getaway High Waist Joggers",
    brand: "ZELLA",
    description:
      "Escape to the gym before browsing the grocery aisle in breathable woven joggers that have you covered in lightweight comfort wherever your day takes you. A hidden pocket at the waistband is perfect for securing your house key, card or cash while on a morning run.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c66796cb-9ecf-4c0f-8572-aaec20abd790.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Getaway Pocket Lightweight Woven Joggers",
    brand: "ZELLA",
    description:
      "Escape to the gym before browsing the grocery aisle in breathable woven joggers that have you covered in lightweight comfort wherever your day takes you. A hidden pocket at the waistband is perfect for securing your house key, card or cash while on a morning run.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fc47bb1-b19b-456a-ba63-8a13f8301f50.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Hailey Drawstring Trousers",
    brand: "REISS",
    description:
      "Creamy tailored trousers dab in discreet comfort with a drawstring waist that tips them in to favorite status.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6530d379-24ce-409d-97c3-eeecc310ffbc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Halogen Wide Leg Pants",
    brand: "HALOGEN®",
    description:
      "A bellowing wide-leg silhouette lends a breezy appeal to a pair of pants that transition effortlessly from the office to a night out.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/271be9d1-ef30-44e7-a8b4-aaa0ab85a119.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Pants",
    brand: "HALOGEN®",
    description:
      "Elongating creases glide down the front of these stretch-poplin pants that are full of charm and polish.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/593de307-c444-4962-a8b8-6132d18b18be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Patch Pocket Pants",
    brand: "TREASURE & BOND",
    description:
      "Roomy patch pockets all around add to the wear-everyday appeal of these high-rise pants cut from an eco-friendly blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/50b64cce-14e9-4000-892c-ec809277683c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Peg Trousers",
    brand: "TOPSHOP",
    description:
      "Light pleating and a relaxed fit highlight these peg trousers that elevate your contemporary look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac36960f-1045-4be2-ace3-ec9ac3efa7d1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Improvise Performance Joggers",
    brand: "ZELLA",
    description:
      "A ribbed yoke creates a flattering fit while allowing you to move comfortably in these woven performance joggers made from moisture-wicking stretch fabric.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/960425bc-c873-495b-80ae-0d7acf6d0f12.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jamile Cargo Pants",
    brand: "4TH & RECKLESS",
    description:
      "Lustrous satin adds elevated glamour to these otherwise rugged cargo pants complete with a waist-cinching belt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f468a775-8a7b-4e5f-909f-0c67300890a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jeans Company Kelsey Knit Trousers",
    brand: "LIVERPOOL",
    description:
      "Polished enough for work and comfortable enough for anything, these slim-cut pants are tailored for a smooth fit in a ponte knit with plenty of stretch.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06f32479-a02e-48b5-9cdc-58102d9be37d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Kennedy Wide Leg Trousers",
    brand: "A.L.C.",
    description:
      "Front creases lend a polished finish to these wide-leg pants tailored with a touch of comfortable stretch.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8bff750-fe5c-47c5-8c6c-0eb83b40948b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Lilibet Textured Wide Leg Trousers",
    brand: "4TH & RECKLESS",
    description:
      "These on-trend wide-leg trousers get contemporary appeal with a textured feel and belted-waist design.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2856b996-959f-4064-bcb3-23a47f92883f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Linen Joggers",
    brand: "CASLON®",
    description:
      "A cooled-down update to your linen collection, these joggers dress up a day when you wish you could just wear sweats.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77d949aa-5fbe-482e-883f-ef586512fe28.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In Ankle Active Performance Lifestyle Pants",
    brand: "ZELLA",
    description:
      "These ankle-length pants are ones you can wear all day long, whether you are working out or out on errands. The lifestyle design is made from Zeltek moisture-wicking fabric that dries quickly for comfort.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6e7d2f50-b6d9-4bee-bf15-83a25d3066c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Live In Pocket Joggers",
    brand: "ZELLA",
    description:
      "Lightweight knit joggers are cut in a versatile, slim profile and make racing to the finish line or grocery store exceptionally comfortable. These closet essentials are made from Zeltek moisture-wicking fabric that dries quickly.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/97b8a16f-7582-411b-9848-4f88d823273a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Miramar Faux Jeans Knit Joggers",
    brand: "RAG & BONE",
    description:
      "A masterpiece of deception, these French terry joggers are an oh-so-comfortable canvas for a photorealistic print of whiskered and worn five-pocket-style jeans.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e65e9982-e323-4a7d-9783-f8d0c086c3b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Nina Wide Leg Pants",
    brand: "VINCE CAMUTO",
    description:
      "Stretchy suiting fabric gives sartorial polish to these easy-fitting pants cut with a clean and shapely silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac825bb8-f253-476b-9ca6-7359cb10926a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Paperbag Waist Pants",
    brand: "TREASURE & BOND",
    description:
      "A tie belt cinches the high paperbag waist of these cuffed crop pants made in a textured lightweight weave that furthers the style's laid-back vibe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d82af2d9-0b22-4e7c-a16f-83bc9c5264b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Performance Joggers",
    brand: "VUORI",
    description:
      "Give your work-from-home uniform a cozy upgrade with these soft, relaxed joggers that are also stylish enough for errands.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/931f905b-ae1d-4cbe-b871-3eb041bff857.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Pintuck Stretch Crepe Skinny Pants",
    brand: "VINCE CAMUTO",
    description:
      "Pintucked leg seams accentuate the lean, leggy silhouette of work pants in a flattering high-waisted style that's all-day comfortable.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edd31e2c-0236-4ab9-b31e-0c39333befbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rebel Crop Stretch Cotton Pants",
    brand: "SANCTUARY",
    description:
      "Cropped hems finished with jogger-style cuffs lend a casual air to this pair of comfy stretch-cotton pants.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31fe0b60-a5f1-4fea-842b-a8d8d1009d74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Renzo Crop Cotton Blend Trousers",
    brand: "VERONICA BEARD",
    description:
      "Crested button add a tailored touch to these essential trousers cut to an ankle-skimming length.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a7c3f14-0ed1-4360-8819-bc0a84f3271b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Slim Ankle Stretch Cotton Pants",
    brand: "JONES NEW YORK",
    description:
      "With a touch of stretch to hold their shape and add comfort, these trim trousers may just be the perfect pants.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e02e38c-0bbb-45f8-ab14-4c845d4b257f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Slim Stretch Woven Pants",
    brand: "ANNE KLEIN",
    description:
      "Staple work pants are cleanly tailored from a crisp fabric with plenty of stretch to keep you going through marathon days.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5996a12a-976c-44dd-96bc-f6f5d93fc228.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sportswear Essential Fleece Pants",
    brand: "NIKE",
    description:
      "Everyday comfort is essential, and so are these loose-fitting sweatpants made from cotton-blend fleece that has a soft, dense feel. Pintucks add a flattering touch and elastic cuffs let you show off your coolest kicks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16e65c19-377c-460b-8525-76d13680f55a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sportswear Essentials Curve Ankle Pants",
    brand: "NIKE",
    description:
      "Cut from a substantial, brushed-back cotton-blend fleece, these tapered pants have an easy fit made for your most relaxed days.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/606dc490-222b-47e0-ae23-c1e50b5b6064.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Stovepipe Crop Pull-On Pants",
    brand: "VINCE",
    description:
      "Polish upyour workwear ensembles in these supersoft pants cut with a cropped silhouette and wide-leg cuffs.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a38843b3-9409-4b09-9dfc-e7c4a28b7fa4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Straight Leg Organic Linen Ankle Pants",
    brand: "EILEEN FISHER",
    description:
      "Give your tailored wardrobe a refresh with these contemporary pants in soft, washed linen with an airy feel you'll love all day.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ccba3d2-4cbd-440b-9a4f-9b99f08e65b8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Stretch Cotton Chino Pants",
    brand: "CASLON®",
    description:
      "Move with ease in these effortless chino pants that have plenty of stretch and a solid color for styling versatility.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78c32c50-6a7f-4367-848c-78756e74382f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Stretch Cotton Pants",
    brand: "WIT & WISDOM",
    description:
      "Wide hems and a spot of pintucked seaming add style points to staple pants cut from comfort-forward stretch cotton.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/70c34941-a4f1-4375-a6f4-b4dbbba82828.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Stretch Crepe Slim Ankle Pants",
    brand: "EILEEN FISHER",
    description:
      "Boasting the comfort and ease of leggings but in a more polished stretch-crepe fabrication, slim ankle-length pants bridge the gap between work and play.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06a2ca83-a07e-4d22-b172-117de75bc981.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sweatty Betty Explorer Lightweight Pants",
    brand: "SWEATY BETTY",
    description:
      "Stay in, work out and make an easy-breezy transition to leisure time in this versatile pair of relaxed-fit athletic pants.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6274b53-3e96-4095-9b1a-9f0f0bd8bc45.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Textured Cotton Pull-On Pants",
    brand: "CASLON®",
    description:
      "Sunny strolls and casual afternoons call for easy-breezy straight-leg pants fashioned from lightweight cotton with a bit of rustic texture.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/923164dc-5fa2-4a92-9c78-1f8a5126a876.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "THE WAY HOME JOGGER",
    brand: "FREE PEOPLE",
    description:
      "You love the shorts, now meet the joggers. These breezy, warm-up style joggers feature a boldly smocked waistband with a high-rise silhouette and cinched ankles. - Pull-on style - Patched hip pockets - Slim, relaxed fit - Imported This item cannot be shipped to Canada.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f9c9b5f6-9b04-4db0-8dd1-031f3f269a57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Tie Waist Wide Leg Pants",
    brand: "OPEN EDIT",
    description:
      "Whether lounging around or lunching out is on your agenda, these jogger-inspired pants strike just the right tone in a wide-leg cut and a wide smocked waist. A drawstring tie perfects the fit, and side-seam pockets seal the deal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0de64745-32b2-4622-8ea2-9142908044e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Track Style Linen Pants",
    brand: "CASLON®",
    description:
      "Pull-on pants in a cropped, scalloped-hem cut of light and cool linen are ideal for sun-chasing adventures or kicked-back weekends at home.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f58670c3-4304-4903-b059-2421bbabc199.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Pull-On Linen Blend Pants",
    brand: "TREASURE&BOND",
    description:
      "Cultivate comfort in a pair of linen-blend pants that feature a smocked waist and an easy pull-on style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/540fa6ee-06bd-4edc-b315-95d13f65b932.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Stripe Pull-On Pants",
    brand: "TREASURE&BOND",
    description:
      "Polished vertical stripes enliven these breezy linen-blend pants punctuated with flowy wide legs.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b1bb018-77ec-4c1c-b845-e47ab1467bcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wide Leg Linen Pants",
    brand: "TOPSHOP",
    description:
      "An ultrawide leg and pleated front create a gorgeous silhouette for these airy pants made from breathable linen.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72b9ee93-0603-4d7a-a1c3-2a28545d9501.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wide Leg Twill Pull-On Pants",
    brand: "SPANX®",
    description:
      "Front button accents and flap pockets style these kicky wide-leg pants designed with a slimming pull-on waistband, four-way stretch and a soft feel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ce819fb-1ec4-4651-aed3-01c47e04d3e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Cotton Knit Drawstring Pants",
    brand: "CASLON®",
    description:
      "Take it easy in drawstring pants done in a cuffable cotton knit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28221e4a-3299-4097-95da-05789818eecc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Relaxed Crop Pants",
    brand: "HALOGEN®",
    description:
      "Get relaxed in these lightweight pants topped with an easy elastic waist and punctuated with cool cropped hems.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28e97163-a1ac-41ff-9e52-2108a1477f28.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's The Slim Boyfriend Jeans",
    brand: "MADEWELL",
    description:
      "The cut: With a slouchy lower rise, Madewell's signature slim boyfriend jeans beautifully blur the weekend/weekday line. The fabric: Premium denim that combines the holds-you-in structure of rigid with a touch of flattering stretch (they'll be so day-one comfortable you won't even unbutton at the dinner table—but, trust us, you'll look *chef's kiss*).",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02d61b17-96ae-4ca5-a2de-bc9ba296df7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wonderstretch Straight Leg Pants",
    brand: "NIC+ZOE",
    description:
      "Versatile straight-leg pants are designed for a clean, smooth fit with plenty of stretch for exceptional comfort and shape-retention.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5bcc82d4-b920-4285-8ada-e9f59246dbc4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Woven Weekend Joggers",
    brand: "VUORI",
    description:
      "Lightweight joggers featuring a secure zip pocket are cut from woven four-way stretch fabric just in case you want to stop by the gym.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a00ff4b5-489f-4703-8f9c-ab728454075e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "x Living in Yellow High Waist Cuffed Crop Button Fly Pants",
    brand: "LIVERPOOL LOS ANGELES",
    description:
      "Classic khakis garner style points with a cropped, cuffed silhouette and an exposed-button fly in this trim-fitting and super-stretchy version.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a875b5f6-d5ca-4012-8327-4457272b1f3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Y2K Low Rise Cargo Pants",
    brand: "BDG URBAN OUTFITTERS",
    description:
      "With a low-rise waist and handy cargo pockets, these breezy cotton pants boast both of-the-moment and nostalgic vibes.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d6d7467d-26e6-42b9-a1da-a06021003f59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const pantsData = [
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Dark Byzantium",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a3e0c37-f526-4a25-84ea-d6201c573b4a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Flax",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/09160c86-0800-477a-ae26-585e4c406192.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Dusty Slate",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1a8f4d9b-e81d-4354-be8e-c0f5d8e6ca90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1f2bb11-a3fd-4e0d-9224-3cbdeb67c18f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Smtw-Smokey Twilight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e5f37e9-b60e-4666-874f-b8a34a03b4e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Brol-Brindle Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2ed3544d-1612-45bb-842b-66b878b83940.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Flax",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/09160c86-0800-477a-ae26-585e4c406192.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Mb-Malbec",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bac07d09-6e54-4be9-a13a-fa8da58a6a07.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Lily Pad",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/849c7f9c-b67e-4cce-ad88-acaacd42ee9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Dove Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/776ef265-e215-4661-b327-4ef5c7a54842.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Ankle Skinny Pants",
    price: 68,
    color: "Shdw-Shadow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dfb2c792-c827-412a-966c-dd46903c8560.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Trousers",
    price: 78,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81dcf1c6-bf35-47a8-bb8c-b433f8c9e183.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution High Waist Trousers",
    price: 78,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81dcf1c6-bf35-47a8-bb8c-b433f8c9e183.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Plaid Ankle Trousers",
    price: 68,
    color: "Black/ Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65f2dcdc-da40-4ca4-a350-ae29e69ec818.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Plaid Ankle Trousers",
    price: 68,
    color: "Black Tan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c28f3462-7d82-4b7e-b027-5b076f301499.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ab-Solution Plaid Ankle Trousers",
    price: 68,
    color: "Black/ Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65f2dcdc-da40-4ca4-a350-ae29e69ec818.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caden Crop Twill Trousers",
    price: 198,
    color: "Sulfur Coastal Vine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf36bf10-9055-43c5-9e5a-b7613bc44d74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caden Crop Twill Trousers",
    price: 198,
    color: "Sulfur Coastal Vine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf36bf10-9055-43c5-9e5a-b7613bc44d74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caden Crop Twill Trousers",
    price: 198,
    color: "Vintage Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72d8781b-23b5-4225-8201-f08add7c9afd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caden Crop Twill Trousers",
    price: 198,
    color: "Sulfur Twilight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46d63e3f-680e-4ea6-83c5-631f29008e9b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caden Crop Twill Trousers",
    price: 198,
    color: "Sulfur Soft Fawn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1414eae-7001-4bf4-b205-68304c2902ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cara Pocket Joggers",
    price: 59,
    color: "Purple Peace",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6df4d92d-dd1d-478a-b6c4-37936474a01d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cara Pocket Joggers",
    price: 59,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e14161f-0095-4b0f-b227-3b53a24edfba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cara Pocket Joggers",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b5acf3f-1c2d-4990-8778-ac7301e62a8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cara Pocket Joggers",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b5acf3f-1c2d-4990-8778-ac7301e62a8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cara Pocket Joggers",
    price: 59,
    color: "Grey Dark Charcoal Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dedbf53e-d4b9-4ccc-b07f-2d06a502ecf5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cara Pocket Joggers",
    price: 59,
    color: "Brown Terrain",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4caadd6b-1837-4e3f-bef9-8ebb7e9451fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cara Pocket Joggers",
    price: 59,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c914eb93-8abb-4647-b5de-f0ce4b0b7c6e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catch a Crush Fringe Crop Pants",
    price: 43.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bd5fc19-7bf5-4f86-93fc-d2fe67bb225b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Catch a Crush Fringe Crop Pants",
    price: 43.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bd5fc19-7bf5-4f86-93fc-d2fe67bb225b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Active Pocket Joggers",
    price: 39.2,
    color: "Navy Sapphire",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f838aeb6-a32e-433d-80c4-8b71850960af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Active Pocket Joggers",
    price: 39.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afd04713-89c6-496f-8777-8bb66fd34bca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozy Active Pocket Joggers",
    price: 39.2,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afd04713-89c6-496f-8777-8bb66fd34bca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cristina Martinez Print Pants",
    price: 79,
    color: "Orange Outline Shapes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6004aed2-c3cc-416c-b32c-95678d2e31e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cristina Martinez Print Pants",
    price: 79,
    color: "Orange Outline Shapes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6004aed2-c3cc-416c-b32c-95678d2e31e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cristina Martinez Print Pants",
    price: 79,
    color: "Black Butterfly Beauty",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dcaea50d-f030-4a69-8559-199569690b9c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Jogger Pants",
    price: 84,
    color: "Fig",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db03b202-0063-4614-bd93-ce44d8edf18f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Jogger Pants",
    price: 84,
    color: "Oregano",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/886873e7-19bd-459c-85f7-12c560a27396.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Jogger Pants",
    price: 84,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8691df6f-54e0-40f5-8b0c-7e90dc0db124.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daily Jogger Pants",
    price: 84,
    color: "Fig",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db03b202-0063-4614-bd93-ce44d8edf18f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Diana Stretch Corduroy Skinny Pants",
    price: 47.97,
    color: "Black Jm",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3d40ac0-8a21-4961-add9-8bfdde534ffa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Diana Stretch Corduroy Skinny Pants",
    price: 47.97,
    color: "Sage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/384a3978-c471-4cdc-a93e-ec6dd0c05881.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Diana Stretch Corduroy Skinny Pants",
    price: 47.97,
    color: "Wine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/70096663-e655-4a0e-8165-d2a457ac4c2b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Diana Stretch Corduroy Skinny Pants",
    price: 47.97,
    color: "Seal Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1b8e1fc2-cefb-4d0e-bea0-65ffd3f282c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Diana Stretch Corduroy Skinny Pants",
    price: 47.97,
    color: "Artichoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5256b0ab-1976-4ded-a175-e44907292db1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Diana Stretch Corduroy Skinny Pants",
    price: 47.97,
    color: "Wine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/70096663-e655-4a0e-8165-d2a457ac4c2b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Joggers",
    price: 68,
    color: "Apple Butter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6e1abb1a-fc35-458d-a6bb-0c6afd6e5ac9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Joggers",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9ace7e4d-be1f-4105-bf72-7d24e6e397a0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Joggers",
    price: 68,
    color: "Olive Drab",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cd27375b-8efd-488e-bd60-c6dd345e3cee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Joggers",
    price: 68,
    color: "Olive Drab",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cd27375b-8efd-488e-bd60-c6dd345e3cee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Ripstop Pants",
    price: 89,
    color: "Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5493f653-d200-4f47-af93-0a66e45e16af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Ripstop Pants",
    price: 89,
    color: "Light Terracotta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f91e1b7c-b2f1-4efd-8f06-2bd9828b08d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Ripstop Pants",
    price: 89,
    color: "Army",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98270ecb-fa31-4657-9d62-37ff19c6bc59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Ripstop Pants",
    price: 89,
    color: "Light Terracotta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f91e1b7c-b2f1-4efd-8f06-2bd9828b08d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Wide Leg Pants",
    price: 59,
    color: "Tan Mocha",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92edf156-9cea-43e6-85a6-58248427ac54.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Wide Leg Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e14b1626-e937-4be7-84fa-6e6089790d77.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Wide Leg Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e14b1626-e937-4be7-84fa-6e6089790d77.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Wide Leg Pants",
    price: 59,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc73cbe6-a9b0-4933-98c7-225a32e6f2bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Drawstring Wide Leg Pants",
    price: 59,
    color: "Teal Mist",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/240d6ec2-aaa2-4a52-a1bc-745e5843eb3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Pocket Joggers",
    price: 70.4,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5dbe6d2-692e-436a-be77-4658232a7d65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Pocket Joggers",
    price: 70.4,
    color: "Falu Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2dc5fd7f-4be9-4321-9538-39dd93aea214.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Pocket Joggers",
    price: 70.4,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5dbe6d2-692e-436a-be77-4658232a7d65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Pocket Joggers",
    price: 78,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5aab80d-adb7-4357-98b4-4d699d15300d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Pocket Joggers",
    price: 78,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5aab80d-adb7-4357-98b4-4d699d15300d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Track Joggers",
    price: 38,
    color: "Ink001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1ac9d23-2a48-4576-8483-52426f34e571.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Track Joggers",
    price: 38,
    color: "Sepia001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/73980ce9-6bae-4111-b629-4602d405475b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Essential Track Joggers",
    price: 38,
    color: "Ink001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1ac9d23-2a48-4576-8483-52426f34e571.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Jogger Pants",
    price: 148,
    color: "Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a41979c7-5253-4883-b374-7cc6333e67b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Jogger Pants",
    price: 148,
    color: "Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a41979c7-5253-4883-b374-7cc6333e67b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Joggers",
    price: 74,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fdc4c991-fcf1-4b90-8884-65676e35e919.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Joggers",
    price: 74,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fdc4c991-fcf1-4b90-8884-65676e35e919.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Feelin' Good Linen Blend Utility Pants",
    price: 98,
    color: "Flowers For 2",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e98d841-849f-43dd-bc60-91b8cc5f5ff2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Feelin' Good Linen Blend Utility Pants",
    price: 98,
    color: "Eden",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/751a60af-b6d6-4989-a093-8c28d9e4581e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Feelin' Good Linen Blend Utility Pants",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a95b364-ceb0-4009-a4a5-98608c7cb0ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Feelin' Good Linen Blend Utility Pants",
    price: 98,
    color: "Shroomy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d719b8c8-3e02-4bba-b60a-dd995bb8d19a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Feelin' Good Linen Blend Utility Pants",
    price: 98,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8cee959f-40ad-4f40-af4c-8192358b71dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Feelin' Good Linen Blend Utility Pants",
    price: 98,
    color: "Flowers For 2",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e98d841-849f-43dd-bc60-91b8cc5f5ff2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flex-ellent High Waist Cargo Pants",
    price: 68,
    color: "Thym-Thyme",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/168bda5e-aaed-4e0c-bd0d-8e0f126015f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flex-ellent High Waist Cargo Pants",
    price: 68,
    color: "Flx-Flax",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/82c933b3-c23e-4ece-92c9-6fd0a5671129.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flex-ellent High Waist Cargo Pants",
    price: 68,
    color: "Ensign Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1392e59-2fe7-429a-81ef-cc05cf913b73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flex-ellent High Waist Cargo Pants",
    price: 68,
    color: "Ensign Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1392e59-2fe7-429a-81ef-cc05cf913b73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Flex-ellent High Waist Cargo Pants",
    price: 68,
    color: "Dgy-Dove Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/11d998aa-6082-4f75-839a-cee39cb22098.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway Ankle Pocket Pants",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8dfa465-4d78-4a1a-9b21-f197c14ea82a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway Ankle Pocket Pants",
    price: 79,
    color: "Grey Flint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d9082fff-c7ab-48b6-bed2-e8137d54bd8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway Ankle Pocket Pants",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8dfa465-4d78-4a1a-9b21-f197c14ea82a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway Ankle Pocket Pants",
    price: 79,
    color: "Navy Nightfall",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/48ffa345-f839-42d3-b7a9-3507dadf3ec9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway High Waist Joggers",
    price: 49.99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c66796cb-9ecf-4c0f-8572-aaec20abd790.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway High Waist Joggers",
    price: 49.99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c66796cb-9ecf-4c0f-8572-aaec20abd790.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway Pocket Lightweight Woven Joggers",
    price: 75,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fc47bb1-b19b-456a-ba63-8a13f8301f50.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Getaway Pocket Lightweight Woven Joggers",
    price: 75,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fc47bb1-b19b-456a-ba63-8a13f8301f50.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hailey Drawstring Trousers",
    price: 160,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6530d379-24ce-409d-97c3-eeecc310ffbc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hailey Drawstring Trousers",
    price: 160,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6530d379-24ce-409d-97c3-eeecc310ffbc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Halogen Wide Leg Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/271be9d1-ef30-44e7-a8b4-aaa0ab85a119.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Halogen Wide Leg Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/271be9d1-ef30-44e7-a8b4-aaa0ab85a119.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Pants",
    price: 79,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/593de307-c444-4962-a8b8-6132d18b18be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Pants",
    price: 79,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a54f934-0eaa-49c9-984f-cc850b26e26f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Pants",
    price: 79,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/593de307-c444-4962-a8b8-6132d18b18be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Patch Pocket Pants",
    price: 79,
    color: "Navy Blazer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/50b64cce-14e9-4000-892c-ec809277683c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Patch Pocket Pants",
    price: 79,
    color: "Brown Toffee",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed820dbd-8c38-49e8-b457-2ea9dac15574.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Patch Pocket Pants",
    price: 79,
    color: "Brown Toffee",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed820dbd-8c38-49e8-b457-2ea9dac15574.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Peg Trousers",
    price: 74,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac36960f-1045-4be2-ace3-ec9ac3efa7d1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Peg Trousers",
    price: 74,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac36960f-1045-4be2-ace3-ec9ac3efa7d1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Improvise Performance Joggers",
    price: 55.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/960425bc-c873-495b-80ae-0d7acf6d0f12.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Improvise Performance Joggers",
    price: 55.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/960425bc-c873-495b-80ae-0d7acf6d0f12.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jamile Cargo Pants",
    price: 55,
    color: "Sage Satin",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f468a775-8a7b-4e5f-909f-0c67300890a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jamile Cargo Pants",
    price: 55,
    color: "Sage Satin",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f468a775-8a7b-4e5f-909f-0c67300890a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeans Company Kelsey Knit Trousers",
    price: 89,
    color: "Cadet Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06f32479-a02e-48b5-9cdc-58102d9be37d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeans Company Kelsey Knit Trousers",
    price: 89,
    color: "Sea Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e5b44e6-9367-4308-9dd8-6e3dd956d3b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeans Company Kelsey Knit Trousers",
    price: 89,
    color: "Sea Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e5b44e6-9367-4308-9dd8-6e3dd956d3b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeans Company Kelsey Knit Trousers",
    price: 89,
    color: "Maple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d74941f-7057-48d6-a29f-2ea3b9432681.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jeans Company Kelsey Knit Trousers",
    price: 89,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cbfba3c0-1776-4e73-88b9-bfc0ee958971.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kennedy Wide Leg Trousers",
    price: 495,
    color: "Maillot",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8bff750-fe5c-47c5-8c6c-0eb83b40948b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kennedy Wide Leg Trousers",
    price: 495,
    color: "Maillot",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8bff750-fe5c-47c5-8c6c-0eb83b40948b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lilibet Textured Wide Leg Trousers",
    price: 55,
    color: "Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2856b996-959f-4064-bcb3-23a47f92883f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lilibet Textured Wide Leg Trousers",
    price: 55,
    color: "Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2856b996-959f-4064-bcb3-23a47f92883f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Linen Joggers",
    price: 59,
    color: "Grey Ebony",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77d949aa-5fbe-482e-883f-ef586512fe28.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Linen Joggers",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8e6cb3d-bb8a-4d68-8a8d-789ea187fdd9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Linen Joggers",
    price: 59,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d94fe671-a6dd-491f-9de7-ddbf67415adc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Linen Joggers",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8e6cb3d-bb8a-4d68-8a8d-789ea187fdd9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Linen Joggers",
    price: 59,
    color: "Green Beetle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f0f6bd13-227d-42e7-9434-a2039321662b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Ankle Active Performance Lifestyle Pants",
    price: 59,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6e7d2f50-b6d9-4bee-bf15-83a25d3066c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Ankle Active Performance Lifestyle Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/306f3987-b244-4883-b105-24a0066418ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Ankle Active Performance Lifestyle Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/306f3987-b244-4883-b105-24a0066418ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Pocket Joggers",
    price: 65,
    color: "Navy Nightfall",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/97b8a16f-7582-411b-9848-4f88d823273a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Pocket Joggers",
    price: 65,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4be820e3-fe4e-47ce-8929-7cdd8a42e01b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Pocket Joggers",
    price: 65,
    color: "Purple Nebula",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c7d15351-e62a-4d3f-a806-cd8c55024968.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Pocket Joggers",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ee29c0a1-326e-47f1-ba35-40bc0bfad621.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Pocket Joggers",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ee29c0a1-326e-47f1-ba35-40bc0bfad621.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Live In Pocket Joggers",
    price: 65,
    color: "Tan Dusk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/526898cb-bf26-40b5-8a83-6734c275e2a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Miramar Faux Jeans Knit Joggers",
    price: 225,
    color: "Merest",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e65e9982-e323-4a7d-9783-f8d0c086c3b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Miramar Faux Jeans Knit Joggers",
    price: 225,
    color: "Glass Hill",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7899ca5c-84c5-41ca-8ee1-335a74f5bbcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Miramar Faux Jeans Knit Joggers",
    price: 225,
    color: "Glass Hill",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7899ca5c-84c5-41ca-8ee1-335a74f5bbcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Nina Wide Leg Pants",
    price: 79,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac825bb8-f253-476b-9ca6-7359cb10926a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Nina Wide Leg Pants",
    price: 79,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac825bb8-f253-476b-9ca6-7359cb10926a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Paperbag Waist Pants",
    price: 69,
    color: "Olive Sarma",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d82af2d9-0b22-4e7c-a16f-83bc9c5264b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Paperbag Waist Pants",
    price: 69,
    color: "Olive Sarma",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d82af2d9-0b22-4e7c-a16f-83bc9c5264b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Shade Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/931f905b-ae1d-4cbe-b871-3eb041bff857.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Black Camo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/623ecef9-1476-4ddc-88de-f6ed459bedce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Navy Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2333e02-37a0-4543-9dd5-da8faaf8aaf0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Terracotta Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea7c3207-cb10-47e6-aeb3-41f01e65bccf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Heather Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f886b58-2d33-4239-87e0-8c573952ba19.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Cinnamon Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a330d0a3-3ec8-4855-994f-e4649153b242.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Cinnamon Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a330d0a3-3ec8-4855-994f-e4649153b242.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Charcoal Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77b3632c-ef27-4ba5-9a4f-b8d58357e982.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Smoke Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a40670c-6128-4f06-994b-ddd572488b63.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Black Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/815e868b-b291-4934-bd16-eb6a51749fd4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Performance Joggers",
    price: 84,
    color: "Kelp Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5d2311d3-d6c1-46c4-a068-778b0ef0c1d7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Stretch Crepe Skinny Pants",
    price: 89,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edd31e2c-0236-4ab9-b31e-0c39333befbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pintuck Stretch Crepe Skinny Pants",
    price: 89,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edd31e2c-0236-4ab9-b31e-0c39333befbf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebel Crop Stretch Cotton Pants",
    price: 99,
    color: "Hiker Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31fe0b60-a5f1-4fea-842b-a8d8d1009d74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebel Crop Stretch Cotton Pants",
    price: 99,
    color: "Obsidian",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/70ce8fb9-162a-40be-9944-8511127cde28.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebel Crop Stretch Cotton Pants",
    price: 99,
    color: "Brilliant White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4d67fcb0-2293-41e7-9801-97fe74355c83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebel Crop Stretch Cotton Pants",
    price: 99,
    color: "Hiker Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31fe0b60-a5f1-4fea-842b-a8d8d1009d74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebel Crop Stretch Cotton Pants",
    price: 99,
    color: "Lion",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7096fcc5-fbe0-4070-a8cc-c340838a336f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Renzo Crop Cotton Blend Trousers",
    price: 350,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a7c3f14-0ed1-4360-8819-bc0a84f3271b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Renzo Crop Cotton Blend Trousers",
    price: 350,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a7c3f14-0ed1-4360-8819-bc0a84f3271b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slim Ankle Stretch Cotton Pants",
    price: 89.5,
    color: "Collection Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e02e38c-0bbb-45f8-ab14-4c845d4b257f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slim Ankle Stretch Cotton Pants",
    price: 89.5,
    color: "Nyc White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fb751ed-0e25-4836-a912-0fd71eef9872.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slim Ankle Stretch Cotton Pants",
    price: 89.5,
    color: "Praline",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df206263-5f12-444c-9a23-fbcccc480b25.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slim Ankle Stretch Cotton Pants",
    price: 89.5,
    color: "Collection Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e02e38c-0bbb-45f8-ab14-4c845d4b257f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slim Stretch Woven Pants",
    price: 89,
    color: "Anne Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5996a12a-976c-44dd-96bc-f6f5d93fc228.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slim Stretch Woven Pants",
    price: 89,
    color: "Anne Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5996a12a-976c-44dd-96bc-f6f5d93fc228.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slim Stretch Woven Pants",
    price: 89,
    color: "Anne White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e05727c-b24c-48f8-9839-87dbd225b409.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Active Pink/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16e65c19-377c-460b-8525-76d13680f55a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Washed Teal/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aa05febd-dcf6-442b-a94d-cda896c875f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Pro Green/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/50c828dc-2bf2-4e03-b3df-b5e21defdf3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Mineral Clay/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/59fafe23-8539-4351-8254-abb356f35feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Dark Grey Heather/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d87366d9-c352-4719-ad8b-d53c685148cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Birch Heather/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c72568f0-e702-4e76-834e-b91d309dd2c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/176b4714-08ec-4a2d-9d8d-5aa9bf6d22d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Dark Grey Heather/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7156e6f0-db91-4c4f-ad05-3ea2fec465f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Rose Whisper/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eea9c927-83e7-47cb-9b0a-b985ec41f3e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Sangria/ Heather/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5bc2e9cf-1383-4561-9602-2294cab3d03e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Pearl White/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abcf18c2-fcbd-43b1-afad-b0622ebe2ae7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Pomegranate/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5fcfa193-5451-4ae7-a5ed-1c62aefed3df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Light Curry/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23c2df5a-d376-4e02-8b89-b03578b43772.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Rattan/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e6f68995-5e03-4789-b3f9-2b375d2975a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Washed Teal/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aa05febd-dcf6-442b-a94d-cda896c875f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Mineral Clay/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/59fafe23-8539-4351-8254-abb356f35feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17342b78-df94-4d2d-8100-88fe26b159b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17342b78-df94-4d2d-8100-88fe26b159b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essential Fleece Pants",
    price: 60,
    color: "Shimmer/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/85dbb8ba-1488-4bd8-abfd-d161763ae096.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essentials Curve Ankle Pants",
    price: 60,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/606dc490-222b-47e0-ae23-c1e50b5b6064.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essentials Curve Ankle Pants",
    price: 60,
    color: "White/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/faf456c5-37f0-4d8f-b3e2-189c5d16ca75.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essentials Curve Ankle Pants",
    price: 60,
    color: "Archaeo Pink/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6fcc03d9-2e37-4450-872c-300f1001a44c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essentials Curve Ankle Pants",
    price: 60,
    color: "Dk Grey Heather/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a12466ca-bc25-4818-8c50-2ec072665ee2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sportswear Essentials Curve Ankle Pants",
    price: 60,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/606dc490-222b-47e0-ae23-c1e50b5b6064.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stovepipe Crop Pull-On Pants",
    price: 195,
    color: "001blk-Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a38843b3-9409-4b09-9dfc-e7c4a28b7fa4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stovepipe Crop Pull-On Pants",
    price: 195,
    color: "241dkv-Dk Vicuna",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/adabce58-1c95-4e96-92f0-f3d91a9dc43c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stovepipe Crop Pull-On Pants",
    price: 195,
    color: "001blk-Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a38843b3-9409-4b09-9dfc-e7c4a28b7fa4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Straight Leg Organic Linen Ankle Pants",
    price: 178,
    color: "Blueberry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ccba3d2-4cbd-440b-9a4f-9b99f08e65b8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Straight Leg Organic Linen Ankle Pants",
    price: 178,
    color: "Blueberry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ccba3d2-4cbd-440b-9a4f-9b99f08e65b8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Straight Leg Organic Linen Ankle Pants",
    price: 178,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c5d462a-79d7-4ac6-a1a3-c5d684f954e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Chino Pants",
    price: 49,
    color: "Lilypad",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78c32c50-6a7f-4367-848c-78756e74382f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Chino Pants",
    price: 49,
    color: "Lilypad",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78c32c50-6a7f-4367-848c-78756e74382f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Chino Pants",
    price: 49,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19cced82-26b7-4233-b1f9-724518a09804.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Chino Pants",
    price: 49,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1dc4918e-aaad-401c-b606-1014b86aed9e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Chino Pants",
    price: 49,
    color: "Moonrock",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ec6a4d7e-4928-48ee-8d49-cd3d73ddb462.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Pants",
    price: 49,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/70c34941-a4f1-4375-a6f4-b4dbbba82828.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Pants",
    price: 49,
    color: "Lipd-Lily Pad",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3bc58d04-4817-4611-8004-4a57e741fbb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Pants",
    price: 49,
    color: "Mnrk-Moonrock",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10ab5b03-175b-4f5f-82b4-e9b8ef08b177.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Pants",
    price: 49,
    color: "Rumr-Rum Raisin",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4170e115-43f8-46de-85c0-c8d5963c38e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Pants",
    price: 49,
    color: "Pwtr-Pewter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3339951e-2c00-459a-9343-b5e6696e6734.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Pants",
    price: 49,
    color: "Mr-Mushroom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/34da3eec-7743-4368-9c61-5e92f5f8f05a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Cotton Pants",
    price: 49,
    color: "Mnrk-Moonrock",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10ab5b03-175b-4f5f-82b4-e9b8ef08b177.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Crepe Slim Ankle Pants",
    price: 168,
    color: "Graphite",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06a2ca83-a07e-4d22-b172-117de75bc981.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Crepe Slim Ankle Pants",
    price: 168,
    color: "Graphite",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06a2ca83-a07e-4d22-b172-117de75bc981.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Stretch Crepe Slim Ankle Pants",
    price: 168,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f6fcd049-f08b-488b-b766-bd85e682a8cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweatty Betty Explorer Lightweight Pants",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6274b53-3e96-4095-9b1a-9f0f0bd8bc45.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweatty Betty Explorer Lightweight Pants",
    price: 118,
    color: "Haze Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1b89bdf7-7bfc-4752-9e87-1e1b6151de4f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweatty Betty Explorer Lightweight Pants",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6274b53-3e96-4095-9b1a-9f0f0bd8bc45.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Textured Cotton Pull-On Pants",
    price: 24.97,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/923164dc-5fa2-4a92-9c78-1f8a5126a876.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Textured Cotton Pull-On Pants",
    price: 24.97,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/923164dc-5fa2-4a92-9c78-1f8a5126a876.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f9c9b5f6-9b04-4db0-8dd1-031f3f269a57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Deep Sea",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc5fef15-f13a-4080-9b27-3a1fe051d55e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f9c9b5f6-9b04-4db0-8dd1-031f3f269a57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Herbal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/543d2a87-ef5c-4fb6-930e-0ce906b6fd21.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Deep Sea",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dc5fef15-f13a-4080-9b27-3a1fe051d55e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f9c9b5f6-9b04-4db0-8dd1-031f3f269a57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f9c9b5f6-9b04-4db0-8dd1-031f3f269a57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "THE WAY HOME JOGGER",
    price: 60,
    color: "Herbal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/543d2a87-ef5c-4fb6-930e-0ce906b6fd21.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Waist Wide Leg Pants",
    price: 54,
    color: "Tan Mocha",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0de64745-32b2-4622-8ea2-9142908044e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Waist Wide Leg Pants",
    price: 54,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c1287d0-3391-423f-bb3a-d9fc936293d2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Waist Wide Leg Pants",
    price: 54,
    color: "Tan Mocha",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0de64745-32b2-4622-8ea2-9142908044e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tie Waist Wide Leg Pants",
    price: 54,
    color: "Teal Mist",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a741ce6e-4630-483a-9c1b-7dcdf451c608.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Track Style Linen Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f58670c3-4304-4903-b059-2421bbabc199.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Track Style Linen Pants",
    price: 59,
    color: "Grey Ebony",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/304d1a54-f2a6-4846-beb3-b09741cbab6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Track Style Linen Pants",
    price: 59,
    color: "Green Beetle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2b7b5305-d7a2-41f9-9385-206185ec00f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Track Style Linen Pants",
    price: 59,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8818548-6d46-4006-a55c-133a0a3b766b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Track Style Linen Pants",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f58670c3-4304-4903-b059-2421bbabc199.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Pull-On Linen Blend Pants",
    price: 49,
    color: "Navy Blazer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/540fa6ee-06bd-4edc-b315-95d13f65b932.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Pull-On Linen Blend Pants",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8f7b3e7e-8ebf-468f-bc2d-ac5ccdaf246f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Pull-On Linen Blend Pants",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8f7b3e7e-8ebf-468f-bc2d-ac5ccdaf246f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Stripe Pull-On Pants",
    price: 49,
    color: "Tan Gold Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b1bb018-77ec-4c1c-b845-e47ab1467bcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Stripe Pull-On Pants",
    price: 49,
    color: "Ivory- Navy Bridgette Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16424d15-e3bc-44cf-94c5-7636e6b988a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Stripe Pull-On Pants",
    price: 49,
    color: "Tan Gold Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b1bb018-77ec-4c1c-b845-e47ab1467bcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Linen Pants",
    price: 84,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72b9ee93-0603-4d7a-a1c3-2a28545d9501.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Linen Pants",
    price: 84,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72b9ee93-0603-4d7a-a1c3-2a28545d9501.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Twill Pull-On Pants",
    price: 128,
    color: "Bright White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ce819fb-1ec4-4651-aed3-01c47e04d3e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Twill Pull-On Pants",
    price: 128,
    color: "Almond",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c87c9a5-da41-4122-be03-42dfcea224c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Twill Pull-On Pants",
    price: 128,
    color: "Darkened Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6cb18a8a-d2c1-4609-8d41-235f767bd4f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Twill Pull-On Pants",
    price: 128,
    color: "Almond",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c87c9a5-da41-4122-be03-42dfcea224c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Twill Pull-On Pants",
    price: 128,
    color: "Mauve",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc88942a-e9b8-4393-8c76-af74bd5d251d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wide Leg Twill Pull-On Pants",
    price: 128,
    color: "Bright White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ce819fb-1ec4-4651-aed3-01c47e04d3e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Cotton Knit Drawstring Pants",
    price: 59,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28221e4a-3299-4097-95da-05789818eecc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Cotton Knit Drawstring Pants",
    price: 59,
    color: "Green Sorrel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e93bc28-4aad-4c4c-8b40-e9463c4c1f8c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Cotton Knit Drawstring Pants",
    price: 59,
    color: "Green Sorrel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e93bc28-4aad-4c4c-8b40-e9463c4c1f8c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Relaxed Crop Pants",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28e97163-a1ac-41ff-9e52-2108a1477f28.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Relaxed Crop Pants",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28e97163-a1ac-41ff-9e52-2108a1477f28.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's The Slim Boyfriend Jeans",
    price: 51.2,
    color: "Fearn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02d61b17-96ae-4ca5-a2de-bc9ba296df7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's The Slim Boyfriend Jeans",
    price: 51.2,
    color: "Fearn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02d61b17-96ae-4ca5-a2de-bc9ba296df7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wonderstretch Straight Leg Pants",
    price: 128,
    color: "Black Onyx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5bcc82d4-b920-4285-8ada-e9f59246dbc4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wonderstretch Straight Leg Pants",
    price: 128,
    color: "Black Onyx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5bcc82d4-b920-4285-8ada-e9f59246dbc4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Weekend Joggers",
    price: 84,
    color: "Midnight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a00ff4b5-489f-4703-8f9c-ab728454075e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Weekend Joggers",
    price: 84,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76d43608-74b6-4664-bd2e-fb710f351bcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Weekend Joggers",
    price: 84,
    color: "Hazel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b86e2b67-f51b-402f-9910-72fbcc148a46.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Weekend Joggers",
    price: 84,
    color: "Hazel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b86e2b67-f51b-402f-9910-72fbcc148a46.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Living in Yellow High Waist Cuffed Crop Button Fly Pants",
    price: 98,
    color: "Ashwood Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a875b5f6-d5ca-4012-8327-4457272b1f3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Living in Yellow High Waist Cuffed Crop Button Fly Pants",
    price: 98,
    color: "Ashwood Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a875b5f6-d5ca-4012-8327-4457272b1f3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Y2K Low Rise Cargo Pants",
    price: 69,
    color: "Khaki",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d6d7467d-26e6-42b9-a1da-a06021003f59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Y2K Low Rise Cargo Pants",
    price: 69,
    color: "Khaki",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d6d7467d-26e6-42b9-a1da-a06021003f59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const sweatersProduct = [
  {
    name: "4-Way Convertible Cardigan",
    brand: "NIC+ZOE",
    description:
      "Enjoy exceptional versatility with a fine-gauge, lightweight cardigan cleverly designed to be worn four different ways. Leave the front draped open; knot or twist the hem ties together; or crisscross the front panels and anchor to side buttons for a chic wrapped look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/75e95152-4376-4d68-85d1-8beea23fbcd7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Belted Blouson Sleeve Cardigan",
    brand: "TOPSHOP",
    description:
      "A wool-kissed staple cardi is shaped with a simple sash and adds of-the-moment style points with billowy, blouson sleeves",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2aa287c-16f7-4d8e-8448-4b3008f6d953.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Boatneck Pointelle Sweater",
    brand: "HALOGEN®",
    description:
      "A beautiful pointelle knit details the chest and sleeves of a versatile sweater with a demure boatneck and wide, ribbed hem.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4dcdc05e-cb7d-4467-97e7-ab620e49ac6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bolero Cardigan",
    brand: "ELIZA J",
    description:
      "A classic bolero cardigan with three-quarter sleeves is the perfect layering piece for cool summer evenings.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f75009e-4c41-4a06-9017-a754757a3377.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bree Short Sleeve Crop Sweater",
    brand: "FREE PEOPLE",
    description:
      "Open stitching textures a lightweight and breezy cotton-blend sweater in a cropped length perfect for pairing with your high-waist styles.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6e013c3e-f3f7-4911-91da-d99f83e181f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Brenville Crop Cardigan Sweater",
    brand: "MADEWELL",
    description:
      "Ribbed and fitted, this '90s-inspired V-neck cardigan sweater is super cropped—in other words, made to wear with high-rise anything.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db96ac32-ccf2-47d2-9ab7-496491738f38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Brodale Duster Cardigan",
    brand: "MADEWELL",
    description:
      "Extra-long with high side slits, this ribbed duster cardigan is complete with rolled trims and patch pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3587000-5867-467e-9d9e-f99da4909a0d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Caballo Sweater",
    brand: "FRENCH CONNECTION",
    description:
      "Flower appliqués embellish the lace insets that cut through the long sleeves of a dreamy cotton sweater.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1aa803b-b557-412f-b2df-878dae7c82f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cashmere Fisherman Sweater",
    brand: "JENNI KAYNE",
    description:
      "A staple sweater steps up pure cashmere and a flowy fit for a luxe take on your weekend wardrobe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e2330e09-4701-46f6-9ba8-ee76edabcebf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cashmere Polo Sweater",
    brand: "REFORMATION",
    description:
      "Knit from a mix of recycled and standard cashmere yarns, this essential sweater is an excellent outfit-builder for chillier days and nights.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/40254e15-ba6c-40c4-93c7-521c4cf6881e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cleo Crop Crewneck Sweater",
    brand: "BP.",
    description:
      "Slouchy dropped shoulders frame this knit pullover that's an essential for the season.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e0b9fa4-fe28-458f-af10-dbfcbca06b60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Convertible Cardigan",
    brand: "NIC+ZOE",
    description:
      "For maximum versatility, a mélange-knit cardigan can be worn four ways. Leave the front draped open; knot or twist the hem ties together; or crisscross the front panels and anchor to side buttons for a chic wrapped look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76f161bc-9a6b-4d59-8d47-ef983670f484.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "CozyChic Lite® Circle Cardigan",
    brand: "BAREFOOT DREAMS®",
    description:
      "A soft and lightweight knit enriches the comfort of a long lounge cardi that keeps you cozy around the house or out on errands.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de18be8a-5e5b-4bd4-92e3-dc22545190e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "CozyChic Lite® Long Cardigan",
    brand: "BAREFOOT DREAMS®",
    description:
      "A long lounge cardi is made from a sumptuous, lightweight knit that keeps you cozy around the house or out on errands.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/696cb694-3036-4227-8643-e5a4e95d8cb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "CozyChic Lite® Ribbed Travel Wrap",
    brand: "BAREFOOT DREAMS®",
    description:
      "Wrap yourself in lightweight, luxurious warmth with this cushy rib-knit layer made from CozyChic, a machine-washable microfiber yarn that won't shrink or pill. Part infinity scarf, part shawl, all-in-all amazing.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c64323a6-786c-40fb-9a86-6a9ac9bd6602.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cozychic® Waffle Cocoon Cardigan",
    brand: "BAREFOOT DREAMS®",
    description:
      "The beloved shawl-collared cocoon cardigan mixes in touchable texture with a waffle stitch knit in microfiber yarn for extra plush points.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2f32d90-416e-44b6-b935-be779364bd1c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "CREW NECK RELAXED CARDIGAN",
    brand: "HALOGEN®",
    description:
      "Monochrome buttons add to the classic look of a preppy cardigan knit with a slim, easy-to-layer fit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/236b127c-5530-4841-a79d-c3911a246db4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Crewneck Pima Cotton Blend Cardigan",
    brand: "NORDSTROM",
    description:
      "This closet-staple cardi is crafted from a soft pima-cotton blend and knit with abbreviated three-quarter sleeves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1644649-70fc-498f-a1cb-c03f5c935054.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Crewneck Puff Long Sleeve Top",
    brand: "TREASURE & BOND",
    description:
      "Voluminous long puff sleeves add drama to a crisp crewneck top that is covered in preppy stripes and detailed with a dainty back keyhole.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cacd2b82-d039-403a-b5e4-850127395d65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Crewneck Sweater",
    brand: "HALOGEN®",
    description:
      "Soft and simple, this triblend pullover comes in a variety of hues and patterns with button-detailed extended cuffs.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f703cee7-ab61-483e-b81d-55b0e847ba3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Daisy Print Cardigan",
    brand: "PACSUN",
    description:
      "Knit from soft yarns with a carefree daisy pattern, this cardigan has a slightly cropped fit that hits at the hip.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb8d1bbb-6a60-4cc6-bed2-72847fb7b156.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Deep V-Neck Cotton Blend Sweater",
    brand: "OPEN EDIT",
    description:
      "A standard cotton-blend sweater amps up the allure by dipping the neckline past the usual end point.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c888465c-751d-43b7-a266-0bba7973e9ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Draped Collar Speckled Knit Cardigan",
    brand: "NIC+ZOE",
    description:
      "Perfect for multiseasonal wear, this speckled knit cardigan fixed with a chic draped collar is an easy top layer for stylishly getting you through the weekend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8511ef3d-21f9-48e4-972b-9adb88edf96f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Everyday Crop Cardigan",
    brand: "BP.",
    description:
      "A cropped length and broad V-neck offer a flirty fit for a ribbed cardigan that's right for any season.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e2c03a8-f516-4137-978d-a278ca55f856.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Everyday Open Front Cardigan",
    brand: "NORDSTROM",
    description:
      "Styled with a casually open front, this lightweight, merino-wool-rich sweater flutters and flows with every step you take.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df7c83fe-e7ea-4b4a-9418-cab469c9cbac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Fashion Crochet Cotton Sweater Tank",
    brand: "BP.",
    description:
      "Fall for the homemade look and feel of this crocheted sweater-tank that's full of warmth.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e055edc-41dc-4576-952d-338304cbf20f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Featherweight Drape Collar Linen Blend Cardigan",
    brand: "NIC+ZOE",
    description:
      "A barely there fine-gauge weave of linen-blend yarns means this pretty drape-collar cardigan is the perfect light layer for just a touch of warmth.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cfe97e08-f7f3-444c-9745-8c5c6f9d9902.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Fitted V-Neck Cardigan",
    brand: "HALOGEN®",
    description:
      "This fitted cardigan will be a go-to layering piece you'll want to bring with you wherever you go.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3bd8f73e-1b3d-4ffb-885c-92c73b1794ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Forever Golden Sweater",
    brand: "BILLABONG",
    description:
      "Every closet needs this lightweight sweater knit in a slouchy fit with airy open stitching.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5644dd59-aad7-40b7-ac8c-7517d850e83c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Free Cloud Hooded Jacket",
    brand: "FREE PEOPLE",
    description:
      "Keep it casual in this comfy jacket styled with an oversized silhouette and cut from a soft cotton blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45d3a575-2c83-4d3c-9cbd-f5abcbb17b1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Glenna Cashmere Sweater",
    brand: "REFORMATION",
    description:
      "Fall in love with the luxe look and feel of this shapely ribbed pullover topped with an elegant sweetheart neck.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e87c5ec-84f7-4ec6-be97-187112a2747f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Greensboro Button Back Sweater",
    brand: "MADEWELL",
    description:
      "In a textured links stitch, this relaxed crewneck sweater has buttons down the back (meaning you could go wild and wear it backwards as a faux cardigan).",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d03baab-1f52-41b0-a1fb-f4cd6b0bcefd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Greywood Crop Cardigan Sweater",
    brand: "MADEWELL",
    description:
      "Knit from cotton yarn, this ribbed cardigan has an easy, cropped fit you'll be wearing with pretty much everything in your closet.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7c0c6ea-48d0-4acb-ab7a-b5db73f70650.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Herringbone Cardigan",
    brand: "VINCE CAMUTO",
    description:
      "A soft alternative to the usual tailored layer, this drape-front sweater-jacket is knit from cotton yarns in a classic herringbone pattern with solid edges.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31932e4a-19c5-4a87-8171-4f87b2e32dd2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Icon Cardigan",
    brand: "JONES NEW YORK",
    description:
      "This open-front cardigan adds instant polish to your ensemble and has the timeless style that makes it a wardrobe must-have.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a7932af-5708-431c-ae6c-a6f8e7fa4c3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Johnny Collar Sweater",
    brand: "TREASURE & BOND",
    description:
      "A cool johnny collar tops this casual V-neck sweater featuring dropped shoulders and roomy sleeves for a relaxed fit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4cbac9d-0ba6-458b-8633-d76e32488d81.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Laylah One Shoulder Sweater",
    brand: "REISS",
    description:
      "An unstructured sweater is knit from a yarn blend featuring wool and alpaca and slung off one shoulder to add a sultry note to the staple look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/726b75ec-2451-4287-be76-ed668135b03d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Lea Cardigan",
    brand: "VERO MODA",
    description:
      "Slouchy dropped shoulders frame this textured cardi knit with soft sustainable yarns.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80d627e2-ce7e-4677-b3b2-b820141268db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Long Cardigan",
    brand: "HALOGEN®",
    description:
      "This cover-everything cardigan in a lightweight linen-blend knit comes in a cornucopia of color choices ranging from muted neutrals to vibrant primaries.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32981b4d-6801-4693-b467-3a4fcd371057.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Open Front Cardigan Sweater",
    brand: "CASLON®",
    description:
      "This everyday layer is designed in a textured fabric with a versatile open front and hand-warming pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8066fe3-7335-43f2-b36d-33360196ab5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Open Front Linen Blend Long Cardigan",
    brand: "NIC+ZOE",
    description:
      "An airy linen blend makes this open-front cardigan the ideal light layer for topping your fresh spring looks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f3496ba-ef47-4a91-815d-78193f8a92f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Open Front Long Cardigan",
    brand: "HALOGEN®",
    description:
      "The cozy rib knit of this long, open-front cardigan encourages a relaxed approach to whatever the day has in store.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f6631f8-7df5-4b60-ac05-213e81b57cf1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Open Front Pocket Cardigan",
    brand: "HALOGEN®",
    description:
      "A rainbow of colors creates a closet full of options for whenever the fashion forecast requires a cashmere-kissed lightweight layer.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a48f490b-9773-44e4-974b-81b3bd385040.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Oversize Crewneck Sweater",
    brand: "JENNI KAYNE",
    description:
      "Dropped shoulders and a slouchy shape update a casual crewneck kissed with cashmere that you'll wear from season to season.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b53e0fdb-ddd9-45d2-b3d9-09b41e7abaaa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Oversize Thermal Long Sleeve Top",
    brand: "TREASURE & BOND",
    description:
      "Long, roomy batwing sleeves lend laid-back style to this soft V-neck top that is made from a comfortable cotton blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2430870-edce-4a5a-a8e4-fc29d618d93d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Panoma Open Stitch Cardigan",
    brand: "RIP CURL",
    description:
      "Cozy and long, this open-front cardi features dropped shoulders and an easy to layer fit that works for all seasons.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e6175de2-a21f-4afc-af2d-44b807190fab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "PEPLUM SWEATER",
    brand: "HALOGEN®",
    description:
      "A stretchy rib hugs your figure in a sleeveless peplum sweater offered in timeless neutrals and color-pop solids.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41b42827-cc34-480c-9fee-f7acd6a4220a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Phoebe Wrap Cardigan",
    brand: "UGG®",
    description:
      "A fuzzy longline cardi keeps you cozy and stylish with its versatile open front and easy drape.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c7659f6-c421-4f1c-b893-baf3ab527f2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Plaited Stitch Recycled Blend Crewneck Sweater",
    brand: "BP.",
    description:
      "Bring chunky texture to your casual look with this plaited-stitch sweater made from a soft and sustainable recycled-fiber blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cd4b7cd5-e986-4d8b-8de1-a1028b2f3dcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Pointelle Cotton Blend Crewneck Sweater",
    brand: "TREASURE & BOND",
    description:
      "A breezy pointelle knit softens a classic crewneck sweater with gently puffed shoulders and slouchy long sleeves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf233b69-e38d-4580-91b1-a274c34253cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ribbed Crewneck Sweater",
    brand: "HALOGEN®",
    description:
      "Refresh your essentials with this ribbed crewneck sweater elevated by scalloped edges for a chic, versatile finish.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c69bb93b-3fb1-4ee0-9452-2bb838ce919c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ribbed Knit Cardigan",
    brand: "MADEWELL",
    description:
      "Made of a supersoft and sweater-y knit fabric, this cardigan can be layered or worn buttoned-up as a top. It's a '90s minimalist dream that'll upgrade any travel wardrobe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8cb48dc0-250c-489c-b5af-9ec4b3719a7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ribbed Organic Linen & Cotton Cardigan",
    brand: "EILEEN FISHER",
    description:
      "Organic linen-and-cotton yarn brings textured appeal to an open-front cardigan that's an ideal layering piece.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f70e7dfe-c153-43d0-8a1d-3d0083f6b5bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ribbed V-Neck Cashmere Tunic Sweater",
    brand: "VINCE",
    description:
      "A ribbed V-neck, hem and cuffs trim an oversized cashmere sweater with a split hem for easy movement.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e49cabfa-e4c8-4d86-b969-a4ee437fe21a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Riley Zip Hoodie",
    brand: "RAG & BONE",
    description:
      "Airy open stitching enlivens this cozy-day hoodie styled with a layer-perfect front zip.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5a454ce-f715-4e88-ad89-7a32b9faef6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sea Through Me This Way Relaxed Fit Sweater",
    brand: "BILLABONG",
    description:
      "From a collection celebrating the brand's connection to land and sea comes this boxy sweater knit from wool-kissed yarn made mostly from recycled polyester.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41ae9fc4-2c2a-4968-ab13-238cfeea6895.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Side Slit Cardigan",
    brand: "HALOGEN®",
    description:
      "Knit from linen-blend yarns, a long and light cardigan to cover every season comes in a choice of essential colors.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a74bc429-da19-46ed-8c29-305b71c22db4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Side Vent Lightweight Tunic Sweater",
    brand: "CASLON®",
    description:
      "Snap plackets on the side vents add style and versatility to this lightweight tunic sweater.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/69230761-afc7-4046-aec4-cda9a2d28acc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Slouchy Hooded Sweater Cover-Up Tunic",
    brand: "LA BLANCA",
    description:
      "A beachy take on hoodie style, this knit cover-up is a flattering way to move from your sun chair to the rest of your summery agenda.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a448873-09f3-482f-8cd2-37e30a0de6c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sun and Wave Organic Cotton Hoodie",
    brand: "FAHERTY",
    description:
      "Seek out sun and waves in this organic-cotton hoodie that's patterned with softly rolling hills in an array of gradient shades.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/30c52459-602a-49f9-ab3f-14bbe4547ca1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Surplice Sweater",
    brand: "HALOGEN®",
    description:
      "A kiss of cashmere adds a luxe finish to this sustainably produced sweater shaped with a deep surplice neckline and inverted pleats at the shoulders.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abe9a147-d8d2-4e36-ab6e-e947162d4ffa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Swirl Jacquard Pullover Sweater",
    brand: "VINCE CAMUTO",
    description:
      "Striking swirls accentuate a chic sweater rendered in a soft cotton-blend for a style that will keep your trendsetting look on point all season long.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea42908a-5628-47c6-bba6-d0cb08e82e48.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond One-Shoulder Thermal Knit Sweater",
    brand: "TREASURE&BOND",
    description:
      "Find the sweetly stylish spot between laid-back and alluring in this thermal-knit one-shoulder sweater.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f875b560-730a-413d-a597-31bb6782ab19.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Ribbed One-Shoulder Pullover",
    brand: "TREASURE&BOND",
    description:
      "Subtle flecks brighten this ribbed cotton-blend sweater styled in a chic one-shoulder silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4cf26963-5980-4b6c-b5d4-e548b2185338.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "V-Neck Organic Linen & Cotton Cardigan",
    brand: "EILEEN FISHER",
    description:
      "Bundle up for the cooler seasons in this cozy cardigan knit from a luxurious blend of organic linen and cotton.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26bfd412-f06f-4d1c-92bb-c2fcb972f355.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Birchmoor Cardigan Sweater",
    brand: "MADEWELL",
    description:
      "Textural and ribbed, this longer cardigan sweater has a relaxed fit that makes it a perfect layering style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/208c2c1f-7c14-4ef8-87f0-6441ad186bf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Off the Shoulder Linen Blend Sweater",
    brand: "TREASURE & BOND",
    description:
      "Update your sweater weather rotation in this cozy knit number that is made from breezy linen and soft cotton.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f9af019-b4c9-405b-9699-df7d8144bd79.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Stripe Mock Neck Cotton Blend Sweater",
    brand: "TREASURE & BOND",
    description:
      "Sporty stripes energize a relaxed cotton-blend sweater with a low mock neck.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/552eadfa-9880-4ad7-bb2e-f2665241cbb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const sweatersData = [
  {
    productName: "4-Way Convertible Cardigan",
    price: 98,
    color: "Coral Crush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/75e95152-4376-4d68-85d1-8beea23fbcd7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4-Way Convertible Cardigan",
    price: 98,
    color: "Valencia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/142f8270-303a-467a-9de8-003d64a0f19e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4-Way Convertible Cardigan",
    price: 98,
    color: "Jade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/802a1950-8c13-4ce5-ab0a-83b1edc3e84a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4-Way Convertible Cardigan",
    price: 98,
    color: "Cornflower",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/89409ccd-9ee8-431c-9fb4-a5c1efb813ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4-Way Convertible Cardigan",
    price: 98,
    color: "Rose Quartz",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2dd39cc9-adc9-46d0-9f97-7a8940350d6e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4-Way Convertible Cardigan",
    price: 98,
    color: "Valencia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/142f8270-303a-467a-9de8-003d64a0f19e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Belted Blouson Sleeve Cardigan",
    price: 37.97,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2aa287c-16f7-4d8e-8448-4b3008f6d953.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Belted Blouson Sleeve Cardigan",
    price: 37.97,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2aa287c-16f7-4d8e-8448-4b3008f6d953.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boatneck Pointelle Sweater",
    price: 69,
    color: "Green Foliage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4dcdc05e-cb7d-4467-97e7-ab620e49ac6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boatneck Pointelle Sweater",
    price: 69,
    color: "Teal Nile",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb36fff5-2ace-48d3-a20a-e5f8b64e0b96.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boatneck Pointelle Sweater",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26d5b7bc-811c-40fb-a603-b660914b250b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boatneck Pointelle Sweater",
    price: 69,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/48a5de44-9f93-4e99-b6ef-acb9add434e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boatneck Pointelle Sweater",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26d5b7bc-811c-40fb-a603-b660914b250b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boatneck Pointelle Sweater",
    price: 69,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e67c1869-6b0f-4690-9b6f-c2b6a1d8adf0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bolero Cardigan",
    price: 34,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f75009e-4c41-4a06-9017-a754757a3377.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bolero Cardigan",
    price: 34,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f75009e-4c41-4a06-9017-a754757a3377.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bolero Cardigan",
    price: 34,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2a95ab6-e8ae-4bf9-9c84-07629233af61.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bolero Cardigan",
    price: 34,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2a95ab6-e8ae-4bf9-9c84-07629233af61.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bree Short Sleeve Crop Sweater",
    price: 98,
    color: "Summer Khaki",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6e013c3e-f3f7-4911-91da-d99f83e181f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bree Short Sleeve Crop Sweater",
    price: 98,
    color: "Glimmer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c34ae2b-d86f-47c8-afd7-2d534c8da2a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bree Short Sleeve Crop Sweater",
    price: 98,
    color: "Glimmer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c34ae2b-d86f-47c8-afd7-2d534c8da2a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brenville Crop Cardigan Sweater",
    price: 47.7,
    color: "Antique Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db96ac32-ccf2-47d2-9ab7-496491738f38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brenville Crop Cardigan Sweater",
    price: 47.7,
    color: "Caravan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8312ae4-9ebb-4222-bbb4-1dd9b971d62f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brenville Crop Cardigan Sweater",
    price: 47.7,
    color: "Caravan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8312ae4-9ebb-4222-bbb4-1dd9b971d62f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brodale Duster Cardigan",
    price: 110,
    color: "Kale",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3587000-5867-467e-9d9e-f99da4909a0d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Brodale Duster Cardigan",
    price: 110,
    color: "Kale",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3587000-5867-467e-9d9e-f99da4909a0d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caballo Sweater",
    price: 118,
    color: "Winter White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1aa803b-b557-412f-b2df-878dae7c82f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caballo Sweater",
    price: 118,
    color: "Dove Grey-Winter White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8eebf9c7-45f0-4810-9338-cde83560714b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caballo Sweater",
    price: 118,
    color: "Camel/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/79a15b76-b977-4f87-b89f-2a413f9546b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caballo Sweater",
    price: 118,
    color: "Crystal Clear/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a66007f6-ccde-44fb-bddf-7b5e374d511d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caballo Sweater",
    price: 118,
    color: "Black-Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ca23eb6a-a6cc-4e3b-83d5-ddfcb129706b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caballo Sweater",
    price: 118,
    color: "Winter White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1aa803b-b557-412f-b2df-878dae7c82f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Caballo Sweater",
    price: 118,
    color: "Utility Blue/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a66ace0b-2af2-4fb2-8fb3-10ea1e71c1dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Fisherman Sweater",
    price: 159.97,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e2330e09-4701-46f6-9ba8-ee76edabcebf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Fisherman Sweater",
    price: 157.97,
    color: "Oatmeal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8402f40-9e0f-4479-837a-77db0fe32a80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Fisherman Sweater",
    price: 157.97,
    color: "Oatmeal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8402f40-9e0f-4479-837a-77db0fe32a80.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Polo Sweater",
    price: 103.6,
    color: "Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/40254e15-ba6c-40c4-93c7-521c4cf6881e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Polo Sweater",
    price: 103.6,
    color: "Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/40254e15-ba6c-40c4-93c7-521c4cf6881e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cleo Crop Crewneck Sweater",
    price: 24.97,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e0b9fa4-fe28-458f-af10-dbfcbca06b60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cleo Crop Crewneck Sweater",
    price: 24.97,
    color: "Olive Sarma",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f3a1744f-5a21-4108-b13b-be9fc5a60ec0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cleo Crop Crewneck Sweater",
    price: 24.97,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b3cc4d4-d7e8-49fd-ab37-ddfa1398d2a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cleo Crop Crewneck Sweater",
    price: 24.97,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e0b9fa4-fe28-458f-af10-dbfcbca06b60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cleo Crop Crewneck Sweater",
    price: 24.97,
    color: "Tan Boulder",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb7b96ae-f29e-4e6e-bce1-3b009b7ac206.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Convertible Cardigan",
    price: 98,
    color: "Dark Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76f161bc-9a6b-4d59-8d47-ef983670f484.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Convertible Cardigan",
    price: 98,
    color: "Paper White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e8d5d15-5edd-4577-aadc-4f2ad483d263.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Convertible Cardigan",
    price: 98,
    color: "Dark Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76f161bc-9a6b-4d59-8d47-ef983670f484.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Convertible Cardigan",
    price: 98,
    color: "Paper White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/067884b3-fe9a-4384-847f-d48bd860206c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Convertible Cardigan",
    price: 98,
    color: "Paper White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e8d5d15-5edd-4577-aadc-4f2ad483d263.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Convertible Cardigan",
    price: 98,
    color: "Black Onyx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78de21aa-058d-48e1-b685-7fb60305d23e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Convertible Cardigan",
    price: 98,
    color: "Sedona",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/83d751f9-5987-4cf9-b82c-6e58c282e847.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Ash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de18be8a-5e5b-4bd4-92e3-dc22545190e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5024c75d-fd56-42b0-a4bc-afdb6a953759.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Pale Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/446e2451-6be9-4dd1-8c9f-89c0df240c5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Ash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de18be8a-5e5b-4bd4-92e3-dc22545190e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Ash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de18be8a-5e5b-4bd4-92e3-dc22545190e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/174e55ee-d062-440f-854d-5b7c83e66cb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "H Silver Pearl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8f51795e-6a0e-4393-9bd7-f814bb969fef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Soft Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4f1d85d3-64d1-422c-ab9f-332da92fff17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/174e55ee-d062-440f-854d-5b7c83e66cb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Ash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de18be8a-5e5b-4bd4-92e3-dc22545190e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5024c75d-fd56-42b0-a4bc-afdb6a953759.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Pale Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/446e2451-6be9-4dd1-8c9f-89c0df240c5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Cocoa/ Pearl Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43e2d21e-ef73-41cf-b8ef-2e57b53f9692.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Cocoa/ Pearl Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43e2d21e-ef73-41cf-b8ef-2e57b53f9692.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "H Silver Pearl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8f51795e-6a0e-4393-9bd7-f814bb969fef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Circle Cardigan",
    price: 116,
    color: "Soft Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4f1d85d3-64d1-422c-ab9f-332da92fff17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Long Cardigan",
    price: 120,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/696cb694-3036-4227-8643-e5a4e95d8cb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Long Cardigan",
    price: 120,
    color: "Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/516711c4-48b0-4fd0-8458-a250024958b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Long Cardigan",
    price: 120,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/696cb694-3036-4227-8643-e5a4e95d8cb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Long Cardigan",
    price: 120,
    color: "Garnet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbf48401-c45c-4c6e-ba26-7ee1d366e8bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Long Cardigan",
    price: 120,
    color: "Soft Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5b3e4f4-d001-466f-a617-ba50b568cd1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Long Cardigan",
    price: 120,
    color: "Carbon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98f00999-fbd9-4139-8980-c2141630fd2f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Ribbed Travel Wrap",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c64323a6-786c-40fb-9a86-6a9ac9bd6602.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Ribbed Travel Wrap",
    price: 118,
    color: "Driftwood",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3186cfe3-4301-4886-9300-a539206e1dc1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CozyChic Lite® Ribbed Travel Wrap",
    price: 118,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c64323a6-786c-40fb-9a86-6a9ac9bd6602.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozychic® Waffle Cocoon Cardigan",
    price: 106.8,
    color: "Carbon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2f32d90-416e-44b6-b935-be779364bd1c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cozychic® Waffle Cocoon Cardigan",
    price: 106.8,
    color: "Carbon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2f32d90-416e-44b6-b935-be779364bd1c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CREW NECK RELAXED CARDIGAN",
    price: 69,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/236b127c-5530-4841-a79d-c3911a246db4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CREW NECK RELAXED CARDIGAN",
    price: 69,
    color: "Purple Bloom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31562769-8910-46f1-a214-ec7838fa0151.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CREW NECK RELAXED CARDIGAN",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9bfc1fe4-f0eb-46a6-a851-cade445fba24.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CREW NECK RELAXED CARDIGAN",
    price: 69,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/722d028a-b74b-49eb-86e6-7071cc63e0c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CREW NECK RELAXED CARDIGAN",
    price: 69,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/236b127c-5530-4841-a79d-c3911a246db4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Pima Cotton Blend Cardigan",
    price: 49,
    color: "Pink Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1644649-70fc-498f-a1cb-c03f5c935054.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Pima Cotton Blend Cardigan",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e26d0101-0360-4c64-8045-8e4687acc3e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Pima Cotton Blend Cardigan",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e26d0101-0360-4c64-8045-8e4687acc3e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Pima Cotton Blend Cardigan",
    price: 49,
    color: "Tan Cobblestone Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5815bc3-6842-4673-b0f2-2f1b5de59f46.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Pima Cotton Blend Cardigan",
    price: 49,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eddbd6cb-bbb2-4cbd-b3cb-24efbd32e97a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Pima Cotton Blend Cardigan",
    price: 49,
    color: "Blue Falls",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/981b6382-e46c-459b-b599-a44e5c49bf7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Puff Long Sleeve Top",
    price: 41.39,
    color: "Navy Lark Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cacd2b82-d039-403a-b5e4-850127395d65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Puff Long Sleeve Top",
    price: 41.39,
    color: "Navy Lark Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cacd2b82-d039-403a-b5e4-850127395d65.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Sweater",
    price: 20.97,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f703cee7-ab61-483e-b81d-55b0e847ba3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crewneck Sweater",
    price: 20.97,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f703cee7-ab61-483e-b81d-55b0e847ba3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daisy Print Cardigan",
    price: 39.95,
    color: "Daisy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb8d1bbb-6a60-4cc6-bed2-72847fb7b156.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daisy Print Cardigan",
    price: 39.95,
    color: "Wave",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/911a7c75-e689-4c4d-8587-4b5ab5d185b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Daisy Print Cardigan",
    price: 39.95,
    color: "Daisy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb8d1bbb-6a60-4cc6-bed2-72847fb7b156.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Deep V-Neck Cotton Blend Sweater",
    price: 39.2,
    color: "Tan Lead",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c888465c-751d-43b7-a266-0bba7973e9ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Deep V-Neck Cotton Blend Sweater",
    price: 39.2,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1222d9a-dd63-446b-96dd-6636a10cf000.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Deep V-Neck Cotton Blend Sweater",
    price: 39.2,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1222d9a-dd63-446b-96dd-6636a10cf000.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Deep V-Neck Cotton Blend Sweater",
    price: 39.2,
    color: "Yellow Elfin",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0852044a-2564-4a10-b2c9-2e458ed50dd5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Deep V-Neck Cotton Blend Sweater",
    price: 39.2,
    color: "Pink Peony",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16354225-3cd9-4aa0-b520-8bbbdd21cf72.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Draped Collar Speckled Knit Cardigan",
    price: 108,
    color: "Blue Mix",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8511ef3d-21f9-48e4-972b-9adb88edf96f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Draped Collar Speckled Knit Cardigan",
    price: 108,
    color: "Blue Mix",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8511ef3d-21f9-48e4-972b-9adb88edf96f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Crop Cardigan",
    price: 29,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e2c03a8-f516-4137-978d-a278ca55f856.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Crop Cardigan",
    price: 29,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46a11d3e-ea04-453f-88e2-df8c5ae4adfe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Crop Cardigan",
    price: 29,
    color: "Brown Mink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/207d1dda-da3f-4c05-91ed-4d0691097277.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Crop Cardigan",
    price: 29,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e2c03a8-f516-4137-978d-a278ca55f856.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df7c83fe-e7ea-4b4a-9418-cab469c9cbac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a06ce077-05f9-4f1c-96b9-d3f1cf414045.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e7366e8c-d7be-4a65-aefd-45f5e5d65aa7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Pink Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a57059e8-7369-4432-b538-186ed4898048.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Blue Falls",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ec84e7c0-40a7-4cf1-9846-14f5ff6b4436.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Tan Cobblestone Hthr",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/180d2244-6886-4c1a-ae34-6b54aa109150.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a06ce077-05f9-4f1c-96b9-d3f1cf414045.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/741dc6a6-e652-41cb-9da0-d323af80c10d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Everyday Open Front Cardigan",
    price: 79,
    color: "Green Ghost",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8638d7ee-1ded-4dea-a367-cc6beb16b3c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fashion Crochet Cotton Sweater Tank",
    price: 49,
    color: "Ivory Multi Crochet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e055edc-41dc-4576-952d-338304cbf20f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fashion Crochet Cotton Sweater Tank",
    price: 49,
    color: "Ivory Multi Crochet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e055edc-41dc-4576-952d-338304cbf20f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Featherweight Drape Collar Linen Blend Cardigan",
    price: 138,
    color: "Paper White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cfe97e08-f7f3-444c-9745-8c5c6f9d9902.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Featherweight Drape Collar Linen Blend Cardigan",
    price: 138,
    color: "Dark Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a3761c0-58be-4e0a-bfe2-8f68bf8ebb8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Featherweight Drape Collar Linen Blend Cardigan",
    price: 138,
    color: "Dark Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a3761c0-58be-4e0a-bfe2-8f68bf8ebb8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3bd8f73e-1b3d-4ffb-885c-92c73b1794ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Teal Nile",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58b0fb27-9f76-4496-908b-0830aa1df700.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Green Foliage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ef67bcc7-9dd8-4a81-9a0e-5ca6c9a359fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71f918e7-1b66-4fb1-b1c2-b6a9c301e614.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Green Foliage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ef67bcc7-9dd8-4a81-9a0e-5ca6c9a359fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28537d61-ceb8-4e8e-a144-b9fad5021c31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Pink Flamingo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7328332d-494b-4238-a060-bcb795081f6b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Fitted V-Neck Cardigan",
    price: 59,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e2bc4f9-1d30-47f8-86a8-a88420563f38.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Forever Golden Sweater",
    price: 59.95,
    color: "White Cap",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5644dd59-aad7-40b7-ac8c-7517d850e83c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Forever Golden Sweater",
    price: 59.95,
    color: "White Cap",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5644dd59-aad7-40b7-ac8c-7517d850e83c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Free Cloud Hooded Jacket",
    price: 148,
    color: "Morning Fog",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45d3a575-2c83-4d3c-9cbd-f5abcbb17b1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Free Cloud Hooded Jacket",
    price: 148,
    color: "Army",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d10563da-6111-4e4a-81cc-4698758618e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Free Cloud Hooded Jacket",
    price: 148,
    color: "Army",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d10563da-6111-4e4a-81cc-4698758618e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Glenna Cashmere Sweater",
    price: 138.6,
    color: "Gossamer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e87c5ec-84f7-4ec6-be97-187112a2747f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Glenna Cashmere Sweater",
    price: 138.6,
    color: "Gossamer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9e87c5ec-84f7-4ec6-be97-187112a2747f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Greensboro Button Back Sweater",
    price: 53.7,
    color: "Dark Baltic",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d03baab-1f52-41b0-a1fb-f4cd6b0bcefd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Greensboro Button Back Sweater",
    price: 53.7,
    color: "Antique Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf5391c0-d237-4fd5-9264-999cface5a0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Greensboro Button Back Sweater",
    price: 53.7,
    color: "Heather Cinnamon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d7745788-d30e-4078-9e1a-a3d772578f72.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Greensboro Button Back Sweater",
    price: 53.7,
    color: "Antique Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf5391c0-d237-4fd5-9264-999cface5a0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Greywood Crop Cardigan Sweater",
    price: 98,
    color: "Toffee",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7c0c6ea-48d0-4acb-ab7a-b5db73f70650.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Greywood Crop Cardigan Sweater",
    price: 98,
    color: "Antique Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/972c8144-af6f-4255-9a30-d922c872c1b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Greywood Crop Cardigan Sweater",
    price: 98,
    color: "Antique Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/972c8144-af6f-4255-9a30-d922c872c1b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Herringbone Cardigan",
    price: 99,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31932e4a-19c5-4a87-8171-4f87b2e32dd2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Herringbone Cardigan",
    price: 99,
    color: "Silver Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b694f408-a9e7-42da-99f9-cca5b51701d7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Herringbone Cardigan",
    price: 99,
    color: "Silver Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b694f408-a9e7-42da-99f9-cca5b51701d7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Icon Cardigan",
    price: 46.99,
    color: "Jones Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a7932af-5708-431c-ae6c-a6f8e7fa4c3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Icon Cardigan",
    price: 46.99,
    color: "Jones Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a7932af-5708-431c-ae6c-a6f8e7fa4c3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Icon Cardigan",
    price: 46.99,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8fc0c84c-56ad-49b0-8263-adcbd8d6d017.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Icon Cardigan",
    price: 46.99,
    color: "Jones White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ed4264b-26a1-4b49-a88f-f56f370a1676.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Johnny Collar Sweater",
    price: 69,
    color: "Brown Toffee",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4cbac9d-0ba6-458b-8633-d76e32488d81.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Johnny Collar Sweater",
    price: 69,
    color: "Brown Toffee",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4cbac9d-0ba6-458b-8633-d76e32488d81.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Johnny Collar Sweater",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1df2b0be-72e7-460e-81d6-777cc7d93e62.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Laylah One Shoulder Sweater",
    price: 98,
    color: "Nude",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/726b75ec-2451-4287-be76-ed668135b03d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Laylah One Shoulder Sweater",
    price: 98,
    color: "Nude",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/726b75ec-2451-4287-be76-ed668135b03d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lea Cardigan",
    price: 45,
    color: "Birch",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80d627e2-ce7e-4677-b3b2-b820141268db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lea Cardigan",
    price: 45,
    color: "Desert Sage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/79b1e34d-481a-4314-bfd1-5561d7b32af7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lea Cardigan",
    price: 45,
    color: "Birch",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80d627e2-ce7e-4677-b3b2-b820141268db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lea Cardigan",
    price: 45,
    color: "Old Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a412e1a-00b4-4683-b0a2-91aab2c6e588.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Blue Palace",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32981b4d-6801-4693-b467-3a4fcd371057.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/629f3cd8-1c35-486e-b2ee-f0378d4c06ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ef84392-a9ed-4043-b288-7044f54dfc84.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Purple Bloom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f7aa9b8-f5d0-42c5-b437-cde9607f7f4a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9dcf7c7a-9970-4e11-9023-5903881db2d5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ced19e9-1c01-47b1-b408-fb52d506d86a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Green Foliage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9d6072fd-b7f8-4183-bb75-83b172fdc1a9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Long Cardigan",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ced19e9-1c01-47b1-b408-fb52d506d86a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Cardigan Sweater",
    price: 46.23,
    color: "Beige Oatmeal Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8066fe3-7335-43f2-b36d-33360196ab5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Cardigan Sweater",
    price: 46.23,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/79eb4576-ea9d-4f57-964b-46b2c507467f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Cardigan Sweater",
    price: 46.23,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb075335-8f3c-4fab-8e8b-439a4fe63010.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Cardigan Sweater",
    price: 46.23,
    color: "Beige Oatmeal Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8066fe3-7335-43f2-b36d-33360196ab5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Cardigan Sweater",
    price: 46.23,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8c1e407-90dd-4b5c-9f20-2b9dd5a0d43c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Linen Blend Long Cardigan",
    price: 128,
    color: "Paper White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f3496ba-ef47-4a91-815d-78193f8a92f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Linen Blend Long Cardigan",
    price: 128,
    color: "Black Onyx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d67fd5be-c58a-4ce2-ab1f-fc7819924523.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Linen Blend Long Cardigan",
    price: 128,
    color: "Dark Indigo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a7df814a-a2ea-47e8-adc8-865dcbb6c128.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Linen Blend Long Cardigan",
    price: 128,
    color: "Black Onyx",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d67fd5be-c58a-4ce2-ab1f-fc7819924523.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f6631f8-7df5-4b60-ac05-213e81b57cf1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Red Chili",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0207b0e-59c3-4eef-9dcd-93e39adaa5a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Rust Sequoia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/855335bd-b9ed-40ac-bf72-d69e564649ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Grey Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7f1de753-882e-42be-9ec8-704a9413c909.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Burgundy Fig",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36fb4a48-0219-404a-aa5c-acbce060529e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Burgundy Fig",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36fb4a48-0219-404a-aa5c-acbce060529e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/798fe6bb-83e9-4f3f-88e3-5280600f80ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Grey Forged",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f6631f8-7df5-4b60-ac05-213e81b57cf1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Long Cardigan",
    price: 47.4,
    color: "Pink Flamingo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b285505c-09f5-4707-9caa-cbfb9f8c752c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Pocket Cardigan",
    price: 47.4,
    color: "Burgundy Stem",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a48f490b-9773-44e4-974b-81b3bd385040.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Pocket Cardigan",
    price: 47.4,
    color: "Grey Dark Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/998566fc-d5e3-458a-866b-09395fc7f91f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Pocket Cardigan",
    price: 47.4,
    color: "Olive Sarma",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f66c75dc-0a15-48c5-a9a4-6f798f0c07bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Front Pocket Cardigan",
    price: 47.4,
    color: "Grey Dark Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/998566fc-d5e3-458a-866b-09395fc7f91f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oversize Crewneck Sweater",
    price: 77.97,
    color: "Oatmeal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b53e0fdb-ddd9-45d2-b3d9-09b41e7abaaa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oversize Crewneck Sweater",
    price: 77.97,
    color: "Oatmeal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b53e0fdb-ddd9-45d2-b3d9-09b41e7abaaa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oversize Thermal Long Sleeve Top",
    price: 22.49,
    color: "Red Grape Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2430870-edce-4a5a-a8e4-fc29d618d93d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oversize Thermal Long Sleeve Top",
    price: 22.49,
    color: "Beige Oatmeal Light Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/67c60197-74b3-442b-8f7f-a036922f8ddc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oversize Thermal Long Sleeve Top",
    price: 22.49,
    color: "Red Grape Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2430870-edce-4a5a-a8e4-fc29d618d93d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Panoma Open Stitch Cardigan",
    price: 64.95,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e6175de2-a21f-4afc-af2d-44b807190fab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Panoma Open Stitch Cardigan",
    price: 64.95,
    color: "Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4bf55564-4063-4ac5-964d-9e6f8d17746e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Panoma Open Stitch Cardigan",
    price: 64.95,
    color: "Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4bf55564-4063-4ac5-964d-9e6f8d17746e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "PEPLUM SWEATER",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41b42827-cc34-480c-9fee-f7acd6a4220a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "PEPLUM SWEATER",
    price: 59,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b3d30b69-2ad3-4a2b-aed3-653252ee688a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "PEPLUM SWEATER",
    price: 59,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/85b7a891-012d-4433-9f88-30649f34ad95.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "PEPLUM SWEATER",
    price: 59,
    color: "Orange Rumba",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8eb204c-607a-4204-8541-22653d480567.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "PEPLUM SWEATER",
    price: 59,
    color: "Green Sorbet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/21d7733d-845c-42a6-84af-c69d290ff56d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "PEPLUM SWEATER",
    price: 59,
    color: "Green Sorbet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/21d7733d-845c-42a6-84af-c69d290ff56d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Phoebe Wrap Cardigan",
    price: 118,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c7659f6-c421-4f1c-b893-baf3ab527f2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Phoebe Wrap Cardigan",
    price: 118,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c7659f6-c421-4f1c-b893-baf3ab527f2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plaited Stitch Recycled Blend Crewneck Sweater",
    price: 23.97,
    color: "Brown Earth",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cd4b7cd5-e986-4d8b-8de1-a1028b2f3dcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plaited Stitch Recycled Blend Crewneck Sweater",
    price: 23.97,
    color: "Tan Boulder",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9dd3045-177e-4d04-b91c-cdbbf9c911ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plaited Stitch Recycled Blend Crewneck Sweater",
    price: 23.97,
    color: "Purple Dahlia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58ad3296-40a7-4227-8f85-acfa1c7f0218.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plaited Stitch Recycled Blend Crewneck Sweater",
    price: 23.97,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9ebaab86-3bf4-4861-ae70-cdbbb43982a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plaited Stitch Recycled Blend Crewneck Sweater",
    price: 23.97,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9ebaab86-3bf4-4861-ae70-cdbbb43982a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Plaited Stitch Recycled Blend Crewneck Sweater",
    price: 23.97,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fe7eb7a6-1d9a-4e71-b181-b4962b58cbc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pointelle Cotton Blend Crewneck Sweater",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf233b69-e38d-4580-91b1-a274c34253cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pointelle Cotton Blend Crewneck Sweater",
    price: 69,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3d0d1f65-7f59-45ad-8bdb-ff7b7bc7edae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pointelle Cotton Blend Crewneck Sweater",
    price: 69,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3d0d1f65-7f59-45ad-8bdb-ff7b7bc7edae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c69bb93b-3fb1-4ee0-9452-2bb838ce919c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Teal Nile",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ee9be69-e101-4e75-9e65-89f518c4b088.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c7b0cf85-25f1-4512-94a0-f2ca321b1cf4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5bbd1e88-ddb6-4151-bc86-d80995f16174.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Green Foliage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5490280e-83fa-4886-844f-e58d5c5ad146.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Ivory Multi Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e503e019-06a5-4d7d-8716-c3c994991fd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c97eae6c-4be6-4ffe-a5e0-e753e52c0e25.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Crewneck Sweater",
    price: 49,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c97eae6c-4be6-4ffe-a5e0-e753e52c0e25.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Knit Cardigan",
    price: 59.5,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8cb48dc0-250c-489c-b5af-9ec4b3719a7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Knit Cardigan",
    price: 59.5,
    color: "Faded Earth",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bde0d55-1110-4590-9141-8eed75ae8dee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Knit Cardigan",
    price: 59.5,
    color: "Faded Earth",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bde0d55-1110-4590-9141-8eed75ae8dee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Organic Linen & Cotton Cardigan",
    price: 198,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f70e7dfe-c153-43d0-8a1d-3d0083f6b5bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Organic Linen & Cotton Cardigan",
    price: 198,
    color: "Butter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa7b04da-42b1-4870-9175-bcca46f8c23e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Organic Linen & Cotton Cardigan",
    price: 198,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f70e7dfe-c153-43d0-8a1d-3d0083f6b5bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed Organic Linen & Cotton Cardigan",
    price: 198,
    color: "Berry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c908731-b1bf-447e-a0dc-a79a02678294.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed V-Neck Cashmere Tunic Sweater",
    price: 173.97,
    color: "Coastal Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e49cabfa-e4c8-4d86-b969-a4ee437fe21a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed V-Neck Cashmere Tunic Sweater",
    price: 173.97,
    color: "Heather Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fd18a54d-30e3-4a26-8421-c1fad2a46543.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ribbed V-Neck Cashmere Tunic Sweater",
    price: 173.97,
    color: "Coastal Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e49cabfa-e4c8-4d86-b969-a4ee437fe21a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Riley Zip Hoodie",
    price: 325,
    color: "Sage Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5a454ce-f715-4e88-ad89-7a32b9faef6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Riley Zip Hoodie",
    price: 325,
    color: "Sage Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5a454ce-f715-4e88-ad89-7a32b9faef6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sea Through Me This Way Relaxed Fit Sweater",
    price: 79.95,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41ae9fc4-2c2a-4968-ab13-238cfeea6895.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sea Through Me This Way Relaxed Fit Sweater",
    price: 79.95,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41ae9fc4-2c2a-4968-ab13-238cfeea6895.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Pink Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a74bc429-da19-46ed-8c29-305b71c22db4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Blue Palace",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4208d193-d047-4584-81bd-929186cd80a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Navy Peacoat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3a814e0-9dc0-4230-926c-76f783a5d14e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/404f470f-1824-45aa-a482-10dc7f40e85a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Purple Bloom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cefc9e93-4a9d-464f-adda-d99213fc86bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/404f470f-1824-45aa-a482-10dc7f40e85a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afd5e46a-dd40-4315-892c-128017a93270.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Pink Chalk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f5ed32c-21d2-45bb-a198-098c3b8192c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Pink Chintz",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4124af5f-ff6b-4219-b9a9-e82c82c74e3e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Slit Cardigan",
    price: 69,
    color: "Green Foliage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3b8cb30-75c4-4d38-a0a5-c0c7fc2b80c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Vent Lightweight Tunic Sweater",
    price: 55.2,
    color: "Blue Vallarta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/69230761-afc7-4046-aec4-cda9a2d28acc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Vent Lightweight Tunic Sweater",
    price: 55.2,
    color: "Blue Vallarta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/69230761-afc7-4046-aec4-cda9a2d28acc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Vent Lightweight Tunic Sweater",
    price: 55.2,
    color: "Ivory- Blue Vallarta Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/da1aa905-be39-4cf2-8a45-772e3235479f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Vent Lightweight Tunic Sweater",
    price: 55.2,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bca3bb9c-9e62-46bb-b656-d6f65393f37a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Vent Lightweight Tunic Sweater",
    price: 55.2,
    color: "Ivory- Red Chinoise Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/759e5c08-5c88-444d-975d-f7e48d544c2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slouchy Hooded Sweater Cover-Up Tunic",
    price: 69,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a448873-09f3-482f-8cd2-37e30a0de6c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slouchy Hooded Sweater Cover-Up Tunic",
    price: 69,
    color: "Midnight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e8eb003-cafa-46d6-9c55-da90688d7b74.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Slouchy Hooded Sweater Cover-Up Tunic",
    price: 69,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a448873-09f3-482f-8cd2-37e30a0de6c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sun and Wave Organic Cotton Hoodie",
    price: 118,
    color: "Ocean Waves",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/30c52459-602a-49f9-ab3f-14bbe4547ca1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sun and Wave Organic Cotton Hoodie",
    price: 118,
    color: "Ocean Waves",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/30c52459-602a-49f9-ab3f-14bbe4547ca1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Surplice Sweater",
    price: 41.3,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abe9a147-d8d2-4e36-ab6e-e947162d4ffa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Surplice Sweater",
    price: 41.3,
    color: "Pink Glass",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/848ccc5a-482d-4acf-946e-1843e01b26db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Surplice Sweater",
    price: 41.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b391485d-7fae-4fab-bf39-9c575adda007.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Surplice Sweater",
    price: 41.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b391485d-7fae-4fab-bf39-9c575adda007.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Swirl Jacquard Pullover Sweater",
    price: 44.5,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea42908a-5628-47c6-bba6-d0cb08e82e48.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Swirl Jacquard Pullover Sweater",
    price: 44.5,
    color: "Rich Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea42908a-5628-47c6-bba6-d0cb08e82e48.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond One-Shoulder Thermal Knit Sweater",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f875b560-730a-413d-a597-31bb6782ab19.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond One-Shoulder Thermal Knit Sweater",
    price: 59,
    color: "Pink Peony Bud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/12314266-ba17-40c6-8d41-93a243b46781.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond One-Shoulder Thermal Knit Sweater",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f875b560-730a-413d-a597-31bb6782ab19.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond One-Shoulder Thermal Knit Sweater",
    price: 59,
    color: "Ivory Dove",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/763ef16e-dac3-4700-a957-29328ad4c9de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond One-Shoulder Thermal Knit Sweater",
    price: 59,
    color: "Purple Evening",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b307e2c0-9ad4-44f6-a390-10275fdaea8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond One-Shoulder Thermal Knit Sweater",
    price: 59,
    color: "Brown Soil",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/163e5ce4-be74-4fdb-8a9f-7cbaf7b151b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ribbed One-Shoulder Pullover",
    price: 41.4,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4cf26963-5980-4b6c-b5d4-e548b2185338.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Ribbed One-Shoulder Pullover",
    price: 41.4,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4cf26963-5980-4b6c-b5d4-e548b2185338.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Organic Linen & Cotton Cardigan",
    price: 228,
    color: "Soft White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26bfd412-f06f-4d1c-92bb-c2fcb972f355.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Organic Linen & Cotton Cardigan",
    price: 228,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d9390a18-a1dc-429a-b48f-1ef2df01bed6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Organic Linen & Cotton Cardigan",
    price: 228,
    color: "Mustard Seed",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/74be0e74-e662-42e6-bd11-f923f19a387c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Organic Linen & Cotton Cardigan",
    price: 228,
    color: "Periwinkle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41028750-4954-4088-b013-92b59114ca73.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "V-Neck Organic Linen & Cotton Cardigan",
    price: 228,
    color: "Mustard Seed",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/74be0e74-e662-42e6-bd11-f923f19a387c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Birchmoor Cardigan Sweater",
    price: 98,
    color: "Heather Midnight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/208c2c1f-7c14-4ef8-87f0-6441ad186bf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Birchmoor Cardigan Sweater",
    price: 98,
    color: "Heather Oatmeal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/044b9dcd-c677-4a10-8d3c-7d5d8914f553.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Birchmoor Cardigan Sweater",
    price: 98,
    color: "Heather Midnight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/208c2c1f-7c14-4ef8-87f0-6441ad186bf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Birchmoor Cardigan Sweater",
    price: 98,
    color: "Heather Jam",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9bf26971-8dfd-4ad0-86e4-f269b85ab8b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Off the Shoulder Linen Blend Sweater",
    price: 59,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f9af019-b4c9-405b-9699-df7d8144bd79.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Off the Shoulder Linen Blend Sweater",
    price: 59,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f9af019-b4c9-405b-9699-df7d8144bd79.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Off the Shoulder Linen Blend Sweater",
    price: 59,
    color: "Tan Thrush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0db37c20-1922-4fdd-bb26-f5680f277424.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Stripe Mock Neck Cotton Blend Sweater",
    price: 69,
    color: "Grey- Navy Molly Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/552eadfa-9880-4ad7-bb2e-f2665241cbb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Stripe Mock Neck Cotton Blend Sweater",
    price: 69,
    color: "Beige- Brown Molly Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fe2b07e-8b49-4265-8e44-711b7872e46d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Stripe Mock Neck Cotton Blend Sweater",
    price: 69,
    color: "Beige- Brown Molly Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fe2b07e-8b49-4265-8e44-711b7872e46d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const skirtProduct = [
  {
    name: "Aces Tennis Skirt",
    brand: "ALO",
    description:
      "Step out onto the court in this sporty logo-banded tennis skirt designed with stretchy shorts underneath.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62d99cfb-6847-45f4-8473-50214e037b54.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Always Fits Cover-Up Miniskirt",
    brand: "GOOD AMERICAN",
    description:
      "This stretchy miniskirt sculpts your curves for a super flattering fit that you can rock on and off the beach.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6087545-3c59-40b2-896b-2c4ec12b114c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Animal Print Satin Skirt",
    brand: "TOPSHOP",
    description:
      "A modern animal print enlivens this satin midi skirt with a fierce side split.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3317ba7c-c299-435f-99f1-7a1de222ee83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bandana Flower Wrap Miniskirt",
    brand: "MADEWELL",
    description: "A true wrap skirt in a sweet floral print.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d6e4ffb-6627-44ab-b9ba-d3706f4e94ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Belted Pleated Midi Skirt",
    brand: "VICI COLLECTION",
    description:
      "A defining belt tops this flowy midi skirt textured with allover accordion pleats for graceful day-to-night movement.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e0645a67-2292-401c-b3e6-d58129a036a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Benglaine Wrap Skirt",
    brand: "TOPSHOP",
    description:
      "Show some thigh in this stretchy little wrap skirt that ties at the waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3e437710-5604-424d-aa46-11bb357bfea0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bias Cut Satin Midi Skirt",
    brand: "TOPSHOP",
    description:
      "Complete your look with the understated sophistication of this smooth satin midi skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2154f55d-0b1c-4c9e-b59a-5f446a377402.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bias Cut Satin Slip Skirt",
    brand: "AMY LYNN",
    description:
      "The skirt silhouette of the season is rendered in a dreamy hue that will freshen up whatever you pair it with.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ef122079-7d58-4864-98ba-4d29fc62b4a4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Borderline Knit Wrap Midi Skirt",
    brand: "FREE PEOPLE",
    description:
      "A flattering wrap silhouette and high-rise fit bring cozy perfection to a slit-hem midi skirt built for breezy day-to-night styling.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81f5b009-6464-4a34-b82a-fdbdf7b21e1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Button Down Miniskirt",
    brand: "TOPSHOP",
    description:
      "Smooth buttons march down the front of this airy mini cut from pure cotton.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e619b8e8-e1de-4b88-885b-565b13941a89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Checkerboard Ditsy Mesh Midi Skirt",
    brand: "TOPSHOP",
    description:
      "Gingham flowers bustle about on an effortless midi skirt finished with scalloped trim at the waist and a wavy hem at the bottom.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c54fe42-9d51-49d6-9de3-37247478d28c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cherish Floral Patchwork Maxi Skirt",
    brand: "FREE PEOPLE",
    description:
      "Headline all the music festivals with boho charm in this flower-powered maxi skirt covered in a patchwork of patterns.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b40f585-c4d6-4185-8c16-e6ff61647f33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Chloe Pull-On Denim Pencil Skirt",
    brand: "LIVERPOOL LOS ANGELES",
    description:
      "A year-round pencil skirt maintains a smooth silhouette with a pull-on design and shape-holding stretch denim construction.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/11c4020a-1eac-4c5e-8ba0-cd7d417ce78b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Co-Ord Ruched Satin Maxi Skirt",
    brand: "TOPSHOP",
    description:
      "A teardrop cutout infuses this lightweight satin skirt with a touch of charming playfulness.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/285a69b0-9b69-4b64-86dd-eb3a9b8084df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Corinne Cotton Maxi Skirt",
    brand: "MARINE LAYER",
    description:
      "This tiered maxi skirt not only pairs well with practically everything in your closet, but is also made from a soft cotton that's always comfortable.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afb96362-c6b7-4736-99fd-9540db3fb633.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Crinkle Midi Skirt",
    brand: "TOPSHOP",
    description:
      "A lettuce-edge hem and side slit relax this crinkled midi skirt with a subtle windowpane design.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d568a85f-0f25-456f-919e-195998c9f1ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cristina Martinez Print Skirt",
    brand: "NORDSTROM",
    description:
      "This textured button-front skirt features new-season prints designed by artist Cristina Martinez sure to perk up your wardrobe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4857b1fd-db64-4aa7-8adc-8ee47b12f783.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cross Front Cable Skirt",
    brand: "HALOGEN®",
    description:
      "Cozy cables bring warmth to this soft knit skirt designed in a flattering wrapped fit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2beefdb-f0eb-4a85-8d6a-39fd675922d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Dita Zebra Print Midi Skirt",
    brand: "AFRM",
    description:
      "Side ruching and a faux-wrap design lend a relaxed feel to this brightly colored zebra-print skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f34910e7-c705-413f-8251-3ee5dcda9e64.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Emilia Side Knot Midi Skirt",
    brand: "AFRM",
    description:
      "A daring side slit adds drama to this soft and stretchy midi skirt topped with a twisted waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dedb1879-b9da-4bc2-9e84-e938d486736d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Emmy Nonstretch Denim Skort",
    brand: "FREE PEOPLE",
    description:
      "This supercute light-wash skort with raw hems closes with a little tie at the hip.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c325a0bd-2644-46ef-8a79-3efcac785701.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Eyelet Cotton Cover-Up Wrap Skirt",
    brand: "TOPSHOP",
    description:
      "A floral eyelet design adorns this semi-sheer cover-up wrap skirt made from breathable cotton, the perfect pick for a poolside look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f61a6d8b-df4d-41d1-96ee-3fa4838bf5fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Eyelet Pull-On Midi Skirt",
    brand: "MADEWELL",
    description:
      "Easy and breezy in allover floral eyelet lace, this midi skirt has a ruffled yoke seam for a little extra fullness.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea5f820e-99c3-430d-a9f2-9f0ee114949c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral Print Bias Cut Skirt",
    brand: "TOPSHOP",
    description:
      "Richly hued roses emerge from classic polka dots on this classic bias-cut midi cut with a breezy side slit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2dc763b-5b20-4774-ae57-c6e1b6cf7638.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Floral Wrap Cover-Up Skirt",
    brand: "MAAJI",
    description:
      "A throw-on-and-stroll cover-up skirt boasts a sweet floral print, pompoms trimming every edge and a pedigree of sustainability.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6555c351-36ea-4277-a82e-bc1f67115b39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Gingham Print Bias Cut Midi Skirt",
    brand: "TOPSHOP",
    description:
      "A smooth, satiny finish elevates this classic bias-cut midi covered in a bold gingham pattern.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95208269-4d02-4a5a-b078-f45c1b6d8edb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Good Waist Denim Miniskirt",
    brand: "GOOD AMERICAN",
    description:
      "A raw, fringed hem punctuates this faded-denim miniskirt designed with shapely, easy-moving stretch and done in a sustainably produced wash.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9aeadee0-1862-47b7-8b12-954ca0187755.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Hanalei Cover-Up Maxi Skirt",
    brand: "O'NEILL",
    description:
      "Saunter from the beach to lunch in a breezy cover-up skirt cut from lightly crinkled jersey and finished with a sultry, soaring slit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e525d96-de3a-4319-b350-94964b22ad44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "High Waist Raw Hem Denim Miniskirt",
    brand: "TOPSHOP",
    description:
      "A raw-cut hem and nonstretch denim authenticate this light-wash high-rise miniskirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e757e4c7-162f-4035-8df3-cb92ac050ed4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Hourglass Midi Skirt",
    brand: "NAKED WARDROBE",
    description:
      "Keep your look captivating in a second-skin midi skirt with a soaring high waistband that will beautifully accentuate your curves.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6af3952d-94ba-40e1-9c69-c2b914f6df13.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "in a Bliss Floral Satin Skirt",
    brand: "LULUS",
    description:
      "A tonal floral jacquard pattern pairs beautifully with the figure-skimming silhouette of this pretty satin skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c5a21a5-eb9d-4a12-b788-592ff4b5dc09.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "It's a Wrap Sarong Skirt",
    brand: "BECCA",
    description:
      "Saunter from pool to bar in this lightweight sarong that amps up your sunny-day vibe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb86c82c-3f02-467c-a929-4bfe9e5228e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Linen Blend Midi Skirt",
    brand: "FARM RIO",
    description:
      "A mix of colorful palms paints a picture of the tropics on a midi skirt crafted from a lightweight linen blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb298d72-539a-4e9e-8823-0b5c0182efc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Main Squeeze Ruched Midi Skirt",
    brand: "WAYF",
    description:
      "Long ties cinch the side of a stylishly slit midi skirt that hugs your hips in a stretchy knit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0681175a-742f-4f75-9ad7-9aaf745e7a0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Marlowe Mixed Media Skirt",
    brand: "A.L.C.",
    description:
      "Contrasting fabrics give textural appeal to this flouncy skirt topped by an easy-fitting elastic waist.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5037e03d-9dc6-484e-848b-da4e47fd4d7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Marni Asymmetric Skirt",
    brand: "O'NEILL",
    description:
      "Dance with your toes in the sand in this flouncy, asymmetric gauze skirt in an easygoing pull-on style perfect for impromptu adventures.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a671c072-0e6c-4cd2-8383-47cab0c0db3a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Matching Family Moments Jacquard Cotton Midi Skirt",
    brand: "NORDSTROM",
    description:
      "Textural jacquard patterning adds trendy style to this cotton skirt cut with a timeless A-line silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/568b6d49-bc84-445b-a97e-8dd3ba4ac3b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Metallic Smock Waist Tiered Cotton Blend Skirt",
    brand: "VINCE",
    description:
      "A glimmer of glam adds a fancy feel to this smock-waisted cotton-blend skirt draped with ruffled tiers.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4322012-5a60-4eb5-af4c-851646407117.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Midi Skirt",
    brand: "CHAUS",
    description:
      "An interlocking geometric design defines this classy midi skirt that offers easy pull-on style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2b8813a-35e0-4e5c-a492-6ca0cf30e6e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Mixed Eyelet Miniskirt",
    brand: "BP.",
    description:
      "Embroidered eyelets sweeten a miniskirt that lends a touch of romance to your ensemble.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56248627-080d-4618-b132-d6cb97dbb747.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Oakley Button-Through Skirt",
    brand: "REISS",
    description:
      "A simple sash defines the waist of a button-through skirt colored in a serene shade.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8709c5c4-ba31-4d6e-91df-70f5b47a7d4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Once and Floral Miniskirt",
    brand: "BB DAKOTA BY STEVE MADDEN",
    description:
      "A smocked waist brings flattering appeal to a charming chiffon miniskirt patterned in a chic floral print and finished with a tiered flounce hem.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7e4c6578-f74e-4152-bfad-555ac6f4f10c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Open Stitch Cotton Blend Midi Skirt",
    brand: "OPEN EDIT",
    description:
      "An open-stitch design adds breezy versatility to this all-seasons midi-length skirt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/186079ce-8011-4320-9bae-fbcb17202ac3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Printed Midi Skirt",
    brand: "BP.",
    description:
      "A sweet scarf print enlivens this curve-accentuating midi that's ideal from day to night.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de37d4de-4d61-49b1-a689-891c8e164ae3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Roll Top Maxi Skirt",
    brand: "LOVEAPPELLA",
    description:
      "This easy stretch-jersey maxi in a gorgeous red-wine hue is topped with a thick fold-over waistband and cut in a flowy silhouette",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27ca3b58-b9cf-4db8-9617-dac7f716a25c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ruched Knit Midi Skirt",
    brand: "HALOGEN®",
    description:
      "Ruched sides enhance the figure-hugging shape of a stretchy knit midi skirt perfect for office, date night or an event with friends.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c6902bf-5fd2-47e7-9bfc-d9cd273c9926.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rylan Tank & Skirt",
    brand: "REFORMATION",
    description:
      "Crafted from soft, sustainable fibers, this two-piece set features a cropped crewneck tank and a twist-waist skirt with a stem-showing front vent.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/93860bf5-f4cd-4bb5-85b9-10721a3e529f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sadie High Waist Faux Leather Miniskirt",
    brand: "VERO MODA",
    description:
      "Show off a bit of leg in this chic faux-leather miniskirt that was made for a night out on the town.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/336d655e-4409-4b63-9b60-dde05a57fb01.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Satin Ball Skirt",
    brand: "ALEX EVENINGS",
    description:
      "Crafted from smooth, lustrous satin, this classic ball skirt is the perfect eveningwear alternative with a high waist, elegant pleating and convenient pockets.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/059ee092-2bfc-48cb-8f5b-b11204b5c2c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Satin Midi Skirt",
    brand: "OPEN EDIT",
    description:
      "Simple elegance defines this hammered satin midi topped with an elastic waist and punctuated with a vented hem.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2646eaf8-45ab-474e-a81a-b27ef46ee059.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Satin Miniskirt",
    brand: "TOPSHOP",
    description:
      "With a subtle side slit and shorter silhouette, this leg-baring miniskirt crafted from stretchy satin shows off the perfect amount of skin.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/487ce539-e8dc-41ee-a028-00f01ac5432a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Satin Wrap Midi Skirt",
    brand: "TOPSHOP",
    description:
      "A smooth satiny finish elevates this wrapped midi skirt designed with a stem-showing front vent.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a0adbbb-6150-46dc-86db-7631e63c0088.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Scuba Midi Skirt",
    brand: "NORDSTROM",
    description:
      "A neat back zip keeps this versatile skirt looking smooth and tidy from desk days to drinks dates.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/402af253-21e9-459c-bebf-51e4419d77bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Side Ruched Skirt",
    brand: "OPEN EDIT",
    description:
      "Mini and midi lengths take sides on this slinky jersey skirt styled with a high-cut side slit topped with drawstring-adjustable ruching.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/698108bd-0e53-45c8-9cff-d8d7e37e2079.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Soft Drape Midi Skirt",
    brand: "NORDSTROM",
    description:
      "A relaxed silhouette and mid-length draped design make this versatile skirt the perfect choice to modernize your work-to-weekend wardrobe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/633612fb-f46f-4ae8-b1b5-8f41973decf3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Summer Fling Linen Blend Skirt",
    brand: "NIC+ZOE",
    description:
      "A linen-blend skirt is bias-cut for kick-up-your-heels flare. An elasticized inset at the back waist makes the fit completely your own.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6dd1f16-3b07-449c-8c23-227f84ec05cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Textured Midi Skirt",
    brand: "HALOGEN®",
    description:
      "Cheerful checks enliven this chic midi skirt textured with shapely side ruching.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db08bf41-95c1-47d5-aeb9-35ef6cf671de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Tiered Midi Skirt",
    brand: "KAREN KANE",
    description:
      "Elevate your boho-chic style with this flowy midi skirt that's detailed with flouncy tiered ruffles.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2af3a75-9741-4998-a0e6-448e77c0d895.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Button Front Skirt",
    brand: "TREASURE&BOND",
    description:
      "Fanciful allover blooms sweeten this front-button skirt that goes stylish from work to sunny-day stroll.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4a41da61-62f2-437b-83b2-644f8487e8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Linen Blend A-Line Skirt",
    brand: "TREASURE&BOND",
    description:
      "Soft stripes enliven this summery linen blend skirt styled in an A-line silhouette with a comfy waist tie.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fe843d3d-6fbc-489f-9f25-3880578eca42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Treasure & Bond Side Ruched Skirt",
    brand: "TREASURE&BOND",
    description:
      "Every closet craves this shapely stretch-knit skirt designed with rippled side ruching.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a1a93f1-2b6b-4c2f-8cd9-3d01d4ac1441.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Utility Pocket Skirt",
    brand: "OPEN EDIT",
    description:
      "Utility style is topping the trend report, and this cognac-colored skirt delivers with a roomy, button-flap pocket at the side.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e05af4b3-f5ee-435c-9fef-8b9a7c856f58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Varsity Tennis Skirt",
    brand: "ALO",
    description:
      "Carefully tucked pleats lend easy movement to this sporty tennis skirt that impresses on and off the court.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/52f4978d-a4e5-4c36-b58c-10c67e756bc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Vent Midi Skirt",
    brand: "MANGO",
    description:
      "If you're looking for a signature skirt that will take you absolutely anywhere, this beautifully draped, side-slit option just might be the one.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/384b1c65-3923-4501-a987-aa1754ccdcd4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "We the Free Modern Femme Denim Miniskirt",
    brand: "FREE PEOPLE",
    description:
      "Flattering vertical seams define the clean styling of a figure-flaunting miniskirt finished with a gleaming back zip to complete the cool-girl appeal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f1f0ba1-ce0b-4a12-afdf-6e84e559f996.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Wild Flower Aubrey Cover-Up Maxi Skirt",
    brand: "MAAJI",
    description:
      "Get the best of both worlds with this flirty cover-up that let's you customize your coverage by wearing it either as a maxi skirt or a sleeveless dress.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d754e833-b657-49c6-b60a-68bea524e640.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Geodot Floral Ruffle Tiered Pull-On Midi Skirt",
    brand: "MADEWELL",
    description:
      "An easy pull-on skirt, this lightweight cotton midi has a cinchable drawstring for a paperbag-waist effect—ruffled around the hem, it's a flirty little number.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edc4b8e6-ff86-4136-83eb-f74a6cb5549f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Strapless Modal Blend Maxi Dress",
    brand: "TOPSHOP",
    description:
      "Ruching lends a draped effect to the bodice of this strapless maxi dress made from a soft and stretchy modal blend.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea107e9c-e7a0-457f-8e4d-2bfed7076a7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Women's Striped Ruffle Tiered Pull-On Midi Skirt",
    brand: "MADEWELL",
    description:
      "In textured stripe cotton, this pull-on midi skirt has a flair for the dramatic with ruffles at each tier.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1de38038-227e-42b5-9ceb-b4bc7defa21a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Zoe Side Slit Midi Skirt",
    brand: "REFORMATION",
    description:
      "Show some leg in a flowy side-slit skirt that lets you get your groove on.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/94f9374a-4379-4987-8ee9-46b367c3d0b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const skirtData = [
  {
    productName: "Aces Tennis Skirt",
    price: 72,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62d99cfb-6847-45f4-8473-50214e037b54.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Aces Tennis Skirt",
    price: 72,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/21bc70c2-e9a4-4f36-90df-3e54ae5d8348.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Aces Tennis Skirt",
    price: 72,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62d99cfb-6847-45f4-8473-50214e037b54.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Aces Tennis Skirt",
    price: 72,
    color: "Green Emerald",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0d1eb328-c9b2-4ba7-bd24-58a6152b4437.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Always Fits Cover-Up Miniskirt",
    price: 75,
    color: "Lilac Mist001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6087545-3c59-40b2-896b-2c4ec12b114c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Always Fits Cover-Up Miniskirt",
    price: 75,
    color: "Bright Poppy002",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6eb8853b-a04a-43e2-be02-ae0b3182b782.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Always Fits Cover-Up Miniskirt",
    price: 75,
    color: "Stormy001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cfe331e5-ee7d-4dde-9629-2d436429fd6f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Always Fits Cover-Up Miniskirt",
    price: 75,
    color: "Bright Poppy002",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6eb8853b-a04a-43e2-be02-ae0b3182b782.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Always Fits Cover-Up Miniskirt",
    price: 75,
    color: "Mocha001",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb208e4a-b64d-49d1-b3f5-75567e86089e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Always Fits Cover-Up Miniskirt",
    price: 75,
    color: "Summer Green002",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41152317-b3e8-4ba5-96b8-71906cc66125.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Animal Print Satin Skirt",
    price: 56,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3317ba7c-c299-435f-99f1-7a1de222ee83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Animal Print Satin Skirt",
    price: 56,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3317ba7c-c299-435f-99f1-7a1de222ee83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bandana Flower Wrap Miniskirt",
    price: 88,
    color: "Bandana Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d6e4ffb-6627-44ab-b9ba-d3706f4e94ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bandana Flower Wrap Miniskirt",
    price: 88,
    color: "Bandana Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d6e4ffb-6627-44ab-b9ba-d3706f4e94ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Belted Pleated Midi Skirt",
    price: 74,
    color: "Maroon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e0645a67-2292-401c-b3e6-d58129a036a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Belted Pleated Midi Skirt",
    price: 74,
    color: "Maroon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e0645a67-2292-401c-b3e6-d58129a036a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Benglaine Wrap Skirt",
    price: 47,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3e437710-5604-424d-aa46-11bb357bfea0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Benglaine Wrap Skirt",
    price: 47,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/470132bc-f565-4d2f-a7ff-9cc29575ade1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Benglaine Wrap Skirt",
    price: 47,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3e437710-5604-424d-aa46-11bb357bfea0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bias Cut Satin Midi Skirt",
    price: 56,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2154f55d-0b1c-4c9e-b59a-5f446a377402.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bias Cut Satin Midi Skirt",
    price: 56,
    color: "Mid Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d35eb7d7-10b4-4af6-b794-37d2d0af3b63.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bias Cut Satin Midi Skirt",
    price: 56,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aebbb3f7-ab90-499d-8aa6-fce648edd0c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bias Cut Satin Midi Skirt",
    price: 56,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aebbb3f7-ab90-499d-8aa6-fce648edd0c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bias Cut Satin Slip Skirt",
    price: 75,
    color: "Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ef122079-7d58-4864-98ba-4d29fc62b4a4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bias Cut Satin Slip Skirt",
    price: 75,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3798b346-f82d-434e-8680-5868e8af4c52.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bias Cut Satin Slip Skirt",
    price: 75,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3798b346-f82d-434e-8680-5868e8af4c52.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Borderline Knit Wrap Midi Skirt",
    price: 78,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81f5b009-6464-4a34-b82a-fdbdf7b21e1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Borderline Knit Wrap Midi Skirt",
    price: 78,
    color: "Marble Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/378aa9d8-9542-48f1-87a0-884b6ab6ffee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Borderline Knit Wrap Midi Skirt",
    price: 78,
    color: "Orchid Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5100a6d4-acfc-4bb5-b0b0-9a740dec4f69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Borderline Knit Wrap Midi Skirt",
    price: 78,
    color: "Marble Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/378aa9d8-9542-48f1-87a0-884b6ab6ffee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Button Down Miniskirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e619b8e8-e1de-4b88-885b-565b13941a89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Button Down Miniskirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e619b8e8-e1de-4b88-885b-565b13941a89.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Checkerboard Ditsy Mesh Midi Skirt",
    price: 43,
    color: "Mid Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c54fe42-9d51-49d6-9de3-37247478d28c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Checkerboard Ditsy Mesh Midi Skirt",
    price: 43,
    color: "Mid Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7c54fe42-9d51-49d6-9de3-37247478d28c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cherish Floral Patchwork Maxi Skirt",
    price: 148,
    color: "Savannah Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b40f585-c4d6-4185-8c16-e6ff61647f33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cherish Floral Patchwork Maxi Skirt",
    price: 148,
    color: "Savannah Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b40f585-c4d6-4185-8c16-e6ff61647f33.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Chloe Pull-On Denim Pencil Skirt",
    price: 68,
    color: "Sunset Hills",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/11c4020a-1eac-4c5e-8ba0-cd7d417ce78b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Chloe Pull-On Denim Pencil Skirt",
    price: 68,
    color: "Sunset Hills",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/11c4020a-1eac-4c5e-8ba0-cd7d417ce78b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Co-Ord Ruched Satin Maxi Skirt",
    price: 40.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/285a69b0-9b69-4b64-86dd-eb3a9b8084df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Co-Ord Ruched Satin Maxi Skirt",
    price: 40.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/285a69b0-9b69-4b64-86dd-eb3a9b8084df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Corinne Cotton Maxi Skirt",
    price: 88,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afb96362-c6b7-4736-99fd-9540db3fb633.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Corinne Cotton Maxi Skirt",
    price: 88,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/afb96362-c6b7-4736-99fd-9540db3fb633.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crinkle Midi Skirt",
    price: 52,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d568a85f-0f25-456f-919e-195998c9f1ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Crinkle Midi Skirt",
    price: 52,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d568a85f-0f25-456f-919e-195998c9f1ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cristina Martinez Print Skirt",
    price: 89,
    color: "Blue Floral Smudge",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4857b1fd-db64-4aa7-8adc-8ee47b12f783.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cristina Martinez Print Skirt",
    price: 89,
    color: "Pink Peach Doodle Line",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f37d0227-4240-4fc4-abe8-aa41df56159a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cristina Martinez Print Skirt",
    price: 89,
    color: "Blue Floral Smudge",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4857b1fd-db64-4aa7-8adc-8ee47b12f783.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Cable Skirt",
    price: 41.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2beefdb-f0eb-4a85-8d6a-39fd675922d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cross Front Cable Skirt",
    price: 41.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2beefdb-f0eb-4a85-8d6a-39fd675922d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Dita Zebra Print Midi Skirt",
    price: 68,
    color: "Orange Zebra",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f34910e7-c705-413f-8251-3ee5dcda9e64.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Dita Zebra Print Midi Skirt",
    price: 68,
    color: "Orange Zebra",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f34910e7-c705-413f-8251-3ee5dcda9e64.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Emilia Side Knot Midi Skirt",
    price: 46.8,
    color: "Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dedb1879-b9da-4bc2-9e84-e938d486736d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Emilia Side Knot Midi Skirt",
    price: 46.8,
    color: "Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dedb1879-b9da-4bc2-9e84-e938d486736d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Emmy Nonstretch Denim Skort",
    price: 88,
    color: "Light Blue Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c325a0bd-2644-46ef-8a79-3efcac785701.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Emmy Nonstretch Denim Skort",
    price: 88,
    color: "Light Blue Wash",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c325a0bd-2644-46ef-8a79-3efcac785701.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Cotton Cover-Up Wrap Skirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f61a6d8b-df4d-41d1-96ee-3fa4838bf5fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Cotton Cover-Up Wrap Skirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f61a6d8b-df4d-41d1-96ee-3fa4838bf5fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Cotton Cover-Up Wrap Skirt",
    price: 49,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e1a23a21-cc97-4148-bb51-3b5a04cd0c79.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Pull-On Midi Skirt",
    price: 95,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea5f820e-99c3-430d-a9f2-9f0ee114949c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eyelet Pull-On Midi Skirt",
    price: 95,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea5f820e-99c3-430d-a9f2-9f0ee114949c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Print Bias Cut Skirt",
    price: 56,
    color: "Mid Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2dc763b-5b20-4774-ae57-c6e1b6cf7638.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Print Bias Cut Skirt",
    price: 56,
    color: "Mid Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b2dc763b-5b20-4774-ae57-c6e1b6cf7638.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Wrap Cover-Up Skirt",
    price: 48.29,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6555c351-36ea-4277-a82e-bc1f67115b39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Floral Wrap Cover-Up Skirt",
    price: 48.29,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6555c351-36ea-4277-a82e-bc1f67115b39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Gingham Print Bias Cut Midi Skirt",
    price: 62,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95208269-4d02-4a5a-b078-f45c1b6d8edb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Gingham Print Bias Cut Midi Skirt",
    price: 62,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95208269-4d02-4a5a-b078-f45c1b6d8edb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Good Waist Denim Miniskirt",
    price: 99,
    color: "Indigo900",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9aeadee0-1862-47b7-8b12-954ca0187755.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Good Waist Denim Miniskirt",
    price: 99,
    color: "Indigo900",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9aeadee0-1862-47b7-8b12-954ca0187755.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hanalei Cover-Up Maxi Skirt",
    price: 45,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e525d96-de3a-4319-b350-94964b22ad44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hanalei Cover-Up Maxi Skirt",
    price: 45,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e525d96-de3a-4319-b350-94964b22ad44.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Raw Hem Denim Miniskirt",
    price: 47,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e757e4c7-162f-4035-8df3-cb92ac050ed4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Raw Hem Denim Miniskirt",
    price: 47,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e757e4c7-162f-4035-8df3-cb92ac050ed4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "High Waist Raw Hem Denim Miniskirt",
    price: 47,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c461e0a5-1ea1-40cc-8b2d-cc0e9a9e5886.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hourglass Midi Skirt",
    price: 54,
    color: "Coco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6af3952d-94ba-40e1-9c69-c2b914f6df13.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hourglass Midi Skirt",
    price: 54,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b5b2fc2c-c4cd-41ce-be88-ac85f5556feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hourglass Midi Skirt",
    price: 54,
    color: "Charcoal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8957550-c989-4653-b074-ed4459077343.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hourglass Midi Skirt",
    price: 54,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b5b2fc2c-c4cd-41ce-be88-ac85f5556feb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hourglass Midi Skirt",
    price: 54,
    color: "Chocolate",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a7b9171c-fa3f-485f-8c22-2d54fadca828.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "in a Bliss Floral Satin Skirt",
    price: 44,
    color: "Pink Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c5a21a5-eb9d-4a12-b788-592ff4b5dc09.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "in a Bliss Floral Satin Skirt",
    price: 44,
    color: "Lime Green Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e196b40e-b78a-4592-aeca-41bdf81e304c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "in a Bliss Floral Satin Skirt",
    price: 44,
    color: "Lime Green Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e196b40e-b78a-4592-aeca-41bdf81e304c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "It's a Wrap Sarong Skirt",
    price: 58,
    color: "Banana",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb86c82c-3f02-467c-a929-4bfe9e5228e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "It's a Wrap Sarong Skirt",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c7b3adb5-8b97-4c08-b7ff-ed36a9dbd505.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "It's a Wrap Sarong Skirt",
    price: 58,
    color: "Mist",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5d87d3fb-2d6b-4527-afc2-7c536d9ae3d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "It's a Wrap Sarong Skirt",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c7b3adb5-8b97-4c08-b7ff-ed36a9dbd505.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "It's a Wrap Sarong Skirt",
    price: 58,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/878df7c7-a43c-47fd-85d4-481e0bca5640.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Linen Blend Midi Skirt",
    price: 165,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb298d72-539a-4e9e-8823-0b5c0182efc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Linen Blend Midi Skirt",
    price: 165,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb298d72-539a-4e9e-8823-0b5c0182efc7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Main Squeeze Ruched Midi Skirt",
    price: 59,
    color: "Kelly Daisy Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0681175a-742f-4f75-9ad7-9aaf745e7a0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Main Squeeze Ruched Midi Skirt",
    price: 59,
    color: "Kelly Daisy Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0681175a-742f-4f75-9ad7-9aaf745e7a0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Marlowe Mixed Media Skirt",
    price: 495,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5037e03d-9dc6-484e-848b-da4e47fd4d7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Marlowe Mixed Media Skirt",
    price: 495,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df4089b9-d24e-42da-bd19-73a50caa38c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Marlowe Mixed Media Skirt",
    price: 495,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5037e03d-9dc6-484e-848b-da4e47fd4d7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Marni Asymmetric Skirt",
    price: 55,
    color: "Peach",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a671c072-0e6c-4cd2-8383-47cab0c0db3a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Marni Asymmetric Skirt",
    price: 55,
    color: "Peach",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a671c072-0e6c-4cd2-8383-47cab0c0db3a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Matching Family Moments Jacquard Cotton Midi Skirt",
    price: 89,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/568b6d49-bc84-445b-a97e-8dd3ba4ac3b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Matching Family Moments Jacquard Cotton Midi Skirt",
    price: 89,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/568b6d49-bc84-445b-a97e-8dd3ba4ac3b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metallic Smock Waist Tiered Cotton Blend Skirt",
    price: 395,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4322012-5a60-4eb5-af4c-851646407117.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metallic Smock Waist Tiered Cotton Blend Skirt",
    price: 395,
    color: "Aqua Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45c59082-231c-491a-b222-d707ba4c8b13.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metallic Smock Waist Tiered Cotton Blend Skirt",
    price: 395,
    color: "Aqua Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45c59082-231c-491a-b222-d707ba4c8b13.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Midi Skirt",
    price: 59,
    color: "Navy/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2b8813a-35e0-4e5c-a492-6ca0cf30e6e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Midi Skirt",
    price: 59,
    color: "Navy/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2b8813a-35e0-4e5c-a492-6ca0cf30e6e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mixed Eyelet Miniskirt",
    price: 45,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56248627-080d-4618-b132-d6cb97dbb747.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mixed Eyelet Miniskirt",
    price: 45,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56248627-080d-4618-b132-d6cb97dbb747.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oakley Button-Through Skirt",
    price: 265,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8709c5c4-ba31-4d6e-91df-70f5b47a7d4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oakley Button-Through Skirt",
    price: 265,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8709c5c4-ba31-4d6e-91df-70f5b47a7d4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Once and Floral Miniskirt",
    price: 48.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7e4c6578-f74e-4152-bfad-555ac6f4f10c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Once and Floral Miniskirt",
    price: 48.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7e4c6578-f74e-4152-bfad-555ac6f4f10c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Stitch Cotton Blend Midi Skirt",
    price: 52,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/186079ce-8011-4320-9bae-fbcb17202ac3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Open Stitch Cotton Blend Midi Skirt",
    price: 52,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/186079ce-8011-4320-9bae-fbcb17202ac3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Printed Midi Skirt",
    price: 55,
    color: "Brown Bandana Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de37d4de-4d61-49b1-a689-891c8e164ae3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Printed Midi Skirt",
    price: 55,
    color: "Black Daisy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dceaa542-4253-4dfd-81a7-6f8db27bcba0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Printed Midi Skirt",
    price: 55,
    color: "Black Daisy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dceaa542-4253-4dfd-81a7-6f8db27bcba0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27ca3b58-b9cf-4db8-9617-dac7f716a25c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Navy/ Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/528bb5b4-f45e-493c-8084-5bcc7707229c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/86d515ac-9543-4f63-88d8-5ff063fe5677.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Navy/ Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/528bb5b4-f45e-493c-8084-5bcc7707229c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Dk Burgundy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bae7bac0-3ecf-41ca-8fa4-ef760a33e840.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Dk Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/058e18a5-51f5-4fa2-8185-12438ec35194.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Dk Burgundy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bae7bac0-3ecf-41ca-8fa4-ef760a33e840.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Roll Top Maxi Skirt",
    price: 49,
    color: "Coco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45d05502-f3ae-46dd-95d2-46dfd440cffa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Knit Midi Skirt",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c6902bf-5fd2-47e7-9bfc-d9cd273c9926.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Knit Midi Skirt",
    price: 59,
    color: "Black- White Paint Dooodle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a7b00f1-1320-4dfb-8682-6755b8d2d312.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ruched Knit Midi Skirt",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c6902bf-5fd2-47e7-9bfc-d9cd273c9926.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rylan Tank & Skirt",
    price: 168,
    color: "Cherry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/93860bf5-f4cd-4bb5-85b9-10721a3e529f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rylan Tank & Skirt",
    price: 168,
    color: "Cherry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/93860bf5-f4cd-4bb5-85b9-10721a3e529f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sadie High Waist Faux Leather Miniskirt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/336d655e-4409-4b63-9b60-dde05a57fb01.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sadie High Waist Faux Leather Miniskirt",
    price: 39,
    color: "Tigers Eye",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e68ba0a1-84ee-4723-85b7-8510a7fa78b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sadie High Waist Faux Leather Miniskirt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/336d655e-4409-4b63-9b60-dde05a57fb01.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Ball Skirt",
    price: 69.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/059ee092-2bfc-48cb-8f5b-b11204b5c2c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Ball Skirt",
    price: 69.3,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/059ee092-2bfc-48cb-8f5b-b11204b5c2c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Midi Skirt",
    price: 24.5,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2646eaf8-45ab-474e-a81a-b27ef46ee059.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Midi Skirt",
    price: 24.5,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2646eaf8-45ab-474e-a81a-b27ef46ee059.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Miniskirt",
    price: 49,
    color: "Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/487ce539-e8dc-41ee-a028-00f01ac5432a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Miniskirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/af9b6a8d-3788-40f0-a9cc-6ae62b5546be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Miniskirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/af9b6a8d-3788-40f0-a9cc-6ae62b5546be.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Wrap Midi Skirt",
    price: 56,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a0adbbb-6150-46dc-86db-7631e63c0088.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Wrap Midi Skirt",
    price: 56,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1415a5c7-cbbe-414d-b89d-514553123efa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Wrap Midi Skirt",
    price: 56,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1415a5c7-cbbe-414d-b89d-514553123efa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Satin Wrap Midi Skirt",
    price: 56,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e733acfb-a64f-42ae-a2f0-0f9778d2c720.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Scuba Midi Skirt",
    price: 99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/402af253-21e9-459c-bebf-51e4419d77bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Scuba Midi Skirt",
    price: 99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/402af253-21e9-459c-bebf-51e4419d77bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Scuba Midi Skirt",
    price: 99,
    color: "Blue Falls",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/369ff358-c612-4e63-bfe5-e338df2b8940.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Skirt",
    price: 45,
    color: "Brown Chocolate",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/698108bd-0e53-45c8-9cff-d8d7e37e2079.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Skirt",
    price: 45,
    color: "Tan Mocha",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2da8d1a3-58b3-4551-8ffd-cad023b4c8eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Skirt",
    price: 45,
    color: "Green Vetiver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/38f2c134-3c2d-4252-bac6-0a1c8c302b59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Skirt",
    price: 45,
    color: "Pink Peony",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88413e67-6763-47ea-a951-61493c2c6d00.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Skirt",
    price: 45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/37455af3-3c87-4d1e-a434-1d4d33d767b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Side Ruched Skirt",
    price: 45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/37455af3-3c87-4d1e-a434-1d4d33d767b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Soft Drape Midi Skirt",
    price: 79,
    color: "Green Dune",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/633612fb-f46f-4ae8-b1b5-8f41973decf3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Soft Drape Midi Skirt",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a455a44-ee02-4d24-9b1f-82a50cbc53f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Soft Drape Midi Skirt",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a455a44-ee02-4d24-9b1f-82a50cbc53f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Summer Fling Linen Blend Skirt",
    price: 135,
    color: "Paper White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6dd1f16-3b07-449c-8c23-227f84ec05cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Summer Fling Linen Blend Skirt",
    price: 135,
    color: "Paper White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6dd1f16-3b07-449c-8c23-227f84ec05cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Textured Midi Skirt",
    price: 49,
    color: "Black- White Canby Check",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db08bf41-95c1-47d5-aeb9-35ef6cf671de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Textured Midi Skirt",
    price: 49,
    color: "Black- White Canby Check",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db08bf41-95c1-47d5-aeb9-35ef6cf671de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tiered Midi Skirt",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2af3a75-9741-4998-a0e6-448e77c0d895.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tiered Midi Skirt",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d2af3a75-9741-4998-a0e6-448e77c0d895.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Button Front Skirt",
    price: 69,
    color: "Navy Flox Geo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4a41da61-62f2-437b-83b2-644f8487e8c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Button Front Skirt",
    price: 69,
    color: "Black- Pink Future Toile",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a96a6a7-508c-4d7c-a176-da7bdeac91d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Button Front Skirt",
    price: 69,
    color: "Black- Pink Future Toile",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a96a6a7-508c-4d7c-a176-da7bdeac91d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Button Front Skirt",
    price: 69,
    color: "Pink Medallion",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0fabb432-6ac3-4957-99a2-5ea67cbe7538.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Linen Blend A-Line Skirt",
    price: 69,
    color: "Blue Kentucky Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fe843d3d-6fbc-489f-9f25-3880578eca42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Linen Blend A-Line Skirt",
    price: 69,
    color: "Blue Kentucky Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fe843d3d-6fbc-489f-9f25-3880578eca42.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Skirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a1a93f1-2b6b-4c2f-8cd9-3d01d4ac1441.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Treasure & Bond Side Ruched Skirt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a1a93f1-2b6b-4c2f-8cd9-3d01d4ac1441.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Utility Pocket Skirt",
    price: 35.4,
    color: "Brown Chino",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e05af4b3-f5ee-435c-9fef-8b9a7c856f58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Utility Pocket Skirt",
    price: 35.4,
    color: "Brown Chino",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e05af4b3-f5ee-435c-9fef-8b9a7c856f58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Varsity Tennis Skirt",
    price: 68,
    color: "Pink Sugar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/52f4978d-a4e5-4c36-b58c-10c67e756bc8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Varsity Tennis Skirt",
    price: 68,
    color: "California Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2903b41f-6dab-4d40-bf7f-f6484ccbe0a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Varsity Tennis Skirt",
    price: 68,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a303a06-3be6-482d-b1d0-74076895f181.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Varsity Tennis Skirt",
    price: 68,
    color: "California Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2903b41f-6dab-4d40-bf7f-f6484ccbe0a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Varsity Tennis Skirt",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76afa0a0-2441-4729-b579-b3a601c6a145.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Vent Midi Skirt",
    price: 59.99,
    color: "Dark Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/384b1c65-3923-4501-a987-aa1754ccdcd4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Vent Midi Skirt",
    price: 59.99,
    color: "Dark Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/384b1c65-3923-4501-a987-aa1754ccdcd4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "We the Free Modern Femme Denim Miniskirt",
    price: 50,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f1f0ba1-ce0b-4a12-afdf-6e84e559f996.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "We the Free Modern Femme Denim Miniskirt",
    price: 50,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f1f0ba1-ce0b-4a12-afdf-6e84e559f996.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wild Flower Aubrey Cover-Up Maxi Skirt",
    price: 119,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d754e833-b657-49c6-b60a-68bea524e640.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Wild Flower Aubrey Cover-Up Maxi Skirt",
    price: 119,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d754e833-b657-49c6-b60a-68bea524e640.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Geodot Floral Ruffle Tiered Pull-On Midi Skirt",
    price: 98,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edc4b8e6-ff86-4136-83eb-f74a6cb5549f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Geodot Floral Ruffle Tiered Pull-On Midi Skirt",
    price: 98,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/edc4b8e6-ff86-4136-83eb-f74a6cb5549f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Strapless Modal Blend Maxi Dress",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea107e9c-e7a0-457f-8e4d-2bfed7076a7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Strapless Modal Blend Maxi Dress",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ea107e9c-e7a0-457f-8e4d-2bfed7076a7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Striped Ruffle Tiered Pull-On Midi Skirt",
    price: 89.5,
    color: "Blue White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1de38038-227e-42b5-9ceb-b4bc7defa21a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Women's Striped Ruffle Tiered Pull-On Midi Skirt",
    price: 89.5,
    color: "Blue White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1de38038-227e-42b5-9ceb-b4bc7defa21a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Zoe Side Slit Midi Skirt",
    price: 148,
    color: "Autumnal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/94f9374a-4379-4987-8ee9-46b367c3d0b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Zoe Side Slit Midi Skirt",
    price: 148,
    color: "Sofie",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4578863a-dcea-4af9-be58-af5eb48869d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Zoe Side Slit Midi Skirt",
    price: 148,
    color: "Sofie",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4578863a-dcea-4af9-be58-af5eb48869d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Zoe Side Slit Midi Skirt",
    price: 148,
    color: "Splatter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7632bff0-531b-48c5-b5a4-5ab6a35c70bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const shoeProduct = [
  {
    name: "Air Force 1 Sneaker",
    brand: "NIKE",
    description:
      "Back-to-basics detailing keeps the look simple and timeless on an '80s-throwback sneaker reissued with solid colors and a cool, low-cut profile. The iconic Air Force 1 sole sports embedded Nike Air cushioning and crenellations along the tread that frame a star-studded bumper toe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b636eefc-f2f7-4505-8b9c-8431b6088a7f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Air Max 270 Sneaker",
    brand: "NIKE",
    description:
      "Nike's largest Air Max unit puts a distinctive footprint under the heel of a cloud-comfort sneaker sporting a knit sock upper branded with welded Swooshes. Asymmetric lacing follows the contours of your foot, while layers of texture and polish swoop up the back for a kicked-up finish.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ebbf379d-2a8a-4c0d-904c-56c7d026fd83.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Ariella Mule",
    brand: "SCHUTZ",
    description:
      "Translucent straps emulate Cinderella's glass slipper on a barely there shoe you'll wear past midnight. A slender heel adds extra elegance.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e379dc47-663b-4346-8049-7b61a5cab896.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Arizona Big Buckle Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "Oversized buckles freshen the look of a legendary sandal made with a contoured footbed that mimics the shape of your foot and provides excellent support.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49b638cf-6f30-4bc5-bf6c-29efc4afdb2e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Arizona Canvas Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "A duo of canvas straps secures the legendary fit of a slide sandal grounded by an iconic footbed engineered for total comfort. The cork and latex footbed absorbs shock and mimics the shape of a healthy foot, while pronounced medial and metatarsal arches support the instep and ball of your foot.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1a04e2eb-404a-47dd-9adc-a28efac3bda4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Arizona Soft Footbed Sandal",
    brand: "BIRKENSTOCK",
    description:
      "An iconic sandal is set on a softer-than-ever, shock-absorbing footbed with an extra layer of plush foam cushioning that mimics the shape of the foot.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/692fa161-38a1-4198-89e2-fdd2edb3c278.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Arizona Soft Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "A sandal pairs a duo of buckled straps with a legendary footbed that mimics the shape of the foot with excellent support. The cork and latex footbed absorbs shock and mimics the shape of a healthy foot, while pronounced medial and metatarsal arches support the instep and ball of your foot.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd1368a1-8ec5-4096-987b-194fd7a1b32a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Barbados Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "A contoured footbed means superior comfort in a lightweight slide sandal made from flexible and waterproof molded EVA.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c11261a-469d-4878-a3dc-e21902a19be7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Blazer Low '77 Jumbo Sneaker",
    brand: "NIKE",
    description:
      "More is always more in a '70s-throwback basketball sneaker reissued with jumbo Swooshes, mixed finishes and a riot of mismatched colors and proportions. The raw-edged tongue and sleek autoclaved sole keep the vintage vibes alive and scoring on and off the court.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8a528f4-04de-4160-8591-93c31957ecee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Bondi 7 Running Shoe",
    brand: "HOKA ONE ONE",
    description:
      "Game-changing comfort defines an ultralightweight running shoe grounded on the most cushioning of any road shoe in the HOKA ONE ONE lineup. It sports a plush memory foam collar that cradles your Achilles tendon, with Meta-Rocker technology keeping consistent performance underfoot at any distance.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1eab68da-831e-4dd0-a4a4-388b6e09197c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Brelanie Braided Strap Sandal",
    brand: "VINCE CAMUTO",
    description:
      "A woven, braided leather strap brings rich texture to a chic, square toe slide sandal lofted by a tapered heel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8117e7e-88c8-4e19-b5a1-d3b4cdf65e5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Bubblegum Platform Sandal",
    brand: "JEFFREY CAMPBELL",
    description:
      "A lofty block heel and platform bring '90s-inspired vibes to a chic slide sandal finished with a square toe box.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2064c27b-765b-41ee-bfea-d56188d1cba5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Chuck Taylor® All Star® Lift High Top Platform Sneaker",
    brand: "CONVERSE",
    description:
      "A bright platform cupsole kicks up the height and the attitude of an iconic high-top sneaker cut from soft, durable canvas.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f380a44-e4b0-47a3-861f-68a338a5511e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Chuck Taylor® All Star® Lugged Boot",
    brand: "CONVERSE",
    description:
      "A super-chunky lugged sole brings bold grounding and platform lift to an iconic boot cut from sturdy, durable canvas.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56f843d9-8314-46d9-b805-764621b53f5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Chuck Taylor® All Star® Platform Sneaker",
    brand: "CONVERSE",
    description:
      "A super-chunky stacked platform bumper sole refreshes the iconic silhouette of classic Chucks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6a2cca5-f180-484b-9308-7f9e0156395d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Chuck Taylor® All Star® Run Star Hike High Top Platform Sneaker",
    brand: "CONVERSE",
    description:
      "A sculpted platform and toothy, serrated sole jack up the stature of a high-top sporting an iconic Converse profile and a debossed star framed on the heel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b727900-e880-4cca-9f43-dc92a1ff5671.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Chuck Taylor® High Top Sneaker",
    brand: "CONVERSE",
    description:
      "The classic lace-up—with contrast stitching and a rubber cap toe—never goes out of style. The first basketball-specific shoe was the Converse All-Star, released in 1917, and Converse has been producing sporty, iconic sneakers ever since. Wear them with just about anything.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2132b780-305c-4a85-857d-46a9dcde73dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Clifton 8 Running Shoe",
    brand: "HOKA ONE ONE",
    description:
      "Lighter and springier than ever, this all-distance running shoe sheds pounds with an open-weave mesh upper and gravity-defying foam sole. It sports a plush collar and gusseted tongue that keep it comfortably in place, with a stable base set on targeted rubber plugs for traction only where you need it.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2b5fc1d8-26cd-4d32-95ea-a18bab1e678b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Cloud 5 Running Shoe",
    brand: "ON",
    description:
      "Runner-tech performance meets all-day comfort in a hybrid running/lifestyle shoe that goes the distance on the road, in the game or around town. A speed-lacing system provides a locked-in fit with a flexible lugged outsole for reliable traction.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0eee7b4-f35a-4ad3-8276-6ab92d7d9b21.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Cloud X Training Shoe",
    brand: "ON",
    description:
      "Agile, stable and explosive, this versatile training shoe takes you from sprints to circuits to all-sport workouts without holding you back or weighing you down. It sits on a fusion of cushioning technologies that ground you in responsive comfort whether you're moving from side to side or striding from heel to toe, with a no-sew upper keeping the fit distraction-free in the gym or on the road.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8154434e-f533-4992-afd8-8b6385747ef3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Cloudswift Running Shoe",
    brand: "ON",
    description:
      "Engineered to outpace the demands of urban running, this sock-fit shoe sports a ribbed lacing cage that locks your foot comfortably to the springy foam sole. Responsive Speedboard construction moves naturally with your stride to transform every heel strike into an explosive toe-off, with durable, high-abrasion rubber in the tread providing superior grip on urban streets, sidewalks and steps—even when they're wet.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7136f33e-2552-4c2a-9dfe-5cb17c2a3ba2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Daybreak Sneaker",
    brand: "NIKE",
    description:
      "Nike's 1979 Tailwind marathon shoe gets a much-hyped update in this throwback sneaker that still sports its blend of sleek nylon and high-pile suede. The square-nubbed tread stays faithful to the sneakerhead-favorite original, with iconic Swooshes dropping down the sides for a look that'll give it heavy play in your sneaker rotation.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9df8493a-0fb4-4ae4-9703-57493746b2b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Double T Sport Slide Sandal",
    brand: "TORY BURCH",
    description:
      "A sleek leather slide accented by Tory's signature double-T logo is ready to upgrade your warm-weather style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae359aff-ca70-4a2e-b584-7a57180d53f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Enella Ankle Strap Sandal",
    brand: "VINCE CAMUTO",
    description:
      "Simple and chic, this ankle-strap sandal with a square toe and a flared heel adds minimalist '90s vibes to any ensemble.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df1403c9-fa6b-4e70-b3ab-30fd987a7a1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Esplar Sneaker",
    brand: "VEJA",
    description:
      "Named for the Brazilian NGO that brings technical support to organic cotton farming families, these court-inspired shoes are made to make a difference. Crafted from leather sourced from Rio Grande do Sul farms and tanned according to REACH norms, the lining is made from organic cotton and the soles are wild Amazonian rubber.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d94796d-9e4b-4d81-bc2b-1c6ddadc9c61.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Essentials Arizona Waterproof Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "An iconic cushioned sandal is revised in a rubber-like texture with sleek adjustable straps designed to exercise foot and leg muscles while providing comfort. The contoured footbed absorbs shock and mimics the shape of a healthy foot, while pronounced medial and metatarsal arches support the instep and ball of your foot.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7283451b-5154-42d0-b058-5d0025b491bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Fluxx Sandal",
    brand: "JEFFREY CAMPBELL",
    description:
      "This strappy sandal grounded by a flared heel is a suave and modern addition to any look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9641bca-5de0-412c-9fe5-eea1ff6a43a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Gizeh Big Buckle Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "This sandal pairs a buckled strap with a legendary footbed that mimics the shape of the foot with excellent support. The cork and latex footbed absorbs shock and mimics the shape of a healthy foot, while pronounced medial and metatarsal arches support the instep and ball of your foot.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa6a7db1-97f1-45e7-b846-bb8292541e1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Gizeh Braided Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "Kick off your summer in style with this iconic thong-post slide sandal updated with boho braids for an effortless, breezy stride. The cork and latex footbed absorbs shock and mimics the shape of a healthy foot, while pronounced medial and metatarsal arches support the instep and ball of your foot.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a92197cf-eb10-42fa-9d50-dae808dc806a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Glam Espadrille Wedge Sandal",
    brand: "LISA VICKY",
    description:
      "A jute-wrapped platform and wedge heel bring striking height to an espadrille sandal styled with a woven vamp strap and adjustable ankle buckle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ca97805-a8fc-425b-b322-cee3492e0bcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Griffin Slide Sandal",
    brand: "SAM EDELMAN",
    description:
      "A cushioned footbed gives sweet underfoot comfort when you wear this chic slide sandal topped with woven leather straps.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2fac0284-cf3e-4db0-a59e-3ae9ebe15386.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Hazel Pointed Toe Pump",
    brand: "SAM EDELMAN",
    description:
      "A classic stiletto adds leg-lengthening lift and timeless appeal to an elegant pointy-toe pump.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88976cb4-c0c4-4b92-8b99-28548f13edf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Indy Sandal",
    brand: "DOLCE VITA",
    description:
      "Puffed-up braiding lends bold texture to this effortless sandal that makes perfect company for cocktail hour or lounging beside the pool.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/858f19ca-8f43-4774-aa5e-1e6f1f141514.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Irenee Ankle Strap Sandal",
    brand: "STEVE MADDEN",
    description:
      "A block-heel sandal featuring a slender ankle strap makes for a sleek, modern finish to your favorite looks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/093e15ac-67a0-4775-930a-d1f5bfa93649.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Jaklyn Espadrille Platform Sandal",
    brand: "STEVE MADDEN",
    description:
      "An espadrille-style platform brings earthy texture and summery style to a breezy sandal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4524fee3-e4b6-4b0b-9891-3094b111c80b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Jamm-3 Slide Sandal",
    brand: "JEFFREY CAMPBELL",
    description:
      "A blunt toe and a pair of slender straps bring an effortless finish to any warm-weather look in a sandal lifted on a modest architectural heel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c9eb9c2-c32b-4f0e-abb8-ca711b9b4f7e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Kinetic Sandal",
    brand: "SOREL",
    description:
      "Deep, ripple-cut treads punctuated by contrast edging add a fresh look to a comfortable sandal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bfc4ff61-68da-4e0d-a917-eb9ebef14b8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Lilah Sandal",
    brand: "STEVE MADDEN",
    description:
      "A nude block heel and transparent straps create a barely-there aesthetic in this square-toe sandal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4a9597b-a5da-4fa1-b85a-4a6aabab6878.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Lior Loafer",
    brand: "SAM EDELMAN",
    description:
      "Polished horsebit hardware styles a comfortable loafer in a classic silhouette upgraded in of-the-moment materials.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9cde1e11-43e3-4fef-8b1a-821c16111862.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Lucca Slide Sandal",
    brand: "OPEN EDIT",
    description:
      "A quilted woven strap textures a slide sandal finished with an angular square toe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87de2701-0712-4cf9-b662-45abf8af5719.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Madrid Big Buckle Slide Sandal",
    brand: "BIRKENSTOCK",
    description:
      "An oversized buckle cinches the angled bridge strap of a sandal built on the legendary Birkenstock footbed for time-tested comfort and on-trend style. The EVA-cushioned footbed absorbs shock and mimics the shape of a healthy foot, while pronounced medial and metatarsal arches support the instep and ball of your foot.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdc43450-0557-4349-8537-baa5b5483a6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Miller Cloud Sandal",
    brand: "TORY BURCH",
    description:
      "A contoured footbed adds everyday comfort to a breezy sandal topped with an iconic logo medallion.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c41c1fa8-be6f-4b01-b6bf-8eda3024c8f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Miller Leather Sandal",
    brand: "TORY BURCH",
    description:
      "Known for its supple leather, iconic branding and lightly cushioned footbed with topstitching, it's no wonder the original Miller sandal has a cult following.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c842f78e-00aa-4b6d-958d-f0567b79f62c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Miller Soft Sandal",
    brand: "TORY BURCH",
    description:
      "An iconic sandal with a cult following, the Miller is loved for its timeless style and exceptional comfort with a smooth leather toe post. The new design has a pared-down aesthetic, a seamless insole with extra padding and a supremely soft memory foam sole for long-lasting comfort and support.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71fbcc02-0850-4d27-8dc3-7a6c8144aaf1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Paily Slide Sandal",
    brand: "DOLCE VITA",
    description:
      "Chunky braided straps add an eye-catching touch to this slide sandal lifted by a block heel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/028510cd-5a6b-4a0c-9982-6abd2a91c2ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Primegreen Stan Smith Sneaker",
    brand: "ADIDAS",
    description:
      "An iconic sneaker gets a refresh while showcasing adidas's commitment to help end plastic waste with an upper made from 50% Primegreen recycled materials. The perforated 3-Stripes and a Stan Smith logo bring undeniable signature style to the classic kicks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ab272dbd-62b1-4469-9903-2a1f140a0b16.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Pruce Ankle Strap Sandal",
    brand: "NINE WEST",
    description:
      "A chunky heel heightens the on-trend style of a chic sandal finished with a slim, adjustable ankle strap.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2782b589-099c-4360-8c90-e67e082eb065.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Remmy Twist Sandal",
    brand: "OPEN EDIT",
    description:
      "Twisted straps lend visual texture to a chic sandal that's lifted with a slender heel for day-to-night appeal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b01f882a-b4cc-402c-901c-23f0dbbf0f0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Rincon 3 Running Shoe",
    brand: "HOKA ONE ONE",
    description:
      "Superlative cushioning meets weightless comfort in a running shoe that pares down the details to rev up your performance for training or racing. Engineered mesh eliminates layers for a fit that's secure in the midfoot and breathable in the forefoot, with incorporated Meta-Rocker technology putting a burst of acceleration under every toe-off.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd2f959d-278f-48cc-a53a-bc1cd8a8fddd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Roellan Ankle Strap Sandal",
    brand: "VINCE CAMUTO",
    description:
      "Framed by a squared toe and architectural block heel, this day-to-night sandal offers endless style and versatility.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87580741-30ee-4c7b-b04e-de992fcf509b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Ronin Slide Sandal",
    brand: "DOLCE VITA",
    description:
      "Braided straps bring an extra bit of texture to this outfit-making block-heel sandal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a038602f-7fce-4e7b-b012-ae644cb60324.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Semtera Block Heel Slide Sandal",
    brand: "VINCE CAMUTO",
    description:
      "A square-toe silhouette paired with a subtle block heel adds a flirty appeal to a braided leather slide sandal that's ready for all your warm-weather plans.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3bd665da-0c78-4cd3-8027-bd0b0a56d159.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Sheena Sandal",
    brand: "OPEN EDIT",
    description:
      "A puffy quilted vamp strap and dramatic flared heel bring modern appeal to a '90s-inspired square-toe sandal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a68481f5-eb0d-4f76-838f-39aa466f7d95.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Slim Flip Flop",
    brand: "HAVAIANAS",
    description:
      "A beach-ready flip-flop is updated with a slim strap and a cushy footbed for sweet, stylish comfort. The all-rubber design makes it a durable and flexible must-have.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78598b77-206a-469b-85ac-291b5f79f66d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Studded Jelly Flip Flop",
    brand: "TORY BURCH",
    description:
      "This jelly flip-flop with matte studs dotting the vamp offers flexibility and style that goes with countless looks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b803e650-ec6a-48e1-87a6-cc045c93fe0d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Sugary Flip Flop",
    brand: "JEFFREY CAMPBELL",
    description:
      "A structured bow tops this sweet flip-flop that brings soft color to your casual spring looks.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3991cd5a-e346-4b7b-a7b6-799dced85723.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Swift Run Sneaker",
    brand: "ADIDAS",
    description:
      "Lightweight EVA cushioning puts comfort under every step in an '80s-throwback running shoe reborn as a sporty, wear-everywhere sneaker. The knit sock upper sports embroidered stripes racing up the toe and around the heel to keep the look sleek and swift in any activity.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58468e36-0302-4e9d-9539-cb4e6edcf3dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "TechLoom Bliss Knit Running Shoe",
    brand: "APL",
    description:
      "High performance meets remarkable comfort in an ultra-light running shoe sporting a stretchy knit upper secured by a band of satiny elastic wrapping the arch. Springy Propelium foam and targeted rubber insets in the tread provide the neutral cushioning and traction you need to keep going, mile after mile.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e3c981b-d940-4258-a8ca-04fc96a902ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "URBAN SPORT Squeezy Slide Sandal",
    brand: "URBAN SPORT BY JSLIDES",
    description:
      "A superlightweight EVA footbed and sole add springy energy return and comfort to this platform slider that makes a sporty-chic statement.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/289739b0-a32a-46fc-9408-ef9c0b7bf72b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Yaro Ankle Strap Sandal",
    brand: "SAM EDELMAN",
    description:
      "Modern and minimalist, an essential ankle-strap sandal set on a chunky wrapped heel serves as a versatile go-to style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8fca8fd7-79df-442b-a3a5-ba385d74c5ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Yarrow Espadrille Wedge Sandal",
    brand: "UGG®",
    description:
      "Bow details add charm to this summery espadrille-inspired sandal set on a cushioned footbed and chrevron-striped wedge with a grippy sole.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa099799-1da2-4673-9de1-9243a7d7c816.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "You Trancoso Sandal",
    brand: "HAVAIANAS",
    description:
      "Sleek metallic bands beautifully combine with a woven strap on this flexible and sophisticated sandal that's ideal for seaside strolls.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b5689cc8-2dcc-47f3-b5e7-da15113e4244.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Zala Block Heel Pump",
    brand: "MARC FISHER LTD",
    description:
      "Clean lines highlight the timeless appeal of a classic pointy-toe pump lifted by an on-trend, structural block heel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20bc24f3-83c5-4ae1-8827-276d271d7d70.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
];

const shoeData = [
  {
    productName: "Air Force 1 Sneaker",
    price: 100,
    color: "White/ Washed Teal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b636eefc-f2f7-4505-8b9c-8431b6088a7f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Force 1 Sneaker",
    price: 100,
    color: "White/ Fossil Stone/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e9327ae-fb98-4992-a5db-4fbab2287523.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Force 1 Sneaker",
    price: 100,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e0f4136-9ce4-4a5d-a20c-8a6678c0687b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Force 1 Sneaker",
    price: 100,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e0f4136-9ce4-4a5d-a20c-8a6678c0687b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Force 1 Sneaker",
    price: 100,
    color: "White/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6766217f-3a04-4af3-8e89-82f05bc4d1f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Max 270 Sneaker",
    price: 170,
    color: "White/ Silver/ Mint Foam",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ebbf379d-2a8a-4c0d-904c-56c7d026fd83.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Max 270 Sneaker",
    price: 170,
    color: "White/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5a43a82-0252-4aa6-8ea4-bb77d955fc86.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Max 270 Sneaker",
    price: 170,
    color: "Black/ Black/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc77ce02-cc6f-4da5-bb09-e3efec4b2776.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Max 270 Sneaker",
    price: 170,
    color: "Black/ Anthracite/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ff6b4c10-4150-4466-bf40-74ba8e0da8cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Max 270 Sneaker",
    price: 170,
    color: "Pink Oxford/ Metallic Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b9e3224a-69cb-4616-ba15-3a00e8afa7f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Max 270 Sneaker",
    price: 170,
    color: "Barely Rose/ Vintage Wine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ccea982-ea46-4a0c-b137-5078dece2c54.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Air Max 270 Sneaker",
    price: 170,
    color: "Black/ Anthracite/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ff6b4c10-4150-4466-bf40-74ba8e0da8cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ariella Mule",
    price: 118,
    color: "Beige Transparent Vinyl Fabric",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e379dc47-663b-4346-8049-7b61a5cab896.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ariella Mule",
    price: 118,
    color: "Smoky Grape",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e8d8f26-f156-45ee-9bab-df27ff7cd268.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ariella Mule",
    price: 118,
    color: "Transparent Egg Shell Vinyl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45765461-8c4b-4958-b4e2-6d005b59fd2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ariella Mule",
    price: 118,
    color: "Black/Transparent Vinyl Fabric",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2c96367-fe98-4adc-bb81-d9201cc0e168.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ariella Mule",
    price: 118,
    color: "Transparent Wood Vinyl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/94bddd0d-e365-4f26-92ab-fd4c9cbd1e60.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ariella Mule",
    price: 118,
    color: "Beige Transparent Vinyl Fabric",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e379dc47-663b-4346-8049-7b61a5cab896.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Big Buckle Slide Sandal",
    price: 160,
    color: "Antique Cognac Oiled Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49b638cf-6f30-4bc5-bf6c-29efc4afdb2e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Big Buckle Slide Sandal",
    price: 160,
    color: "Black Oiled Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95ddfdf6-38bb-4724-8aa5-29709d5ff37a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Big Buckle Slide Sandal",
    price: 160,
    color: "Black Oiled Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95ddfdf6-38bb-4724-8aa5-29709d5ff37a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Big Buckle Slide Sandal",
    price: 160,
    color: "White Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/85a825d5-19a9-4d26-aeb7-9c5628a5f853.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Canvas Slide Sandal",
    price: 109.95,
    color: "Eggshell",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1a04e2eb-404a-47dd-9adc-a28efac3bda4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Canvas Slide Sandal",
    price: 109.95,
    color: "Soft Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f344c6b6-602c-474e-869e-410622247831.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Canvas Slide Sandal",
    price: 109.95,
    color: "Eggshell",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1a04e2eb-404a-47dd-9adc-a28efac3bda4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Footbed Sandal",
    price: 134.95,
    color: "Habana Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/692fa161-38a1-4198-89e2-fdd2edb3c278.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Footbed Sandal",
    price: 134.95,
    color: "Habana Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/692fa161-38a1-4198-89e2-fdd2edb3c278.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Footbed Sandal",
    price: 134.95,
    color: "Metallic Anthracite Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3adc98d0-f7ee-4cd4-95e3-3c2c5f500755.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Footbed Sandal",
    price: 134.95,
    color: "Copper Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5014bb70-c25f-4b13-b07d-073022acf299.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Russet Orange Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd1368a1-8ec5-4096-987b-194fd7a1b32a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Almond Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6daff130-ad45-4e4a-9b34-56a5215b72b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Taupe Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e693ede9-4162-4a12-9789-3d9dcd74f843.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Fuchsia Tulip Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65fa3242-1e59-47a1-9fe0-73d66d0b6a27.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Dove Gray",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b899351a-4ccd-4cad-a880-3c33a3649fed.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Velvet Grey Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13ced89e-6ae1-4718-884b-a3654644e06d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Taupe Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e693ede9-4162-4a12-9789-3d9dcd74f843.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Stone Coin",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/186ea868-cbd4-49aa-bf2e-39cbd9db74d6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Bold Green Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13d2d09d-c6f9-42cb-8976-eb91c104466c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Arizona Soft Slide Sandal",
    price: 135,
    color: "Mink Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5cf67001-1e9a-44c3-ab5a-e99574198d25.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Barbados Slide Sandal",
    price: 39.95,
    color: "Watermelon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c11261a-469d-4878-a3dc-e21902a19be7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Barbados Slide Sandal",
    price: 39.95,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6feff535-dfc9-433a-a1a5-59496a9d2fec.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Barbados Slide Sandal",
    price: 39.95,
    color: "Bold Jade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c499d49c-c5bb-483f-9558-b6a17c3abb30.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Barbados Slide Sandal",
    price: 39.95,
    color: "Bold Jade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c499d49c-c5bb-483f-9558-b6a17c3abb30.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Blazer Low '77 Jumbo Sneaker",
    price: 95,
    color: "White/ University Blue/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8a528f4-04de-4160-8591-93c31957ecee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Blazer Low '77 Jumbo Sneaker",
    price: 95,
    color: "White/ Pink Oxford/ Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8cdefd4-eeee-4fbf-b6ac-96249e31dc9d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Camellia / Coastal Shade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1eab68da-831e-4dd0-a4a4-388b6e09197c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Black Iris/ Ballard Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f0147dc-50da-4465-8afd-6d331f5d4620.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Lunar Rock / Black Iris",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8343c806-a734-4db5-aa51-9f8b992ff49f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Black/White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/50308e2c-f31d-4457-afce-86112ca38445.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Black/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92936379-bf39-4a39-b5cb-fd5d8d9c7f09.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Black/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92936379-bf39-4a39-b5cb-fd5d8d9c7f09.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Harbor Mist/ Sharkskin",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/675c15bc-25d4-4462-a224-6c26de085cb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Blue Fog / Blue Glass",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0fbb4f32-9855-4e9b-8c2c-bf490f167b64.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Harbor Mist / Shark",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/54fcb528-602b-4809-b433-1b79cf42d8c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bondi 7 Running Shoe",
    price: 160,
    color: "Aquarelle/ Eggshell Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d8835ea-6281-404b-b7c0-c6bf47baee90.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Lotus Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e8117e7e-88c8-4e19-b5a1-d3b4cdf65e5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Pickled Pepper",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/44e651fe-a6ca-4f7c-acde-faae0bee49c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Cherry Berry",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/705b5c31-bda9-4316-805c-31645fe076a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Water Lily",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4a0e8108-8e36-46ab-b346-3179b1d070aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Dulce De Leche Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ce57808-d62c-4a5d-be98-1028591961eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Bone Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ef3e7a8-cdbb-4b02-b29f-dfc51667f5af.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dcf428c6-f40e-4644-8b47-2a73b8da0f6b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Cool Mint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d509159-23fd-4b75-954d-067751273b7e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Ultra Coral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3cd91431-5fba-48ac-b831-76b109638192.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Barn Brown Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a3c10164-b4b2-4b10-b208-9fa928ecbc8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Cerulean Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/55e30a76-a1f2-48ec-b819-53171acfcec6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Cool Mint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d509159-23fd-4b75-954d-067751273b7e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87da34ff-c14e-4ac6-a938-db2f465ff1ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Brelanie Braided Strap Sandal",
    price: 99,
    color: "Golden Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/142bf2a5-c3b3-44e8-8b8b-ad3b0dc88e26.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Bright Pink Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2064c27b-765b-41ee-bfea-d56188d1cba5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ab1f45f-1f9f-4a73-99df-8df34896527c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Nude Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b725ceb-7d72-4500-a844-3b157a77ef30.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Cream Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/482bb973-d37c-4a5f-9dd6-2be8d90654a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Black Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6df250ea-d7ed-4e99-8dc2-d9b256f3ab99.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Silver Iridescent Glitter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/abb03bb7-caac-4968-ac5b-ea8b56340bf3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ab1f45f-1f9f-4a73-99df-8df34896527c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bubblegum Platform Sandal",
    price: 44.95,
    color: "Pink Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/767c0ee1-19ae-40c9-891e-413847fa844a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Lift High Top Platform Sneaker",
    price: 75,
    color: "White/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f380a44-e4b0-47a3-861f-68a338a5511e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Lift High Top Platform Sneaker",
    price: 75,
    color: "White/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f380a44-e4b0-47a3-861f-68a338a5511e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Lift High Top Platform Sneaker",
    price: 75,
    color: "Pink Clay/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/877b77f3-bcd6-439d-b83c-888e643f816a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Lift High Top Platform Sneaker",
    price: 75,
    color: "Pale Amethyst",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c6ca5b6-ce38-464f-a059-46a8ba2047fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Lugged Boot",
    price: 70,
    color: "White/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56f843d9-8314-46d9-b805-764621b53f5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Lugged Boot",
    price: 70,
    color: "Black/ White/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7be7dcf-6612-4bc3-aae2-768f5f497efc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Lugged Boot",
    price: 70,
    color: "White/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56f843d9-8314-46d9-b805-764621b53f5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Platform Sneaker",
    price: 70,
    color: "White/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6a2cca5-f180-484b-9308-7f9e0156395d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® All Star® Platform Sneaker",
    price: 70,
    color: "White/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a6a2cca5-f180-484b-9308-7f9e0156395d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName:
      "Chuck Taylor® All Star® Run Star Hike High Top Platform Sneaker",
    price: 115,
    color: "Hemp/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b727900-e880-4cca-9f43-dc92a1ff5671.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName:
      "Chuck Taylor® All Star® Run Star Hike High Top Platform Sneaker",
    price: 115,
    color: "Jade Unity/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63865bf5-8691-4c0d-88b1-6bde0c5c7f7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName:
      "Chuck Taylor® All Star® Run Star Hike High Top Platform Sneaker",
    price: 115,
    color: "Black/ White/ Gum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/137d4d38-ec2c-4083-a361-e5d4475b4d4d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName:
      "Chuck Taylor® All Star® Run Star Hike High Top Platform Sneaker",
    price: 115,
    color: "Jade Unity/ Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63865bf5-8691-4c0d-88b1-6bde0c5c7f7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName:
      "Chuck Taylor® All Star® Run Star Hike High Top Platform Sneaker",
    price: 115,
    color: "White/ Black/ Gum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ba4c18e-02bd-420e-a021-f23e68f09e5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® High Top Sneaker",
    price: 65,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2132b780-305c-4a85-857d-46a9dcde73dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Chuck Taylor® High Top Sneaker",
    price: 65,
    color: "Optic White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2132b780-305c-4a85-857d-46a9dcde73dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Blue Fog / Plein Air",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2b5fc1d8-26cd-4d32-95ea-a18bab1e678b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Outerspace/ Atlantis",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d8fd4ae9-c1c3-4197-b914-536eaedf24cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Blue Graphite / Ibis Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e4854fa-9fe6-4878-908e-5f32f81d7b05.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Cantaloupe/Silver Peony",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7cd4de73-cc0c-4141-b163-f787f1068e14.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13c5bb3c-7993-4a23-8fcc-6ee754a2e754.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32a89e61-3cce-47da-b578-4a65029c2056.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Blanc De Blanc/ Bright White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c6548ce-08c8-430f-9f19-517f0ae2f670.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Yellow Pear / Sweet Corn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58f6f93e-efd1-4530-8cb4-9ae21f39cb54.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Aquarelle/ Eggshell Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/05491205-1c31-452b-9cda-bef92f4bb934.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13c5bb3c-7993-4a23-8fcc-6ee754a2e754.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Clifton 8 Running Shoe",
    price: 140,
    color: "Blanc De Blanc / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b3826117-1b8b-40db-9e55-c4dfa5619c56.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud 5 Running Shoe",
    price: 139.99,
    color: "Pearl / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0eee7b4-f35a-4ad3-8276-6ab92d7d9b21.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud 5 Running Shoe",
    price: 139.99,
    color: "Surf / Cobble",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e97fc54f-34f9-4e89-9819-9f05013516b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud 5 Running Shoe",
    price: 139.99,
    color: "All Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f6e68ca-a4fb-47f1-a1f4-03a13a0ce238.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud 5 Running Shoe",
    price: 139.99,
    color: "Denim/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e67f948f-bc4f-4e3f-bf7f-829e2294ecb5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud 5 Running Shoe",
    price: 139.99,
    color: "Black / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c278c449-39db-4aec-8c96-317d9dddc049.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud 5 Running Shoe",
    price: 139.99,
    color: "Lily / Frost",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ec1bdf4b-9687-46ea-8ab3-7006ba97a1fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud 5 Running Shoe",
    price: 139.99,
    color: "Lily / Frost",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ec1bdf4b-9687-46ea-8ab3-7006ba97a1fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "Lavender/ Ice",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8154434e-f533-4992-afd8-8b6385747ef3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "Grey/ Atlantis",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41f9ebdb-229d-4f59-abbd-c6648170cfd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "Black/ Asphalt/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ddf0adbb-328d-4f25-a03c-97ddb35de1e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "White/ Black / Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb865007-aad0-4f08-bebf-03ca655e0cbe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "White/ Black / Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb865007-aad0-4f08-bebf-03ca655e0cbe.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "Niagara / Lime",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/098e35fd-a142-4da3-805b-e07442e901d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "Mocha/ Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5759ee66-a65f-4ec6-b1d0-2b9df8abce38.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "Black/ Pearl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/99b394b3-9480-49d2-8eef-656d5946ac32.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloud X Training Shoe",
    price: 139.99,
    color: "Silver/ Almond",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0682d5de-894a-4e29-9a36-4b696a65dda4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloudswift Running Shoe",
    price: 149.99,
    color: "Glacier/ White/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7136f33e-2552-4c2a-9dfe-5cb17c2a3ba2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloudswift Running Shoe",
    price: 149.99,
    color: "Black/ Rock/ Black Rock",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f3177516-f728-4286-9493-c9ac693227bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloudswift Running Shoe",
    price: 149.99,
    color: "Lake/ Sky/ Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/079c6831-88bf-4f66-8dd4-823e8ce9c558.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloudswift Running Shoe",
    price: 149.99,
    color: "Lake/ Sky/ Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/079c6831-88bf-4f66-8dd4-823e8ce9c558.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cloudswift Running Shoe",
    price: 149.99,
    color: "Magnet/ Lavender",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b1949ab0-c23f-4c46-897c-50db9bb8c569.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Amethyst Ash/ Mystic Hibiscus",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9df8493a-0fb4-4ae4-9703-57493746b2b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Sail/ Crimson Tint/ Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2108f736-784e-4eaa-b7b8-d547c3d5a8ff.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Black/ Summit White/ Off Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43b2d345-af0d-4f51-9b78-43df4de82e8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Football Grey/ White/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5943c370-19a0-4260-b19b-75c5d10b38b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Cashmere/ Pure Violet/ Summit",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6e249d88-6d32-4ed5-8d38-1800ca592ee8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "White/ Saturn Gold/ Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f9c9529a-160a-42cd-bb11-4268ccb344a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Black/ Summit White/ Off Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43b2d345-af0d-4f51-9b78-43df4de82e8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Dark Beetroot/ Fossil Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/963a0780-dee4-4d47-911a-7cb8e555873a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "White/ Black/ Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6aa136a-556e-4528-94fc-a3db9efd62bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Barely Rose/ White/ Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ec238147-13e1-42cb-9c79-0bd75322bf55.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Soft Pink/ Pink Glaze/ Venice",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77a1be45-2d73-457b-b224-d1e54de686cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Summit White/ Pale Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/decfbc2e-ca7c-47d8-adb8-1eff0222b321.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "White/ Magic Ember/ Lime Ice",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8f807b92-9960-4799-84c1-346d10465ab3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Summit White/ Metallic Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/34a6f55a-cf12-42b6-91e2-06c33f589cb3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Pale Ivory/ Bright Mango",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/03875b88-cd70-4237-a3c9-ab0ba543c6dc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Daybreak Sneaker",
    price: 90,
    color: "Rattan/ White/ Wheat/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9b3213b3-03b6-49d5-8012-489ba238430e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Golden Crest / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae359aff-ca70-4a2e-b584-7a57180d53f5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Red/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aa635aed-c03e-448b-87fb-37c350de6593.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Perfect Navy / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23d2a846-8500-49fd-8451-8762bb991745.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Orange Citrine/ John Coco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aa0c1f20-5b3a-4545-805b-fde5ddb0e10d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Dulce De Leche / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/916460e7-f5d5-47bc-8cf3-613ab99ffcde.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Miele/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cfab4ce5-82e2-4715-be7a-009e0eb0fb07.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Perfect Black / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c47c397e-c74f-4d04-94b5-7b0b3523ef46.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Dark Lotus/ Dark Lotus",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f149b01f-65ea-4286-8182-df5d659fbc00.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Lime/ Lime/ Lime/ John Coco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1dd29317-3d1d-487a-b631-f4ddc3c8a9d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Dark Lotus/ Dark Lotus",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f149b01f-65ea-4286-8182-df5d659fbc00.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Double T Sport Slide Sandal",
    price: 198,
    color: "Seaside Sand/ John Coco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f4c1ee09-027c-4e1f-8b8f-3ca818057ecc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Sachet Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df1403c9-fa6b-4e70-b3ab-30fd987a7a1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae44293d-e7ce-4a6c-b51e-f04cf30d3765.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Pewter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/52e75bfd-8f73-4d7f-b418-836fdfe0896c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Biscuit 02",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/962b8409-0b99-45c3-91ed-241da68d4338.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Ltblue 01",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4eae84e9-fddd-4643-8257-1c0f4fd1e998.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Sachet Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df1403c9-fa6b-4e70-b3ab-30fd987a7a1d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Black 02",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1045cf1e-7e56-4be8-b3ad-4ef4754fcd23.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Enella Ankle Strap Sandal",
    price: 99.95,
    color: "Gold 03",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dd92530a-32da-4978-bd38-ceb2f1fc6682.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Esplar Sneaker",
    price: 130,
    color: "Extra White/ Menthol",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d94796d-9e4b-4d81-bc2b-1c6ddadc9c61.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Esplar Sneaker",
    price: 130,
    color: "Extra White Mia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dfbb455a-fcb0-4296-ae3e-67af23a7e840.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Esplar Sneaker",
    price: 130,
    color: "Extra White Mia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dfbb455a-fcb0-4296-ae3e-67af23a7e840.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Esplar Sneaker",
    price: 130,
    color: "Extra White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06dc82b5-5f4d-4f43-96b3-03f3b906e714.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Esplar Sneaker",
    price: 130,
    color: "Extra White Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13db1745-76cb-45d8-8497-1cffa67543ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7283451b-5154-42d0-b058-5d0025b491bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "Metallic Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a6befb8-1ea5-4ff0-9733-05a2ee5394ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "Coral Peach",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a577635-0999-4d2d-8dfd-0fa2e106bd96.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "Purple Fog Rubber",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e151ceb-2af1-461d-b600-cd75eb641399.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "Dusty Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f05c34c1-bffa-4547-b75f-1f73c0dd0d17.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "Black Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28c6040f-2317-4c9e-80dc-cfa793dfaac1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "Metallic Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a6befb8-1ea5-4ff0-9733-05a2ee5394ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Essentials Arizona Waterproof Slide Sandal",
    price: 49.95,
    color: "White Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1bb3c9e-a687-4f4a-9a91-193c92d110bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Peach Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9641bca-5de0-412c-9fe5-eea1ff6a43a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "White Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ff89a5a-e084-426a-8190-28c187608144.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c7777cf-4720-45fc-8d73-139379b81150.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Dusty Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ffaa43fb-76f7-4856-8435-0b03d0a57f69.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Dark Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c26639e-5985-4e32-a1b0-2c39338ac1f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5f958b6-dc57-4f3b-8395-b305c6866a85.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Nude",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a210a03a-6d1b-4639-b983-d3cb3ea55b3e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5f958b6-dc57-4f3b-8395-b305c6866a85.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Fluxx Sandal",
    price: 129.95,
    color: "Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/af548e30-ca35-4d86-8858-b8a04dd1379f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Big Buckle Slide Sandal",
    price: 150,
    color: "White Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa6a7db1-97f1-45e7-b846-bb8292541e1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Big Buckle Slide Sandal",
    price: 150,
    color: "Cognac Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ea2bac6-fc3a-42fd-856b-dd633a462e1c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Big Buckle Slide Sandal",
    price: 150,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c25e8a78-dbdc-4816-a81f-32b5d7240054.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Big Buckle Slide Sandal",
    price: 150,
    color: "Cognac Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ea2bac6-fc3a-42fd-856b-dd633a462e1c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Braided Slide Sandal",
    price: 130,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a92197cf-eb10-42fa-9d50-dae808dc806a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Braided Slide Sandal",
    price: 130,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d77dff2-53ec-45e4-91d1-7ae83a3ff4ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Braided Slide Sandal",
    price: 130,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a92197cf-eb10-42fa-9d50-dae808dc806a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Gizeh Braided Slide Sandal",
    price: 130,
    color: "Dusty Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/344648d7-45c6-4be0-a187-d5364b654d56.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Glam Espadrille Wedge Sandal",
    price: 99.95,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ca97805-a8fc-425b-b322-cee3492e0bcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Glam Espadrille Wedge Sandal",
    price: 99.95,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7996be0-39ad-4d5a-874d-5c464ba6c1da.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Glam Espadrille Wedge Sandal",
    price: 99.95,
    color: "Dusty Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b4b6c773-b411-4966-a792-0daf9ad49f5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Glam Espadrille Wedge Sandal",
    price: 99.95,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7996be0-39ad-4d5a-874d-5c464ba6c1da.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2fac0284-cf3e-4db0-a59e-3ae9ebe15386.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Modern Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/beccb771-2b38-4bbc-827b-79caeadfce0b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Light Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e5d21eb7-4e64-4b37-938e-e96ef9d4de6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Riviera Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/67f7a711-a12c-42e4-aa8d-4b7e67e578ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Natural Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/04db39af-0bc0-4ce3-8e98-169e5af6d468.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Gold Leaf",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f92d74c4-37f9-49cc-b98c-598f379f297d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Carmine Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e2b1263d-29c6-4a83-9ad6-064a611d5d61.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Griffin Slide Sandal",
    price: 100,
    color: "Light Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e5d21eb7-4e64-4b37-938e-e96ef9d4de6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Baltic Navy Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88976cb4-c0c4-4b92-8b99-28548f13edf2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Cerulean Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aa6bb59e-7a3b-4fc9-8006-350bc2e3d401.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Jute Glam",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43ae0dde-3d76-4507-a08b-b2493c3efa29.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Jute/ Jute",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/74d60b5b-93a9-48d9-878e-a789d8f4fe61.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Pistachio",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2040788-f59d-42d9-856a-1000c1c12b81.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Sunset Orange Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/53ef88d9-e1f3-4971-b43e-ab36cbefac4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Riviera Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6376526-c1f3-4628-8f7c-200bf438f903.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Military Green Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c81d6169-7a7f-468b-b728-20cad31798c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Butter Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8af5cf9a-b5c7-474d-a2d3-805e1ebddc60.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Zebra Brahma Calf Hair",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4f85967-9ae8-48af-a924-dab64dfc4cec.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d416c902-b936-4359-a274-119cdff30b1e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e07daa3-8165-4aa9-b1c3-7cc6cd24d733.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Pewter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a790055d-f9f9-49c8-8989-4a77f3e143ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Black Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6c0817d1-e858-453e-88ce-479ef43b41eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Natural/Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13c9e326-c743-4cb7-90e0-09b2d89af11a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e07daa3-8165-4aa9-b1c3-7cc6cd24d733.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Dark Grapefruit",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/678b60aa-8d1a-496d-9bec-cedce814f40c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Bordeaux",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3495a7ba-dca5-4feb-9bb6-1c693f7598ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Ruby Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9360f9d-efcf-491f-b6e0-2c1e2369b6b3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Soft Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aa132881-ec09-48df-b810-c7a870a2a152.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Dm-Pebble Grey Se",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92256d6c-3436-47e5-812e-25a7faec2829.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Dm- Pink Confetti",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23b285c6-85cf-4916-9612-25a53da2b5fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Canyon Clay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/10e1459b-6c84-44de-bb8f-a90f0724686e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Toasted Walnut",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/46e31b2c-2928-46c1-aeda-7f58a4f456eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Gold Leaf",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dfd0c740-7a00-4037-958e-2b5c1d9ccab8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Hazel Pointed Toe Pump",
    price: 140,
    color: "Bright White Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/54ae11cf-2f50-4b3b-8a86-1f863cdddc0a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Black Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/858f19ca-8f43-4774-aa5e-1e6f1f141514.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Silver Metallic Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/96dbcd7b-bd05-46e6-b0ee-ef3c38710742.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Light Gold Metallic Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/feeb396f-c4de-44de-9f88-50b473213258.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Cafe Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0303969a-46e1-42c5-87b7-3a64edc29a27.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Natural Multi Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6637f9f7-8be4-4ae2-aebc-1b3ae8ca07ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Ivory Multi Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7f4a66c6-dc3e-4c00-b01e-f46c9314f82b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Light Natural Raffia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/00cde50b-cd5d-46f3-937c-d12c3e5bdbd9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Ivory Multi Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7f4a66c6-dc3e-4c00-b01e-f46c9314f82b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Ivory Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6b94eac7-336a-416a-b765-4b532d9728f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Indy Sandal",
    price: 75,
    color: "Rose Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf96cae4-c196-42b3-a2e1-316ca3140239.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Irenee Ankle Strap Sandal",
    price: 79.95,
    color: "Black Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/093e15ac-67a0-4775-930a-d1f5bfa93649.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Irenee Ankle Strap Sandal",
    price: 79.95,
    color: "Tan Nubuck",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e9cd0e8d-39bc-47d0-b760-5458881e0d7e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Irenee Ankle Strap Sandal",
    price: 79.95,
    color: "White Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78bd066c-aa8f-4806-b2a6-6c9be7c701e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Irenee Ankle Strap Sandal",
    price: 79.95,
    color: "Black Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/093e15ac-67a0-4775-930a-d1f5bfa93649.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jaklyn Espadrille Platform Sandal",
    price: 74.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4524fee3-e4b6-4b0b-9891-3094b111c80b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jaklyn Espadrille Platform Sandal",
    price: 74.95,
    color: "Natural Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d366add-a818-492e-97aa-a6157bd0acb0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jaklyn Espadrille Platform Sandal",
    price: 74.95,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/729adbb8-2430-4189-896b-e43293df9e6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jaklyn Espadrille Platform Sandal",
    price: 74.95,
    color: "Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9b9b1abc-ce2c-43a6-8998-7dbbc3160ba0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jaklyn Espadrille Platform Sandal",
    price: 74.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4524fee3-e4b6-4b0b-9891-3094b111c80b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jaklyn Espadrille Platform Sandal",
    price: 74.95,
    color: "Brn Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b13e3bf8-2b34-4d63-857d-1e1f9fcf36aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c9eb9c2-c32b-4f0e-abb8-ca711b9b4f7e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "Dusty Mint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d07f0dd8-d2a4-4006-8ea1-123bb1c6d48c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "Baby Blue Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd6a323e-53f8-4b23-8a10-bc7dd418fff3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "Nude",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/768d2042-641c-4c9b-a00d-88e1fd819fcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "White Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ebdf4513-0f57-4938-8b37-57ea593fe7ef.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "Dusty Tan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e1516c39-ba86-4c71-be92-bbb59d0b1fe4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "Dusty Mint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d07f0dd8-d2a4-4006-8ea1-123bb1c6d48c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Jamm-3 Slide Sandal",
    price: 49.95,
    color: "Black Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5199a021-74b4-4f7e-bdc3-6af39498938a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kinetic Sandal",
    price: 130,
    color: "Black Sea Salt",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bfc4ff61-68da-4e0d-a917-eb9ebef14b8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kinetic Sandal",
    price: 130,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/99d89b30-281a-4924-8b83-bec0dfe15df3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kinetic Sandal",
    price: 130,
    color: "Sea Salt Gum 16",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b0d922f9-fd71-4917-8e92-44e36012f482.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kinetic Sandal",
    price: 130,
    color: "Chalk Eraser Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65b78f85-e866-4fbe-a3ba-2a23885ee394.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kinetic Sandal",
    price: 130,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/99d89b30-281a-4924-8b83-bec0dfe15df3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4a9597b-a5da-4fa1-b85a-4a6aabab6878.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f2a00e0-cf15-459d-af19-0da326cdf293.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c67115f9-770c-43bd-99e9-8dbbe078a19d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Tan Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a4f22c8-8432-4db2-ab16-a51cf671046a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Light Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1746f54e-5e80-4c04-8870-d2498be9b245.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56605790-e20b-45d6-b996-5052c009f228.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Light Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e111af3-6283-40da-9cce-e784882d275f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Bone Croco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c4f5035c-c835-4171-bc3e-4914b0d413f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Clear",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b95b854d-8467-4eed-bccf-a60447f25137.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lilah Sandal",
    price: 89.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c67115f9-770c-43bd-99e9-8dbbe078a19d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Misty Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9cde1e11-43e3-4fef-8b1a-821c16111862.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Graphite Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bc0d1e63-fb07-4ca7-83bc-098eec0601cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Ivory/ Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/75a258e8-7602-4d6d-aa7b-f2bf1f3a75fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Sesame Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0b9c1f5-4ec3-4fac-8ff3-7a55a325b244.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/24f58378-00e6-4f8a-8d0e-5cbe194f0fdb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c277a9a8-f8b6-460a-8fe1-a61478b49bc6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/24f58378-00e6-4f8a-8d0e-5cbe194f0fdb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Soft Beige Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7297b0a2-a0cc-4231-a390-7ad7e4ffd9b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Butter Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/235a6824-1480-4c05-ab2e-b7205f498dec.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Orchid Flower",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28069e5e-14e9-466a-b930-0fbc4ce6bde9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Eggshell",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a5d7eb3-567f-4b66-85a9-3a5dc964aff6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Cedarwood",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c66d0605-e2ef-4a51-b2cd-32289649a0cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Bright White Calf Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1354f51a-9979-466d-9a2b-e14185de15c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lior Loafer",
    price: 170,
    color: "Cherry Blossom",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c6974816-ebe1-4f57-bd29-938da8c3b720.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lucca Slide Sandal",
    price: 39.95,
    color: "Yellow Daffodil",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87de2701-0712-4cf9-b662-45abf8af5719.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lucca Slide Sandal",
    price: 39.95,
    color: "Purple Spray",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b1fb1f4-010a-4a8e-b144-ac411fbfab5a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lucca Slide Sandal",
    price: 39.95,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95d57176-c30a-4abc-ba27-e484feaf0872.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lucca Slide Sandal",
    price: 39.95,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95d57176-c30a-4abc-ba27-e484feaf0872.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Lucca Slide Sandal",
    price: 39.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3368615d-faa5-4b8e-9929-7be45c7e1399.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Madrid Big Buckle Slide Sandal",
    price: 139.95,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdc43450-0557-4349-8537-baa5b5483a6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Madrid Big Buckle Slide Sandal",
    price: 139.95,
    color: "Popcorn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f050174e-bea9-4989-834c-995cc6f166fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Madrid Big Buckle Slide Sandal",
    price: 139.95,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdc43450-0557-4349-8537-baa5b5483a6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Madrid Big Buckle Slide Sandal",
    price: 139.95,
    color: "Cognac Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d98dc7b-6129-40b9-bbf4-e3226df4f3da.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Madrid Big Buckle Slide Sandal",
    price: 139.95,
    color: "White Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d601ff5-2342-4680-b609-b48239272df7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Spark Gold / Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c41c1fa8-be6f-4b01-b6bf-8eda3024c8f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Leccio",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5fb250eb-90c0-40b1-8445-19e57c671155.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fe04f76f-586d-48a3-a7a1-ff3901edc46b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Honey Yellow / Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4bde15f5-bb2a-4c73-85a7-e01230045b23.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Multi / Cork",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/454391d6-fef5-48e0-93c8-ead2dfee8b35.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "Aged Camello / Aged Camello",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1340a955-febe-42f2-9bb8-3aa7d1069609.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "Perfect Black / Perfect Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8531ae36-17d5-4b52-80a3-db09962b950c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "Perfect Black/ Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3c01b8d3-a138-4e2f-a64b-ef98596903ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "New Cream / Perfect Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cb5926d8-b156-416f-9a74-6c632decc509.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "Burnt Cuoio/ Reverie Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc23ca81-23b0-4c3f-9289-4f86b896f164.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "Classic Cuoio",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78226228-4c1c-4cc1-a114-39843aa01190.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "Perfect Black/ Almond/ Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f518181f-75fd-4596-a550-28c1172edd5e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 152.76,
    color: "Aged Camello / Aged Camello",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1340a955-febe-42f2-9bb8-3aa7d1069609.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/84df3cab-f1c5-4116-b517-1514946dbba0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Lilac / Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/581ad3b8-70e3-4d4f-a086-5c9eea8d2334.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/893bc7eb-19ec-4ebe-8ce7-bd539037c111.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Plum/ New Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/39e78bdc-aac8-414e-8aaf-e413b82afda5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Perfect Black/ Almond/ Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f518181f-75fd-4596-a550-28c1172edd5e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Cloud Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/15b1399f-0483-474f-821b-532b33889934.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "White Roccia / White Roccia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1dfcd5c9-26be-47e2-9e03-132b381c43a2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f20ac5f-c5e3-406a-bab4-c83be37d1c7f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ca1724e-74fe-4317-94c8-b648dee9b61d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Cloud Sandal",
    price: 248,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1373fb32-7b33-4fe3-99a6-1adaf396b966.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Leather Sandal",
    price: 228,
    color: "Makeup",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c842f78e-00aa-4b6d-958d-f0567b79f62c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Leather Sandal",
    price: 228,
    color: "Vintage Vachetta Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8cfb09e6-03fc-469c-a5be-c3c2e368b4ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Leather Sandal",
    price: 228,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e6944a53-91fa-41b3-8947-3ad37f657c2e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Leather Sandal",
    price: 228,
    color: "Black Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0b1f2c34-5bf3-46f4-8a11-716d4918be3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Leather Sandal",
    price: 228,
    color: "Black Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0b1f2c34-5bf3-46f4-8a11-716d4918be3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Leather Sandal",
    price: 228,
    color: "Tan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b11a1da1-3a35-4f8a-8d66-20fd130fd675.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Mustard Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71fbcc02-0850-4d27-8dc3-7a6c8144aaf1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Tory Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/798678c1-7ee0-4be8-aff1-7df8e47c0fda.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8edcaafd-5787-4a8e-99c0-50af0cefc79a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Light Makeup",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/503e52c8-fc44-4670-80fe-c0bdd39d63b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8edcaafd-5787-4a8e-99c0-50af0cefc79a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Perfect Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3cabf529-d936-4367-a6e9-21fc49d41d94.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Perfect Black Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/312ee2e3-2650-49be-a607-7a1b0fe41f5b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Spark Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f1a26b9-6986-4a01-accb-d56c9db54596.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/22f29b07-6479-4cc3-a3de-f6bcde494fa4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Miller Soft Sandal",
    price: 228,
    color: "Miele",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98506136-cbd0-47b3-85ac-7fdce791fce1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Cafe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/028510cd-5a6b-4a0c-9982-6abd2a91c2ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/17077f55-5637-4c18-a528-86455d1ec753.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Sky Blue Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/067bcd54-546c-4c47-b2e1-b96237599027.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Espresso Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/38c97c7f-ead2-453d-b23c-2e21d3476e34.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a48c1b8-29b2-4b7c-866b-aaf84bb175d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a7ffca0-3178-4fb3-b5f2-5dfd7d6e12bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Ivory Multi Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/724d8c29-1f18-4ed9-83d0-aa2a5a886a8c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8a48c1b8-29b2-4b7c-866b-aaf84bb175d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Rose Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ec56be8-faad-405e-83ce-3b2c58e35a69.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2ac78e4-1ec3-4095-b134-d19a4b7ab974.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Cork Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aabd3ff3-6c6c-4a2d-8f09-f1a9a421694c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/55765cdb-49b4-4ef4-8bc9-399c40dcf7b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Lilac Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8dcf687-9d1a-4560-9d8c-7d4d069bc9ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Black/ White Stripe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb3db1e0-8472-4024-a9cb-feaebf1fcb58.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Cream Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/69ef1a9e-f9db-4f61-8b25-87b0de800627.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Natural Multi Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80db1887-3f1e-482f-843d-a1bfff76fca2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Paily Slide Sandal",
    price: 125,
    color: "Caramel Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0fa51b34-c2f5-4bc7-a83e-3137e8a0551c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ Magic Mauve/ Gold Met.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ab272dbd-62b1-4469-9903-2a1f140a0b16.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ Green/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d8760b5-5489-4141-b1e9-2616250fd806.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "Wonder White/White/Crimson",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/29ed96a3-526d-4c63-8ba1-3488e1dacbdf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ Green/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d8760b5-5489-4141-b1e9-2616250fd806.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ White/ Ftwr White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/50f97b78-a570-48cd-b3a3-b28896eb4be5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ White/ Gold Met",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9fde625e-0ac0-4f17-ab46-763d54a773e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ Collegiate Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d59de64a-52ca-49ed-8c01-ea42e7dfc24e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ Core Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2e4606fb-bce1-4302-98a0-c889ac1e82a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ Halo Blush/ Acid Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fcb3bbd9-af6a-43c2-94a5-3355433ca661.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Primegreen Stan Smith Sneaker",
    price: 63,
    color: "White/ Dash Green/ Core Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a745c866-dd0f-4c50-8b42-1f6e62aeb717.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Orange Cream Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2782b589-099c-4360-8c90-e67e082eb065.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Black Tropical Floral Print",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aa8aa4ca-7346-4ed0-8ec9-dc9535aa37f8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Lilac Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8f5b5c5-caf7-460b-87e3-7194639d70cc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Black Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/44acd6ab-c5a6-420a-9a23-edd89f352016.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Natural Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a3bc88e7-24bf-40cc-a542-8bc38208be45.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/44acd6ab-c5a6-420a-9a23-edd89f352016.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Light Natural Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/60fbe7b3-09ce-471b-a897-fe08436d632a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Teal Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6c50c1ce-6528-4b40-a28c-5a64d5260a2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Mint Green Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e479af6-eae5-4088-9433-2f30ec1a13c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Lime Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71dcdbca-4605-4345-b6d4-4c4646ce2e66.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Light Pink Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2322bf2e-b32e-47d6-a5be-9575ba0694f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Pruce Ankle Strap Sandal",
    price: 84,
    color: "Natural Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a3bc88e7-24bf-40cc-a542-8bc38208be45.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Remmy Twist Sandal",
    price: 49.95,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b01f882a-b4cc-402c-901c-23f0dbbf0f0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Remmy Twist Sandal",
    price: 49.95,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b01f882a-b4cc-402c-901c-23f0dbbf0f0c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Remmy Twist Sandal",
    price: 49.95,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de00203f-935b-4c43-8e0b-8a378c3581d4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Remmy Twist Sandal",
    price: 49.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/53d424a2-7ef4-4f5d-9eac-1d70b684897f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Remmy Twist Sandal",
    price: 49.95,
    color: "Blue Button",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ab9c252-e5b8-4fac-bbb9-019af52f6ac2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "Phlox Pink / Atlantis",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd2f959d-278f-48cc-a53a-bc1cd8a8fddd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "Blue Glass / Chalk Violet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df49498f-6d5e-4142-af38-1e3756d5e4fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "Black / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76d6ee7e-5e6f-4104-a727-f322d153a368.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "Blue Glass / Chalk Violet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df49498f-6d5e-4142-af38-1e3756d5e4fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "Silver Peony / Cantaloupe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cd4104f6-8935-4646-8a25-51c84bda33be.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "Camellia / Radiant Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e3152b4-b4a3-4252-aff3-00ba8f6a7577.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "Plein Air / Orchid Hush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf749d69-5052-42d1-97b2-dcc7830e9cc6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rincon 3 Running Shoe",
    price: 125,
    color: "White / Blue Glass",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ad95862-10f1-4287-b78f-8e014c73b6dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Pewter Snake",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87580741-30ee-4c7b-b04e-de992fcf509b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Ivory Summer Croco",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49a1aac0-86e7-42b7-b5f5-a5cfbb688842.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Truffle Taupe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b293812c-2316-4603-a4ce-9fb2068ebbb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Pewter Snake",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87580741-30ee-4c7b-b04e-de992fcf509b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Evening Jade Flash Snake",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f9066d62-4ea0-4611-8726-137acd497b31.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Inkwell",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9dae7dab-b97f-41b0-bbb8-620355e26dd9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Black Soft Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f3ba3b22-4941-41b4-ba58-003bd823d8c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Golden Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3937b234-fa58-4569-80b7-2c459f0f30e6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Roellan Ankle Strap Sandal",
    price: 98.95,
    color: "Nude Patent",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1cb3eae8-623b-4049-8d79-f40f4961d0ab.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ronin Slide Sandal",
    price: 100,
    color: "Sky Blue Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a038602f-7fce-4e7b-b012-ae644cb60324.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ronin Slide Sandal",
    price: 100,
    color: "Ivory Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cbe7c87c-c7a9-42c5-8b49-02b07663bea6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ronin Slide Sandal",
    price: 100,
    color: "Cream Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/be5bb733-f8b2-41c5-9eae-df7c4e9e1e31.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ronin Slide Sandal",
    price: 100,
    color: "Black Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63d9607e-3510-4d24-93dc-234b301cf6a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ronin Slide Sandal",
    price: 100,
    color: "Black Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63d9607e-3510-4d24-93dc-234b301cf6a6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Ronin Slide Sandal",
    price: 100,
    color: "Caramel Stella",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5e790751-3e82-43e2-b07f-33f4b601b7e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Bone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3bd665da-0c78-4cd3-8027-bd0b0a56d159.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Golden Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c760da4-ae5e-4d3c-ab25-b956452bd4dc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Cerulean Eco Sheep",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b3045d7-5012-4dc7-bf6f-9a5f4b39e92a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "New Cream",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3e55a1ca-7c38-4da5-91f3-4e596c6c4f6b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Sachet Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/01c66929-d812-49d5-8aee-cfe480d4f96b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Pewter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f94bd1a6-7e4d-4a26-9778-09127af3ea60.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Barn Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4925660f-b20e-4bba-910e-781349ef3289.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4a180e1a-35f8-4067-ad92-0c5ba20e147b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Egyptian Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c29d551-5d1b-4ce3-a03f-32dcde562f47.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Dulce De Leche",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5402afbb-0c92-4c6f-9474-0871799a4aea.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Semtera Block Heel Slide Sandal",
    price: 99.95,
    color: "Golden Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c760da4-ae5e-4d3c-ab25-b956452bd4dc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sheena Sandal",
    price: 59.95,
    color: "Purple Spray",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a68481f5-eb0d-4f76-838f-39aa466f7d95.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sheena Sandal",
    price: 59.95,
    color: "Blue Button",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3a89f5d3-f27e-4b92-a135-8a2a3af0ea33.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sheena Sandal",
    price: 59.95,
    color: "Pink Punch",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5f247b38-6d74-4b30-abe3-fca0391aadcb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sheena Sandal",
    price: 59.95,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ced9bea-7aa1-43b7-b251-d2c3f4e7af9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sheena Sandal",
    price: 59.95,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ec952da-7148-4603-b09a-64a3c34679f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sheena Sandal",
    price: 59.95,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ec952da-7148-4603-b09a-64a3c34679f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78598b77-206a-469b-85ac-291b5f79f66d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Rose Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b5621147-99ac-4041-914a-18445216682f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Golden",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d257d71e-0d9e-4e8f-8e12-a3d1e0912994.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Golden",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d257d71e-0d9e-4e8f-8e12-a3d1e0912994.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Crystal Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9b2b73db-3857-4079-9dd8-5d7e4c508bae.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c7f6b7fe-5ba5-49df-be6c-665254417176.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Golden",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5be2bc5a-e458-4bfb-9673-2925fc229503.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Steel Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7940754-fa67-4f6e-a6ed-232f5cdcbaba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Light Golden",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6c83e08-01de-4600-8365-0b65d2eb0de8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Navy Blue/ Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d9a8ee30-d679-4c69-a038-a92c1f3bd656.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Slim Flip Flop",
    price: 26,
    color: "Purple Paisley",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fff009d-d9e3-4f2a-8097-a72e1e6f14cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Sedona Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b803e650-ec6a-48e1-87a6-cc045c93fe0d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "New Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/024d8289-5c02-46c9-992a-88a536880a8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Sunburst",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/38678862-6c0d-43bf-81c7-d31359750103.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Lime Sherbet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/01324fae-4703-4d16-bd56-a0146cad2d43.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Dromedary Sand",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3bc5bef3-39ec-455a-bf1d-1b9eb1cd4ea1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Perfect Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/89bc5081-0142-4029-a5b0-1fc01b62eb02.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Sunburst",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/38678862-6c0d-43bf-81c7-d31359750103.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5e8f03a-e4f6-4c4f-ae95-32c0b7dd8c30.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Studded Jelly Flip Flop",
    price: 89.59,
    color: "Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c44a508b-8529-4789-b7af-02ae8ea3a466.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sugary Flip Flop",
    price: 29.95,
    color: "Black Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3991cd5a-e346-4b7b-a7b6-799dced85723.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sugary Flip Flop",
    price: 29.95,
    color: "Cream Shiny Black Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62dec070-f5a2-4f7d-b2ab-06b334ff8f68.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sugary Flip Flop",
    price: 29.95,
    color: "Cream Shiny Black Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/62dec070-f5a2-4f7d-b2ab-06b334ff8f68.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sugary Flip Flop",
    price: 29.95,
    color: "Pink Matte",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/440ae0b5-2f4b-4da8-9046-b3192d1ececf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Sugary Flip Flop",
    price: 29.95,
    color: "Blush Shiny-Black Shiny",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ca20a933-c634-463b-8e00-bfceca5f1569.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Swift Run Sneaker",
    price: 63,
    color: "Raw White/ Core Black/ Carbon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58468e36-0302-4e9d-9539-cb4e6edcf3dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Swift Run Sneaker",
    price: 63,
    color: "White/ White/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/14cacd6a-967d-49ad-babb-00dc003895ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Swift Run Sneaker",
    price: 63,
    color: "Ash Pearl/ Off White/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c293b21c-4e5e-49b2-ba4c-7a8c71d693b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Swift Run Sneaker",
    price: 63,
    color: "White/ White/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/14cacd6a-967d-49ad-babb-00dc003895ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Swift Run Sneaker",
    price: 63,
    color: "Raw White/ Core Black/ Carbon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58468e36-0302-4e9d-9539-cb4e6edcf3dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Chocolate / Cedar / Bellflower",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e3c981b-d940-4258-a8ca-04fc96a902ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Caramel / Almond / Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63f08e23-5ac6-4c87-b3d8-f26c0a5b158c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Black / Gold / Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/818c0fc2-b850-40dc-9c9d-9c14e10201c9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Black / Champagne / Pearl",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5363e505-bf8d-4382-a835-f24f22731d29.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "White / Chrome",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cbb544e6-e010-4a99-b02c-8144b82b60c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "White / Black / Gum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/96014c57-6fce-440d-9915-5a0d83d9e3a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Pristine / Almond / Racer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8ca626f6-bf49-45f9-a934-66615fc58851.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Cement / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de7ffd58-ee6d-44a4-bc0a-0f5883da1d0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Red / Bellflower / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98b58d9d-4924-42fb-9906-d5b57b031bd3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Heather Grey / White / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b00fe6f2-0d30-406d-890e-44ab4011d1ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Beachwood / Rose Dust / Creme",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f2be876-cfcd-465c-a9e2-8a9f0f1fe52b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Cedar / Pristine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/177e8fd9-2a58-42a7-b1fa-960a548ece51.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Pristine / Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/512916c2-dcc0-4b6d-8d12-50d0de3d081c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Bleached Pink / Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c3dfa49-31aa-4783-9854-29f7a46575d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Impulse Red / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19b95d2b-02b0-4af1-9530-3908fb1946f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Rose Dust/ Nude",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b418b4b-e5af-43ac-8c00-43746a3164a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "White / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2bb0cfb5-f22a-4542-927a-6acef23bd344.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Rose Gold / Champagne / Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a149a488-ecfe-4245-b3e3-84f1d35b3643.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Chocolate / Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/387105e8-a302-4006-a1bc-11e8506fd83b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Beachwood / Creme / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0158919c-a441-4d0f-b2c0-071e3b98fcd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Black / White / Reverse",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a380f35f-f83a-4bd2-9ff5-3eca24e5b3db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Navy / Pristine / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/04c7bd87-058a-4bb6-9169-5f92b536c1d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "White / Caramel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/387d8fb4-d9d5-4349-b242-5b8ef6d543da.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Pristine / Almond",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/96eb1aaa-f64d-4e2d-886f-290db5aad0e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Choc/Caramel/ Warm Silk",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c6d83dcb-f6c5-4c4a-b1bb-6ce19eef2860.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Rose Dust / Nude / Melange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/714ca0ea-c375-47da-ad87-1c2dde8e6b1a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "White / Black / Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/63cb0156-cb36-47c3-af37-e5005f328794.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Clay / Black / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f39e790f-d74f-4967-8695-2c1d5c67a50f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Fatigue / Rose Dust / Creme",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f0a42f8d-4b9c-4d9c-983f-ca1ed40387bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Mango / Pristine / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf3176ec-1161-4e2a-9a0a-510069479587.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Almond / Champagne / Pristine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8fbefffa-218f-4d34-b582-49ebb160fcb8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Black/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/273cfed7-637d-4996-9dc5-5ea28e0d2191.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Rose Dust/ Nude",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b418b4b-e5af-43ac-8c00-43746a3164a1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Creme / Parchment / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13ad53f9-a4d7-4775-b9b9-a1576aa357e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Burgundy/ Blue/ Pristine",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b12c741-144d-4757-97bc-410976f22c0b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "White / Champagne",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bfe6ace2-9fe7-4b3e-8100-96f0da14a1f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Fatigue / Parchment / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/900cf00f-d7d9-46cf-82fd-f409ade7940b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Black / White / Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56e3760a-ad86-44f0-8811-79ac9be65bbb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Black/ Champagne/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6fac3b61-5206-4728-a62a-451d4e9a8dc4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "Navy / White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ba3e73c-4346-4bf4-8d87-e634dac78f40.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "TechLoom Bliss Knit Running Shoe",
    price: 240,
    color: "White / Rose Dust",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a37f6999-03a2-4e2e-8b01-6b4f39143098.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Orange Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/289739b0-a32a-46fc-9408-ef9c0b7bf72b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Yellow Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80e16bdf-b01b-41c8-844f-82ede9b3e858.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Green Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e732af69-c08d-4a22-94a7-9a124f3d1d30.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "White Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b8a65ce4-02a7-4f53-8bc0-7f0992a2cb21.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Black Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5519437e-b394-49a8-9651-f69f95779e7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Sand Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f666bd16-c0d2-4d02-b1a7-281bda78f2e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Light Pink Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdda6e03-579c-4a07-bb04-7da255fedba1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Black Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5519437e-b394-49a8-9651-f69f95779e7b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "URBAN SPORT Squeezy Slide Sandal",
    price: 39.95,
    color: "Light Grey Eva",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5f1fb360-91c4-4eaa-bb26-4b5f2993c92a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Dm - Pewter",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8fca8fd7-79df-442b-a3a5-ba385d74c5ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Carmine Rose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5b10c7af-ab72-48ae-9e89-7d62c0d7b16e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Black/ Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/665b4e53-ed62-4ff6-acd3-a2c675af7a37.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Dm - Soft Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0db87f1a-580a-448a-aba2-4a4a3f241284.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Bright Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5af4501-8103-4c77-91af-bbb702317f30.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Black Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/97258cdf-7709-468b-b714-f4d0aa53a065.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Bright White Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e651b4f3-b155-430e-a40f-de9ea398738b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Black Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/97258cdf-7709-468b-b714-f4d0aa53a065.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Ultra Violet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4ac67b7a-6fd6-4114-9da8-90bf85139a05.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Misty Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/feb7bd2c-e6f0-477c-be00-5816505c5117.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Soft Grey Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c2541678-e400-4f9f-94d9-0a434022a5fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Jute Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/449de212-d435-445f-9daa-908b674dba51.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Soft Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9d2f3619-3d45-4500-b526-3e92662b1d6b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Modern Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4d47f07-ab23-45ad-aa9e-0941b12d6fcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Soft Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5dcc2810-aace-478f-ae5f-bca932c96d57.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Jute Fabric",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bf8c9bf5-e321-499e-ae81-2e1527952e5f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Dark Chocolate",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8e5e623-866f-435c-a2be-8a2bb41e8db7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Nude Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98b627d0-2609-4af1-ad1b-1cb1ab0541bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Dm - Jute",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a3c5e473-656f-401f-bdb9-a0eda039d96d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Black/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dd19870c-2e58-4125-8181-554f684b4c91.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Butter Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e73cb32-8a1b-444f-b02d-f3dfa91a2bac.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yaro Ankle Strap Sandal",
    price: 129.95,
    color: "Pale Pink Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/22b20a28-2590-4874-a28c-7931c5499ebf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yarrow Espadrille Wedge Sandal",
    price: 100,
    color: "Black Canvas",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa099799-1da2-4673-9de1-9243a7d7c816.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yarrow Espadrille Wedge Sandal",
    price: 100,
    color: "Black Canvas",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fa099799-1da2-4673-9de1-9243a7d7c816.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Yarrow Espadrille Wedge Sandal",
    price: 100,
    color: "Natural Canvas",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bed99e79-8f7e-4583-acbd-f90bcf4354fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "You Trancoso Sandal",
    price: 42,
    color: "Sand Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b5689cc8-2dcc-47f3-b5e7-da15113e4244.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "You Trancoso Sandal",
    price: 42,
    color: "Steel Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f02a4f60-9314-4bac-8498-202e343db95f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "You Trancoso Sandal",
    price: 42,
    color: "Sand Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b5689cc8-2dcc-47f3-b5e7-da15113e4244.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Lite Latte Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20bc24f3-83c5-4ae1-8827-276d271d7d70.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Medium Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/319708d1-71ed-49d6-80fa-db869d9458fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Black Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0cf3cf2e-6a9a-4f94-a907-99886e0f7ed5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/55d232d4-3f28-4c26-ad44-aae4f15d5b04.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Black Leather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/05b6cba1-871a-4002-a0e3-73b2c67d48b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Tan Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/04d50891-0bbb-4b40-b25b-6c5021e142bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Medium Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/319708d1-71ed-49d6-80fa-db869d9458fc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Navy Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ade8d522-6033-4417-9b0a-1ab672bb5355.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Zala Block Heel Pump",
    price: 159.95,
    color: "Medium Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/639d9dfd-0460-45f9-a5f3-53cb573dd3e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
];

const beltProduct = [
  {
    name: "'Boyfriend' Leather Belt",
    brand: "RAG & BONE",
    description:
      "A logo-etched, brass-hued buckle fronts a stylish belt made from soft leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a492e1f1-5da4-403b-9cbe-193a8543601c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "'Lillian' Belt",
    brand: "RAINA",
    description:
      "A pair of gilded eternity knots centers a slim, sophisticated belt cut from supple calfskin leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/462d849e-83f2-4b99-86f9-7bb269cd59f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "'Penelope - Dragon' Stretch Belt",
    brand: "RAINA",
    description:
      "Golden interlocking dragons lend a regal effect to a handcrafted leather belt that's finished in the back with knotted metal mesh.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a2c0e78-93b3-4cfa-8b35-551550815560.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "4G Buckle Reversible Skinny Leather Belt",
    brand: "GIVENCHY",
    description:
      "A reversible design doubles the wearing options of a versatile calfskin belt cinched by a high-polish 4G logo buckle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/324f2b15-cd85-435f-9db9-c35792ce7470.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Baby Rebound Belt",
    brand: "RAG & BONE",
    description:
      "This narrow Italian-leather belt features nicely lacquered edges, a contemporary elongated buckle and a fun logo disc charm dangling from the keeper.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c4922546-0cd3-411b-b3f1-a5d3f2d326a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Backcountry Belt",
    brand: "MADEWELL",
    description:
      "A curvy horseshoe buckle secures a stylish belt crafted in rich, supple Italian leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a830592d-5dd8-46e2-a158-f8e128a3cc83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Bronco Leather Wrap Belt",
    brand: "RAINA",
    description:
      "A sleek leather wrap-style belt ensures a perfect fit every time, while ties tipped with tassels add trend-right appeal to the look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b987244d-c790-45bf-a4d0-f2299aea087a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Campus Leather Belt",
    brand: "FRYE",
    description:
      "Punctuate your look with the clean, classic style of this richly grained calfskin-leather belt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ee0b2f78-a038-41d2-8e67-6b48cd38885a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ceylon Reversible Leather Belt",
    brand: "SALVATORE FERRAGAMO",
    description:
      "Signature double-Gancio hardware with a polished goldtone finish refines a supple Italian leather belt that reverses from classic black to a rich fawn hue.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77885832-e8cc-4d5b-8bf7-0c219059bddb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Chunky Buckle Leather Skinny Belt",
    brand: "MADEWELL",
    description:
      "We love the chunky buckle on this skinny leather belt—it has a low-key western vibe that’s not too yeehaw.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/440827bf-a2dc-4d57-93d3-fcef9343a2bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "CiCi Twist Clasp Leather Belt",
    brand: "RAINA",
    description:
      "Golden torchon clasps in the shape of horseshoes bring Western-inspired elegance to this wider belt made in the USA from rich leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb533133-3193-4826-8d11-e7eaada27c11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "D-Ring Leather Belt",
    brand: "TREASURE & BOND",
    description:
      "A contemporary D-ring buckle punctuates an all-leather belt in versatile shades.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6906d2b4-3472-4d04-be00-dfc01e193276.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Double Bee Clasp Leather Belt",
    brand: "RAINA",
    description:
      "Golden honeybees meet in the middle of a leather belt that brings a regal yet whimsical finish to your look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7e3b58af-232e-4542-b591-ea5fbf9a56fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Double Loop Trouser Belt",
    brand: "NORDSTROM",
    description:
      "The double loops and polished metal buckle create an elegant vibe to this sleek belt that is made from lightly crackled leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/415630a4-9005-4411-8228-84c8423b8eab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Double Ring Leather Belt",
    brand: "HALOGEN®",
    description:
      "A duo of polished round buckles stand out against the rich leather of this slim, stylish belt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32fb01fa-4623-4c65-9c90-232c55eadb90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Eliana Crystal Sash",
    brand: "BRIDES & HAIRPINS",
    description:
      "An intricate motif is delicately rendered in Swarovski crystals and sparkling opals at the front of a silk sash that's a radiant finish for your special day.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d9c0275-7ab3-4a35-bb25-8109f57445bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Faux Leather Western Chain Belt",
    brand: "TOPSHOP",
    description:
      "This faux-leather belt features a Western-inspired buckle and a black chain that wraps from front to back.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26235179-5922-4ef6-8021-a3b0439a14b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Gancini Rolo Leather Belt",
    brand: "SALVATORE FERRAGAMO",
    description:
      "A polished buckle featuring a fresh twist on the fashion house's Gancini emblem highlights this versatile calfskin-leather belt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06bf86ba-7851-43f7-9a98-ebc309d3ff06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Genuine Calf Hair Belt",
    brand: "HALOGEN®",
    description:
      "A versatile belt made from richly textured, genuine calf hair features polished goldtone hardware for a refined finish.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb4a87a9-dfd8-4d2d-8deb-88d4395ec234.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Grasp Leather Belt",
    brand: "BOTTEGA VENETA",
    description:
      "A twisted triangular buckle that evokes the 'V' in Veneta cinches this skinny calfskin leather belt crafted in Italy.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/89da94ec-c94f-49f3-bcbc-aec880d2749b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Hammered Buckle Leather Belt",
    brand: "TREASURE & BOND",
    description:
      "A hammered buckle shines on this waist-defining belt crafted from rich leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1dbbecd-aa9c-407d-900a-2dd2ba24128e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Handmade Leather Wrap Belt",
    brand: "ADA",
    description:
      "A smooth black leather belt handcrafted by artisans in Buenos Aires offers a multitude of styling options from everyday casual to upscale elegance.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f1dafc8-af55-4761-931b-4ea90ba537cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jumbo Boyfriend Belt",
    brand: "RAG & BONE",
    description:
      "Signature etching distinguishes the polished buckle of a rich nubuck-leather belt in an oversized silhouette that offers trendsetting appeal.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac5b4c27-5923-4003-823f-2485b781ce6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Kira Leather Belt",
    brand: "TORY BURCH",
    description:
      "A belt to wrap up this season's looks with a touch of glam features a golden buckle in the shape of Tory's iconic double-T logo.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ffbb37c-00e5-49ce-a46e-f3ac064529db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Laque YSL Monogram Leather Belt",
    brand: "SAINT LAURENT",
    description:
      "A sleek buckle and YSL monogram keeper cinch the chic look of this Italian belt made from calfskin leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbc0a87a-a241-4498-a416-e3a7c1c25def.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Le Polygon Wrap Tie Leather Belt",
    brand: "FRAME",
    description:
      "Add casual-chic polish to your look with this wrap leather belt finished with a shining polygon buckle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28ddedc8-0575-4e01-8d5b-d5fd14df03d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Leather Belt",
    brand: "ALLSAINTS",
    description:
      "This essential belt is made from smooth leather and detailed with goldtone hardware.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5688127-41d1-4e91-8b4f-ec8819969c39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Leather Belt with Pavé Crystal Buckle",
    brand: "REBECCA MINKOFF",
    description:
      "A pavé crystal buckle adds sparkle to this stylish belt built from smooth, supple leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cbbdb0b4-6580-4b1e-9c58-3fe397747af1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Leather Crisscross Skinny Belt",
    brand: "MADEWELL",
    description:
      "Crisscrossing Italian-leather strips form a stylish keeper on this chic, slim belt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f360107f-02d0-420d-92a1-60d80393e97d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Lecce Leather Belt",
    brand: "ISABEL MARANT",
    description:
      "Sleek and modern, this minimalist leather belt adds a sculptural element to any ensemble.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9626b544-a8fc-47e2-855e-d0d05b5eb48a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Lecce Studded Leather Belt",
    brand: "ISABEL MARANT",
    description:
      "A cult favorite for its cool versatility, this studded leather belt fastens with a knot that makes it easy to adjust and wear around the waist or hips.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ae50348-a35a-4825-af0c-0e0c65e7cce6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Logo Monogram Embossed Leather Belt",
    brand: "TORY BURCH",
    description:
      "A filigree double-T logo styles a sliding-prong buckle with the brand motif repeated on the embossed cowhide leather belt.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2b713c59-6211-407d-819c-626f14a174e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Logo Reversible Leather Belt",
    brand: "TORY BURCH",
    description:
      "A gilded double-T medallion takes center stage on a grainy leather belt that reverses from black to tan for double the style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f4c9efba-68d3-4a79-9bbd-f2aa16e32eae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Logo Slim Leather Belt",
    brand: "SAINT LAURENT",
    description:
      "An interlocking YSL insignia pays homage to the brand's founder on this textured calfskin leather belt expertly crafted in Italy.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdd380e4-aedc-40c7-80a5-a2579046e08b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Medium Perfect Leather Belt",
    brand: "MADEWELL",
    description:
      "A curvy buckle secures a versatile belt crafted from richly grained Italian leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/825b88cf-01da-4b55-a3d7-31212d11a848.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Metal Keeper Belt",
    brand: "NORDSTROM",
    description:
      "A shiny buckle commands the center of this slender belt that is great for adding the final touch to ensembles.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2632d45c-8360-4ed0-9bba-cdab575323fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Monogram Motif Reversible Leather Belt",
    brand: "BURBERRY",
    description:
      "A monogrammed plaque buckle pays homage to brand founder Thomas Burberry on a leather belt that reverses, for twice the polished style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/034a538a-b0e0-4eec-91f7-1f28ebedaa05.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Oval Buckle Leather Belt",
    brand: "TREASURE & BOND",
    description:
      "A burnished oval buckle secures a stylish belt crafted from richly dyed leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c58fa27-8971-480d-a950-c6c32566b13a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Pebbled Leather Belt",
    brand: "MANGO",
    description:
      "This pebble-textured cowhide belt features a covered buckle to cinch your look with a monochrome finish.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e25c7d23-9a22-418e-8515-d06074feef3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Quilted Triangle Buckle Belt",
    brand: "TOPSHOP",
    description:
      "A shiny quilted belt featuring a futuristic triangle buckle closure adds a pop of glossy glamour to any look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c3b79c6-8689-412c-be5e-668755aed244.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rebound Leather Belt",
    brand: "RAG & BONE",
    description:
      "An elongated, brushed buckle embossed with logo letters highlights a black leather belt with a sleek, minimalist look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20d7571b-628c-4164-bd13-719a571734ce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rebound Suede Belt",
    brand: "RAG & BONE",
    description:
      "An elongated, brushed buckle embossed with logo letters highlights a suede belt with a sleek, minimalist look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bca9065-a37b-45ba-a7f7-7e950d2fe3da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Reversible Leather Belt",
    brand: "TORY BURCH",
    description:
      "A filigree logo styles a sliding prong buckle on a wide grainy leather belt in two reversible colors to complete any look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/faf67521-d8b4-4dd8-842c-1284273ec0c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Reversible Logo Belt",
    brand: "TORY BURCH",
    description:
      "A leather belt that smartly reverses from a pebbled to smooth finish is branded with a gleaming buckle in the shape of the iconic double-T medallion.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16ace3df-8909-42bd-83dd-68f1a333fa9b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rhys Rope Belt",
    brand: "FREE PEOPLE",
    description:
      "Polished beads and draped tassels accentuate a colorful rope belt that will lend a boho-inspired aesthetic to any ensemble.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3044b33-51fd-4969-9df3-0f05d955c4f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Rosebery Leather Belt",
    brand: "FREE PEOPLE",
    description:
      "Upgrade your outfit with a pebbled-leather belt that's finished with a gleaming, horseshoe-shaped buckle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/67b20bbe-df88-48c2-a823-7b76961abc3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Round Buckle Suede Belt",
    brand: "TREASURE & BOND",
    description:
      "Roughed-up suede and an oversized, antiqued buckle add laid-back style to a vintage-inspired belt. When you buy Treasure & Bond, Nordstrom will donate 2.5% of net sales to organizations that work to empower youth.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2ac26cc-d51b-47d3-bdea-512b05c35c2f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Skinny Leather Wrap Belt",
    brand: "ADA",
    description:
      "A supple leather belt crafted by artisans in Argentina offers a multitude of styling options and ties for the perfect fit.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5a80494-09ee-41ee-b073-f582072a6834.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Skinny Perfect Leather Belt",
    brand: "MADEWELL",
    description:
      "It doesn’t get more timeless than this lovingly worn-in belt, now in a skinnier shape—you’ll have it in your accessories repertoire for years to come.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1303a2b-a295-47a9-9131-01662859834c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Square Buckle Suede Belt",
    brand: "NORDSTROM",
    description:
      "Refresh your wardrobe with this rich suede belt finished with a gleaming square buckle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2be4513f-f802-4e3c-8f38-7c3229fce454.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Suede Boyfriend Belt",
    brand: "RAG & BONE",
    description:
      "Suede in a rich, dark hue punctuates any outfit with classic appeal in this boyfriend belt with a logo-etched metal buckle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8bfe094-9e7b-4cf0-a0ad-5edb7afa1e58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Suzy Leather Belt",
    brand: "REBECCA MINKOFF",
    description:
      "Fine-grain leather comprises a slender belt that provides a polished finishing touch for any ensemble.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b161049c-a596-442a-9535-67de6c26ba9f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Suzy Metallic Leather Belt",
    brand: "REBECCA MINKOFF",
    description:
      "Shimmering gunmetal leather elevates a slender belt furnished with a triple keeper—providing a polished finishing touch for any ensemble.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c67be13f-58c7-40f1-88d2-41520e52b430.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Tailored Trouser Leather Belt",
    brand: "HALOGEN®",
    description:
      "Smooth leather defines a clean, essential belt accented with a gleaming tonal buckle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36d465fe-5e17-4908-97e4-55f2ce4c661e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "TB 20 Reversible Check & Leather Belt",
    brand: "BURBERRY",
    description:
      "A gleaming TB-monogram buckle adds extra polish to a versatile belt featuring heritage checks on one side and smooth calfskin leather on the reverse.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb3a3212-ed4e-49e3-a97b-47fb77270fd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Twist Braid Leather Belt",
    brand: "TREASURE & BOND",
    description:
      "Define your waist in this rich leather belt designed with a shiny buckle and a back braided detail.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6157f03f-3053-46f6-bbec-0f2f73bcfdcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Viper D-Ring Buckle Leather Belt",
    brand: "RAINA",
    description:
      "A fierce finish that instantly elevates any look, this leather belt features a golden D-ring buckle with snakeskin-patterned detailing.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fdd0eeb3-7a0f-43be-8c02-2526f914f6d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "VLOGO Buckle Reversible Leather Belt",
    brand: "VALENTINO GARAVANI",
    description:
      "An antiqued VLOGO buckle based on a 1979 archival motif brands this reversible leather belt featuring two keepers to match or contrast with each side.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d78bccf7-ed51-4b75-9f96-38f748d9f513.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "VLOGO Reversible Leather Belt",
    brand: "VALENTINO GARAVANI",
    description:
      "An archival VLOGO buckle boldly brands a smooth calfskin belt that reverses for double the styling options.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f7b2f7e-6578-4516-bfa8-aac228f340cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Woven Leather Belt",
    brand: "MADEWELL",
    description:
      "Woven from luxe leather, this braided belt has a covered buckle for a clean look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c25da9e-51a2-42a3-968c-870fd468544d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "YSL Monogram Leather Belt",
    brand: "SAINT LAURENT",
    description:
      "A black buckle and YSL monogram keeper extend the low-key luxe look of this leather belt with a monochromatic palette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43043703-447d-4e2a-9c56-d3710acd1fdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const beltData = [
  {
    productName: "Laque YSL Monogram Leather Belt",
    price: 525,
    color: "Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a492e1f1-5da4-403b-9cbe-193a8543601c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jumbo Boyfriend Belt",
    price: 250,
    color: "Pelican",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/462d849e-83f2-4b99-86f9-7bb269cd59f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt",
    price: 79,
    color: "Black Warm Brass",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a2c0e78-93b3-4cfa-8b35-551550815560.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eliana Crystal Sash",
    price: 150,
    color: "Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/324f2b15-cd85-435f-9db9-c35792ce7470.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Suzy Leather Belt",
    price: 48,
    color: "Black/Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c4922546-0cd3-411b-b3f1-a5d3f2d326a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Logo Belt",
    price: 198,
    color: "New Ivory/Vachetta/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a830592d-5dd8-46e2-a158-f8e128a3cc83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Le Polygon Wrap Tie Leather Belt",
    price: 178,
    color: "Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b987244d-c790-45bf-a4d0-f2299aea087a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Baby Rebound Belt",
    price: 150,
    color: "Russet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ee0b2f78-a038-41d2-8e67-6b48cd38885a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Handmade Leather Wrap Belt",
    price: 92,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/77885832-e8cc-4d5b-8bf7-0c219059bddb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rhys Rope Belt",
    price: 48,
    color: "Black Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/440827bf-a2dc-4d57-93d3-fcef9343a2bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lecce Leather Belt",
    price: 160,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb533133-3193-4826-8d11-e7eaada27c11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Twist Braid Leather Belt",
    price: 45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6906d2b4-3472-4d04-be00-dfc01e193276.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 198,
    color: "Pink Moon / Clam Shell / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7e3b58af-232e-4542-b591-ea5fbf9a56fe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "Pecan/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/415630a4-9005-4411-8228-84c8423b8eab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Logo Belt",
    price: 198,
    color: "Black/ Cuoio/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c59a6e3-d9bf-46b5-bc3e-884b3133e244.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Reversible Leather Belt",
    price: 990,
    color: "Nero/ Reouge Pur",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32fb01fa-4623-4c65-9c90-232c55eadb90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oval Buckle Leather Belt",
    price: 49,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d9c0275-7ab3-4a35-bb25-8109f57445bb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Penelope - Dragon' Stretch Belt",
    price: 240,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26235179-5922-4ef6-8021-a3b0439a14b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Boyfriend' Leather Belt",
    price: 175,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06bf86ba-7851-43f7-9a98-ebc309d3ff06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 178,
    color: "Pomander / Moose / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e1541b8-ef2d-4014-a7b1-391f00b3bfd1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ceylon Reversible Leather Belt",
    price: 450,
    color: "Sella Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb4a87a9-dfd8-4d2d-8deb-88d4395ec234.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Suzy Metallic Leather Belt",
    price: 48,
    color: "Gunmetal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/89da94ec-c94f-49f3-bcbc-aec880d2749b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Round Buckle Suede Belt",
    price: 59,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1dbbecd-aa9c-407d-900a-2dd2ba24128e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lecce Studded Leather Belt",
    price: 114,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f1dafc8-af55-4761-931b-4ea90ba537cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rhys Rope Belt",
    price: 48,
    color: "Black Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/440827bf-a2dc-4d57-93d3-fcef9343a2bc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Buckle Suede Belt",
    price: 49,
    color: "Pink Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac5b4c27-5923-4003-823f-2485b781ce6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Lillian' Belt",
    price: 105,
    color: "Jet Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ffbb37c-00e5-49ce-a46e-f3ac064529db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Suede Boyfriend Belt",
    price: 150,
    color: "Smoke Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbc0a87a-a241-4498-a416-e3a7c1c25def.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Chunky Buckle Leather Skinny Belt",
    price: 45,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28ddedc8-0575-4e01-8d5b-d5fd14df03d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bronco Leather Wrap Belt",
    price: 120,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5688127-41d1-4e91-8b4f-ec8819969c39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Bee Clasp Leather Belt",
    price: 149,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cbbdb0b4-6580-4b1e-9c58-3fe397747af1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "D-Ring Leather Belt",
    price: 39,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f360107f-02d0-420d-92a1-60d80393e97d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt",
    price: 79,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/11569459-1eb2-499b-ab2e-61f30ab664fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Laque YSL Monogram Leather Belt",
    price: 525,
    color: "Dark Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4dda4781-8461-449a-bd3e-c65f82abd696.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Penelope - Dragon' Stretch Belt",
    price: 240,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81e3757b-cfbe-4c7c-96bf-2f5c7fefac23.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oval Buckle Leather Belt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2d3463f-19d8-4be7-a76a-192fc533e57a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Buckle Reversible Leather Belt",
    price: 590,
    color: "Nero/ Rouge",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9626b544-a8fc-47e2-855e-d0d05b5eb48a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Monogram Embossed Leather Belt",
    price: 198,
    color: "Midnight",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ae50348-a35a-4825-af0c-0e0c65e7cce6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Logo Belt",
    price: 198,
    color: "Black/ New Cuoio/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/666bb201-a6d2-4473-a2fa-74ba479a252f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Ring Leather Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2b713c59-6211-407d-819c-626f14a174e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Gancini Rolo Leather Belt",
    price: 595,
    color: "Bone Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f4c9efba-68d3-4a79-9bbd-f2aa16e32eae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Monogram Embossed Leather Belt",
    price: 198,
    color: "Moose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4390beba-e140-423f-ab2d-3a43578ca3eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Reversible Leather Belt",
    price: 178,
    color: "Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdd380e4-aedc-40c7-80a5-a2579046e08b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Backcountry Belt",
    price: 52,
    color: "English Saddle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/825b88cf-01da-4b55-a3d7-31212d11a848.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 178,
    color: "Pink Moon / Clam Shell / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/54525d38-19d2-4295-a3d0-6fe48f7cab51.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Logo Belt",
    price: 198,
    color: "Black/ New Cuoio/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/666bb201-a6d2-4473-a2fa-74ba479a252f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Penelope - Dragon' Stretch Belt",
    price: 240,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/26235179-5922-4ef6-8021-a3b0439a14b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Laque YSL Monogram Leather Belt",
    price: 525,
    color: "Rouge Legion",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/91ebe5b1-9800-445f-8beb-5e031456a973.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Handmade Leather Wrap Belt",
    price: 92,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c21ea74-9ac2-41e4-b6d0-8f86eb49d567.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Buckle Reversible Leather Belt",
    price: 590,
    color: "Nero/ Rouge",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9626b544-a8fc-47e2-855e-d0d05b5eb48a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Eliana Crystal Sash",
    price: 150,
    color: "Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/324f2b15-cd85-435f-9db9-c35792ce7470.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Crisscross Skinny Belt",
    price: 45,
    color: "English Saddle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2632d45c-8360-4ed0-9bba-cdab575323fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Crisscross Skinny Belt",
    price: 45,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/841f9659-a6a0-40f2-ac19-1259b47a14cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "True Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9cbc9461-b361-4e5f-b132-4f6feeaf60c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Reversible Leather Belt",
    price: 590,
    color: "Blossom-Rose Quartz",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71c3014d-a6f1-4c18-b695-82834356d95c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Baby Rebound Belt",
    price: 150,
    color: "Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3ab108b-6f69-48a9-af13-0732eea0573f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pebbled Leather Belt",
    price: 49.99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/034a538a-b0e0-4eec-91f7-1f28ebedaa05.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Backcountry Belt",
    price: 52,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/acad1b2d-c654-4c20-8eef-beb16cc61791.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Suede Boyfriend Belt",
    price: 150,
    color: "Smoke Suede",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbc0a87a-a241-4498-a416-e3a7c1c25def.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Leather Belt",
    price: 168,
    color: "New Ivory / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c58fa27-8971-480d-a950-c6c32566b13a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Reversible Leather Belt",
    price: 178,
    color: "Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdd380e4-aedc-40c7-80a5-a2579046e08b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Campus Leather Belt",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e25c7d23-9a22-418e-8515-d06074feef3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metal Keeper Belt",
    price: 39,
    color: "Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c3b79c6-8689-412c-be5e-668755aed244.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "Pecan/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5f121447-d2c2-46dd-a14b-c5103bdcfeb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Ring Leather Belt",
    price: 39,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0089571e-d7d3-46dd-8a12-f1d3eae0de7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Lillian' Belt",
    price: 105,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/38c7cffd-eff8-4590-9c22-1a67a1f426bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Le Polygon Wrap Tie Leather Belt",
    price: 178,
    color: "Noir",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b987244d-c790-45bf-a4d0-f2299aea087a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metal Keeper Belt",
    price: 39,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0ddbddc8-9006-4a1d-a32a-25f91341e948.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4G Buckle Reversible Skinny Leather Belt",
    price: 390,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20d7571b-628c-4164-bd13-719a571734ce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bronco Leather Wrap Belt",
    price: 120,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8f457b65-75c0-44dd-b59f-26aafb784b92.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Logo Belt",
    price: 198,
    color: "New Ivory/Vachetta/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a830592d-5dd8-46e2-a158-f8e128a3cc83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "D-Ring Leather Belt",
    price: 39,
    color: "Red Syrah",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/33330b77-3856-46ec-87ba-517ff007443c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 198,
    color: "Gray Heron / Poblano / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2ccfb36b-9ceb-42b7-aa90-47247309fa56.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4G Buckle Reversible Skinny Leather Belt",
    price: 390,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20d7571b-628c-4164-bd13-719a571734ce.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 198,
    color: "Redstone / Royal Navy / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27331ff5-e660-40ee-841a-01c50455c756.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lecce Studded Leather Belt",
    price: 114,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f1dafc8-af55-4761-931b-4ea90ba537cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Leather Belt",
    price: 50,
    color: "Desert Camel Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bca9065-a37b-45ba-a7f7-7e950d2fe3da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt with Pavé Crystal Buckle",
    price: 68,
    color: "Malbec",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/faf67521-d8b4-4dd8-842c-1284273ec0c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Suzy Leather Belt",
    price: 48,
    color: "Luggage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cb07ae5a-b7b1-4176-943d-4e8518c61bc6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Chunky Buckle Leather Skinny Belt",
    price: 45,
    color: "Desert Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a96fee3-93f7-4620-86cd-4eb2a8bedba1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Twist Braid Leather Belt",
    price: 45,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6906d2b4-3472-4d04-be00-dfc01e193276.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Slim Leather Belt",
    price: 375,
    color: "1000 Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16ace3df-8909-42bd-83dd-68f1a333fa9b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 198,
    color: "Redstone / Royal Navy / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27331ff5-e660-40ee-841a-01c50455c756.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Viper D-Ring Buckle Leather Belt",
    price: 195,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3044b33-51fd-4969-9df3-0f05d955c4f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Monogram Motif Reversible Leather Belt",
    price: 480,
    color: "Black/ Malt Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/67b20bbe-df88-48c2-a823-7b76961abc3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metal Keeper Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c2f3ddb8-c6eb-4579-80a0-9f5e4ea7efd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Leather Belt",
    price: 50,
    color: "Pale Oyster",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5483f899-a6f7-4ac0-a0f8-98b270e180d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Leather Belt",
    price: 50,
    color: "Desert Camel Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6bca9065-a37b-45ba-a7f7-7e950d2fe3da.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4G Buckle Reversible Skinny Leather Belt",
    price: 390,
    color: "Blush Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3baea2f-6667-4cb6-9c68-baa2404e9d8a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 178,
    color: "Gray Heron / Poblano / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78e65d4d-bae2-48d1-bde6-cfd297e39dad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hammered Buckle Leather Belt",
    price: 39,
    color: "Rust",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2ac26cc-d51b-47d3-bdea-512b05c35c2f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Handmade Leather Wrap Belt",
    price: 95,
    color: "Truffle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a90e1fb4-5e1f-4f10-8ad8-a34e04ecffc0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "Pecan/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5f121447-d2c2-46dd-a14b-c5103bdcfeb1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Skinny Perfect Leather Belt",
    price: 39.5,
    color: "Pecan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5a80494-09ee-41ee-b073-f582072a6834.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Lecce Leather Belt",
    price: 160,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb533133-3193-4826-8d11-e7eaada27c11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Boyfriend' Leather Belt",
    price: 175,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/06bf86ba-7851-43f7-9a98-ebc309d3ff06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Bee Clasp Leather Belt",
    price: 149,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ad006d47-ecd6-4be4-819e-aaa04a7d23cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Skinny Leather Wrap Belt",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1303a2b-a295-47a9-9131-01662859834c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Quilted Triangle Buckle Belt",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2be4513f-f802-4e3c-8f38-7c3229fce454.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Lillian' Belt",
    price: 105,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2711d86e-742c-49fc-988c-a488d648d539.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "D-Ring Leather Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65f93850-661f-4e24-82b5-04865280a406.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Laque YSL Monogram Leather Belt",
    price: 525,
    color: "Crema Soft",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f4bba992-06fb-457f-bcfe-eaa6cdb3f4b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebound Leather Belt",
    price: 185,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8bfe094-9e7b-4cf0-a0ad-5edb7afa1e58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Bee Clasp Leather Belt",
    price: 149,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ad006d47-ecd6-4be4-819e-aaa04a7d23cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Twist Braid Leather Belt",
    price: 45,
    color: "Brown Chino",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c5ab0ee-4de3-47ad-9381-4b7f082851ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Slim Leather Belt",
    price: 375,
    color: "1000 Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16ace3df-8909-42bd-83dd-68f1a333fa9b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Bee Clasp Leather Belt",
    price: 149,
    color: "Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/39d3317c-eca0-44b2-9426-87defd1173a5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Grasp Leather Belt",
    price: 390,
    color: "Porridge-Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b161049c-a596-442a-9535-67de6c26ba9f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Skinny Perfect Leather Belt",
    price: 39.5,
    color: "Pecan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5a80494-09ee-41ee-b073-f582072a6834.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Skinny Leather Wrap Belt",
    price: 69,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a1303a2b-a295-47a9-9131-01662859834c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Round Buckle Suede Belt",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c89ca4d9-75a0-480b-9482-8abd817ad609.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rosebery Leather Belt",
    price: 58,
    color: "Sage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c67be13f-58c7-40f1-88d2-41520e52b430.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Leather Belt",
    price: 168,
    color: "Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87f38fe2-c448-402a-9260-0cdd133e6409.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "Pecan/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/415630a4-9005-4411-8228-84c8423b8eab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Baby Rebound Belt",
    price: 150,
    color: "Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3ab108b-6f69-48a9-af13-0732eea0573f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "D-Ring Leather Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65f93850-661f-4e24-82b5-04865280a406.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ceylon Reversible Leather Belt",
    price: 450,
    color: "Sella Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb4a87a9-dfd8-4d2d-8deb-88d4395ec234.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Square Buckle Suede Belt",
    price: 49,
    color: "Pink Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ac5b4c27-5923-4003-823f-2485b781ce6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Round Buckle Suede Belt",
    price: 59,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c89ca4d9-75a0-480b-9482-8abd817ad609.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jumbo Boyfriend Belt",
    price: 250,
    color: "Pelican",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/462d849e-83f2-4b99-86f9-7bb269cd59f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Suzy Metallic Leather Belt",
    price: 48,
    color: "Gunmetal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/89da94ec-c94f-49f3-bcbc-aec880d2749b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Logo Belt",
    price: 198,
    color: "Black/ Cuoio/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c59a6e3-d9bf-46b5-bc3e-884b3133e244.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hammered Buckle Leather Belt",
    price: 39,
    color: "Oat",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/521a3e7d-c3f7-4639-b55c-e1b3e40b69db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Monogram Motif Reversible Leather Belt",
    price: 480,
    color: "Black/ Malt Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/67b20bbe-df88-48c2-a823-7b76961abc3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Genuine Calf Hair Belt",
    price: 45,
    color: "Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36d465fe-5e17-4908-97e4-55f2ce4c661e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5f69f3e-563d-4bfe-aea3-b78af2a13950.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Buckle Reversible Leather Belt",
    price: 590,
    color: "Smokey Brown/Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/00d2a5e6-dcdc-4eb3-ab06-6f6d85193069.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CiCi Twist Clasp Leather Belt",
    price: 185,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb3a3212-ed4e-49e3-a97b-47fb77270fd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "True Black/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ca6ef948-2da0-40de-92bc-8c038cbc9edf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Woven Leather Belt",
    price: 50,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/429aa4ba-2fea-4695-a503-edb06a5b5eaa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Grasp Leather Belt",
    price: 390,
    color: "Fondant-Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b947aaf-0fb0-4835-b523-4981a3929810.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebound Suede Belt",
    price: 185,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6157f03f-3053-46f6-bbec-0f2f73bcfdcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hammered Buckle Leather Belt",
    price: 39,
    color: "Rust",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2ac26cc-d51b-47d3-bdea-512b05c35c2f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Handmade Leather Wrap Belt",
    price: 92,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c21ea74-9ac2-41e4-b6d0-8f86eb49d567.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Lillian' Belt",
    price: 105,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/021a9ca4-d62d-4ddb-b2ad-e72f5f0b707a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Western Chain Belt",
    price: 22.5,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fdd0eeb3-7a0f-43be-8c02-2526f914f6d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Handmade Leather Wrap Belt",
    price: 95,
    color: "Truffle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a90e1fb4-5e1f-4f10-8ad8-a34e04ecffc0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Grasp Leather Belt",
    price: 390,
    color: "Fondant-Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b947aaf-0fb0-4835-b523-4981a3929810.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Campus Leather Belt",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e25c7d23-9a22-418e-8515-d06074feef3c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Lillian' Belt",
    price: 105,
    color: "Jet Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5ffbb37c-00e5-49ce-a46e-f3ac064529db.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jumbo Boyfriend Belt",
    price: 250,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a77398c2-d133-4de6-a753-af7c805d8ef3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tailored Trouser Leather Belt",
    price: 39,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d78bccf7-ed51-4b75-9f96-38f748d9f513.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Gancini Rolo Leather Belt",
    price: 595,
    color: "Bone Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f4c9efba-68d3-4a79-9bbd-f2aa16e32eae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tailored Trouser Leather Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92f1b5f3-6f3c-46e8-b2d5-83181006a2d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Reversible Leather Belt",
    price: 178,
    color: "Black/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5440c65-4af2-4014-8d9d-3f7f949bff8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rosebery Leather Belt",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ac1f14d-f3e8-471a-9328-449c20032d1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metal Keeper Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c2f3ddb8-c6eb-4579-80a0-9f5e4ea7efd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 178,
    color: "Redstone / Royal Navy / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27331ff5-e660-40ee-841a-01c50455c756.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Quilted Triangle Buckle Belt",
    price: 19,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2be4513f-f802-4e3c-8f38-7c3229fce454.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5f69f3e-563d-4bfe-aea3-b78af2a13950.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Campus Leather Belt",
    price: 98,
    color: "Tan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d6677b1-9d44-4ea2-ab32-63370b0d1193.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Leather Belt",
    price: 178,
    color: "New Ivory / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/66b101bb-967a-471c-9756-241fce86b01c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Loop Trouser Belt",
    price: 39,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f7b2f7e-6578-4516-bfa8-aac228f340cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CiCi Twist Clasp Leather Belt",
    price: 185,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fb3a3212-ed4e-49e3-a97b-47fb77270fd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebound Leather Belt",
    price: 185,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a8bfe094-9e7b-4cf0-a0ad-5edb7afa1e58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Genuine Calf Hair Belt",
    price: 45,
    color: "Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36d465fe-5e17-4908-97e4-55f2ce4c661e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Reversible Leather Belt",
    price: 178,
    color: "Black/ Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a5440c65-4af2-4014-8d9d-3f7f949bff8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Loop Trouser Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6893dd32-b4bf-4ee7-8efc-247f8eea56ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Loop Trouser Belt",
    price: 39,
    color: "Bone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5fb7028a-9dc1-49e4-a08c-63bfcc4ef5c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt",
    price: 79,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/11569459-1eb2-499b-ab2e-61f30ab664fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Reversible Leather Belt",
    price: 590,
    color: "Blossom-Rose Quartz",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/71c3014d-a6f1-4c18-b695-82834356d95c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Baby Rebound Belt",
    price: 150,
    color: "Olive",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d80b534c-3cb3-4d78-8196-b8316b8ac8ab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rosebery Leather Belt",
    price: 58,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6ac1f14d-f3e8-471a-9328-449c20032d1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Campus Leather Belt",
    price: 98,
    color: "Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5d79e135-ac2f-4d64-ab93-46e630a6fc47.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4G Buckle Reversible Skinny Leather Belt",
    price: 390,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0dc8f75f-a837-4ca2-b2f5-e491cdd945b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Crisscross Skinny Belt",
    price: 45,
    color: "English Saddle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2632d45c-8360-4ed0-9bba-cdab575323fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Faux Leather Western Chain Belt",
    price: 22.5,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fdd0eeb3-7a0f-43be-8c02-2526f914f6d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jumbo Boyfriend Belt",
    price: 250,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a77398c2-d133-4de6-a753-af7c805d8ef3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Ring Leather Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2b713c59-6211-407d-819c-626f14a174e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Leather Belt",
    price: 168,
    color: "Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/87f38fe2-c448-402a-9260-0cdd133e6409.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "CiCi Twist Clasp Leather Belt",
    price: 185,
    color: "Tan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4539e17d-e986-4c07-8b40-8c62a336d608.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Backcountry Belt",
    price: 52,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/acad1b2d-c654-4c20-8eef-beb16cc61791.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bronco Leather Wrap Belt",
    price: 120,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5688127-41d1-4e91-8b4f-ec8819969c39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "TB 20 Reversible Check & Leather Belt",
    price: 380,
    color: "Beige/ Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c25da9e-51a2-42a3-968c-870fd468544d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metal Keeper Belt",
    price: 39,
    color: "Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cd231ebd-c225-471d-80ed-a325af4e9dc3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Laque YSL Monogram Leather Belt",
    price: 525,
    color: "Dark Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4dda4781-8461-449a-bd3e-c65f82abd696.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Reversible Leather Belt",
    price: 590,
    color: "Jungle-Ultra Marine Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/da62d44f-9f9b-4ec5-83f2-bc5ae5e71791.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Skinny Perfect Leather Belt",
    price: 39.5,
    color: "True Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/07cee6ae-c4d9-4fdd-b3f4-76dc0b03ddfd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Leather Belt",
    price: 178,
    color: "Gray Heron / Poblano / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/78e65d4d-bae2-48d1-bde6-cfd297e39dad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Viper D-Ring Buckle Leather Belt",
    price: 195,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/676d8af4-6ff2-4f05-95ce-62a69c1c7ac5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "YSL Monogram Leather Belt",
    price: 545,
    color: "Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43043703-447d-4e2a-9c56-d3710acd1fdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Viper D-Ring Buckle Leather Belt",
    price: 195,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3044b33-51fd-4969-9df3-0f05d955c4f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hammered Buckle Leather Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fae61605-f0eb-41cd-aa32-56cfe7af9c34.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "YSL Monogram Leather Belt",
    price: 545,
    color: "Nero",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43043703-447d-4e2a-9c56-d3710acd1fdd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Backcountry Belt",
    price: 52,
    color: "English Saddle",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/825b88cf-01da-4b55-a3d7-31212d11a848.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Leather Belt",
    price: 178,
    color: "New Ivory / Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/66b101bb-967a-471c-9756-241fce86b01c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Reversible Leather Belt",
    price: 990,
    color: "Beige/Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f32b4e0-a6ee-443f-9ce3-b553ab81887e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rebound Suede Belt",
    price: 185,
    color: "Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6157f03f-3053-46f6-bbec-0f2f73bcfdcd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt with Pavé Crystal Buckle",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3239fc43-e233-4392-bc6c-d83a0402efa6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Double Loop Trouser Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6893dd32-b4bf-4ee7-8efc-247f8eea56ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Pebbled Leather Belt",
    price: 49.99,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/034a538a-b0e0-4eec-91f7-1f28ebedaa05.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tailored Trouser Leather Belt",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/92f1b5f3-6f3c-46e8-b2d5-83181006a2d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Penelope - Dragon' Stretch Belt",
    price: 240,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4d307d1b-3c0a-46c6-abcc-ceaba577de3b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rosebery Leather Belt",
    price: 58,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4429ddb3-d52f-4bac-8cee-7fc5735c793e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Leather Belt with Pavé Crystal Buckle",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3239fc43-e233-4392-bc6c-d83a0402efa6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Lillian' Belt",
    price: 105,
    color: "Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/868f3871-0390-41b8-9a11-9874e9faaac2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Logo Monogram Embossed Leather Belt",
    price: 198,
    color: "Moose",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4390beba-e140-423f-ab2d-3a43578ca3eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "TB 20 Reversible Check & Leather Belt",
    price: 380,
    color: "Beige/ Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c25da9e-51a2-42a3-968c-870fd468544d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Suzy Leather Belt",
    price: 48,
    color: "Luggage",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cb07ae5a-b7b1-4176-943d-4e8518c61bc6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Oval Buckle Leather Belt",
    price: 49,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2d3463f-19d8-4be7-a76a-192fc533e57a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Chunky Buckle Leather Skinny Belt",
    price: 45,
    color: "Desert Camel",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a96fee3-93f7-4620-86cd-4eb2a8bedba1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "VLOGO Reversible Leather Belt",
    price: 990,
    color: "Nero/ Reouge Pur",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/32fb01fa-4623-4c65-9c90-232c55eadb90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const accessoriesProduct = [
  {
    name: "'Bandwagon' 51mm Polarized Sunglasses",
    brand: "LE SPECS",
    description:
      "A matte tortoiseshell finish and a keyhole bridge bring a modern take to '50s-inspired sunglasses fitted with glare-reducing polarized lenses.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65539df9-5a57-4d6d-9f72-d6d6312bbab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "21-Inch Rolling Spinner Suitcase",
    brand: "BÉIS",
    description:
      "Tough, travel-ready construction defines this rolling suitcase molded from polycarbonate into a sleek, aerodynamic design. Horizontal grooves texture this durable luggage piece that's equipped with 360-degree wheels, a telescoping handle, TSA-approved lock and organizer pockets and straps to secure belongings for the duration of your trip.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fd004cd0-4dbc-431d-9277-653fd4cc5efd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "44mm Hyped Up Square Sunglasses",
    brand: "QUAY AUSTRALIA",
    description:
      "Bold frames fitted with smoky lenses bring a glamorous touch to these stylish sunnies that offer full-coverage UV protection.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88b6aa5a-73ec-4b19-ba7d-2c8c77611622.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "4ct tw Cubic Zirconia Earrings",
    brand: "NORDSTROM",
    description:
      "Classically chic, handcrafted studs feature sparkling, faceted cubic zirconia secured by triple-pronged settings.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/daf15efe-ad61-468f-b785-8b400d3e993e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "55mm Cat Eye Blue Light Blocking Glasses",
    brand: "BP.",
    description:
      "Sleek design defines smart glasses with blue light–blocking lenses to reduce eye strain.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e8c9e64-2a3e-4598-975a-87fd3cdcc2e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "58mm Gradient Geometric Sunglasses",
    brand: "COACH",
    description:
      "Geometric metal frames fitted with gradient lenses bring a retro-cool vibe to these Italian-made sunglasses that offer full-coverage UV protection.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/efa09f48-6dc1-481e-822e-59d103d96eeb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "After Hours 50mm Square Sunglasses",
    brand: "QUAY AUSTRALIA",
    description:
      "Slightly winged temples add a dose of modern drama to full-coverage square sunglasses that instantly up your style game.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4526efc-3222-41a7-85dc-6f2f28658cae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Allington Straw Tote Bag",
    brand: "ALLSAINTS",
    description:
      "A spacious, summery tote is woven from two-tone seagrass straw and includes a removable pouch and two sets of handles (top-carry and shoulder).",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36e86167-d3cf-4729-82a8-3543f0cbd88d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Bandwagon 51mm Sunglasses",
    brand: "LE SPECS",
    description:
      "A subtly curvy, cat-eye silhouette and a cool keyhole bridge style vintage-vibe sunglasses with a modern twist. Classic rivet detailing lends a hint of gleam.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bebcb2a7-ad3b-43da-afa6-41aec9222689.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Baro Faux Leather Top Handle Crossbody Bag",
    brand: "ALDO",
    description:
      "A vivid crossbody bag reimagines the definition of bold with its eye-catching design and a frame of punk-rock studs surrounding the feline emblem on the front.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c3033ea-9e25-4466-94fe-c724be69db58.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Boy Mom Stretch Bracelet",
    brand: "LITTLE WORDS PROJECT",
    description:
      "Celebrate your boy with this sweet, statement-making bracelet accented with blue-hued and sparkling beads.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c68280b5-4ae6-4773-b9ab-25997b5b39ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Breeze Print Cover-Up",
    brand: "LA BLANCA",
    description:
      "This lightweight cover-up is highlighted by a Mediterranean-inspired print and flirty fringed tassels for a style that's ready for a sunny getaway.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81d3472c-a44d-438d-b7d1-3401dd254836.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Canvas Tote",
    brand: "BP.",
    description:
      "Fun colors enliven a seriously roomy canvas tote that's even outfitted with a handy crossbody strap.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3dbccd44-ce05-4261-808e-249a3a20ae4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Cashmere Rib Scarf",
    brand: "NORDSTROM",
    description:
      "This luxe cashmere scarf is knit with soft ribbing for indulgent warmth.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/000d13e8-9554-4edf-9741-9868788e03bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Cece Straw Woven Box Clutch",
    brand: "OLGA BERG",
    description:
      "A polished, ball-shaped lock sits atop a woven box clutch that styles perfectly for a summery evening affair. An optional chain-link strap allows for versatile, hands-free wear.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/75a84da3-0a19-4b75-8339-867ca10f1924.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Elisa Birthstone Pendant Necklace",
    brand: "KENDRA SCOTT",
    description:
      "This delicate gold-plated necklace features a mesmerizing pendant that signifies your birth month framed by Kendra Scott's iconic portrait setting.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb1b1bea-6229-42d1-b79a-9cbec56f6181.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Ever After 59mm Cat Eye Sunglasses",
    brand: "QUAY AUSTRALIA",
    description:
      "Winged temples update staple rounded sunglasses, creating a look that's timelessly cool with a bit of trendy edge.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1b7e876-5aba-4fb2-bc04-3888524b59a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Gradient Aviator Sunglasses",
    brand: "BP.",
    description:
      "Gleaming metallic frames accentuate the classic aviator profile of these effortlessly chic gradient-lens sunglasses.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a51b256-f830-4325-9231-32aba75b3124.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Hana Leather Cardholder",
    brand: "SEE BY CHLOÉ",
    description:
      "Whipstitched ring hardware and a couple of logo charms lend a signature flourish to a finely grained leather cardholder that's a stylish statement accessory.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5be5469e-1eda-4f8b-9423-210d5249223f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Initial Pendant Necklace",
    brand: "BRACHA",
    description:
      "Handcrafted in the USA, this dainty pendant necklace serves as an elegant custom accessory.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2382ed1d-dc30-40c8-b8ef-4e5e71fcbdba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Initial Plaque Pendant Necklace",
    brand: "BP.",
    description:
      "A sparkling crystal accents a plaque pendant with your initial on this fresh take on the classic necklace.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/979eaae1-e720-4b8d-8645-ba9a70296419.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Jo Straw Rancher Hat",
    brand: "BRIXTON",
    description:
      "Grosgrain ribbon circles the crown and brim of a city-sharp rancher hat woven from straw.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e39c1d9-afdb-4116-bc29-ddabfb4fb4f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Joanna Straw Hat",
    brand: "BRIXTON",
    description:
      "This woven straw hat features a wide brim that provides ample shade and Western attitude as you stroll the boardwalk or through the market. A grosgrain band gives it a classic finishing touch that works with any look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/74a34735-883a-4c4c-a914-6cb00f28ed5a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Kånken Sling Shoulder Bag",
    brand: "FJÄLLRÄVEN",
    description:
      "This scaled-tiny version of the classic Kånken backpack offers the same durable construction and rugged utility as the original. A water-repellent finish, plenty of organizational pockets and a shoulder strap add to the everyday versatility of the practical style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/55bf4eda-88ec-4a60-a008-e138d049083c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Kånken Water Resistant Backpack",
    brand: "FJÄLLRÄVEN",
    description:
      "Scandinavian design has long been known for offering practical, functional pieces that are beautiful to behold but that are meant to be used. Originally designed in the '70s for Swedish schoolchildren, a now-iconic backpack is crafted from durable, water-resistant Vinylon F™ fabric and features a stylish, contemporary silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/52fc591d-f4bf-4cc3-a1a6-950d6ce9f847.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Kånken Water Resistant Belt Bag",
    brand: "FJÄLLRÄVEN",
    description:
      "Keep your festival essentials protected against the elements in a sized-small belt bag. A top carry handle and adjustable belt strap allow you to carry the piece in your hand, secure it at your waist, or wear it across your chest for hands-free carry.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58d54997-a761-4685-aaf3-d1bbd136ec89.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Kira Stud Earrings",
    brand: "TORY BURCH",
    description: "Flaunt your Tory Burch love with these lustrous logo studs.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/076d808a-a251-47eb-9c3c-98186bf6a60d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Large Le Pliage Tote",
    brand: "LONGCHAMP",
    description:
      "Smooth, sleek nylon and embossed leather trim make this spacious tote a no-brainer for everyday versatility and elegance. An inside pocket is an organizational must-have, while the water-resistant finish provides enhanced utility for rainy days.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/61bad5c6-cd6b-4173-8147-b8a8b1e33181.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Le Pliage Backpack",
    brand: "LONGCHAMP",
    description:
      "Textured leather trim adds a signature finishing touch to a sleek nylon backpack that's perfectly proportioned for everyday use. The water-resistant lining and interior pocket further the utility of this stylish go-to.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80b48ff4-c97f-411f-98ce-ba28ba925cb6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Le Pliage Filet Knit Shoulder Bag",
    brand: "LONGCHAMP",
    description:
      "Leather handles bring a sophisticated twist to this knit shopping bag that facilitates a waste-free lifestyle.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/18c7581c-2d10-4b7c-898a-a69d6c827cce.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Loaf Canvas Pouch",
    brand: "BP.",
    description:
      "Hold your essentials in this cute canvas pouch covered in a lively print.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c04eb6a-79de-400c-93ce-b47b05933241.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Mama Beaded Stretch Bracelet",
    brand: "LITTLE WORDS PROJECT",
    description:
      "A perfect gift for an expectant mama, a new mama or your mama, this handmade, beaded bracelet is sure to be loved. Each bracelet comes with a tag inscribed with a registration code that can be used to register your bracelet on the Little Words Project app or website, inducting you into the Nice Girl Gang, a community of women dedicated to building each other up.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f753f417-86d9-4907-969a-8c594bb5faae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "McGraw Leather Camera Bag",
    brand: "TORY BURCH",
    description:
      "Hand-sewn pickstitching and a tassel accent add understated vintage character to a richly grained crossbody bag complete with a tonal logo appliqué.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/97cd4dc4-ce90-49eb-9cfe-ae2a2afb2d1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Medium Perfect Leather Belt",
    brand: "MADEWELL",
    description:
      "A curvy buckle secures a versatile belt crafted from richly grained Italian leather.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/415630a4-9005-4411-8228-84c8423b8eab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Metallic Lightweight Wrap",
    brand: "NORDSTROM",
    description:
      "Shimmering metallic threads add gorgeous luster to an event-ready wrap bordered by delicate eyelash fringe.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b92e68c5-14be-4d83-9d8d-74061dbbfcec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Mini Kånken Water Resistant Backpack",
    brand: "FJÄLLRÄVEN",
    description:
      "Scandinavian design has long been known for offering practical, functional pieces that are beautiful to behold but are meant to be used. Originally designed in the '70s for Swedish school children, a now-iconic backpack is crafted from durable, water-resistant Vinylon F™ fabric and features a stylish, contemporary silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b6d96f3-a9c6-4e38-a078-26f9ee0aaa25.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Multistrand Imitation Pearl Necklace",
    brand: "BP.",
    description:
      "Strands of crystals, chain links and imitation pearls make this layered necklace an elegant focal point for your look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8983ca7e-13f5-41d2-9d6a-32c9d650024d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Noosa 55mm Polarized Cat Eye Sunglasses",
    brand: "QUAY AUSTRALIA",
    description:
      "Slightly smaller than Quay's typical frames, these cat-eye sunglasses with a keyhole bridge reflect the label's sophisticated styling and laid-back attitude.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/42dff14b-c95e-485c-b38e-f3da7cb0964d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Packable Braided Paper Straw Panama Hat",
    brand: "NORDSTROM",
    description:
      "This braided paper straw Panama hat packs some extra style points for your next tropical getaway.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2fa99b2d-0aab-49db-ba1c-8cb5382b6066.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Packable Floppy Hat",
    brand: "NORDSTROM",
    description:
      "A matching band wraps the crown of this jetsetting floppy hat designed from flexible straw for easy packing.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b09e13ed-44d9-487c-8bd1-37a2646b25f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Paper Straw Panama Hat",
    brand: "NORDSTROM",
    description:
      "Bring breezy shade to your next trip with this paper straw Panama hat that adds sunny-day ease to any style.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a77a0e6-496f-4ed5-9d33-c01032fbbd6d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Perry Bombé Mini Bag",
    brand: "TORY BURCH",
    description:
      "The iconic double-T medallion is stamped at the front of this sized-down bag crafted of richly pebbled leather in classic and Tory's new swoon-worthy colors. Two zip compartments make organizing your small essentials a breeze.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ce3f3f6-baa0-4ffd-b064-1ed7a7779df1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Rectangular Sunglasses",
    brand: "BP.",
    description:
      "Thick rectangular frames maximize the mod style of these chic, statement-making sunglasses.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f10d27aa-03fd-4737-b6d9-97f0477e105f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Recycled Cashmere Blend Beanie",
    brand: "NORDSTROM",
    description:
      "Keep your head warm in this classic beanie, made more earth-friendly with a mix of traditional and recycled cashmere.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5cb07b80-b5a9-4467-8aa3-43a4dc7cdcf3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Recycled Cashmere Ruana",
    brand: "NORDSTROM",
    description:
      "A soft and sustainable blend of recycled and new cashmere come together on this lightweight woven ruana that provides elevated transitional layering.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1018b55-8505-4909-95f8-a062461733b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Reversible Faux Leather Tote & Wristlet",
    brand: "STREET LEVEL",
    description:
      "With a reversible design, this spacious and soft faux-leather tote offers double the styling options to coordinate with any ensemble. The matching wristlet provides even more versatility and on-the-go organization.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c768a97-1600-4812-8dd2-1cf0c1233dc6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Set of 2 Musée Pendant Necklaces",
    brand: "MADEWELL",
    description:
      "Made of goldtone-plated recycled brass, this necklace set includes a versatile chunky chain and an artful puff pendant.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5725d89-ad33-4d9b-ac0b-d15beed7287c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Set of 3 Butterfly Rings",
    brand: "BP.",
    description:
      "Let your everyday style take flight with this trio of rings alight in sparkling crystals and cubic zirconia.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7e05aca-d261-4ee1-b18d-64ce851aff7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Shimmer Wrap",
    brand: "NORDSTROM",
    description:
      "A shimmery finish and fringe trim make this gauzy wrap a sophisticated style staple.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f6aa62d9-9136-4bca-a8e5-9c840fe75af6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Small Le Pliage Nylon Shoulder Tote",
    brand: "LONGCHAMP",
    description:
      "Embossed leather trim complements the sleek nylon of a must-have tote featuring a water-resistant lining and a fold-flat design for compact storage.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02088fab-cb83-4d06-9bd0-dc1ed335b068.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "small spencer slim leather bifold wallet",
    brand: "KATE SPADE NEW YORK",
    description:
      "A scratch-resisant Saffiano-leather wallet comes in a bulk-free design that's packed with pockets and slots, so you'll be organized in a New York minute.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc96483b-fe7f-4b7a-ad74-dcbd4de6ec14.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Small Traveler Canvas Tote",
    brand: "MARC JACOBS",
    description:
      "Easy top handles and an optional, adjustable strap provide convenient carrying options for this roomy canvas tote that folds flat for storage or travel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98b209e7-eee7-49ea-8f7d-d5131762d60f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Snapshot Crossbody Bag",
    brand: "MARC JACOBS",
    description:
      "An oversize double-J logo gleams from a multicolor bag you can carry as a clutch or sling over your shoulder with the optional crossbody guitar strap.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c10f5ac5-255c-48c8-855e-5538869439cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "spencer leather wristlet card case",
    brand: "KATE SPADE NEW YORK",
    description:
      "This slim, scratch-resistant Saffiano-leather wristlet streamlines your everyday style with handy storage for your cards, cash and coins.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/966d0119-35c6-4ea3-b839-a386bb5c819a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Sweet Dreams 55mm Square Sunglasses",
    brand: "QUAY AUSTRALIA",
    description:
      "Based on the brand's best-selling Odin frames, these shades have the same metal brow bar and nose bridge, but are updated with a squared silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e39fce59-9579-41dc-bf55-b844c3543eb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Cosmetics Case",
    brand: "BÉIS",
    description:
      "Easily organize cosmetics, makeup brushes and other small essentials in a structured travel case with a convenient top carry handle. Inside the main compartment, a removable sleeve features a brush holder on one side and a zip pocket on the reverse to keep small items organized.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20c10fde-9352-4331-aa27-0345c3569edc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Marc Jacobs Small Traveler Mesh Tote",
    brand: "MARC JACOBS",
    description:
      "An interior hanging pocket sends a flare of color through this trend-smart mesh tote bag with a structured silhouette.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/60a83ed6-5c6e-4981-9654-d4cff46e80c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "The Monogram Print Leather Band for Apple Watch®, 38mm/40mm",
    brand: "TORY BURCH",
    description:
      "A signature double-T logo patterns this smooth leather strap that will frame your Apple Watch with gleaming goldtone medallions.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/68056a00-f442-40a2-8330-20d4836ae81c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "The Snapshot Leather Crossbody Bag",
    brand: "MARC JACOBS",
    description:
      "This compact handbag packs a major style punch with gleaming logo hardware and a statement-making strap. Whether worn crossbody or carried as a clutch, the small style is an outfit-making must-have.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56bd5827-4fbe-4723-8625-38489ec25333.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "The Tie Dye Leather Band for Apple® Watch, 38mm/40mm",
    brand: "TORY BURCH",
    description:
      "This tie-dyed leather strap frames an Apple watch with Tory Burch's signature T logo and brings eye-catching style to your look.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/24d82d73-c3e4-49b6-96e3-6f2c1aa0b7d6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Tissue Weight Wool & Cashmere Scarf",
    brand: "NORDSTROM",
    description:
      "Long fringe tips a tissue-weight scarf woven in a soft blend of wool and cashmere.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/85fe114c-610e-4979-bf98-88be184a1f1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "Travel Travel Tote",
    brand: "BÉIS",
    description:
      "Easily organize everything you need for short trips with a multi-function tote designed from sleek, water-resistant canvas. This roomy bag features plenty of interior and exterior pockets, a laptop sleeve and a separate bottom compartment for your shoes. An optional crossbody strap makes going hands-free easy and convenient.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c8ca9c7-d673-4e3c-a247-32007068f662.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "Traveler Canvas Tote",
    brand: "MARC JACOBS",
    description:
      "Easy top handles provide a convenient carrying option for this roomy canvas tote that folds flat for storage or travel.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76e2561e-03f8-4030-997f-5074d9a75e9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    name: "x Paris Total Vibe 54mm Square Sunglasses",
    brand: "QUAY AUSTRALIA",
    description:
      "You'll be a total vibe in square-framed sunnies with striking goldtone branding designed in collaboration with the always glam Paris Hilton.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/473f68a7-73cb-49bb-b259-222e24d13357.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    name: "x Saweetie Almost Ready 56mm Polarized Square Sunglasses",
    brand: "QUAY AUSTRALIA",
    description:
      "A bold, blocky silhouette elevates head-turning sunglasses fitted with polarized gradient lenses for color-true clarity.",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d449c99-d560-4dbe-8677-527e6fb0bb11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

const accessoryData = [
  {
    productName: "'Bandwagon' 51mm Polarized Sunglasses",
    price: 69,
    color: "Matte Tort/ Smoke Mono Polar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65539df9-5a57-4d6d-9f72-d6d6312bbab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "'Bandwagon' 51mm Polarized Sunglasses",
    price: 69,
    color: "Matte Tort/ Smoke Mono Polar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/65539df9-5a57-4d6d-9f72-d6d6312bbab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "21-Inch Rolling Spinner Suitcase",
    price: 198,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fd004cd0-4dbc-431d-9277-653fd4cc5efd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "21-Inch Rolling Spinner Suitcase",
    price: 198,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ec762180-621f-4250-bb53-01224950c77c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "21-Inch Rolling Spinner Suitcase",
    price: 198,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/288ab7dc-16b1-4174-ae75-ea4404d627c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "21-Inch Rolling Spinner Suitcase",
    price: 198,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ec762180-621f-4250-bb53-01224950c77c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "44mm Hyped Up Square Sunglasses",
    price: 55,
    color: "Black / Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88b6aa5a-73ec-4b19-ba7d-2c8c77611622.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "44mm Hyped Up Square Sunglasses",
    price: 55,
    color: "Green / Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ffe90a80-96ce-4c1d-baa9-cd9c23508ef5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "44mm Hyped Up Square Sunglasses",
    price: 55,
    color: "Black / Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88b6aa5a-73ec-4b19-ba7d-2c8c77611622.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "44mm Hyped Up Square Sunglasses",
    price: 55,
    color: "Pink / Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/586651c8-c6b6-4f65-96e4-24467585c5e4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4ct tw Cubic Zirconia Earrings",
    price: 50,
    color: "Platinum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/daf15efe-ad61-468f-b785-8b400d3e993e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4ct tw Cubic Zirconia Earrings",
    price: 50,
    color: "Platinum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/daf15efe-ad61-468f-b785-8b400d3e993e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "4ct tw Cubic Zirconia Earrings",
    price: 50,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81ba9347-5768-4ce2-b9ba-ee5a0c8bc4eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "55mm Cat Eye Blue Light Blocking Glasses",
    price: 7.5,
    color: "Tortoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e8c9e64-2a3e-4598-975a-87fd3cdcc2e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "55mm Cat Eye Blue Light Blocking Glasses",
    price: 7.5,
    color: "Tortoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e8c9e64-2a3e-4598-975a-87fd3cdcc2e5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "58mm Gradient Geometric Sunglasses",
    price: 156,
    color: "Gold/Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/efa09f48-6dc1-481e-822e-59d103d96eeb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "58mm Gradient Geometric Sunglasses",
    price: 156,
    color: "Shiny Rose Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c1b9459-dbc0-4026-9ef5-b46fce9d149a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "58mm Gradient Geometric Sunglasses",
    price: 156,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a2a9fc9-4e6f-4cca-9f61-2cd2237ca3c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "58mm Gradient Geometric Sunglasses",
    price: 156,
    color: "Shiny Light Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9b935e3d-c608-4e0f-8fa4-604e7211e901.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "58mm Gradient Geometric Sunglasses",
    price: 156,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a2a9fc9-4e6f-4cca-9f61-2cd2237ca3c7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "After Hours 50mm Square Sunglasses",
    price: 55,
    color: "Black Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4526efc-3222-41a7-85dc-6f2f28658cae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "After Hours 50mm Square Sunglasses",
    price: 55,
    color: "Espresso Stripe/ Smk Gradient",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f148652c-25fc-4ebc-bbd8-c37fd9a32904.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "After Hours 50mm Square Sunglasses",
    price: 55,
    color: "Black Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a4526efc-3222-41a7-85dc-6f2f28658cae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "After Hours 50mm Square Sunglasses",
    price: 65,
    color: "Tort / Brown Polarized",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1050b910-3c3d-4288-93bd-2577385168d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "After Hours 50mm Square Sunglasses",
    price: 55,
    color: "Tort Black/ Black Fade Lens",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0d235ef4-adca-4d7a-8c60-45b5f56c3a96.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "After Hours 50mm Square Sunglasses",
    price: 55,
    color: "Crystal Caramel/ Smk To Taupe",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d517db7a-8db7-4a85-bb05-0564a35b90af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Allington Straw Tote Bag",
    price: 129,
    color: "Light Honey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36e86167-d3cf-4729-82a8-3543f0cbd88d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Allington Straw Tote Bag",
    price: 129,
    color: "Natural/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3bb3ec78-fce2-4c57-96c8-a0aacd892905.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Allington Straw Tote Bag",
    price: 129,
    color: "Light Honey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/36e86167-d3cf-4729-82a8-3543f0cbd88d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Allington Straw Tote Bag",
    price: 129,
    color: "Peat Brown",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e7dd8f9-6bcc-43bc-b922-32f7d104c93e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Bandwagon 51mm Sunglasses",
    price: 59,
    color: "Matte Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bebcb2a7-ad3b-43da-afa6-41aec9222689.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bandwagon 51mm Sunglasses",
    price: 59,
    color: "Matte Stone",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bebcb2a7-ad3b-43da-afa6-41aec9222689.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Bandwagon 51mm Sunglasses",
    price: 69,
    color: "Raw Sugar/ Ice Blue Mirror",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5056a7fb-7de0-47c4-919d-63ebbcdb68f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Baro Faux Leather Top Handle Crossbody Bag",
    price: 70,
    color: "Bright Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c3033ea-9e25-4466-94fe-c724be69db58.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Baro Faux Leather Top Handle Crossbody Bag",
    price: 70,
    color: "Bright Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c3033ea-9e25-4466-94fe-c724be69db58.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Boy Mom Stretch Bracelet",
    price: 25,
    color: "Blue/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c68280b5-4ae6-4773-b9ab-25997b5b39ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Boy Mom Stretch Bracelet",
    price: 25,
    color: "Blue/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c68280b5-4ae6-4773-b9ab-25997b5b39ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Breeze Print Cover-Up",
    price: 93,
    color: "Capri Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81d3472c-a44d-438d-b7d1-3401dd254836.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Breeze Print Cover-Up",
    price: 93,
    color: "Capri Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/81d3472c-a44d-438d-b7d1-3401dd254836.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Ivory Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3dbccd44-ce05-4261-808e-249a3a20ae4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b07b0b3a-8738-4d2c-ac76-7634e2761596.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Beige Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e6ffd8c-c12f-4a46-a5a3-a2caef1ad8b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Purple Roxxie Abstract",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6167a9e1-fdb7-4b4e-9a14-f22b1f4c8250.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Beige Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e6ffd8c-c12f-4a46-a5a3-a2caef1ad8b7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Green Prisim Check",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d19825e9-0c5b-405d-b894-2c3589defe9c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Light Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/767b161c-f4ec-4a70-8eff-b9fb67004006.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Blue Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23a17457-3356-49da-8362-3b3f815aca2a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Blue- Yellow Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/943d09fb-4537-4ad1-b155-5ab018304766.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Green- Coral Happy Plaid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4e337e6c-5d4b-405b-9bb1-137acede3467.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 19,
    color: "Purple Erwin Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/51dd5587-feff-4884-a009-987cd6a497ac.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Canvas Tote",
    price: 13.3,
    color: "Tan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f2f0130-9d63-4216-b7a5-7875ecd25a9e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 59.6,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/000d13e8-9554-4edf-9741-9868788e03bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 44.7,
    color: "Pink Paradise Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/adacfbb2-b1e6-4637-b7b5-54f9de43a56e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 59.6,
    color: "Pink Shore Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2f1c3b6c-e07e-45eb-8768-0cab1018e3a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 74.49,
    color: "Blue Lake Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/de60bf85-b57d-4006-8c96-bf43d75ec5aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 74.49,
    color: "Pink Cedar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1f95daaa-7c28-4f07-ade8-6b997fb6c256.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 59.6,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/000d13e8-9554-4edf-9741-9868788e03bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 119.2,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0516888f-c9df-43c2-a7fa-a5b6ea9e1530.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 119.2,
    color: "Cashew",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/743c25a6-465f-45c3-9991-55a14d25154e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 89.39,
    color: "Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed5bfa0f-64f9-4242-908a-9f8df4b86695.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 119.2,
    color: "Black Rock",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4b7d4fa2-832b-4552-bb28-0b595eeee704.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 99.99,
    color: "Purple Petal Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7eba354b-8f5d-42b8-b02b-570fa29b5480.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 74.49,
    color: "Purple Imperial",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7d46b86d-0c6a-4d7c-a795-2f3b9cfce7d3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 99.99,
    color: "Grey Micro Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/51f809e5-3d3e-4b35-a031-cb35f821dc4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cashmere Rib Scarf",
    price: 59.6,
    color: "Blue Surf",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/19e0983b-a530-43a2-bc99-ebb813224c59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Cece Straw Woven Box Clutch",
    price: 80,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/75a84da3-0a19-4b75-8339-867ca10f1924.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cece Straw Woven Box Clutch",
    price: 80,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/96138790-fdd8-46d9-9d08-34b43677194c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cece Straw Woven Box Clutch",
    price: 80,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45a9787a-76cb-4acc-974a-d35e90e8ec59.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cece Straw Woven Box Clutch",
    price: 80,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/45a9787a-76cb-4acc-974a-d35e90e8ec59.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Cece Straw Woven Box Clutch",
    price: 80,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/172c6f8e-95f7-4e55-b3a4-c3aa2659121d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "August/Peridot Illusion/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/eb1b1bea-6229-42d1-b79a-9cbec56f6181.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "June/Ivory Mop/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/66f9a39c-a22e-479f-9f2c-cf506d5ea2d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "Gold Bronze Turquoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02b5d183-d4e1-449e-b966-4b6f3cda69ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 55,
    color: "September/Cobalt Catseye/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9f1bd6aa-8494-4a3f-8f0a-7e7a2df1df83.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 55,
    color: "February/Amethyst/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a8aab74-f244-4103-8f79-445f9c9afccd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "Gold Filigree Metal",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bc65274c-4a45-4344-8a9b-6e79bf90ca67.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 55,
    color: "May/ Emerald Cats Eye/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/df9aad29-19fa-4557-ae5a-53af32dd6e93.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 55,
    color: "November/Orange Citrine/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d5d51084-295b-432a-a1ab-6eecf9092c25.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "June/Ivory Mop/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/66f9a39c-a22e-479f-9f2c-cf506d5ea2d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 55,
    color: "December/London Blue/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/43ebbafc-5b54-42da-98d9-5b2c9d0d1ace.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "March/Light Blue Illusion/Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2589418e-3273-4694-b0b7-cb3436d89d9d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "Rhodium Dichroic Glass",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/96b32a10-24da-41be-8cb8-a60e83c2fce6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Elisa Birthstone Pendant Necklace",
    price: 65,
    color: "Gold Bronze Magenta",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9ffd186b-d0f1-4156-8d59-f132f760e3ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ever After 59mm Cat Eye Sunglasses",
    price: 55,
    color: "Matte Black/ Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1b7e876-5aba-4fb2-bc04-3888524b59a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Ever After 59mm Cat Eye Sunglasses",
    price: 55,
    color: "Matte Black/ Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d1b7e876-5aba-4fb2-bc04-3888524b59a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Gradient Aviator Sunglasses",
    price: 7.5,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a51b256-f830-4325-9231-32aba75b3124.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Gradient Aviator Sunglasses",
    price: 7.5,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a51b256-f830-4325-9231-32aba75b3124.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hana Leather Cardholder",
    price: 110,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5be5469e-1eda-4f8b-9423-210d5249223f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hana Leather Cardholder",
    price: 110,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5be5469e-1eda-4f8b-9423-210d5249223f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hana Leather Cardholder",
    price: 110,
    color: "Motty Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/44ffb493-1ad4-48da-a586-b1af11adc320.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Hana Leather Cardholder",
    price: 110,
    color: "Cement Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/831888f5-29da-41da-b3d0-ff4114c2eb9b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-C",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2382ed1d-dc30-40c8-b8ef-4e5e71fcbdba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-N",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/211dcc40-cc80-40af-9b5f-4417f48e6d53.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-U",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c02a73ad-b798-4ace-be8b-5fe489ad4be8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-M",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fccb8b9-531c-45e6-9a6b-9bbfa5e8f24d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-G",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/331a4fef-fb3e-48ba-8f53-07074e36b6b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-A",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/69279d9f-1f10-435d-91c6-0a9820b241ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-O",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/339d37eb-4473-4e08-a5e1-8ebf7b052bb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-Z",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0a0c6dd4-af08-44a0-8bf1-b3722134b013.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-F",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/532bd61f-5417-4120-b286-480da2d1a3aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-I",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/15dc3468-f2c3-4f24-bdb1-646102b9981d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-H",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d0c5b228-04da-4e32-8bce-b1177f8e9794.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-V",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1a1d2dfe-c3f1-43c6-8a39-41bf44808aca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-Q",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/351056cc-f214-45f4-b447-0f009318366d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-M",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3fccb8b9-531c-45e6-9a6b-9bbfa5e8f24d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-E",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cdb8b2b2-f491-4e35-8079-ada7625d2c06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-L",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c95ae90-0ea5-4625-8cb2-79b1f6bd73ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-P",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6415ef4f-46c7-45d7-85c4-e0803154268e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-Y",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b929d791-8a2c-488e-8f0f-a97de7e3e199.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-T",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a79d57f8-1324-4883-83dd-5929c74ed637.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-B",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0d311058-6a30-4530-be27-24b20b91b77c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-S",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/488b6bd1-9613-405e-a916-520a326c502b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-J",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1520620a-a139-4596-b517-6369f2a47a6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-K",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/130d502d-af42-4cf5-a326-e6000be11894.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-W",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/179796ce-6407-4e7f-b932-d887c842d1b8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-R",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f118a6e5-4788-49ac-857b-691ab3207230.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-D",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f1724e2c-fd16-480e-af71-c787dc7ff366.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Pendant Necklace",
    price: 50,
    color: "Gold-X",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbef189f-3bf0-4433-a29f-aa5955a8a93f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "T- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/979eaae1-e720-4b8d-8645-ba9a70296419.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "Q- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/85c7c398-54f3-43fe-bab3-3a8c21990c90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "O- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d3893896-3393-4c6b-838d-75334161fcea.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "Z- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4f88006f-83ec-406e-aac9-840f8e5de2c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "R- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/af211aa1-9ac0-4c06-84bf-328bfadff3c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "E- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c75ce2b0-9247-42bc-9726-33a86a3c0c6c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "V- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b4ff41c7-105f-4c52-a8df-6a2682d60fa6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "A- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16e02f89-417d-42f4-91b0-901b4173be37.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "L- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c3a124ef-1ce9-40ee-820f-8ffe5acbcab1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "I- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d9e33011-1be0-4d24-a790-6953d1008ad5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "C- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6895b2f4-9372-46e5-bb27-96f2a02eec17.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "D- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c5c70ef7-307c-42ef-9c09-dc29fb24f808.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "B- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e99b2921-baa3-4d36-9078-99f189d5f6c9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "Y- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c73d014f-0ca9-4a7d-90b8-b84dc6fa3cba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "F- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0af97961-96d0-4952-9d23-98e483e9b44f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "S- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/665fa339-1d42-4d18-8fda-4c32945cb24a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "K- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95ce135a-72d3-4e3d-aa55-1f48119817e3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "A- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/16e02f89-417d-42f4-91b0-901b4173be37.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Initial Plaque Pendant Necklace",
    price: 9,
    color: "J- Clear- Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/86d13f36-0bf2-468b-9a0e-ed615ff2d578.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jo Straw Rancher Hat",
    price: 79,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e39c1d9-afdb-4116-bc29-ddabfb4fb4f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jo Straw Rancher Hat",
    price: 79,
    color: "Natural",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e39c1d9-afdb-4116-bc29-ddabfb4fb4f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Jo Straw Rancher Hat",
    price: 79,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bb504dd6-e9bb-4752-9a69-88f81cc567a8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Joanna Straw Hat",
    price: 55,
    color: "Honey/Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/74a34735-883a-4c4c-a914-6cb00f28ed5a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Joanna Straw Hat",
    price: 55,
    color: "Honey/Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/74a34735-883a-4c4c-a914-6cb00f28ed5a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Royal Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/55bf4eda-88ec-4a60-a008-e138d049083c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Mint Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dae41ca4-cb72-40d9-abe2-b49faba1ab28.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Pastel Lavendar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/47ba7501-7f1b-47ea-92f5-b0956e3de2e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Ochre",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7c18ba0-4b66-4fe9-a93d-61c3b6b84432.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Arctic Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/caa68ad2-b74d-4d1d-92b6-acb5e85bef48.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13734816-b6ff-4704-8c94-45d8a840a3ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d66b24d3-d181-48be-b0e4-b10baf3eec8b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Corn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a0f753f-509e-40fa-8526-b402cda33234.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Deep Turquoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9a9a9857-4782-41df-ae77-06701bb7963c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Deep Forest",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f2b0ab6b-11b1-4e9a-852e-fb22a2c55a0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Flamingo Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6345fb3c-362d-4248-b7df-b3f6e116d06b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Fog",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d7c662af-8b0e-4ba5-a536-f6405401967d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Frost Green/ Peach Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76cbb987-54e5-4a5d-9a83-772781f35411.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Sling Shoulder Bag",
    price: 65,
    color: "Fog",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d7c662af-8b0e-4ba5-a536-f6405401967d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Sky Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/52fc591d-f4bf-4cc3-a1a6-950d6ce9f847.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Acorn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/13f0eb9f-edb5-4908-8154-ce8020e8a9a3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Rowan Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7b3fe142-dd11-41a2-b99f-18e1a74a048b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Fog",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bbe98af5-ab66-4988-8ffd-bfdc375da524.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Orchid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b85379e3-5c64-457d-a7d2-702964d971ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Foliage Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c6c4b6fa-7303-49f4-95c2-df39d7abefce.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Royal Blue-Flamingo Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f39ce327-e24a-4529-842c-837561d85d1c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Ochre",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2437a47a-0909-4989-87e2-4720651b58de.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Flamingo Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6a556795-5014-4c1a-8fb4-7836a7bc1edc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Frost Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/008239eb-afd3-4e9a-b78a-8289cf70c8be.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Glacier Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8f3123b-f3d9-4b04-b424-025b00a4c2c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Pastel Lavendar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7596b0e2-6b43-481b-8a10-b932ce50e426.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Graphite-Un Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0d9e65cf-bd8e-401c-ac13-4ef72abf4fe2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Dahlia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8920eb92-5941-4c5d-abd4-64819742638a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2d4f202e-c2e1-47d1-b84f-4941f8d620bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Guacamole",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/db9385fc-b093-4fa0-8e91-5a660373caee.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Royal Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a7f5884d-a536-4c3a-8df8-0abe7de87e29.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Clay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b85d9f97-28b9-4238-b89f-71d8d357136a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Super Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d613adce-55e3-48f9-b122-fb8de06dc9ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Spruce Green Clay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/442b1fee-7600-4864-a414-dd080cfdb224.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Autumn Leaf",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/403d1d3f-3572-49db-9f15-949bf6f79583.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Royal Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c0071988-1326-4030-85c0-05617b6f2dec.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Forest Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f795d7af-c079-4f41-88ae-95211fcf3df4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Warm Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5366106c-7a32-4bae-8eeb-e5615ca8a1df.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Corn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a846d22a-2f30-4e70-b4ec-3d7333ede319.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Navy-Long Stripes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/41d4558d-7a29-4791-8049-523b76cbe8b1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Deep Turquoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3f3925de-e093-40f4-820e-8c44d1cbb624.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Graphite-Un Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0d9e65cf-bd8e-401c-ac13-4ef72abf4fe2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Sky Blue-Light Oak",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/55613662-3adc-4993-b997-b00edfb65af6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Plum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8347f84c-27c2-41c3-a563-67c192966c00.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Mint",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c8ede07f-64a8-4d41-860c-dc9d04bf3cc2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d852cba4-6273-4eb8-90f5-b29f486ec5ea.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Light Oak",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c0d58f4-e15e-4faa-b527-3c27ea235e15.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Spicy Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/11c2212d-e096-4dc5-bcbf-10684fd3d5be.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Graphite",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c15d11cb-6c1d-4a4c-a6a2-a19a07d08b5e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Spruce Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b55e2356-3f99-4db1-b37b-b3495a33bb63.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Backpack",
    price: 80,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cc372d80-a801-4ddf-89ab-c528cb58128c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Belt Bag",
    price: 50,
    color: "Fog",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/58d54997-a761-4685-aaf3-d1bbd136ec89.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Belt Bag",
    price: 50,
    color: "Ochre",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/69ae5d78-b586-4aae-b2d5-5246d5146d2a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Belt Bag",
    price: 50,
    color: "Flamingo Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0c474e9a-54ea-490b-9796-559e7b32caa6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Belt Bag",
    price: 50,
    color: "Deep Turquoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/469f7581-ef05-46ef-a051-1d7791b1ac42.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Belt Bag",
    price: 50,
    color: "Royal Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b20f8976-1303-4649-a27d-5ef50deb70bf.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Belt Bag",
    price: 50,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fcf39cf-9fab-4f82-b96d-1138bc621e7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kånken Water Resistant Belt Bag",
    price: 50,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4fcf39cf-9fab-4f82-b96d-1138bc621e7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Kira Stud Earrings",
    price: 58,
    color: "Tory Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/076d808a-a251-47eb-9c3c-98186bf6a60d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Stud Earrings",
    price: 58,
    color: "Tory Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/566b29fb-b224-4c49-aa63-89854cc137fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Stud Earrings",
    price: 58,
    color: "Rose Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/548470e0-3909-4724-b82c-b24e37be7bb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Kira Stud Earrings",
    price: 58,
    color: "Rose Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/548470e0-3909-4724-b82c-b24e37be7bb9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Large Le Pliage Tote",
    price: 145,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/61bad5c6-cd6b-4173-8147-b8a8b1e33181.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Large Le Pliage Tote",
    price: 145,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/61bad5c6-cd6b-4173-8147-b8a8b1e33181.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Large Le Pliage Tote",
    price: 145,
    color: "New Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80ab354f-f5b4-4d50-b10f-091114f78ad3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Large Le Pliage Tote",
    price: 145,
    color: "Deep Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2c3cbf4e-e8e6-4fac-8a12-8cc1831c2159.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Large Le Pliage Tote",
    price: 145,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/34c5789c-d0ae-4efe-a586-0f26a2615598.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Large Le Pliage Tote",
    price: 145,
    color: "Paper",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aad8fa5e-e7fe-4536-9eaa-2b31b3b706f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Large Le Pliage Tote",
    price: 145,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8e8e9e3-7428-4a0d-8ce9-1230cf5d513f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Backpack",
    price: 125,
    color: "Deep Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80b48ff4-c97f-411f-98ce-ba28ba925cb6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Backpack",
    price: 125,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/52e21332-c6a1-4a72-8ef2-5945dc2c5e4e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Backpack",
    price: 125,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1816b5b7-e261-41c7-9210-82ca502e5037.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Backpack",
    price: 125,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e5180997-3974-45b6-b0cd-fb1099ccf5c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Backpack",
    price: 125,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/685f2b0e-e73d-45a6-b46d-7b59e3913498.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Backpack",
    price: 125,
    color: "Deep Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/80b48ff4-c97f-411f-98ce-ba28ba925cb6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Filet Knit Shoulder Bag",
    price: 110,
    color: "Lemon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/18c7581c-2d10-4b7c-898a-a69d6c827cce.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Filet Knit Shoulder Bag",
    price: 110,
    color: "Lemon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/18c7581c-2d10-4b7c-898a-a69d6c827cce.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Filet Knit Shoulder Bag",
    price: 110,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3283538d-e3ec-4969-b3b9-81fd4b014c16.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Filet Knit Shoulder Bag",
    price: 110,
    color: "Ecru",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a36ac99-8aca-4363-9eeb-ebf22e0db0ba.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Le Pliage Filet Knit Shoulder Bag",
    price: 95,
    color: "Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fbc6e4b7-70b3-4574-8d7c-3a6d6e6f55b5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 6,
    color: "Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c04eb6a-79de-400c-93ce-b47b05933241.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Pink Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c09e1c51-ac62-461c-be63-60969068add9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49b1614a-26a0-4227-9bfd-7257783680fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Blue- Pink Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/229264fb-5938-4871-9998-7169015cd86b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Black Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3eaf9155-7227-4fc6-b864-29839852f2b6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Coral- White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5573f9ca-a3bd-46e0-92ca-817044084e16.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/49b1614a-26a0-4227-9bfd-7257783680fd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Blue Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c7b737e2-76a7-40d8-979d-0e9e8a319b96.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Green- White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/86305760-302a-4768-bbd6-b81de30525b9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Pink- Purple Happy Plaid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/aad896bd-49c0-4e16-94aa-6df8ec4630c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Loaf Canvas Pouch",
    price: 12,
    color: "Ivory Misty Floral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f3e5ecb9-ea31-4cc9-b69b-b88021dbff2e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mama Beaded Stretch Bracelet",
    price: 25,
    color: "Arrow/ Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f753f417-86d9-4907-969a-8c594bb5faae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mama Beaded Stretch Bracelet",
    price: 25,
    color: "Pink/ White/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b6e5be22-677a-41a1-ab96-5f970c0d08c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mama Beaded Stretch Bracelet",
    price: 25,
    color: "Arrow/ Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f753f417-86d9-4907-969a-8c594bb5faae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mama Beaded Stretch Bracelet",
    price: 25,
    color: "Gold/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ba668d85-b980-40fd-b09c-725d49e04d29.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mama Beaded Stretch Bracelet",
    price: 30,
    color: "Creampuff/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a0ea4b0a-b77b-4ac1-b350-500682ace41d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mama Beaded Stretch Bracelet",
    price: 25,
    color: "Creampuff/ White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ba30e7ba-984e-4714-a42f-f803b268e498.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "McGraw Leather Camera Bag",
    price: 298,
    color: "Brie",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/97cd4dc4-ce90-49eb-9cfe-ae2a2afb2d1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "McGraw Leather Camera Bag",
    price: 328,
    color: "Tiramisu",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8cdb0920-cf0f-463e-9fdc-8b75221ea96c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "McGraw Leather Camera Bag",
    price: 328,
    color: "Blue Celadon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd2e2851-c892-421b-8428-861eb759cc7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "McGraw Leather Camera Bag",
    price: 328,
    color: "Meadowsweet",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/560fe4b9-5f0b-42a5-8255-e5b479165754.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "McGraw Leather Camera Bag",
    price: 328,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5a482bbc-50ab-460f-af4a-41b7c3a61b2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "McGraw Leather Camera Bag",
    price: 328,
    color: "Blue Celadon",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd2e2851-c892-421b-8428-861eb759cc7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "Pecan/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/415630a4-9005-4411-8228-84c8423b8eab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "Pecan/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/415630a4-9005-4411-8228-84c8423b8eab.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Medium Perfect Leather Belt",
    price: 48,
    color: "True Black/ Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9cbc9461-b361-4e5f-b132-4f6feeaf60c4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metallic Lightweight Wrap",
    price: 39,
    color: "Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b92e68c5-14be-4d83-9d8d-74061dbbfcec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metallic Lightweight Wrap",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7251d0d9-83ea-46d2-b45b-609512b4d7df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metallic Lightweight Wrap",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7251d0d9-83ea-46d2-b45b-609512b4d7df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Metallic Lightweight Wrap",
    price: 39,
    color: "Silver",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2bc3e41-529d-43fd-970c-27b69c864fa7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Peach Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8b6d96f3-a9c6-4e38-a078-26f9ee0aaa25.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Graphite",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5140b235-0dbc-47aa-a9d8-826e2e34458d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Orchid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/dd3a77e7-0ad5-45ca-afaf-26009bbf453b.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Guacamole",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/856139bb-d83f-4520-996a-865c5fd93d50.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Navy-Warm Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b405e431-469e-471b-9743-60556554df01.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Ochre",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c61bacb-e290-4a08-9eda-ba388381de72.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Sky Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6c883968-23b0-474e-998f-060eea7b5228.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Pink-Long Stripes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e39f1d38-ccea-4495-810d-a395d26421f2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Dahlia",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0b67ae7c-eca6-48ae-8a42-4970e2c37f6a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3d812d9a-a246-4c79-b102-0a0cb6d1000d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Foliage Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/59fc7787-707f-42a2-acab-d365f123ed53.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Fog",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ff39abbc-d9ac-4b22-926d-47546438da5a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Corn",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/557ec1b2-8ba2-49fd-8e64-ea6051954047.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Flamingo Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f8774331-e793-4244-9490-69a4fdc77e21.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9c0f8b26-00ea-4ecc-aa81-8cb756da5998.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Forest Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5fce4f3a-100f-4c3d-8505-0d2da03c2382.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Glacier Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5f87d0b3-d062-423d-bc2b-0ac6c012c60e.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Plum",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1e78f4c9-29a9-42e8-a232-c5a608b93d06.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Sky Blue-Light Oak",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1ccfbdb6-af83-436a-bf36-8573763c01b4.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Spicy Orange",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7295ef1d-1ed8-42ee-8000-1eb3dd9c4397.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Navy-Long Stripes",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ae2354cc-1fe1-43d2-ae18-0ec04b3af414.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Super Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/304e337c-f84d-48df-93fd-eb0195fc7746.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a67b96ad-e376-40d8-b103-2e2ede490bcc.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Deep Turquoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/88dd6c7a-c18e-4cf3-932e-2319a123d059.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Birch Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d0cce1ce-b955-4103-b9df-c12283a208f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Deep Forest",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c97325e0-f29d-4ecf-a551-937cd98f0529.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Forest Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5fce4f3a-100f-4c3d-8505-0d2da03c2382.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Air Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/9150b932-f4e0-47de-beea-a0de4c3c4f65.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Spruce Green-Clay",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f4b780bd-5489-4bd6-a7eb-29fe5cf05311.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Royal Purple",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc6ab2cc-7a01-48fa-b8c1-fca69aced594.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Warm Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/54a14fc3-9cb5-45ca-9f5a-0d9860e82507.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Mini Kånken Water Resistant Backpack",
    price: 70,
    color: "Ox Red-Royal Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0f4c2599-6fdc-4a37-b6d8-2701eece6e3d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Multistrand Imitation Pearl Necklace",
    price: 8.99,
    color: "Gold- White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8983ca7e-13f5-41d2-9d6a-32c9d650024d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Multistrand Imitation Pearl Necklace",
    price: 8.99,
    color: "Gold- White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8983ca7e-13f5-41d2-9d6a-32c9d650024d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Multistrand Imitation Pearl Necklace",
    price: 8.99,
    color: "Silver- White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ed7b4ed8-ccce-4b22-a7f3-d181cc1c146c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Noosa 55mm Polarized Cat Eye Sunglasses",
    price: 55,
    color: "Black To Tort / Brown Fade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/42dff14b-c95e-485c-b38e-f3da7cb0964d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Noosa 55mm Polarized Cat Eye Sunglasses",
    price: 55,
    color: "Black To Tort / Brown Fade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/42dff14b-c95e-485c-b38e-f3da7cb0964d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Braided Paper Straw Panama Hat",
    price: 29,
    color: "Pink Neutral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2fa99b2d-0aab-49db-ba1c-8cb5382b6066.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Braided Paper Straw Panama Hat",
    price: 29,
    color: "Pink Neutral",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2fa99b2d-0aab-49db-ba1c-8cb5382b6066.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Floppy Hat",
    price: 39,
    color: "Tan Dark",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b09e13ed-44d9-487c-8bd1-37a2646b25f7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Floppy Hat",
    price: 39,
    color: "Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ad72f6ea-0985-4ea3-82aa-779c9cc3bb07.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Floppy Hat",
    price: 39,
    color: "Lilac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ca11c7d8-b57a-431a-8aaf-9d0101c04e57.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Floppy Hat",
    price: 39,
    color: "Pink Cedar",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8e8ebafb-90cb-41b3-b798-744bf2d5ad60.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Floppy Hat",
    price: 39,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6cb28ce5-1d7f-4090-9c80-c1fe3ac246ee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Floppy Hat",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bef4efeb-c00a-4935-8498-a09b3f755d46.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Packable Floppy Hat",
    price: 39,
    color: "White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bef4efeb-c00a-4935-8498-a09b3f755d46.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Paper Straw Panama Hat",
    price: 39,
    color: "Tan Dark Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2a77a0e6-496f-4ed5-9d33-c01032fbbd6d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Paper Straw Panama Hat",
    price: 39,
    color: "Pink Light Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27aa3165-af5d-4cac-a186-1a6b5e14a24a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Paper Straw Panama Hat",
    price: 39,
    color: "White Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/092d12fb-a322-4e39-9044-1636c1f1d909.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Paper Straw Panama Hat",
    price: 39,
    color: "Ivory Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d01617ad-420b-4580-aafa-8ff8201da7cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Paper Straw Panama Hat",
    price: 39,
    color: "Ivory Combo",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d01617ad-420b-4580-aafa-8ff8201da7cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Perry Bombé Mini Bag",
    price: 298,
    color: "Golden Sunset",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ce3f3f6-baa0-4ffd-b064-1ed7a7779df1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Perry Bombé Mini Bag",
    price: 298,
    color: "Golden Sunset",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3ce3f3f6-baa0-4ffd-b064-1ed7a7779df1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Perry Bombé Mini Bag",
    price: 298,
    color: "Gray Heron",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d26aa9f8-2a90-41b5-90bc-7e7acdb9a35f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Perry Bombé Mini Bag",
    price: 298,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a2569372-981a-430f-b38d-86698e5bc8c1.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Rectangular Sunglasses",
    price: 15,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f10d27aa-03fd-4737-b6d9-97f0477e105f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rectangular Sunglasses",
    price: 15,
    color: "Mint Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2dab8d06-fb73-4937-be3b-ef4712367397.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rectangular Sunglasses",
    price: 9,
    color: "Milky Yellow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/28c144b9-e57f-49fa-9595-26ac4bcefefd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rectangular Sunglasses",
    price: 15,
    color: "Mint Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2dab8d06-fb73-4937-be3b-ef4712367397.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rectangular Sunglasses",
    price: 15,
    color: "Black- White Check",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4d3c63cd-fd04-4703-9a6f-5b6488e2e383.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rectangular Sunglasses",
    price: 15,
    color: "Black- White",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/d4d940e3-0806-4107-8844-7a339b2aa8f1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Rectangular Sunglasses",
    price: 15,
    color: "Tortoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/ba2001cf-3177-4f98-a85c-c8513c197f3b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 15.6,
    color: "Black Rock",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5cb07b80-b5a9-4467-8aa3-43a4dc7cdcf3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 15.6,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/427dd44c-ead0-4d85-b83a-4f211dd29da3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 21.99,
    color: "Purple Petal Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d65b383-0347-454a-a2b9-ffb082fbedb4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 15.6,
    color: "Grey Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6f594a00-56a2-4d70-ac9c-416737dbf68c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 15.6,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/427dd44c-ead0-4d85-b83a-4f211dd29da3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 15.6,
    color: "Blue Lake Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/33a8346c-1d31-4f10-b952-46bcd1d0604b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 15.6,
    color: "Pink Shore Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/72eebe58-edb2-4fab-8cf8-13c3eb262112.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 31.2,
    color: "Ivory Cloud",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e639a66-687d-4cb1-9ad8-d0697b2bdec9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Blend Beanie",
    price: 15.6,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/583c1007-a6de-4205-85e3-6a6c5018ff31.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Ruana",
    price: 52.15,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1018b55-8505-4909-95f8-a062461733b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Ruana",
    price: 52.15,
    color: "Blue Drizzle Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c35b89a-7ba7-4dd5-a1ef-5436a127ed61.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Recycled Cashmere Ruana",
    price: 52.15,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c1018b55-8505-4909-95f8-a062461733b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Reversible Faux Leather Tote & Wristlet",
    price: 49,
    color: "Taupe/ Ivory",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c768a97-1600-4812-8dd2-1cf0c1233dc6.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Reversible Faux Leather Tote & Wristlet",
    price: 49,
    color: "Black/ Brown Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4516decb-469f-4f6e-92a6-08b78669c092.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Reversible Faux Leather Tote & Wristlet",
    price: 49,
    color: "Black/ Brown Leopard",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4516decb-469f-4f6e-92a6-08b78669c092.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Reversible Faux Leather Tote & Wristlet",
    price: 49,
    color: "Black/ Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/95698880-f204-4297-b2f0-3f76543425d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Set of 2 Musée Pendant Necklaces",
    price: 28.8,
    color: "Vintage Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5725d89-ad33-4d9b-ac0b-d15beed7287c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Set of 2 Musée Pendant Necklaces",
    price: 28.8,
    color: "Vintage Gold",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f5725d89-ad33-4d9b-ac0b-d15beed7287c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Set of 3 Butterfly Rings",
    price: 12,
    color: "Gold- Clear",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7e05aca-d261-4ee1-b18d-64ce851aff7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Set of 3 Butterfly Rings",
    price: 12,
    color: "Gold- Clear",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f7e05aca-d261-4ee1-b18d-64ce851aff7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shimmer Wrap",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f6aa62d9-9136-4bca-a8e5-9c840fe75af6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shimmer Wrap",
    price: 39,
    color: "Pink Chintz",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5aa0c4b6-537b-4a67-a9cf-e121510750fb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shimmer Wrap",
    price: 39,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/f6aa62d9-9136-4bca-a8e5-9c840fe75af6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shimmer Wrap",
    price: 39,
    color: "Tan Desert Shimmer",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/1c934f71-242d-45fe-9ca4-a33d041b3560.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Shimmer Wrap",
    price: 39,
    color: "Blue Meridian",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/23d9e13f-e779-40fb-a1eb-7252f7d0994e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Small Le Pliage Nylon Shoulder Tote",
    price: 125,
    color: "Deep Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02088fab-cb83-4d06-9bd0-dc1ed335b068.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Le Pliage Nylon Shoulder Tote",
    price: 125,
    color: "Blush",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7fe8e3c6-a66e-44ca-b23c-86f7a76961e0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Le Pliage Nylon Shoulder Tote",
    price: 125,
    color: "Deep Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/02088fab-cb83-4d06-9bd0-dc1ed335b068.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Le Pliage Nylon Shoulder Tote",
    price: 125,
    color: "Cognac",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/7a5e4a59-60f4-4e27-9c08-d7412cde9147.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Le Pliage Nylon Shoulder Tote",
    price: 125,
    color: "New Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4f95b312-03af-4ac3-a80d-6a901e06a45f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Le Pliage Nylon Shoulder Tote",
    price: 125,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/218cd7ad-e20f-4456-9a86-8550b8bf402f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "small spencer slim leather bifold wallet",
    price: 110,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fc96483b-fe7f-4b7a-ad74-dcbd4de6ec14.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "small spencer slim leather bifold wallet",
    price: 110,
    color: "Serene Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf2f5d95-7f08-4182-bc0f-ddc175dd095a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "small spencer slim leather bifold wallet",
    price: 110,
    color: "Warm Beige/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c334a0f0-22f8-43aa-acbe-637e91d4cace.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "small spencer slim leather bifold wallet",
    price: 110,
    color: "Orchid",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/cf0cb57c-335a-4de4-a1c8-c61722d5bff1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "small spencer slim leather bifold wallet",
    price: 110,
    color: "Warm Beige/ Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c334a0f0-22f8-43aa-acbe-637e91d4cace.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Small Traveler Canvas Tote",
    price: 195,
    color: "Slate Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/98b209e7-eee7-49ea-8f7d-d5131762d60f.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Traveler Canvas Tote",
    price: 195,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/33ff6f3f-33b3-4b5a-b066-f53c0d2f9460.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Traveler Canvas Tote",
    price: 195,
    color: "Blue Shadow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0881923e-b7d5-4d40-95ae-b64697526b53.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Small Traveler Canvas Tote",
    price: 195,
    color: "Blue Shadow",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0881923e-b7d5-4d40-95ae-b64697526b53.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Snapshot Crossbody Bag",
    price: 295,
    color: "New Blue Sea Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/c10f5ac5-255c-48c8-855e-5538869439cd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Snapshot Crossbody Bag",
    price: 295,
    color: "New Black Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c1fa4f0-a7cf-4abf-9acb-5bb811b89867.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Snapshot Crossbody Bag",
    price: 295,
    color: "New Black Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8c1fa4f0-a7cf-4abf-9acb-5bb811b89867.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "spencer leather wristlet card case",
    price: 58.8,
    color: "Morning Sky",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/966d0119-35c6-4ea3-b839-a386bb5c819a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "spencer leather wristlet card case",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/40d27632-90a8-41aa-9892-3d5468322a97.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "spencer leather wristlet card case",
    price: 58.8,
    color: "Morning Sky",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/966d0119-35c6-4ea3-b839-a386bb5c819a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "spencer leather wristlet card case",
    price: 98,
    color: "Serene Pink",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6fae56f9-fcfe-4cef-9456-de10780c2f69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweet Dreams 55mm Square Sunglasses",
    price: 55,
    color: "Tort/ Brown Fade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/e39fce59-9579-41dc-bf55-b844c3543eb7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweet Dreams 55mm Square Sunglasses",
    price: 55,
    color: "Milky Tort/ Smoke Fade",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/6d75ec7d-168b-4030-8755-85d8b7dfc93e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweet Dreams 55mm Square Sunglasses",
    price: 55,
    color: "Black/ Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a31bdc79-ffdc-4f30-966a-8a8c259e4d7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweet Dreams 55mm Square Sunglasses",
    price: 55,
    color: "Snake Print / Brown To Tan",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/b498a2fa-d75b-4c7e-b7c9-234d36192a16.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Sweet Dreams 55mm Square Sunglasses",
    price: 55,
    color: "Black/ Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a31bdc79-ffdc-4f30-966a-8a8c259e4d7d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Cosmetics Case",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20c10fde-9352-4331-aa27-0345c3569edc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Cosmetics Case",
    price: 68,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/20c10fde-9352-4331-aa27-0345c3569edc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Marc Jacobs Small Traveler Mesh Tote",
    price: 250,
    color: "Bright Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/60a83ed6-5c6e-4981-9654-d4cff46e80c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Marc Jacobs Small Traveler Mesh Tote",
    price: 250,
    color: "Bright Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/60a83ed6-5c6e-4981-9654-d4cff46e80c0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Monogram Print Leather Band for Apple Watch®, 38mm/40mm",
    price: 66.5,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/68056a00-f442-40a2-8330-20d4836ae81c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Monogram Print Leather Band for Apple Watch®, 38mm/40mm",
    price: 66.5,
    color: "Navy",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/68056a00-f442-40a2-8330-20d4836ae81c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Snapshot Leather Crossbody Bag",
    price: 295,
    color: "Black/ Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56bd5827-4fbe-4723-8625-38489ec25333.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Snapshot Leather Crossbody Bag",
    price: 295,
    color: "New Cloud Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/bd215bba-7e0f-4698-93ab-acb0e3651cac.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Snapshot Leather Crossbody Bag",
    price: 295,
    color: "Black/ Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/56bd5827-4fbe-4723-8625-38489ec25333.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Snapshot Leather Crossbody Bag",
    price: 295,
    color: "New Baby Pink/ Red",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/85929261-0364-4dad-bded-95cd4eda62bd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Snapshot Leather Crossbody Bag",
    price: 325,
    color: "Black/ Honey Ginger Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/2fbc985a-bf5d-4133-ace1-c7dbd816366a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Snapshot Leather Crossbody Bag",
    price: 325,
    color: "Aspen Green Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/507dac66-51b9-4b1e-a20e-c4c9e1498449.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Snapshot Leather Crossbody Bag",
    price: 325,
    color: "Yellow Cream Multi",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/388055f0-ff55-42d7-a941-1ab3c5ab3a55.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "The Tie Dye Leather Band for Apple® Watch, 38mm/40mm",
    price: 47.49,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/24d82d73-c3e4-49b6-96e3-6f2c1aa0b7d6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "The Tie Dye Leather Band for Apple® Watch, 38mm/40mm",
    price: 47.49,
    color: "Blue",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/24d82d73-c3e4-49b6-96e3-6f2c1aa0b7d6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tissue Weight Wool & Cashmere Scarf",
    price: 59.4,
    color: "Cashew",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/85fe114c-610e-4979-bf98-88be184a1f1b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tissue Weight Wool & Cashmere Scarf",
    price: 59.4,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fd2b6a79-0dfe-4a55-b4e1-4bd0a11ccddb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tissue Weight Wool & Cashmere Scarf",
    price: 59.4,
    color: "Red Chinoise",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/fd2b6a79-0dfe-4a55-b4e1-4bd0a11ccddb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tissue Weight Wool & Cashmere Scarf",
    price: 69.3,
    color: "Beige Oat Medium Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/12ef2758-fad1-4ccf-8000-f2fd8e80ed40.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Tissue Weight Wool & Cashmere Scarf",
    price: 74.25,
    color: "Grey Medium Heather",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/3826a624-03f0-4ad6-ac13-f27891a9b852.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "Travel Travel Tote",
    price: 98,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c8ca9c7-d673-4e3c-a247-32007068f662.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Travel Travel Tote",
    price: 98,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/4c8ca9c7-d673-4e3c-a247-32007068f662.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Travel Travel Tote",
    price: 98,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/5c127603-1132-455b-8d92-59eb5f3d1bb2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Travel Travel Tote",
    price: 98,
    color: "Grey",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/a09b0685-818d-430d-9fa8-ec0c8f032737.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Traveler Canvas Tote",
    price: 215,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76e2561e-03f8-4030-997f-5074d9a75e9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Traveler Canvas Tote",
    price: 215,
    color: "Black",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/18ac85c1-4b6e-4345-b902-38ea1f0046d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Traveler Canvas Tote",
    price: 215,
    color: "Beige",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/76e2561e-03f8-4030-997f-5074d9a75e9a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "Traveler Canvas Tote",
    price: 215,
    color: "Slate Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/31067867-d362-454d-8112-dc1847b242c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
  },
  {
    productName: "x Paris Total Vibe 54mm Square Sunglasses",
    price: 65,
    color: "Black / Smoke Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/473f68a7-73cb-49bb-b259-222e24d13357.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Paris Total Vibe 54mm Square Sunglasses",
    price: 65,
    color: "Black / Smoke Green",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/473f68a7-73cb-49bb-b259-222e24d13357.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Paris Total Vibe 54mm Square Sunglasses",
    price: 65,
    color: "Milky Tortoise / Smoke",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/25d744ca-9ff9-4d4c-b678-7a013a6c0453.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Saweetie Almost Ready 56mm Polarized Square Sunglasses",
    price: 85,
    color: "Ivory / Brown Polarized",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/8d449c99-d560-4dbe-8677-527e6fb0bb11.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Saweetie Almost Ready 56mm Polarized Square Sunglasses",
    price: 85,
    color: "Black / Smoke Polarized Lens",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27468e70-c3fb-4bbd-9155-2e50011d8336.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
  {
    productName: "x Saweetie Almost Ready 56mm Polarized Square Sunglasses",
    price: 85,
    color: "Black / Smoke Polarized Lens",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/27468e70-c3fb-4bbd-9155-2e50011d8336.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  },
];

module.exports = {
  dressesProduct,
  dressData,
  topsProduct,
  topsData,
  leggingsProduct,
  leggingsData,
  jeansProduct,
  jeansData,
  pantsProduct,
  pantsData,
  sweatersProduct,
  sweatersData,
  skirtProduct,
  skirtData,
  shoeProduct,
  shoeData,
  beltProduct,
  beltData,
  accessoriesProduct,
  accessoryData,
};

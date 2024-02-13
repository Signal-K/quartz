---
title: Narrative Structure
tags:
    - Star Sailors
    - Narrative
    - Planning
---

Structure narrative
How will structures be used in Star Sailors?
Imports/Links
- All structures will be based on a sector of an anomaly (for now, starting with planets).
- All structures either exist on  a sector, or where launched from  a sector
	- A note that structures that were launched will have a static command module that will stay on the anomaly's surface (or whatever synonym for surface is applicable for non-planetary anomalies). I do not think this will be a mere cosmetic decision

Sectors
Setup & backend implementation
- Potentially it might be worth having a python/flask script that creates sectors, might be able to generate more customised & realistic options & textures?
Initial structure setup & list
I think that each base planet will have just one lightcurve graph, which would be potentially a binned graph. Users will have to launch instruments into orbit (i.e. space telescopes) to collate more information and build better lightcurves.
Users will have to build a station that will be used to build rovers/other vehicles from, and the rovers will have this set as their "home" destination (i.e. the sector the station is in).
Each building or structure will either generate resources or data that the user needs to classify. Each vehicle or drone will find resources, transport resources or transmit/find data the user needs to classify.
I guess the first thing I'll set up is a telescope launcher, as we already have ample data and a (for now) working/workable format for said data (aka lightcurves). We will obviously want to adjust this later. Something to note → since the telescope is also an item that is being launched, we will require a launchpad.
Data
- Users could share their lightcurves that are generated as a result of their findings? Potentially the telescope screen allows them to put together custom instructions for notebook snippets?
- New classification methods will need to be dreamed up so that users don't need to write a paragraph explaining data every time they want to perform an action
Future
- While theoretically (judging by the Kepler Space Telescope, at least) one space telescope would be enough, the narrative would be that the first telescope that is launched is quite low-powered and can only observe near-field objects and generate their light curves. Once users begin collecting multiple planet anomalies, they could "connect" their telescopes to create an interactive network

Item list
Data
- Telescope
	- Will have multiple levels based on upgrades & signal strength
- Telescope Signal Receiver → for now I'm setting this as a "launch" item category.

We'll need to plan out the category[/ies] that the items will fit into.

Crafting
Crafting will be an important concept for the creation & utilisation of items, both in this next sprint (planned to start on Monday 29th January 2024) and the long-term vision for Star Sailors. For now, I propose we follow a simple crafting structure:
 Raw material [combination] → base building block → tool/structure/vehicle or other entity
Down the line, I think we'll insert a tertiary step between "base block" and the final product. We'll also set up things like refineries, smelters, etc and recycling items.
For now, refineries/smelters will just exist as a crafting station that don't do anything for simplicity.
Recipe list
We'll try and keep things simple (especially early-game/early-development), but realistic, and based on the materials that can realistically be gleaned from the sort of terrestrial planets we'll be exploring. Down the line we'll insert things like gas planets & transport of rare materials between planets, for now every planet will have multiple sectors for every raw material.
For the telescope, which is the initial structure, I propose the following:
1. 1x Coal
2. 1x Iron
3. 1x Alloy (made up of gold, palladium, silver, etc → essentially trace "metals"). (I know that IRL these sorts of alloys are unlikely/impossible to form due to the nature of purity of Au, however this is just an early-stage setup to simplify the number of sectors users will have to explore. Potentially we will insert 2 materials per sector).
4. 1x Silicon (for circuit board, glass for the mirrors/reflectors)

Once a telescope has been built, it will be slightly operational (will double the range of sector exploration) land-based, and we can add functionality later for ground-based observations. A launchpad will be required to launch the 'scope and get the full functionality:
1. 1x Fuel (refined from 'water' → hydrazine). (Will provide unlimited fuel in effect, for now instances of launch pads will not have a fueling utility or column/variable)
2. 1x Iron

A telescope receiver will also be required:
1. 1x Silicon
2. 1x Alloy
3. 1x Iron

I'm unsure how crafting will occur, I think for simplicity we might base it around client-side for now (i.e. client app would check inventory and deduct values, rather than setting the recipes in the db and deducting them that way).

Raw materials
Every item that will be part of this first collection:
1. Silicon. Will be labelled as "Silicates" due to its extra utility/combinations i.e. quartz, glass, etc
2. Alloy
3. Iron
4. Fuel
5. Water
6. Coal
Components
I just realised that we could re-use this component for selecting different item types:
```const { data, error } = await supabase
                .from('inventoryITEMS')
                .select('id, name, description, icon_url')
                .eq('ItemCategory', 'Structure');```
First hour → gameplay goals
At the start of December, we outlined the plan for the next sprint:
1. Define minimum requirements for what users will be doing
2. Define publications
3. Sectors
4. Rover images
5. Bug fixes
	- Allow line breaks in post creation
	- Render comments on planet pages
6. Base planet data
	- Research algorithms for calculating required parameters
	- Implement Python notebook with examples
7. It would also be good to take a look at the requirements to update to NextJS 14 and things like the app/src router
8. Messaging, faction gaffers & missions, notifications, revamped inventory
	1. Inbox vs notifications vs messages, journal?

I think I've made the decision that we only want to have one account for users to manage, which means no integrations with crypto wallets or p2p/decentralised accounts (i.e. no Farcaster or Lens integration). We need this to feel like a game, and we can't have the game center around repetitive writing/reading actions, and we can't have friction to perform basic actions. Time will tell if we can use something like Magic.link to remove the friction, but the issue is that all transactions will need to be performed automatically. This does lead back to the Bug fixes in Step 5, so we need to table an overhaul to the post storage setup at some point.

Planet selections
```export default function PostFormCardAnomalyTag({ onPost, planetId }) {
    const supabase = useSupabaseClient();
    const session = useSession();

    const [content, setContent] = useState('');
    const profile = session?.user?.id;
    const [avatar_url, setAvatarUrl] = useState(null);
    const [uploads, setUploads] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    /* const [userExperience, setUserExperience] = useState();
    const [hasRequiredItem, setHasRequiredItem] = useState(false); */

    const router = useRouter();
    const anomalytId = router.query.id;

    // Check if user has items to make post -> not required functionality yet

    // Create the publication
    async function createPost() {
        // Will add an identifier to determine the number of posts mentioning the planet, as that will affect the classification rating

        supabase
            .from("classifications")
            .insert({
                author: profile,
                content,
                media: uploads,
                // planets2: planetId,   
                anomaly: planetId, // Set this to multiple anomaly types/foreign key options            
            }).then(response => {
                if (!response.error) {
                  alert(`Post ${content} created`);
                  setContent('');
                //   setUploads([]);
                  if ( onPost ) {
                    onPost();
                  }
                }
            });
            
            // .then (update user experience/currency)
    } 

    /* Get user avatar & other data
    useEffect(() => {
        supabase
            .from('profiles')
            .select(`avatatar_url`)
            .eq("id", profile)
            .then((result) => {
                setAvatarUrl(result?.data[0]?.avatatar_url);
            });
    }, [session]); */

    // Function to add media to the publication
    async function addMedia ( e ) {
        const files = e.target.files;
        if (files.length > 0) {
            setIsUploading(true);
            for (const file of files) {
                const fileName = Date.now() + session?.user?.id + file.name;
                const result = await supabase.storage
                    .from('media')
                    .upload(fileName, file);
                
                if (result.data) {
                    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/media/' + result.data.path;
                    setUploads(prevUploads => [...prevUploads, url]);
                } else {
                    console.log(result);
                };
            };
            setIsUploading(false);
        };
    };

    // Frontend output
    return (
        <div style={{ width: '83%', margin: 'auto' }} className="">
            <div className="flex gap-2 mx-5 mt-5 pb-3">
                {/* <div>
                    <img src={avatar_url} width='60px' height='60px' />
                </div> */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="grow p-3 h-24 rounded-xl bg-gray-100"
                    placeholder={`What do you think about this planet candidate, ${profile}?`}
                />
                {isUploading && (
                    <div><ClimbingBoxLoader /></div>
                )}
                {isUploading && (
                    <div className="flex gap-2 mt-4">
                        {uploads.map(upload => (
                            <div className=""><img src={upload} className="w-auto h-48 rounded-md" /></div>
                        ))}
                    </div>
                )}
                <div className="text-center">
                    <label className="flex gap-1">
                        <input type="file" className="hidden" onChange={addMedia} />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                            <span className="hidden md:block">Media</span>
                        </label>
                    <button onClick={createPost} className="text-black px-2 py-1 rounded-md">Share</button>
                </div>
            </div>
        </div>
    )
}```
Originally I was thinking we could mirror the current prod/v1 setup where if you classify a planet, you own it. For now, I think we'll set it so that the users will pick a planet, set it as their homebase (in the profiles  table for now) and that will be that.
Initial user actions
1. Users will sign up for an account from our landing page
2. User fills in their details & profile information
3. They’ll go through an onboarding flow where they pick their planet.
4. Their spaceship is then sent to orbit the planet, and while the spaceship is in transit to their new planet, they will need to make adjustments to the course/plot via the controls and also make observations of interesting celestial phenomena (another set of citizen science snippets/classification!)
5. Once their spaceship is in orbit around the anomaly, they will see other orbiting spaceships, which will represent neighbouring players that have also selected that base anomaly (but not the instance of the anomaly). They’ll then need to send out a deployment probe to colonise their planet
6. Initial classification of anomaly legitimacy, build survey probes, classify neighbouring sector, send probes/rovers out, collect resources, build telescope, secondary/in-depth classification of anomaly legitimacy & other parameters, build new tools to observe things like clouds, upgrade telescope to move onto other planets

Looking at this, it would be a good idea to come up with a design for the landing sections/call to actions and determine the spaceship setup. For now, we'll give everyone the same spaceship type, regardless of planet/faction/species/other user customisation. Designs and specification snapshots can be initially brainstormed by Nathan or Rhys.

https://www.youtube.com/watch?v=D7BzpvHM6JI&pp=ygUXbmV4dGpzIHN1cGFiYXNlIGxhbmRpbmc%3D  → This boilerplate can be used for the onbaording flow & profile information.
Onboarding → https://signalk.atlassian.net/browse/FCDB-24?atlOrigin=eyJpIjoiN2RiMDk5NjJmZjU1NDc4MWI0MzA2M2QxYjY4MDFjMDIiLCJwIjoiaiJ9  

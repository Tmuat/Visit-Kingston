// Google Maps JS taken from https://developers.google.com/maps/documentation/ & https://codeinstitute.net/ 

// Set locations variables

let foodAndDrinkLocations = [{
        // The Ram Pub
        coords: {
            lat: 51.408123,
            lng: -0.307551
        },
        infoContent: `
        <h4 class="info-card-header text-center">The Ram</h4>
        <h6 class="info-card-address text-center">34 High St, Kingston Upon Thames, KT1 1HL</h6>
        <div>
            <p class="info-card-desc text-center">Traditional pub with a large riverside garden, offering cask ales and British food, plus live music.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.theramkingston.com/" target="blank">www.theramkingston.com</a></p>
        </div>
        `
    },
    {
        // Wagamama
        coords: {
            lat: 51.4085544,
            lng: -0.3070869
        },
        infoContent: `
        <h4 class="info-card-header text-center">Wagamama</h4>
        <h6 class="info-card-address text-center">16-18 High St, Kingston Upon Thames, KT1 1EY</h6>
        <div>
            <p class="info-card-desc text-center">Asian-inspired & Japanese chain restaurant where dishes are whisked to long communal tables.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.wagamama.com/restaurants/kingston-upon-thames" target="blank">www.wagamama.com</a></p>
        </div>
        `
    },
    {
        // GBK
        coords: {
            lat: 51.407777,
            lng: -0.307755
        },
        infoContent: `
        <h4 class="info-card-header text-center">GBK</h4>
        <h6 class="info-card-address text-center">42-46 High St, Kingston Upon Thames, KT1 1HL</h6>
        <div>
            <p class="info-card-desc text-center">Chain restaurant with classic wooden decor, serving gourmet British beef, chicken or veggie burgers.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://restaurants.gbk.co.uk/kingston/kingston-high-street" target="blank">www.gbk.co.uk</a></p>
        </div>
        `
    },
    {
        // Las Iguanas
        coords: {
            lat: 51.407456,
            lng: -0.307627
        },
        infoContent: `
        <h4 class="info-card-header text-center">Las Iguanas</h4>
        <h6 class="info-card-address text-center">The Malthouse, 25-29 High St, Kingston Upon Thames, KT1 1LL</h6>
        <div>
            <p class="info-card-desc text-center">Flame-grilled Latin American dishes and shared plates served in a contemporary chain dining room.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.iguanas.co.uk/restaurants/kingston" target="blank">www.iguanas.co.uk</a></p>
        </div>
        `
    },
    {
        // Steins
        coords: {
            lat: 51.407158,
            lng: -0.307922
        },
        infoContent: `
        <h4 class="info-card-header text-center">Steins</h4>
        <h6 class="info-card-address text-center">56 High St, Kingston Upon Thames, KT1 1HN</h6>
        <div>
            <p class="info-card-desc text-center">Bavarian food, beers and wines at benched tables in chalet-style interior or on riverside terrace.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.kingston.stein-s.com/" target="blank">www.kingston.stein-s.com</a></p>
        </div>
        `
    },
    {
        // Pizza Express.
        coords: {
            lat: 51.406880,
            lng: -0.307869
        },
        infoContent: `
        <h4 class="info-card-header text-center">Pizza Express</h4>
        <h6 class="info-card-address text-center">41 High St, Kingston Upon Thames, KT1 1LQ</h6>
        <div>
            <p class="info-card-desc text-center">Chain pizzeria where chefs in striped t-shirts toss handmade pizzas in a relaxed space.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.pizzaexpress.com/kingston-portsmouth-road?utm_source=google&utm_medium=Places&utm_campaign=kingston-portsmouth-road" target="blank">www.pizzaexpress.com</a></p>
        </div>
        `
    },
    {
        // Zizzi
        coords: {
            lat: 51.408921,
            lng: -0.306276
        },
        infoContent: `
        <h4 class="info-card-header text-center">Zizzi</h4>
        <h6 class="info-card-address text-center">43 Market Pl, Kingston Upon Thames, KT1 1ET</h6>
        <div>
            <p class="info-card-desc text-center">Italian chain restaurant for pizza and calzone on wooden boards, plus traditional pastas.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.zizzi.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=panel" target="blank">www.zizzi.co.uk</a></p>
        </div>
        `
    },
    {
        // Cote
        coords: {
            lat: 51.410503,
            lng: -0.308063
        },
        infoContent: `
        <h4 class="info-card-header text-center">Côte Brasserie</h4>
        <h6 class="info-card-address text-center">6 Riverside Walk, Kingston Upon Thames,KT1 1QN</h6>
        <div>
            <p class="info-card-desc text-center">Modern, all-day French brasserie chain, serving regional specialities and traditional classics.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.cote.co.uk/restaurant/kingston/" target="blank">www.cote.co.uk</a></p>
        </div>
        `
    },
    {
        // Bills
        coords: {
            lat: 51.410863,
            lng: -0.307936
        },
        infoContent: `
        <h4 class="info-card-header text-center">Bills</h4>
        <h6 class="info-card-address text-center">2 Riverside Walk, Kingston Upon Thames, KT1 1QN</h6>
        <div>
            <p class="info-card-desc text-center">Contemporary European chain dishing up separate breakfast, afternoon tea, lunch and dinner menus.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.bills-website.co.uk/restaurants/kingston?utm_source=google&utm_medium=organic&utm_campaign=gmb-listing" target="blank">www.bills-website.co.uk</a></p>
        </div>
        `
    },
    {
        // Shakeaway
        coords: {
            lat: 51.4103852,
            lng: -0.3069863
        },
        infoContent: `
        <h4 class="info-card-header text-center">ShakeAway</h4>
        <h6 class="info-card-address text-center">15 Thames St, Kingston Upon Thames, KT1 1PJ</h6>
        <div>
            <p class="info-card-desc text-center">Colourful chain serving up American-style milkshakes, made to order with a choice of ingredients.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.shakeaway.com/" target="blank">www.shakeaway.com</a></p>
        </div>
        `
    },
    {
        // O'Neills
        coords: {
            lat: 51.4090665,
            lng: -0.3055996 
        },
        infoContent: `
        <h4 class="info-card-header text-center">O'Neills Pub</h4>
        <h6 class="info-card-address text-center">3 Eden St, Kingston Upon Thames, KT1 1BQ</h6>
        <div>
            <p class="info-card-desc text-center">Relaxed chain pub with big-screen sport, live music and Irish-influenced food and drink menus.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.oneills.co.uk/national-search/south-east/kingston-upon-thames?utm_source=google&utm_medium=organic&utm_campaign=gmb" target="blank">www.oneills.co.uk</a></p>
        </div>
        `
    },
    {
        // Carluccio's
        coords: {
            lat: 51.412026,
            lng: -0.305403
        },
        infoContent: `
        <h4 class="info-card-header text-center">Carluccio's</h4>
        <h6 class="info-card-address text-center">4 Wood St, Kingston Upon Thames, KT1 1TX</h6>
        <div>
            <p class="info-card-desc text-center">Contemporary, white-walled chain Italian cafe-deli, with pastas, handmade focaccia and a kids' menu.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.carluccios.com/restaurants/london-bentalls/" target="blank">www.carluccios.com</a></p>
        </div>
        `
    },
    {
        // Frangos
        coords: {
            lat: 51.4119411,
            lng: -0.2998676
        },
        infoContent: `
        <h4 class="info-card-header text-center">Frangos</h4>
        <h6 class="info-card-address text-center">The Rotunda, Clarence St, Kingston Upon Thames, KT1 1QJ</h6>
        <div>
            <p class="info-card-desc text-center">Leisure centre setting for warm, relaxed restaurant with tiled floors, for fire grilled chicken.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.frangos.co.uk/" target="blank">www.frangos.co.uk</a></p>
        </div>
        `
    },
    {
        // Five Guys
        coords: {
            lat: 51.4116456,
            lng: -0.2993251
        },
        infoContent: `
        <h4 class="info-card-header text-center">Five Guys</h4>
        <h6 class="info-card-address text-center">The Rotunda, Unit 2 Clarence St, Kingston Upon Thames, KT1 1QJ</h6>
        <div>
            <p class="info-card-desc text-center">Fast-food chain with made-to-order burgers, fries & hot dogs, plus free peanuts while you wait.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://restaurants.fiveguys.co.uk/greater-london/the-rotunda-unit-2-clarence-st" target="blank">www.fiveguys.co.uk</a></p>
        </div>
        `
    },
    {
        // Pizza Hut
        coords: {
            lat: 51.410926,
            lng: -0.301108
        },
        infoContent: `
        <h4 class="info-card-header text-center">Pizza Hut</h4>
        <h6 class="info-card-address text-center">105 Clarence St, Kingston Upon Thames, KT1 1QY</h6>
        <div>
            <p class="info-card-desc text-center">Family-friendly chain known for its made-to-order pizzas.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.pizzahut.co.uk/restaurants/find-a-hut/kingston-upon-thames/kingston-upon-thames/?utm_source=google&utm_medium=maps&utm_content=kingston-upon-thames&utm_campaign=googleplaces" target="blank">www.pizzahut.co.uk</a></p>
        </div>
        `
    },
    {
        // The Tun
        coords: {
            lat: 51.4113728,
            lng: -0.3006249
        },
        infoContent: `
        <h4 class="info-card-header text-center">The Kings Tun</h4>
        <h6 class="info-card-address text-center">The Kings Tun, Clarence St, Kingston Upon Thames, KT1 1QT</h6>
        <div>
            <p class="info-card-desc text-center">Family-friendly Wetherspoon pub with a marble-topped bar, real ales, food and music in the evenings.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.jdwetherspoon.com/pubs/all-pubs/england/london/the-kings-tun-kingston-upon-thames" target="blank">www.jdwetherspoon.com</a></p>
        </div>
        `
    },
    {
        // Canbury Cafe
        coords: {
            lat: 51.4165905,
            lng: -0.3069064
        },
        infoContent: `
        <h4 class="info-card-header text-center">Canbury Secret Cafe</h4>
        <h6 class="info-card-address text-center">Kingston Riverside Club, Kingston Upon Thames, KT2 5AJ</h6>
        <div>
            <p class="info-card-desc text-center">Grassy riverfront area featuring tennis courts & a cafe kiosk.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="http://canburysecret.co.uk/" target="blank">www.canburysecret.co.uk</a></p>
        </div>
        `
    },
    {
        // Harts Boatyard
        coords: {
            lat: 51.3970459,
            lng:  -0.3120035
        },
        infoContent: `
        <h4 class="info-card-header text-center">Harts Boatyard</h4>
        <h6 class="info-card-address text-center">Portsmouth Rd, Surbiton, KT6 4ES</h6>
        <div>
            <p class="info-card-desc text-center">Smart, contemporary riverside spot with 2 balconies, serving Modern British/Mediterranean dishes.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.hartsboatyard.co.uk/" target="blank">www.hartsboatyard.co.uk</a></p>
        </div>
        `
    },
    {
        // The Swan
        coords: {
            lat: 51.4125322,
            lng: -0.3108998
        },
        infoContent: `
        <h4 class="info-card-header text-center">The Swan</h4>
        <h6 class="info-card-address text-center">22 High St, Hampton Wick, Kingston Upon Thames, KT1 4DB</h6>
        <div>
            <p class="info-card-desc text-center">Classic pub with a small bar menu, outdoor tables and large screens showing all major sports.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="http://hongthai.co.uk/" target="blank">www.hongthai.co.uk</a></p>
        </div>
        `
    },
    {
        // Busaba
        coords: {
            lat: 51.410728,
            lng: -0.307948
        },
        infoContent: `
        <h4 class="info-card-header text-center">Busaba</h4>
        <h6 class="info-card-address text-center">4 Riverside Walk, Kingston Upon Thames, KT1 1QN</h6>
        <div>
            <p class="info-card-desc text-center">Low-lit Thai chain restaurant with a modern dark wood interior and square communal tables.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.busaba.com/locations/busaba-kingston-riverside?utm_source=gmb&utm_medium=organic" target="blank">www.busaba.com</a></p>
        </div>
        `
    },
    {
        // Haché Riverside Social
        coords: {
            lat: 51.410648,
            lng: -0.307986
        },
        infoContent: `
        <h4 class="info-card-header text-center">Haché Riverside Social</h4>
        <h6 class="info-card-address text-center">Unit 5, Riverside Walk, Kingston Upon Thames, KT1 1QN</h6>
        <div>
            <p class="info-card-desc text-center">From cocktails, to burgers and brunch, enjoy prime riverside views on the terrace at Haché Kingston, the ultimate brasserie destination in Kingston, Surrey.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.hacheburgers.com/hache-kingston" target="blank">www.hacheburgers.com</a></p>
        </div>
        `    
    },
    {
        // Chakara
        coords: {
            lat: 51.410949,
            lng: -0.307889
        },
        infoContent: `
        <h4 class="info-card-header text-center">Chakara</h4>
        <h6 class="info-card-address text-center">Bishops Palace House, 1 Riverside Walk, Kingston Upon Thames, KT1 1QN</h6>
        <div>
            <p class="info-card-desc text-center">Chakra riverside offers delightfully sumptuous Indian dishes with beautiful views of the River Thames</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.chakra.restaurant/chakra-kingston/" target="blank">wwww.chakra.com</a></p>
        </div>
        `
    },
    {
        // Nandos
        coords: {
            lat: 51.406996,
            lng: -0.307814
        },
        infoContent: `
        <h4 class="info-card-header text-center">Nandos</h4>
        <h6 class="info-card-address text-center">37-38 High St, Kingston Upon Thames, KT1 1LQ</h6>
        <div>
            <p class="info-card-desc text-center">Afro-Portuguese chain restaurant serving flame-grilled chicken in spicy chilli sauce.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.nandos.co.uk/restaurants/kingston-upon-thames" target="blank">www.nandos.co.uk</a></p>
        </div>
        `
    },
];

let placesToStayLocations = [{
        // Hilton
        coords: {
            lat: 51.413455,
            lng: -0.305267
        },
        infoContent: `
        <h4 class="info-card-header text-center">DoubleTree by Hilton</h4>
        <h6 class="info-card-address text-center">1 Skerne Rd, Kingston Upon Thames, KT2 5FJ</h6>
        <div>
            <p class="info-card-desc text-center">DoubleTree by Hilton Kingston upon Thames offers comfortable rooms, onsite restaurant and a convenient location near Twickenham and the River Thames.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.hilton.com/en/hotels/lonktdi-doubletree-london-kingston-upon-thames/" target="blank">www.hilton.com</a></p>
        </div>
        `
    },
    {
        // White Hart
        coords: {
            lat: 51.4116592,
            lng: -0.311111
        },
        infoContent: `
        <h4 class="info-card-header text-center">The White Hart Hotel</h4>
        <h6 class="info-card-address text-center">1 High St, Hampton Wick, Kingston Upon Thames, KT1 4DA</h6>
        <div>
            <p class="info-card-desc text-center">The White Hart Hotel, superbly located in Hampton Wick with characterful bedrooms, delicious fresh food, and a wide range of drinks.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.whiteharthoteluk.co.uk/" target="blank">www.whiteharthoteluk.co.uk</a></p>
        </div>
        `
    },
    {
        // Premier Inn
        coords: {
            lat: 51.409499,
            lng: -0.300903
        },
        infoContent: `
        <h4 class="info-card-header text-center">Premier Inn</h4>
        <h6 class="info-card-address text-center">Combined House, 15 Wheatfield Way, Kingston Upon Thames, KT1 2PD</h6>
        <div>
            <p class="info-card-desc text-center">Warmly decorated, unfussy rooms offer free Wi-Fi (data limit), flat-screen TVs and desks, as well as tea and coffeemaking facilities.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-kingston-upon-thames.html?cid=GLBC_KINUPT" target="blank">www.premierinn.com</a></p>
        </div>
        `
    },
    {
        // The Queen's Head
        coords: {
            lat: 51.418521,
            lng: -0.301608
        },
        infoContent: `
        <h4 class="info-card-header text-center">The Queen's Head</h4>
        <h6 class="info-card-address text-center">144 Richmond Rd, Kingston Upon Thames, KT2 5HA</h6>
        <div>
            <p class="info-card-desc text-center">Our Indulgence rooms provide all the space and facilities you need to enjoy a truly special break. Featuring a luxurious king-size bed, plus a well-appointed ensuite bathroom, flatscreen TV and more, these rooms promise a memorable stay in Kingston.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.queensheadkingston.co.uk" target="blank">www.queensheadkingston.co.uk</a></p>
        </div>
        `
    },
    {
        // The Foresters Arms
        coords: {
            lat: 51.412982,
            lng: -0.311270
        },
        infoContent: `
        <h4 class="info-card-header text-center">The Foresters Arms</h4>
        <h6 class="info-card-address text-center">45 High St, Hampton Wick, Kingston Upon Thames, KT1 4DG</h6>
        <div>
            <p class="info-card-desc text-center">With Kingston-upon-Thames a short stroll away and Central London only 30-minutes by train, our location is perfect for both leisure and business guests. Situated in peaceful Hampton Wick adjacent to Bushy Park, it is a perfect place to unwind away from the hustle and bustle.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.the-foresters.com/" target="blank">www.the-foresters.com</a></p>
        </div>
        `
    },
    {
        // Travel Lodge
        coords: {
            lat: 51.410385,
            lng: -0.300741
        },
        infoContent: `
        <h4 class="info-card-header text-center">Travelodge</h4>
        <h6 class="info-card-address text-center">International House, Wheatfield Way, Kingston Upon Thames, KT1 2PD</h6>
        <div>
            <p class="info-card-desc text-center">All standard double rooms feature a comfy king size bed with four plump pillows and a cosy duvet. Guests can enjoy a wide variety of food and drink choices within easy walking distance from this hotel.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.travelodge.co.uk/hotels/397/Kingston-Upon-Thames-Central-hotel" target="blank">www.travelodge.co.uk</a></p>
        </div>
        `
    },
];

let attractionsLocations = [{
        // Out of Order Postboxes
        coords: {
            lat: 51.410817,
            lng: -0.300470
        },
        infoContent: `
        <h4 class="info-card-header text-center">Out of Order Postboxes</h4>
        <h6 class="info-card-address text-center">Old London Road, Kingston Upon Thames, KT2 6QF</h6>
        <div>
            <p class="info-card-desc text-center">Celebrating one of the icons of the 20th century, Gilbert Scott's superb red telephone box, David Mach did this street sculpture when he was working at Kingston Uni.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="http://www.davidmach.com/" target="blank">www.davidmach.com</a></p>
        </div>
        `
    },
    {
        // Bentalls Centre
        coords: {
            lat: 51.410969,
            lng: -0.304769
        },
        infoContent: `
        <h4 class="info-card-header text-center">The Bentalls Centre</h4>
        <h6 class="info-card-address text-center">Wood St, Kingston Upon Thames, KT1 1TP</h6>
        <div>
            <p class="info-card-desc text-center">Longtime, spacious mall featuring a variety of international retail stores, restaurants & services.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.bentallcentre.co.uk/" target="blank">www.bentallcentre.co.uk</a></p>
        </div>
        `
    },
    {
        // Rose Theatre
        coords: {
            lat: 51.408561,
            lng: -0.307215
        },
        infoContent: `
        <h4 class="info-card-header text-center">Rose Theatre</h4>
        <h6 class="info-card-address text-center">24-26 High St, Kingston Upon Thames, KT1 1HL</h6>
        <div>
            <p class="info-card-desc text-center">State-of-the-art theatre inspired by Elizabethan design, putting on varied productions.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="http://www.rosetheatrekingston.org/" target="blank">www.rosetheatrekingston.orgm</a></p>
        </div>
        `
    },
    {
        // The Queen's Head
        coords: {
            lat: 51.418521,
            lng: -0.301608
        },
        infoContent: `
        <h4 class="info-card-header text-center">The Queen's Head</h4>
        <h6 class="info-card-address text-center">144 Richmond Rd, Kingston Upon Thames, KT2 5HA</h6>
        <div>
            <p class="info-card-desc text-center">Our Indulgence rooms provide all the space and facilities you need to enjoy a truly special break. Featuring a luxurious king-size bed, plus a well-appointed ensuite bathroom, flatscreen TV and more, these rooms promise a memorable stay in Kingston.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.queensheadkingston.co.uk" target="blank">www.queensheadkingston.co.uk</a></p>
        </div>
        `
    },
    {
        // Odeon
        coords: {
            lat: 51.412261,
            lng: -0.299226
        },
        infoContent: `
        <h4 class="info-card-header text-center">Odeon Cinema</h4>
        <h6 class="info-card-address text-center">The Rotunda, Clarence St, Kingston Upon Thames, KT1 1QP</h6>
        <div>
            <p class="info-card-desc text-center">State-of-the-art chain cinema for blockbusters in 2-D or 3-D format, plus family and student deals.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.odeon.co.uk/cinemas/kingston/?" target="blank">www.odeon.co.uk</a></p>
        </div>
        `
    },
    {
        // Banquet Records
        coords: {
            lat: 51.409176,
            lng: -0.303346
        },
        infoContent: `
        <h4 class="info-card-header text-center">Banquet Records</h4>
        <h6 class="info-card-address text-center">52 Eden St, Kingston Upon Thames, KT1 1EE</h6>
        <div>
            <p class="info-card-desc text-center">Record shop with own label and club nights, specialising in indie, punk and dubstep on vinyl and CD.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="http://www.banquetrecords.com/" target="blank">www.banquetrecords.com</a></p>
        </div>
        `
    },
    {
        // Canbury Gardens
        coords: {
            lat: 51.416564,
            lng: -0.305752
        },
        infoContent: `
        <h4 class="info-card-header text-center">Canbury Garden</h4>
        <h6 class="info-card-address text-center">19 Samuel Gray Gardens, Kingston Upon Thames, KT2 5UY</h6>
        <div>
            <p class="info-card-desc text-center">Record shop with own label and club nights, specialising in indie, punk and dubstep on vinyl and CD.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="#" target="blank">Na</a></p>
        </div>
        `
    },
    {
        // Bushy Park
        coords: {
            lat: 51.411618,
            lng: -0.312907
        },
        infoContent: `
        <h4 class="info-card-header text-center">Bushy Park</h4>
        <h6 class="info-card-address text-center">Hampton Ct Rd, Hampton, TW12 2EJ</h6>
        <div>
            <p class="info-card-desc text-center">Huge area of woods and grasslands, home to red and fallow deer, with water garden and fountain.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="https://www.royalparks.org.uk/parks/bushy-park" target="blank">www.royalparks.org.uk</a></p>
        </div>
        `
    },
    {
        // Coronation Stone
        coords: {
            lat: 51.408565,
            lng: -0.306553
        },
        infoContent: `
        <h4 class="info-card-header text-center">Coronation Stone</h4>
        <h6 class="info-card-address text-center">8-10 High St, Kingston Upon Thames, KT1 1EY</h6>
        <div>
            <p class="info-card-desc text-center">Ancient stone where, according to tradition, 7 Anglo-Saxon kings were coronated in the 10th century.n.</p>
            <p class="info-card-website text-center mb-0">Website:</p>
            <p class="info-card-website text-center"><a href="#" target="blank">NA</a></p>
        </div>
        `
    },
];

// Create the map and markers

let marker = [];
let map;

function initMap(filterMarkers) {
    // Set default location of map
    let defaultLatlng = {
        lat: 51.4106257,
        lng: -0.3048283
    }

    // Initialize map including zoom and default location
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: defaultLatlng,
        mapTypeControl: false,
    });

    // Set dictionary of labels to be used
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Iterate through all markers selected and assign coordinates & label in marker, then set content for info window
    if (filterMarkers) {
        for (let i = 0; i < filterMarkers.length; i++) {
            let marker = new google.maps.Marker({
                position: filterMarkers[i].coords,
                map,
                label: labels[i % labels.length],
                animation: google.maps.Animation.DROP,
            });
            
            const infowindow = new google.maps.InfoWindow({
                content: filterMarkers[i].infoContent,
                maxWidth: 300,
            });

            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        };
    };
}

// Get the map filter clicked from index.html dropdown

document.getElementById("food_and_drink").onclick = () => {
    initMap(foodAndDrinkLocations);
};

document.getElementById("places_to_stay").onclick = () => {
    initMap(placesToStayLocations);
};

document.getElementById("attractions").onclick = () => {
    initMap(attractionsLocations);
};

$.when( $.ready ).then(function() {
    initMap([...attractionsLocations, ...placesToStayLocations, ...foodAndDrinkLocations]);
});

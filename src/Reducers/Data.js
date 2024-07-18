import {useTranslation} from "react-i18next";


export const  productList = [

    {
        name:"Fortnite",
        type:"Sandbox",
        id: 1,
        price: 48,
        image: "fornite1.jpg",
        image1: "feature-left.jpg",
        image2: "feature-right.jpg",
        image3: "details-01.jpg",
        image4: "details-02.jpg",
        image5: "details-03.jpg",
        video: "https://www.youtube.com/watch?v=G8D8xVwhRy8&ab_channel=YEAH1SHOW",
        description: "Fornite là một tựa game không còn quá xa lạ với các fan của Fornite. Game thuộc thể loại battle royale kết hợp cách chơi xây dựng mới lạ và hấp dẫn chắc chắn sẽ thu hút đông đảo người chơi.",
        bought: "5M"
    },
    {
        name:"PubG",
        type:"Battle S",
        id: 2,
        image: "pubg6.jpg",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 50,
        bought: "10M"
    },
    {
        name:"Dota2",
        type:"Steam-X",
        id: 3,
        image: "dota1.jpg",
        image1: "dota2.jpg",
        image2: "dota3.jpg",
        image3: "dota4.png",
        image4: "dota5.jpg",
        image5: "dota4.png",
        price: 48,
        description:"Dota 2 là một trò chơi MOBA (Multiplayer Online Battle Arena) được phát triển và phát hành bởi Valve Corporation. Trò chơi được xây dựng trên nền tảng của trò chơi Warcraft III: Reign of Chaos và được coi là phiên bản tiếp theo của Dota (Defense of the Ancients), một custom map phổ biến của Warcraft III",
        bought: "2.3M"
    },
    {
        name:"CSGO-2",
        type:"Steam-X",
        id: 7,
        image: "csgo2.png",
        image1: "csgo1.jpg",
        image2: "csgo3.jpg",
        image3: "csgo4.jpg",
        image4: "csgo5.jpg",
        image5: "csgo6.jpg",
        video: "https://www.youtube.com/watch?v=1nkO4N7P-Ys",
        description: "Counter-Strike: Global Offensive có bản đồ, nhân vật và vũ khí mới bên cạnh những cập nhật của nội dung Counter-Strike cổ điển, giới thiệu các chế độ chơi game mới, bảng xếp hạng và nhiều hơn nữa.",
        price: 48,
        bought: "2.3M"
    },
    {
        name:"Apex Legend",
        type:"Steam-X",
        id: 8,
        image: "apex2.jpg",
        image1: "apex1.jpg",
        image2: "apex5.jpg",
        image3: "apex3.jpg",
        image4: "apex4.jpeg",
        image5: "apex6.jpg",
        video: "https://www.youtube.com/watch?v=NDQe4Xc6zeo",
        description:"Apex Legends là một trò chơi bắn súng anh hùng miễn phí được phát triển bởi Respawn Entertainment. Trong trò chơi này, người chơi có thể chọn từ một danh sách các nhân vật huyền thoại. Mỗi nhân vật đều có tính cách, sức mạnh và khả năng riêng biệt. Người chơi phải thể hiện kỹ năng của mình trong việc sử dụng một loạt các vũ khí với khả năng đặc biệt trong mọi chiến trường.",
        price: 48,
        bought: "2.3M"
    },
    {
        name:"War Thunder",
        type:"Steam-X",
        id: 9,
        image: "wt2.jpg",
        image1: "wt4.jpg",
        image2: "wt3.jpg",
        image3: "wt1.jpg",
        image4: "wt5.jpg",
        image5: "wt6.jpg",
        video: "https://www.youtube.com/watch?v=0-J5Vg0SxLc",
        price: 49,
        description:"War Thunder là game không chiến miễn phí với bối cảnh Thế chiến 2. War Thunder PC có cơ chế chiến đấu đa dạng, những màn giao đấu căng thẳng tới nghẹt thở trên bầu trời.",
        bought: "2.3M"
    },
    {
        name:"GTA V",
        type:"Steam-X",
        id: 10,
        image: "gta1.jpg",
        image1: "gta2.jpg",
        image2: "gta6.jpg",
        image3: "gta3.jpg",
        image4: "gta4.jpg",
        image5: "gta5.jpg",
        video: "https://www.youtube.com/watch?v=hvoD7ehZPcM",
        description:"GTA 5 hay Grand Theft Auto V là phiên bản game cướp đường phố dành cho những kẻ mộng mơ trải nghiệm cuộc sống ở nước Mỹ.",
        price: 52,
        bought: "2.3M"
    },
    {
        name:"Getting Over It",
        type:"Steam-X",
        id: 11,
        image: "got1.jpg",
        image1: "got2.jpg",
        image2: "got6.jpg",
        image3: "got3.jpg",
        image4: "got4.jpg",
        image5: "got5.jpg",
        video:"https://www.youtube.com/watch?v=cCL6tWv_7FM",
        description:"Trong game hành động siêu vui và hài hước Getting Over It, bạn sẽ vào vai một anh chàng bị nhốt trong chiếc chum và phải dùng chiếc búa tạ để leo qua các ngọn núi càng xa càng tốt.",
        price: 39,
        bought: "2.3M"
    },
    {
        name:"Battlefield™ 2042",
        type:"Steam-X",
        id: 12,
        image: "btf2.jpg",
        image1: "btf1.jpg",
        image2: "btf4.jpg",
        image3: "btf3.jpg",
        image4: "btf6.jpg",
        image5: "btf5.jpg",
        video:"https://www.youtube.com/watch?v=ASzOzrB-a9E",
        description:"Battlefield 2042 là phần game mới nhất trong dòng game bắn súng Battlefield của EA và DICE. Được cộng đồng game thủ trên toàn thế giới hy vọng sẽ là một tựa game bắn súng đỉnh cao, vượt qua Call of Duty năm nay.",
        price: 36,
        bought: "2.3M"
    },

    {
        name:"Mine Craft",
        type:"Steam-X",
        id: 4,
        image: "mc1.jpg",
        image1: "mc2.png",
        image2: "mc3.png",
        image3: "mc4.jpg",
        image4: "mc5.jpg",
        image5: "mc6.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description:"Minecraft là game phiêu lưu sinh tồn trong thế giới mở - với tên gọi quen thuộc là Những khối vuông kỳ diệu. Đến với Minecraft PC, bạn sẽ thỏa sức khám phá thế giới theo trí tưởng tượng và sự sáng tạo của mình!",
        price: 10,
        bought: "2.3M"
    },
    {
        name:"Goose Goose Duck",
        type:"Matrix Games",
        id: 5,
        image: "duck1.jpg",
        image1: "duck2.jpg",
        image2: "duck3.jpg",
        image3: "duck4.jpg",
        image4: "duck5.jpg",
        image5: "duck6.jpg",
        video: "https://www.youtube.com/watch?v=bHrHDenJlG8",
        description:"Goose Goose Duck là một trò chơi suy luận xã hội tìm kẻ mạo danh, nơi bạn và những chú Ngỗng đồng loại của mình phải làm việc cùng nhau để hoàn thành nhiệm vụ. Bên cạnh đó, mọi người cũng phải để mắt tới những con Vịt trời hung ác và nhiều loài chim khác đã xâm nhập và sẽ làm bất cứ điều gì để ngăn cản bầy của mình.",
        price: 70,
        bought: "1M"
    },
    {
        name:"League of Legend",
        type:"Riot",
        id: 6,
        price: 99,
        image: "lol1.jpg",
        image1: "lol6.jpg",
        image2: "lol5.jpg",
        image3: "lol2.jpg",
        image4: "lol3.jpg",
        image5: "lol4.jpg",
        video: "https://www.youtube.com/watch?v=sjrmI2QbPig",
        description:"Liên Minh Huyền Thoại (LMHT) hay còn được biết đến với tên gọi League of Legends (LOL) là tựa game MOBA trực tuyến có lượng người chơi đông đảo nhất hiện nay. Game được phát hành tại Việt Nam bởi Garena và đang là bộ môn thể thao điện tử phát triển mạnh mẽ, nhận được sự quan tâm của cộng đồng game thủ trên toàn thế giới.",
        bought: "5M"
    },
    {
        name:"FC Online",
        type:"Steam-X",
        id: 13,
        image: "fc1.jpg",
        image1: "fc7.jpg",
        image2: "fc6.jpg",
        image3: "fc4.jpg",
        image4: "fc5.jpg",
        image5: "fc2.jpg",
        video: "https://www.youtube.com/watch?v=0Y5vQ2KIFZ8",
        description:"Bạn là một người đam mê bóng đá? Bạn mong muốn sở hữu cho mình 1 đội hình với sự có mặt của các cầu thủ siêu sao trên khắp thế giới? Với FC Online, bạn sẽ được thỏa thích tạo đội bóng trong mơ của mình và đối đầu với những huấn luyện viên khác bằng phong cách tư duy chiến thuật cá nhân trong mỗi trận đấu.",
        price: 60,
        bought: "5.3M"
    },
    {
        name:"TFT",
        type:"Riot",
        id: 14,
        image: "tft1.jpg",
        image1: "tft6.jpg",
        image2: "tft5.jpg",
        image3: "tft3.jpg",
        image4: "tft4.jpg",
        image5: "tft2.jpg",
        video: "https://www.youtube.com/watch?v=FZ0QPjCs0D4",
        description:"Hãy sử dụng 100% bộ não để chọn tướng, sắp xếp vị trí cho họ và giành chiến thắng trong cuộc đấu 1 chọi tất cả gồm 8 đấu thủ. Với hàng trăm sự kết hợp đội hình và xu hướng chơi không ngừng thay đổi, mọi loại chiến thuật đều có thể được áp dụng. Nhưng tất nhiên, sẽ luôn luôn chỉ có 1 người thắng cuộc.",
        price: 30,
        bought: "5.3M"
    },
    // ------------
    {
        name: "Gói nạp chậm",
        type: "Steam-X",
        id: 16,
        image: "the50.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 57,
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        bought: "5.3M"
    },
    {
        name: "Batman: Arkham City",
        type: "Steam-X",
        id: 21,
        image: "man.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 90,
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        bought: "5M"
    },

    {
        name: "Minecraft",
        type: "Steam-X",
        id: 26,
        image: "minicrapt.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 97,
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        bought: "4M"
    },
    {
        name: "Escape from Tarkov",
        type: "Steam-X",
        id: 27,
        image: "batman.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 96,
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        bought: "4.4M"
    },
    {
        name: "Wukong Digital",
        type: "Steam-X",
        id: 28,
        image: "wukong.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 90,
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        bought: "5M"
    },
    {
        name: "Thẻ PlayStation",
        type: "Steam-X",
        id: 29,
        image: "the50.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 91,
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        bought: "3.2M"
    },
    {
        name: "Dragon's Dogma 2",
        type: "Steam-X",
        id: 30,
        image: "drogon.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 92,
        bought: "3.5M"
    },
    {
        name: "Battlefield 1 ",
        type: "Steam-X",
        id: 32,
        image: "battle.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 90,
        bought: "5.3M"
    },
    {
        name: "Battlefield 3™",
        type: "Steam-X",
        id: 33,
        image: "battle3.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 94,
        bought: "5M"
    },
    {
        name: "Anthem™ Legion",
        type: "Steam-X",
        id: 34,
        image: "anthem.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 96,
        bought: "4M"
    },
    {
        name: "FIFA 21 (Origin)",
        type: "Steam-X",
        id: 35,
        image: "fc7.jpg",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 97,
        bought: "4.4M"
    },
    {
        name: "Battlefield 1",
        type: "Steam-X",
        id: 36,
        image: "battle1.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price:89,
        bought: "10M"
    },
    {
        name: "FIFA 20 (FF20)",
        type: "Steam-X",
        id: 38,
        image: "fifa.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 79,
        bought: "4.4M"
    },
    {
        name: "The Sims 4 ",
        type: "Steam-X",
        id: 39,
        image: "sims4.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 95,
        bought: "2.3M"
    },
    {
        name: "Gift Card 20$",
        type: "Steam-X",
        id: 40,
        image: "blizass4.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 50,
        bought: "3.2M"
    },
    {
        name: " Gift Card 50$",
        type: "Steam-X",
        id: 41,
        image: "blizass50.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 92,
        bought: "3.5M"
    },
    {
        name: "Diablo IV ",
        type: "Steam-X",
        id: 42,
        image: "diablo.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 93,
        bought: "10M"
    },
    {
        name: "Diablo IV-Ultimate",
        type: "Steam-X",
        id: 43,
        image: "diablolimit.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 99,
        bought: "2.3M"
    },
    {
        name: "Call of Duty",
        type: "Steam-X",
        id: 45,
        image: "mafia.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 92,
        bought: "3.5M"
    },
    {
        name: "Vanguard",
        type: "Steam-X",
        id: 46,
        image: "vanguage.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 90,
        bought: "5.3M"
    },
    {
        name: "Diablo® II",
        type: "Steam-X",
        id: 47,
        image: "ghost.png",
        image1: "pubg1.jpg",
        image2: "pubg2.jpg",
        image3: "pubg3.jpg",
        image4: "pubg4.jpg",
        image5: "pubg5.jpg",
        video: "https://www.youtube.com/watch?v=Rla3FUlxJdE",
        description: "Hạ cánh trên các địa điểm chiến lược, cướp vũ khí và vật tư, và sống sót để trở thành đội cuối cùng đứng trên các Chiến trường đa dạng, phong phú.\n" +
            "Lập đội và tham gia Battlegrounds để có trải nghiệm Battle Royale nguyên bản mà chỉ PUBG: BATTLEGROUNDS mới có thể cung cấp.",
        price: 91,
        bought: "4.4M"
    }
]

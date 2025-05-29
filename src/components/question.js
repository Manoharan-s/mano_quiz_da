const iplQuestions = [
  {
    id: 0,
    question: "Who won the inaugural IPL season in 2008?",
    options: [
      "Chennai Super Kings",
      "Rajasthan Royals",
      "Mumbai Indians",
      "Delhi Daredevils",
    ],
    answer: "Rajasthan Royals",
  },
  {
    id: 1,
    question: "Which player won the Orange Cap in IPL 2011?",
    options: ["Virat Kohli", "Chris Gayle", "Suresh Raina", "Michael Hussey"],
    answer: "Chris Gayle",
  },
  {
    id: 2,
    question:
      "Who was the captain of Mumbai Indians during their first IPL title win in 2013?",
    options: [
      "Ricky Ponting",
      "Rohit Sharma",
      "Sachin Tendulkar",
      "Harbhajan Singh",
    ],
    answer: "Rohit Sharma",
  },
  {
    id: 3,
    question:
      "Which team scored the highest total in an IPL final till Season 17?",
    options: [
      "Chennai Super Kings",
      "Gujarat Titans",
      "Mumbai Indians",
      "Kolkata Knight Riders",
    ],
    answer: "Gujarat Titans",
  },
  {
    id: 4,
    question:
      "Who bowled the Super Over for Sunrisers Hyderabad in the tied match against DC in 2021?",
    options: [
      "T Natarajan",
      "Bhuvneshwar Kumar",
      "Rashid Khan",
      "Jason Holder",
    ],
    answer: "Rashid Khan",
  },
  {
    id: 5,
    question:
      "Which player took a hat-trick in IPL 2017 for Rising Pune Supergiant?",
    options: ["Jaydev Unadkat", "Ben Stokes", "Imran Tahir", "Shardul Thakur"],
    answer: "Jaydev Unadkat",
  },
  {
    id: 6,
    question: "Who was the youngest player to debut in IPL 2020?",
    options: [
      "Ravi Bishnoi",
      "Devdutt Padikkal",
      "Yashasvi Jaiswal",
      "Abdul Samad",
    ],
    answer: "Yashasvi Jaiswal",
  },
  {
    id: 7,
    question:
      "Which team had the longest winning streak in a single IPL season till 2024?",
    options: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Gujarat Titans",
    ],
    answer: "Kolkata Knight Riders",
  },
  {
    id: 8,
    question: "Who hit the winning runs in IPL 2023 final for CSK?",
    options: ["MS Dhoni", "Ruturaj Gaikwad", "Shivam Dube", "Ravindra Jadeja"],
    answer: "Ravindra Jadeja",
  },
  {
    id: 9,
    question:
      "Which bowler has the best bowling figures in IPL history (as of Season 17)?",
    options: ["Sohail Tanvir", "Alzarri Joseph", "Adam Zampa", "Anil Kumble"],
    answer: "Alzarri Joseph",
  },
  {
    id: 10,
    question:
      "Who was the captain when Kolkata Knight Riders won their first IPL title in 2012?",
    options: [
      "Sourav Ganguly",
      "Gautam Gambhir",
      "Eoin Morgan",
      "Jacques Kallis",
    ],
    answer: "Gautam Gambhir",
  },
  {
    id: 11,
    question: "Which player scored the fastest century in IPL history?",
    options: ["Chris Gayle", "AB de Villiers", "David Warner", "Virat Kohli"],
    answer: "Chris Gayle",
  },
  {
    id: 12,
    question: "Who won the Purple Cap in IPL 2019?",
    options: [
      "Imran Tahir",
      "Kagiso Rabada",
      "Jasprit Bumrah",
      "Mohammed Shami",
    ],
    answer: "Imran Tahir",
  },
  {
    id: 13,
    question: "Which team finished last in IPL 2022?",
    options: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Sunrisers Hyderabad",
      "Delhi Capitals",
    ],
    answer: "Mumbai Indians",
  },
  {
    id: 14,
    question: "Who was the Man of the Match in IPL 2024 final?",
    options: [
      "Mitchell Starc",
      "Venkatesh Iyer",
      "Andre Russell",
      "Sunil Narine",
    ],
    answer: "Mitchell Starc",
  },
  {
    id: 15,
    question: "Which venue hosted the most IPL matches in Season 1 (2008)?",
    options: [
      "Wankhede Stadium",
      "Eden Gardens",
      "M. Chinnaswamy Stadium",
      "DY Patil Stadium",
    ],
    answer: "DY Patil Stadium",
  },
  {
    id: 16,
    question:
      "Who was the leading run-scorer for Royal Challengers Bangalore in IPL 2016?",
    options: ["Virat Kohli", "AB de Villiers", "Chris Gayle", "KL Rahul"],
    answer: "Virat Kohli",
  },
  {
    id: 17,
    question:
      "Which prominent batsman never hit a six throughout an entire IPL season?",
    options: ["Rahul Dravid", "Glenn Maxwell", "Gautam Gambhir", "VVS Laxman"],
    answer: "Glenn Maxwell",
  },
  {
    id: 18,
    question: "Who was the captain of Delhi Capitals in IPL 2020?",
    options: ["Gautam Gambhir", "Shreyas Iyer", "Rishabh Pant", "David Warner"],
    answer: "Shreyas Iyer",
  },
  {
    id: 19,
    question: "Which team won the IPL 2014 title?",
    options: [
      "Kolkata Knight Riders",
      "Kings XI Punjab",
      "Chennai Super Kings",
      "Mumbai Indians",
    ],
    answer: "Kolkata Knight Riders",
  },
  {
    id: 20,
    question: "Who took the most wickets for Mumbai Indians in IPL 2019?",
    options: [
      "Jasprit Bumrah",
      "Lasith Malinga",
      "Rahul Chahar",
      "Krunal Pandya",
    ],
    answer: "Jasprit Bumrah",
  },
  {
    id: 21,
    question:
      "Which player was bought for the highest price in IPL 2018 auction?",
    options: ["Virat Kohli", "Ben Stokes", "Chris Morris", "Sam Curran"],
    answer: "Ben Stokes",
  },
  {
    id: 22,
    question:
      "Who was the wicket-keeper for Sunrisers Hyderabad in IPL 2016 when they won the title?",
    options: ["MS Dhoni", "Naman Ojha", "Wriddhiman Saha", "Dinesh Karthik"],
    answer: "Naman Ojha",
  },
  {
    id: 23,
    question: "Which bowler took the first hat-trick in IPL history?",
    options: [
      "Lakshmipathy Balaji",
      "Amit Mishra",
      "Harbhajan Singh",
      "Anil Kumble",
    ],
    answer: "Lakshmipathy Balaji",
  },
  {
    id: 24,
    question: "Who was the Orange Cap winner in IPL 2018?",
    options: ["Kane Williamson", "Ambati Rayudu", "Rishabh Pant", "KL Rahul"],
    answer: "Kane Williamson",
  },
  {
    id: 25,
    question:
      "Who was the first captain of Royal Challengers Bangalore in the inaugural IPL season (2008)?",
    options: [
      "Rahul Dravid",
      "Anil Kumble",
      "Jacques Kallis",
      "Daniel Vettori",
    ],
    answer: "Rahul Dravid",
  },
  {
    id: 26,
    question:
      "Who was the captain of Pune Warriors India in their final IPL season?",
    options: ["Yuvraj Singh", "Angelo Mathews", "Aaron Finch", "Steven Smith"],
    answer: "Angelo Mathews",
  },
  {
    id: 27,
    question: "Which player scored the most runs in IPL 2015?",
    options: [
      "David Warner",
      "AB de Villiers",
      "Ajinkya Rahane",
      "Rohit Sharma",
    ],
    answer: "David Warner",
  },
  {
    id: 28,
    question: "Who was the Purple Cap winner in IPL 2016?",
    options: [
      "Bhuvneshwar Kumar",
      "Mustafizur Rahman",
      "Shane Watson",
      "Yuzvendra Chahal",
    ],
    answer: "Bhuvneshwar Kumar",
  },
  {
    id: 29,
    question: "Which team was captained by Mahela Jayawardene in IPL 2014?",
    options: ["Delhi Daredevils", "Kings XI Punjab", "Mumbai Indians", "None"],
    answer: "Delhi Daredevils",
  },
  {
    id: 30,
    question:
      "Who hit the winning six for Chennai Super Kings in IPL 2018 final?",
    options: ["MS Dhoni", "Shane Watson", "Ambati Rayudu", "Dwayne Bravo"],
    answer: "Shane Watson",
  },
  {
    id: 31,
    question: "Which venue hosted the IPL 2021 final?",
    options: [
      "Dubai International Stadium",
      "Sheikh Zayed Stadium",
      "Sharjah Cricket Stadium",
      "Wankhede Stadium",
    ],
    answer: "Dubai International Stadium",
  },
  {
    id: 32,
    question:
      "Who was the highest wicket-taker for Royal Challengers Bangalore in IPL 2020?",
    options: [
      "Yuzvendra Chahal",
      "Washington Sundar",
      "Mohammed Siraj",
      "Navdeep Saini",
    ],
    answer: "Yuzvendra Chahal",
  },
  {
    id: 33,
    question: "Which player was the captain of Rajasthan Royals in IPL 2019?",
    options: ["Steve Smith", "Ajinkya Rahane", "Sanju Samson", "Shane Watson"],
    answer: "Ajinkya Rahane",
  },
  {
    id: 34,
    question: "Who scored the first double century in IPL history?",
    options: [
      "Chris Gayle",
      "Virat Kohli",
      "AB de Villiers",
      "No one has scored a double century",
    ],
    answer: "No one has scored a double century",
  },
  {
    id: 35,
    question:
      "Which team had the worst loss (in terms of runs) record in IPL 2017?",
    options: [
      "Delhi Daredevils",
      "Gujarat Lions",
      "Rising Pune Supergiant",
      "Royal Challengers Bangalore",
    ],
    answer: "Delhi Daredevils",
  },
  {
    id: 36,
    question: "Who was the captain of Kings XI Punjab in IPL 2020?",
    options: [
      "Ravichandran Ashwin",
      "KL Rahul",
      "Chris Gayle",
      "Glenn Maxwell",
    ],
    answer: "KL Rahul",
  },
  {
    id: 37,
    question: "Which bowler took the most wickets in IPL 2022?",
    options: [
      "Wanindu Hasaranga",
      "Yuzvendra Chahal",
      "Kuldeep Yadav",
      "Trent Boult",
    ],
    answer: "Yuzvendra Chahal",
  },
  {
    id: 38,
    question: "Who was the Man of the Tournament in IPL 2019?",
    options: [
      "Andre Russell",
      "David Warner",
      "Kagiso Rabada",
      "Jasprit Bumrah",
    ],
    answer: "Andre Russell",
  },
  {
    id: 39,
    question: "Which team finished at the bottom of the table in IPL 2019?",
    options: [
      "Royal Challengers Bangalore",
      "Rajasthan Royals",
      "Kings XI Punjab",
      "Delhi Capitals",
    ],
    answer: "Royal Challengers Bangalore",
  },
  {
    id: 40,
    question:
      "Who was the leading run-scorer for Gujarat Titans in their debut IPL season 2022?",
    options: [
      "Hardik Pandya",
      "Shubman Gill",
      "David Miller",
      "Wriddhiman Saha",
    ],
    answer: "Shubman Gill",
  },
  {
    id: 41,
    question:
      "Which bowler took the most deliveries before conceding their first six in IPL history?",
    options: [
      "Ashok Dinda",
      "Lasith Malinga",
      "Pravin Tambe",
      "Jasprit Bumrah",
    ],
    answer: "Ashok Dinda",
  },
  {
    id: 42,
    question: "Who was the captain of Deccan Chargers when they won IPL 2009?",
    options: ["Adam Gilchrist", "VVS Laxman", "Andrew Symonds", "Rohit Sharma"],
    answer: "Adam Gilchrist",
  },
  {
    id: 43,
    question: "Which player scored the most sixes in IPL 2020?",
    options: [
      "Ishan Kishan",
      "Nicholas Pooran",
      "Kieron Pollard",
      "Hardik Pandya",
    ],
    answer: "Ishan Kishan",
  },
  {
    id: 44,
    question: "Who was the Purple Cap winner in IPL 2023?",
    options: [
      "Mohammed Shami",
      "Rashid Khan",
      "Yuzvendra Chahal",
      "Mustafizur Rahman",
    ],
    answer: "Mohammed Shami",
  },
  {
    id: 45,
    question:
      "Who is the leading run-getter for Mumbai Indians in a single IPL season?",
    options: [
      "Sachin Tendulkar",
      "Rohit Sharma",
      "Suryakumar Yadav",
      "Ishan Kishan",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    id: 46,
    question:
      "Who was the leading wicket-taker for Delhi Capitals in IPL 2024?",
    options: ["Kuldeep Yadav", "Khaleel Ahmed", "Anrich Nortje", "Axar Patel"],
    answer: "Kuldeep Yadav",
  },
  {
    id: 47,
    question:
      "Which player was traded from Delhi Capitals to Punjab Kings before IPL 2022?",
    options: [
      "Shikhar Dhawan",
      "Kagiso Rabada",
      "Marcus Stoinis",
      "Prithvi Shaw",
    ],
    answer: "Shikhar Dhawan",
  },
  {
    id: 48,
    question: "Who scored the fastest fifty in IPL 2024?",
    options: ["Travis Head", "Riyan Parag", "Jake Fraser-McGurk", "Phil Salt"],
    answer: "Jake Fraser-McGurk",
  },
  {
    id: 49,
    question:
      "Which bowler has bowled the most dot balls in IPL history (as of Season 17)?",
    options: [
      "Harbhajan Singh",
      "Ravichandran Ashwin",
      "Lasith Malinga",
      "Amit Mishra",
    ],
    answer: "Harbhajan Singh",
  },
  {
    id: 50,
    question:
      "Who was the captain of Lucknow Super Giants in their debut IPL season 2022?",
    options: ["KL Rahul", "Marcus Stoinis", "Quinton de Kock", "Deepak Hooda"],
    answer: "KL Rahul",
  },
  {
    id: 51,
    question: "Which player scored the most runs in a single IPL season?",
    options: ["Virat Kohli", "David Warner", "Chris Gayle", "Robin Uthappa"],
    answer: "Virat Kohli",
  },
  {
    id: 52,
    question:
      "Who was the wicket-keeper for Kolkata Knight Riders in IPL 2024?",
    options: [
      "Dinesh Karthik",
      "Phil Salt",
      "Rahmanullah Gurbaz",
      "Sheldon Jackson",
    ],
    answer: "Phil Salt",
  },
  {
    id: 53,
    question: "Which team had the best bowling average in IPL 2023?",
    options: [
      "Gujarat Titans",
      "Chennai Super Kings",
      "Mumbai Indians",
      "Kolkata Knight Riders",
    ],
    answer: "Gujarat Titans",
  },
  {
    id: 54,
    question: "Who was the Orange Cap winner in IPL 2024?",
    options: ["Virat Kohli", "Ruturaj Gaikwad", "Riyan Parag", "Travis Head"],
    answer: "Virat Kohli",
  },
  {
    id: 55,
    question: "Which player took the most wickets in a single IPL match?",
    options: ["Alzarri Joseph", "Jasprit Bumrah", "Adam Zampa", "Anil Kumble"],
    answer: "Alzarri Joseph",
  },
  {
    id: 56,
    question: "Who scored the first century for Mumbai Indians in IPL history?",
    options: [
      "Sanath Jayasuriya",
      "Sachin Tendulkar",
      "Rohit Sharma",
      "Dwayne Smith",
    ],
    answer: "Sanath Jayasuriya",
  },
  {
    id: 57,
    question: "Which venue hosted the IPL 2024 final?",
    options: [
      "Wankhede Stadium",
      "Eden Gardens",
      "M. A. Chidambaram Stadium",
      "Narendra Modi Stadium",
    ],
    answer: "M. A. Chidambaram Stadium",
  },
  {
    id: 58,
    question:
      "Who scored the highest individual score for Sunrisers Hyderabad in IPL 2024?",
    options: [
      "Travis Head",
      "Abhishek Sharma",
      "Aiden Markram",
      "Heinrich Klaasen",
    ],
    answer: "Travis Head",
  },
  {
    id: 59,
    question:
      "Which player was the leading run-scorer for Punjab Kings in IPL 2023?",
    options: [
      "Shikhar Dhawan",
      "Liam Livingstone",
      "Prabhsimran Singh",
      "Jitesh Sharma",
    ],
    answer: "Shikhar Dhawan",
  },
  {
    id: 60,
    question: "Who was the Purple Cap winner in IPL 2024?",
    options: [
      "Mustafizur Rahman",
      "Jasprit Bumrah",
      "Harshal Patel",
      "T Natarajan",
    ],
    answer: "Harshal Patel",
  },
  {
    id: 61,
    question: "Which team scored the highest powerplay total in IPL 2024?",
    options: [
      "Kolkata Knight Riders",
      "Sunrisers Hyderabad",
      "Royal Challengers Bangalore",
      "Delhi Capitals",
    ],
    answer: "Sunrisers Hyderabad",
  },
  {
    id: 62,
    question: "Who was the leading six-hitter in IPL 2022?",
    options: [
      "Jos Buttler",
      "Liam Livingstone",
      "Andre Russell",
      "Nicholas Pooran",
    ],
    answer: "Jos Buttler",
  },
  {
    id: 63,
    question:
      "Which player took the most catches for Gujarat Titans in IPL 2022?",
    options: [
      "Wriddhiman Saha",
      "Hardik Pandya",
      "Shubman Gill",
      "David Miller",
    ],
    answer: "Wriddhiman Saha",
  },
  {
    id: 64,
    question: "Who was the captain of Royal Challengers Bangalore in IPL 2021?",
    options: [
      "Virat Kohli",
      "AB de Villiers",
      "Glenn Maxwell",
      "Faf du Plessis",
    ],
    answer: "Virat Kohli",
  },
  {
    id: 65,
    question:
      "Which bowler has the best economy rate in IPL powerplay overs (minimum 50 overs)?",
    options: [
      "Rashid Khan",
      "Jasprit Bumrah",
      "Sunil Narine",
      "Mitchell Starc",
    ],
    answer: "Rashid Khan",
  },
  {
    id: 66,
    question:
      "Who scored the winning runs for Kolkata Knight Riders in IPL 2024 final?",
    options: ["Venkatesh Iyer", "Andre Russell", "Rinku Singh", "Shreyas Iyer"],
    answer: "Venkatesh Iyer",
  },
  {
    id: 67,
    question:
      "Which player was bought for the highest price in IPL 2024 auction?",
    options: ["Sam Curran", "Pat Cummins", "Mitchell Starc", "Cameron Green"],
    answer: "Mitchell Starc",
  },
  {
    id: 68,
    question:
      "Who was the other wicket-keeper for Chennai Super Kings in the 2008 IPL season other than MS Dhoni?",
    options: ["Parthiv Patel", "MS Dhoni", "Dinesh Karthik", "Robin Uthappa"],
    answer: "Parthiv Patel",
  },
  {
    id: 69,
    question:
      "Which team holds the highest Net Run Rate (NRR) in a single IPL season (as of Season 17)?",
    options: [
      "Mumbai Indians",
      "Kolkata Knight Riders",
      "Chennai Super Kings",
      "Sunrisers Hyderabad",
    ],
    answer: "Kolkata Knight Riders",
  },
  {
    id: 70,
    question: "Who took the most wickets for Rajasthan Royals in IPL 2024?",
    options: [
      "Trent Boult",
      "Yuzvendra Chahal",
      "Ravichandran Ashwin",
      "Sandeep Sharma",
    ],
    answer: "Yuzvendra Chahal",
  },
  {
    id: 71,
    question:
      "Who is the only foreign player to win the Emerging Player award in IPL history?",
    options: [
      "Mustafizur Rahman",
      "Rashid Khan",
      "Shimron Hetmyer",
      "Sam Curran",
    ],
    answer: "Mustafizur Rahman",
  },
  {
    id: 72,
    question:
      "Who was the leading wicket-taker for Kolkata Knight Riders in IPL 2024?",
    options: [
      "Sunil Narine",
      "Varun Chakaravarthy",
      "Mitchell Starc",
      "Harshit Rana",
    ],
    answer: "Sunil Narine",
  },
  {
    id: 73,
    question: "Which team finished last in IPL 2024?",
    options: [
      "Punjab Kings",
      "Delhi Capitals",
      "Royal Challengers Bangalore",
      "Mumbai Indians",
    ],
    answer: "Punjab Kings",
  },
  {
    id: 74,
    question: "Who scored the most runs in IPL 2021?",
    options: [
      "Ruturaj Gaikwad",
      "Faf du Plessis",
      "KL Rahul",
      "Shikhar Dhawan",
    ],
    answer: "Ruturaj Gaikwad",
  },
  {
    id: 75,
    question: "Which bowler took the most wickets in IPL 2021?",
    options: ["Harshal Patel", "Avesh Khan", "Jasprit Bumrah", "Rashid Khan"],
    answer: "Harshal Patel",
  },
  {
    id: 76,
    question: "Who was the captain of Sunrisers Hyderabad in IPL 2023?",
    options: [
      "Kane Williamson",
      "Aiden Markram",
      "Pat Cummins",
      "Bhuvneshwar Kumar",
    ],
    answer: "Aiden Markram",
  },
  {
    id: 77,
    question: "Which player hit the most sixes in IPL 2024?",
    options: ["Travis Head", "Riyan Parag", "Abhishek Sharma", "Andre Russell"],
    answer: "Riyan Parag",
  },
  {
    id: 78,
    question: "Who was the leading run-scorer for Mumbai Indians in IPL 2023?",
    options: [
      "Rohit Sharma",
      "Ishan Kishan",
      "Suryakumar Yadav",
      "Tilak Varma",
    ],
    answer: "Ishan Kishan",
  },
  {
    id: 79,
    question: "Which team scored the lowest total in IPL 2024?",
    options: [
      "Punjab Kings",
      "Delhi Capitals",
      "Mumbai Indians",
      "Royal Challengers Bangalore",
    ],
    answer: "Royal Challengers Bangalore",
  },
  {
    id: 80,
    question:
      "Who was the leading wicket-taker for Lucknow Super Giants in IPL 2023?",
    options: ["Krunal Pandya", "Ravi Bishnoi", "Mark Wood", "Naveen-ul-Haq"],
    answer: "Ravi Bishnoi",
  },
  {
    id: 81,
    question: "Which player took the most catches in IPL 2024?",
    options: ["Phil Salt", "Sanju Samson", "Rishabh Pant", "Heinrich Klaasen"],
    answer: "Sanju Samson",
  },
  {
    id: 82,
    question: "Which team did Parthiv Patel belong to in the 2008 IPL season?",
    options: [
      "Chennai Super Kings",
      "Mumbai Indians",
      "Royal Challengers Bangalore",
      "Rajasthan Royals",
    ],
    answer: "Chennai Super Kings",
  },
  {
    id: 83,
    question: "Which bowler has the most five-wicket hauls in IPL history?",
    options: [
      "Amit Mishra",
      "Kagiso Rabada",
      "Imran Tahir",
      "Multiple players tied",
    ],
    answer: "Multiple players tied",
  },
  {
    id: 84,
    question:
      "Which bowler recorded exceptional bowling figures of 5 wickets for 5 runs in an IPL match?",
    options: ["Varun C", "Anil Kumble", "Jasprit Bumrah", "Mohammed Shami"],
    answer: "Anil Kumble",
  },
  {
    id: 85,
    question:
      "Which player scored the most runs for Delhi Capitals in IPL 2024?",
    options: [
      "Jake Fraser-McGurk",
      "Prithvi Shaw",
      "Rishabh Pant",
      "Axar Patel",
    ],
    answer: "Jake Fraser-McGurk",
  },
  {
    id: 86,
    question: "Who took the most wickets in death overs during IPL 2023?",
    options: [
      "Mohammed Shami",
      "Mohit Sharma",
      "Trent Boult",
      "Jasprit Bumrah",
    ],
    answer: "Mohammed Shami",
  },
  {
    id: 87,
    question:
      "Which team had the highest average first innings score in IPL 2024?",
    options: [
      "Sunrisers Hyderabad",
      "Kolkata Knight Riders",
      "Royal Challengers Bangalore",
      "Delhi Capitals",
    ],
    answer: "Sunrisers Hyderabad",
  },
  {
    id: 88,
    question:
      "Who was the leading run-scorer for Rajasthan Royals in IPL 2024?",
    options: ["Yashasvi Jaiswal", "Jos Buttler", "Sanju Samson", "Riyan Parag"],
    answer: "Riyan Parag",
  },
  {
    id: 89,
    question:
      "Which bowler took the most wickets in middle overs (7-15) during IPL 2024?",
    options: [
      "Sunil Narine",
      "Yuzvendra Chahal",
      "Kuldeep Yadav",
      "Rashid Khan",
    ],
    answer: "Kuldeep Yadav",
  },
  {
    id: 90,
    question:
      "Who scored the most runs in successful run chases during IPL 2023?",
    options: [
      "Shubman Gill",
      "Devon Conway",
      "Faf du Plessis",
      "Yashasvi Jaiswal",
    ],
    answer: "Shubman Gill",
  },
  {
    id: 91,
    question:
      "Which player had the highest strike rate (minimum 200 balls) in IPL 2024?",
    options: [
      "Travis Head",
      "Jake Fraser-McGurk",
      "Andre Russell",
      "Nicholas Pooran",
    ],
    answer: "Jake Fraser-McGurk",
  },
  {
    id: 92,
    question:
      "Who was the leading wicket-taker for Royal Challengers Bangalore in IPL 2024?",
    options: ["Mohammed Siraj", "Yash Dayal", "Lockie Ferguson", "Karn Sharma"],
    answer: "Yash Dayal",
  },
  {
    id: 93,
    question: "Who was the first ever captain of Mumbai Indians in IPL?",
    options: [
      "Sachin Tendulkar",
      "Harbhajan Singh",
      "Rohit Sharma",
      "Ricky Ponting",
    ],
    answer: "Harbhajan Singh",
  },
  {
    id: 94,
    question: "Who hit the longest six in IPL 2024?",
    options: [
      "Jake Fraser-McGurk",
      "Travis Head",
      "Andre Russell",
      "Riyan Parag",
    ],
    answer: "Jake Fraser-McGurk",
  },
  {
    id: 95,
    question:
      "Which player took the most wickets in powerplay overs during IPL 2024?",
    options: [
      "Jasprit Bumrah",
      "Mustafizur Rahman",
      "Mitchell Starc",
      "Trent Boult",
    ],
    answer: "Trent Boult",
  },
  {
    id: 96,
    question:
      "Who was the highest run-scorer in IPL 2024 eliminator and qualifier matches combined?",
    options: [
      "Virat Kohli",
      "Sunil Narine",
      "Venkatesh Iyer",
      "Abhishek Sharma",
    ],
    answer: "Virat Kohli",
  },
  {
    id: 97,
    question: "Which bowler had the best bowling figures in IPL 2024 playoffs?",
    options: [
      "Mitchell Starc",
      "Mustafizur Rahman",
      "Andre Russell",
      "Varun Chakaravarthy",
    ],
    answer: "Mitchell Starc",
  },
  {
    id: 98,
    question:
      "Who scored the most runs batting at number 3 position in IPL 2024?",
    options: ["Virat Kohli", "Sanju Samson", "Shreyas Iyer", "Ruturaj Gaikwad"],
    answer: "Virat Kohli",
  },
  {
    id: 99,
    question:
      "Which bowler recorded exceptional bowling figures of 5 wickets for 5 runs in an IPL playoff match.?",
    options: [
      "Akash Madhwal",
      "Mitchell Starc",
      "Jasprit Bumrah",
      "Mohammed Shami",
    ],
    answer: "Akash Madhwal",
  },
  {
    id: 100,
    question:
      "Who was the leading run-scorer for Lucknow Super Giants in IPL 2024?",
    options: [
      "KL Rahul",
      "Nicholas Pooran",
      "Marcus Stoinis",
      "Quinton de Kock",
    ],
    answer: "KL Rahul",
  },
  {
    id: 101,
    question: "Which bowler conceded the most runs in a single IPL match?",
    options: [
      "Basil Thampi",
      "Ishant Sharma",
      "Piyush Chawla",
      "Praveen Kumar",
    ],
    answer: "Basil Thampi",
  },
];

export default iplQuestions;

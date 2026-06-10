export interface Student {
  id: string;
  name: string;
  score: string;
  school: string;
  image: string;
  review: string;
  exam: "JEE" | "NEET" | "MHT-CET" | "10th CBSE" | "10th SSC";
}

export const studentResults: Student[] = [
  // Existing entries...
  {
    id: "kalpak-patil",
    name: "Kalpak Patil",
    score: "96.4%",
    school: "City International School",
    image: "/students/kalpak-patil.avif",
    review: "The focused approach toward NCERT and consistent mock tests at Unique Academy made my CBSE board preparation seamless and stress-free.",
    exam: "10th CBSE",
  },
  {
    id: "amod-ithape",
    name: "Amod Ithape",
    score: "96%",
    school: "GGIS School",
    image: "/students/amod-ithape.avif",
    review: "Unique Academy's foundation course helped me master complex concepts early on, which was reflected in my board results.",
    exam: "10th CBSE",
  },
  {
    id: "aditya-deshmukh",
    name: "Aditya Deshmukh",
    score: "94%",
    school: "City International School",
    image: "/students/aditya-deshmukh.avif",
    review: "Personal attention from teachers and the competitive environment here pushed me to achieve my best in the 10th CBSE boards.",
    exam: "10th CBSE",
  },
  {
    id: "utkarsh-kamble",
    name: "Utkarsh Kamble",
    score: "93.6%",
    school: "DAV Public School",
    image: "/students/utkarsh-kamble.avif",
    review: "The simplified teaching methods for Science and Maths were the key to my success. I highly recommend Unique for foundation years.",
    exam: "10th CBSE",
  },
  {
    id: "sumedha-adake",
    name: "Sumedha Adake",
    score: "92.4%",
    school: "SNBP School",
    image: "/students/sumedha-adake.avif",
    review: "The doubt-solving sessions were incredibly helpful. Even the most difficult topics became easy to understand with the faculty's guidance.",
    exam: "10th CBSE",
  },
  {
    id: "tanvi-palve",
    name: "Tanvi Palve",
    score: "91%",
    school: "DAV Public School",
    image: "/students/tanvi-palve.avif",
    review: "The study material provided is very comprehensive and covers all possible patterns of questions asked in the board exams.",
    exam: "10th CBSE",
  },
  {
    id: "ayush-kakade",
    name: "Ayush Kakade",
    score: "90%",
    school: "DAV Public School",
    image: "/students/ayush-kakade.avif",
    review: "Consistent practice and regular feedback from the mentors helped me bridge my gaps and score 90% in my boards.",
    exam: "10th CBSE",
  },

  // Newly Added Students
  { id: "sai-yamate", name: "Sai Yamate", score: "97.2%", school: "SVB", image: "/students/sai-yamate.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "rishabh-dhawale", name: "Rishabh Dhawale", score: "96.4%", school: "New Millennium", image: "/students/rishabh-dhawale.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "moin-shaikh", name: "Moin Shaikh", score: "96.2%", school: "GEMS", image: "/students/moin-shaikh.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "aarohi-mali", name: "Aarohi Mali", score: "96%", school: "St. Joseph", image: "/students/aarohi-mali.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "apurv-sayankar", name: "Apurv Sayankar", score: "95.8%", school: "SVB", image: "/students/apurv-sayankar.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "ananya-waje", name: "Ananya Waje", score: "95.6%", school: "St. Thomas", image: "/students/ananya-waje.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "shravani-bargal", name: "Shravani Bargal", score: "95%", school: "St. Joseph", image: "/students/shravani-bargal.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "dharmik-rathod", name: "Dharmik Rathod", score: "95%", school: "New Millennium", image: "/students/dharmik-rathod.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "manasvi-rupnavar", name: "Manasvi Rupnavar", score: "94.8%", school: "St. Joseph", image: "/students/manasvi-rupnavar.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "shivam-jamadar", name: "Shivam Jamadar", score: "94%", school: "SVB", image: "/students/shivam-jamadar.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "anshul-tekade", name: "Anshul Tekade", score: "93.6%", school: "SVB", image: "/students/anshul-tekade.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "ujwal-dhande", name: "Ujwal Dhande", score: "93.6%", school: "BVB", image: "/students/ujwal-dhande.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "amey-dhamdhere", name: "Amey Dhamdhere", score: "93.4%", school: "SVB", image: "/students/amey-dhamdhere.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "anushka-kainth", name: "Anushka Kainth", score: "93.2%", school: "BVB", image: "/students/anushka-kainth.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "ameya-deshmukh", name: "Ameya Deshmukh", score: "93%", school: "SVB", image: "/students/ameya-deshmukh.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "vaibhavi-uttekar", name: "Vaibhavi Uttekar", score: "93%", school: "St. Thomas", image: "/students/vaibhavi-uttekar.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "siddhi-chavan", name: "Siddhi Chavan", score: "92.6%", school: "St. Joseph", image: "/students/siddhi-chavan.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "dhanishka-najan", name: "Dhanishka Najan", score: "92%", school: "New Millennium", image: "/students/dhanishka-najan.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "veer-patil", name: "Veer Patil", score: "91.4%", school: "Holy Mission", image: "/students/veer-patil.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "shantanu-sangle", name: "Shantanu Sangle", score: "90.8%", school: "SVB", image: "/students/shantanu-sangle.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "anushka-gawali", name: "Anushka Gawali", score: "90.6%", school: "BVB", image: "/students/anushka-gawali.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "shreya-shinde", name: "Shreya Shinde", score: "90.4%", school: "SVB", image: "/students/shreya-shinde.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "ananya-kate", name: "Ananya Kate", score: "90.2%", school: "MIS", image: "/students/ananya-kate.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "shruti-pardeshi", name: "Shruti Pardeshi", score: "90.2%", school: "St. Joseph", image: "/students/shruti-pardeshi.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "affan-khan", name: "Affan Khan", score: "90.2%", school: "St. Joseph", image: "/students/affan-khan.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "ievin-jitto", name: "Ievin Jitto", score: "90.2%", school: "St. Joseph", image: "/students/ievin-jitto.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "anushree-pilane", name: "Anushree Pilane", score: "90%", school: "BVB", image: "/students/anushree-pilane.avif", review: "Great learning experience.", exam: "10th SSC" },
  { id: "shrunmayee-dhumal", name: "Shrunmayee Dhumal", score: "90%", school: "BVB", image: "/students/shrunmayee-dhumal.avif", review: "Great learning experience.", exam: "10th SSC" },
];
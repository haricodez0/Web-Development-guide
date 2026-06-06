

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
function ToggleSidebar() {
   document.getElementById("Sidebar").classList.toggle("open");
}
function runCode() {
  const code = document.getElementById('code').value;
  const frame = document.getElementById('output');
  const doc = frame.contentDocument   || frame.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
}
function ToggleDarkMode() {
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
const translations = {
  tamil: {
    "HTML Introduction": "HTML அறிமுகம்",
    "What is HTML?": "HTML என்றால் என்ன?",
    "HTML stands for Hyper Text Markup Language": "HTML என்பது ஹைப்பர் டெக்ஸ்ட் மார்க்அப் லாங்குவேஜ் ஆகும்",
    "HTML is the standard markup language for creating Web pages": "HTML என்பது வலைப்பக்கங்களை உருவாக்குவதற்கான நிலையான மார்க்அப் மொழி ஆகும்",
    "HTML describes the structure of a Web page": "HTML ஒரு வலைப்பக்கத்தின் அமைப்பை விவரிக்கிறது",
    "HTML consists of a series of elements": "HTML தொடர்ச்சியான உறுப்புகளால் ஆனது",
    "HTML elements tell the browser how to display the content": "HTML உறுப்புகள் உள்ளடக்கத்தை எப்படி காட்ட வேண்டும் என்று உலாவிக்கு சொல்கின்றன",
    "HTML elements label pieces of content": "HTML உறுப்புகள் உள்ளடக்கத்தை 'இது ஒரு தலைப்பு', 'இது ஒரு பத்தி', 'இது ஒரு இணைப்பு' என்று குறிக்கின்றன",
    "What is an HTML element?": "HTML உறுப்பு என்றால் என்ன?",
    "A HTML Element consists of a start tag, some content and an end tag": "ஒரு HTML உறுப்பு ஒரு தொடக்க டேக், சில உள்ளடக்கம் மற்றும் ஒரு முடிவு டேக் ஆகியவற்றால் ஆனது",
    "Some HTML elements have no content (like the": "சில HTML உறுப்புகளுக்கு உள்ளடக்கம் இல்லை (உதாரணமாக",
    "element). These elements are called empty elements. Empty elements do not have an end tag!": "உறுப்பு). இவை வெற்று உறுப்புகள் எனப்படும். வெற்று உறுப்புகளுக்கு முடிவு டேக் இல்லை!",
    "Heading2": "HTML உறுப்பு என்றால் என்ன?",
    "Point1" : "ஒரு HTML உறுப்பு என்பது ஒரு தொடக்கக் குறி, சில உள்ளடக்கம் மற்றும் ஒரு முடிவுக் குறி ஆகியவற்றைக் கொண்டுள்ளது.",
    "Info1" : "சில HTML உறுப்புகளுக்கு உள்ளடக்கம் இருக்காது (<br> உறுப்பைப் போல). இந்த உறுப்புகள் வெற்று உறுப்புகள் என்று அழைக்கப்படுகின்றன. வெற்று உறுப்புகளுக்கு இறுதி குறி இருக்காது!",
    "SubHeading2" : "இணைய உலாவிகள்",
    "Subheading2-Point1" : "ஒரு இணைய உலாவியின் (Chrome, Edge, Firefox, Safari) நோக்கம், HTML ஆவணங்களைப் படித்து அவற்றைச் சரியாகக் காண்பிப்பதே ஆகும்.",
    "Subheading2-Point2" : "ஒரு உலாவி HTML குறிச்சொற்களைக் காண்பிப்பதில்லை, ஆனால் ஆவணத்தை எவ்வாறு காண்பிப்பது என்பதைத் தீர்மானிக்க அவற்றைப் பயன்படுத்துகிறது:",
    "SubHeading3" : "HTML பக்க அமைப்பு",
    "SubHeading3-Point1" : "கீழே ஒரு HTML பக்க அமைப்பின் காட்சிப்படுத்தல் கொடுக்கப்பட்டுள்ளது:",
    "Editors-Subheading1" : "HTML-ஐக் கற்றுக்கொள்வதற்கும் பயன்படுத்துவதற்கும் உங்களுக்குத் தேவையானது நோட்பேட் மட்டுமே, அது ஒரு எளிய உரைத் திருத்தி ஆகும்.",
    "Editors-Subheading2" : "நோட்பேட் அல்லது டெக்ஸ்ட்எடிட்டைப் பயன்படுத்தி HTML கற்றுக்கொள்ளலாம்.",
    "Editors-Point1" : "தொழில்முறை HTML எடிட்டர்களைப் பயன்படுத்தி வலைப்பக்கங்களை உருவாக்கவும் மாற்றியமைக்கவும் முடியும்.",
    "Editors-Point2" : "இருப்பினும், HTML கற்றுக்கொள்வதற்கு நோட்பேட் (பிசி) அல்லது டெக்ஸ்ட்எடிட் (மேக்) போன்ற ஒரு எளிய டெக்ஸ்ட் எடிட்டரைப் பரிந்துரைக்கிறோம்.",
    "Editors-Point3" : "ஒரு எளிய உரை திருத்தியைப் பயன்படுத்துவது HTML கற்றுக்கொள்வதற்கான ஒரு நல்ல வழியாகும்.",
    "Editors-Point4" : "விஷுவல் ஸ்டுடியோ கோட் போன்ற தொழில்முறை HTML எடிட்டர்கள், தொழில்முறை மென்பொருள் உருவாக்கத்தில் பயன்படுத்தப்படுகின்றன. இவை உங்கள் நிரலாக்கத்தை மேலும் தனிப்பயனாக்கப்பட்டதாகவும் எளிதாகவும் ஆக்குகின்றன.",
    "Editors-Point5" : "நோட்பேட் அல்லது டெக்ஸ்ட்எடிட்டைப் பயன்படுத்தி உங்கள் முதல் வலைப்பக்கத்தை உருவாக்க, கீழே உள்ள வழிமுறைகளைப் பின்பற்றவும்.",
    "Editors-Subheading-3" : "படி 1: நோட்பேடைத் திறக்கவும் (விண்டோஸிற்கு)",
    "Editors-Subheading-3-Point1" : "விண்டோஸ் ஐகானைக் கிளிக் செய்து, நோட்பேடைத் தேடித் திறக்கவும்.",
    "Editors-Subheading4" : "படி 1: டெக்ஸ்ட்எடிட்டைத் திறக்கவும் (மேக்கிற்கானது).",
    "Editor-Subheading4-Point1" : "ஃபைண்டரைத் திறக்கவும் > பயன்பாடுகள் > டெக்ஸ்ட்எடிட்.",
    "Editor-Subheading4-Point2" : "மேலும், பயன்பாடு கோப்புகளைச் சரியாகச் சேமிக்க, சில விருப்பத்தேர்வுகளை மாற்றவும். விருப்பத்தேர்வுகள் > வடிவமைப்பு > <strong>'சாதாரண உரை'</strong> என்பதைத் தேர்வுசெய்யவும்.",
    "Editor-Subheading4-Point3" : "பிறகு, <strong>'Open and Save'</strong> என்பதன் கீழ், <strong>'Display HTML files as HTML code instead of formatted text'</strong> என்று குறிப்பிடும் பெட்டியைத் தேர்வு செய்யவும்.",   
    "Editor-Subheading4-Point4" : "<strong>பிறகு, குறியீட்டை வைப்பதற்காக ஒரு புதிய ஆவணத்தைத் திறக்கவும்.</strong>",
    "Editor-Subheading5" : "HTML ஐ எழுதவும்",
    "Editor-Subheading5-Point1" : "பின்வரும் HTML குறியீட்டை நோட்பேடில் எழுதவும் அல்லது நகலெடுக்கவும்:",
    "Editor-Subheading6" : "ஆன்லைன் HTML எடிட்டர்",
    "Editor-Subheading6-Point1" : "நீங்கள் உங்கள் மொபைலில் இருந்தால் அல்லது நோட்பேடைப் பயன்படுத்த விரும்பவில்லை என்றால், கீழே உள்ள லைவ் எடிட்டரைப் பயன்படுத்தலாம்.",
    "Editor-Subheading6-Point2" : "பிறகு, குறியீட்டை வைப்பதற்காக ஒரு புதிய ஆவணத்தைத் திறக்கவும்.",
    "Editor-Subheading7" : "HTML கோப்பை சேமிக்கவும்",
    "Editor-Subheading7-Point1" : "HTML-ஐ எழுதிய பிறகு அதைச் சேமிக்க வேண்டும்.",
    "Editor-Subheading7-Point2" : "அது ஒரு HTML கோப்பாகச் செயல்பட, நாம் அதை ஒரு குறிப்பிட்ட முறையில் சேமிக்க வேண்டும்.",
    "Editor-Subheading7-Point3" : "முதலில் நோட்பேட் மெனுவில் கோப்பு > இவ்வாறு சேமி என்பதைத் தேர்ந்தெடுக்கவும்.",
    "Editor-Subheading7-Point4" : "கோப்பிற்கு 'index.html' எனப் பெயரிடவும்.",
    "Editor-Subheading7-Point5" : "மேலும் குறியாக்கத்தை UTF-8 ஆக அமைக்கவும் (இது HTML கோப்புகளுக்கான விரும்பத்தக்க குறியாக்கமாகும்).",
    "Editor-Subheading8" : "உங்கள் HTML கோப்பை உலாவியில் பார்க்கவும்",
    "Editor-Subheading8-Point1" : "கோப்பைத் திறக்க, அதை இருமுறை சொடுக்கவும்.",
    "Editor-Subheading8-Point2" : "நீங்கள் எந்த உலாவியில் இதைப் பார்க்க விரும்புகிறீர்கள் என்பதைத் தேர்வுசெய்ய விரும்பினால், வலது கிளிக் செய்து 'Open with' என்பதைத் தேர்ந்தெடுக்கவும்.",
    "Editor-Subheading8-Point3" : "முடிவுகள் ஏறக்குறைய இதுபோல இருக்க வேண்டும்:",
    

  
  
  },
  english: {
    "HTML Introduction": "HTML Introduction",
    "What is HTML?": "What is HTML?",
    "HTML stands for Hyper Text Markup Language": "HTML stands for Hyper Text Markup Language",
    "HTML is the standard markup language for creating Web pages": "HTML is the standard markup language for creating Web pages",
    "HTML describes the structure of a Web page": "HTML describes the structure of a Web page",
    "HTML consists of a series of elements": "HTML consists of a series of elements",
    "HTML elements tell the browser how to display the content": "HTML elements tell the browser how to display the content",
    "HTML elements label pieces of content": "HTML elements label pieces of content such as \"this is a heading\", \"this is a paragraph\", \"this is a link\", etc.",
    "What is an HTML element?": "What is an HTML element?",
    "A HTML Element consists of a start tag, some content and an end tag": "A HTML Element consists of a start tag, some content and an end tag",
    "Some HTML elements have no content (like the": "Some HTML elements have no content (like the",
    "element). These elements are called empty elements. Empty elements do not have an end tag!": "element). These elements are called empty elements. Empty elements do not have an end tag!",
    "Heading2": "What is an HTML element?",
    "Point1" : "A HTML Element consists of a start tag, some content and an end tag",
    "Info1" : "Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!",
    "SubHeading2" : "Web Browsers",
    "Subheading2-Point1" : "The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.",
    "Subheading2-Point2" : "A browser does not display the HTML tags, but uses them to determine how to display the document:",
    "SubHeading3" : "HTML Page Structure",
    "SubHeading3-Point1" : "Below is a visualization of an HTML page structure:",
    "Editors-Subheading1" : "All you need for learning and using HTML is a notepad, which is a simple text editor",
    "Editors-Subheading2" : "Learn HTML Using Notepad or TextEdit",
    "Editors-Point1" : "Web pages can be created and modified by using professional HTML editors.",
    "Editors-Point2" : "However, for learning HTML we recommend a simple text editor like <strong>Notepad (PC)</strong> or <strong>TextEdit (Mac)</strong>.",
    "Editors-Point3" : "Using a simple Text Editor is a good way to learn HTML",
    "Editors-Point4" : "Professional HTML editors such as <strong>Visual Studio Code </strong>is used for Professional Software Development which makes your coding more customized and easy",
    "Editors-Point5" : "<strong>Follow the steps below </strong>to create your first web page with Notepad or TextEdit.",
    "Editors-Subheading-3" : "Step 1: Open Notepad(For Windows)",
    "Editors-Subheading-3-Point1" : "Click the <strong>Windows icon </strong>and search for <strong>Notepad</strong> and open it",
    "Editors-Subheading4" : "Step 1: Open TextEdit(For Mac).",
    "Editor-Subheading4-Point1" : "Open <strong>Finder > Applications > TextEdit</strong>.",
    "Editor-Subheading4-Point2" : "Also change some preferences to get the application to save files correctly. In <strong>Preferences > Format ></strong> choose <strong>'Plain Text'</strong>.",
    "Editor-Subheading4-Point3" : "Then under <strong> 'Open and Save'</strong>, check the box that says <strong> 'Display HTML files as HTML code instead of formatted text'</strong>.",    
    "Editor-Subheading4-Point4" : "<strong>Then open a new document to place the code.</strong>",
    "Editor-Subheading5" : "Write the HTML",
    "Editor-Subheading5-Point1" : "Write or copy the following HTML code into Notepad:",
    "Editor-Subheading6" : "Online HTML Editor",
    "Editor-Subheading6-Point1" : "If your on your mobile or you dont want to use the notepad you can use the live editor below.",
    "Editor-Subheading6-Point2" : "you can edit the HTML code and view the result in your browser.",
    "Editor-Subheading7" : "Save the HTML file",
    "Editor-Subheading7-Point1" : "After writing the HTML you need to save it.",
    "Editor-Subheading7-Point2" : "For it to act as an HTML file we need to save it in a specific way.",
    "Editor-Subheading7-Point3" : "First Select <strong>File > Save</strong> as in the Notepad menu.",
    "Editor-Subheading7-Point4" : "Name the file<strong> 'index.html' </strong> ",
    "Editor-Subheading7-Point5" : "and set the <strong> encoding to UTF-8 </strong>(which is the preferred encoding for HTML files)",
    "Editor-Subheading8" : "View your HTML file in a Browser",
    "Editor-Subheading8-Point1" : "<strong>Double click</strong> the file to open it.",
    "Editor-Subheading8-Point2" : "If you want to choose what Browser you want to view it in, then <strong>right click</strong> and click on <strong> 'Open with'</strong>",
    "Editor-Subheading8-Point3" : "The Results should look something like this:",
  
  
  
  
  }
}

function translatePage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) el.innerHTML = t[key];
   
  });
}







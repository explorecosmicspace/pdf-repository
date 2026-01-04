const SUPABASE_URL = "https://mbtbayoeffmmormvqnct.supabase.co";
const SUPABASE_KEY = "sb_publishable_lmXRSBkyoyyDETpF5ZUTLg_zKUFR5ye";

fetch(`${SUPABASE_URL}/rest/v1/pdf_files?select=*`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
})
.then(res => res.json())
.then(data => {
  const list = document.getElementById("pdf-list");
  data.forEach(pdf => {
    list.innerHTML += `
      <div class="pdf">
        <h3>${pdf.title}</h3>
        <p>${pdf.description}</p>
        <a href="${pdf.drive_link}" target="_blank">Download</a>
      </div>
    `;
  });
});

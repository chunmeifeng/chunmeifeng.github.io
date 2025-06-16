function createProjectElement(id, project){
    if (project.tag == null)
        project.tag = id;
    if (project.others == null)
        project.others = "";

    /* ---------- name bold + symbolism upper ---------- */
    // bold name
    project.authors = project.authors.replace(
        /Chun[–-]Mei\s+Feng/gi,        
        '<strong>Chun-Mei&nbsp;Feng</strong>'
    );

    // symbolism upper
    project.authors = project.authors
        .replace(/\*/g,'<sup>*</sup>')
        .replace(/†/g,'<sup>†</sup>');
    
    project.conference = project.conference
    .replace(/Spotlight/gi,    '<span class="flag-red">Spotlight</span>')
    .replace(/Early\s+Accept/gi, '<span class="flag-red">Early&nbsp;Accept</span>')
    .replace(/Oral/gi,         '<span class="flag-red">Oral</span>');

    const html_img = `<img src='${project.image}' style="max-width: 160px">`;
    const html_txt = `<p>
      <a href="${project.paper_url}"><papertitle>${project.title}</papertitle></a><br>
      ${project.authors}<br>
      <em>${project.conference}</em><br>
      ${project.others}`;

    document.getElementById(id + "-img").innerHTML = html_img;
    document.getElementById(id + "-txt").innerHTML = html_txt;
}

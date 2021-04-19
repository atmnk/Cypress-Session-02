export function tagTest(tags,execution){
    let usedTags = ""
    if (Cypress.env("TAGS")){
        usedTags = Cypress.env("TAGS");
    }
    usedTags = usedTags.split(",").map(tag=>{return tag.trim()});
    usedTags.forEach(tag=>{
        if (tags.map(tag=>{return tag.toLowerCase()}).includes(tag.toLowerCase())) {
            execution()
            return;
        }
    })
}
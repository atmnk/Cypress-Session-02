export function useTags(tags,executeThis){
    let env_tag = Cypress.env("TAGS")
    if (env_tag){
        env_tag.split(',').map(tag=>{return tag.trim().toLowerCase()}).forEach(tag=>{
            if(tags.map(tag=>{return tag.toLowerCase()}).includes(tag)){
                executeThis()
                return;
            }
        })
    }
    
}
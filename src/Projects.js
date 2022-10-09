import React, { useState } from 'react'
import Tag from './tag';
export default function Projects(){
    const [tags, setTags] = useState('');
    const [duplicates, setDuplicates] = useState([]);
    function handleTextValue(e){
        const value = e.target.value;
        setTags(value);
        const temp = value.split(' ')
        const mp = {};
        const duplicatesTemp = [];
        temp.forEach(element => {
            if(mp[element] === 1){
                duplicatesTemp.push(element);
                mp[element] = mp[element]+1;
            }else if(mp[element] === undefined){
                mp[element]= 1;
            }else{
                mp[element] = mp[element] + 1;
            }
        })
        setDuplicates(duplicatesTemp);
    }
    function removeTag(tag){
        let temp = duplicates.filter(obj=>obj!=tag);
        setDuplicates(temp);
        temp = tags.replace(tag,'');
        setTags(temp);
    }
    return (
        <>
        <textarea value={tags} rows={10} cols={30} onChange={handleTextValue}/>
            {
                 duplicates.length && duplicates.map(tag=>{
                    return <Tag name={tag} removeTag={removeTag}/>
                })
            }
        </>

    )
}
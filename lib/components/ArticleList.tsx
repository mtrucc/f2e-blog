import React from '../react'
import Box from './Box'

export default ({ articles = [] }) => {
    return <div>
        {!articles.length ? <h3 style={{textAlign: 'center'}}>No Articles!</h3> : articles.map(({
            title,
            tags,
            description
        }) => <Box title={title} tags={tags} description={description}/>)}
    </div>
}
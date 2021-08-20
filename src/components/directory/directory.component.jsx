import React ,{ useState }from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import sections from './directory.data'

function Directory() {
    
    const [data, setData] = useState(sections)

    return (
        <div className='directory-menu'>
            {data.map(({title,id, imageUrl, size}) => {
                return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            })}
        </div>
    )
}

export default Directory

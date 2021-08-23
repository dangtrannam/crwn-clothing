import React ,{ useState }from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import sections from './directory.data'

function Directory() {
    
    const [data, setData] = useState(sections)

    return (
        <div className='directory-menu'>
            {data.map(({id,...otherSectionProps}) => {
                return <MenuItem key={id} {...otherSectionProps}/>
            })}
        </div>
    )
}

export default Directory

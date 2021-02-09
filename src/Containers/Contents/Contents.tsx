import React from 'react'
import styles from './Content.module.scss';

const Movies = (props: any) => {
    const {history, match, location} = props;
    console.log(history, match, location);
    const contentType = match.params.type;
    return (
        <>
            <div className={styles['filter-section']}>
               <input placeholder="Search..." />
               <select>
                   <option value="" disabled selected>Sort By...</option>
                   <option value="year-asc">Year Ascending</option>
                   <option value="year-desc">Year Descending</option>
               </select>
            </div>
            {contentType}
        </>
    )
}

export default Movies

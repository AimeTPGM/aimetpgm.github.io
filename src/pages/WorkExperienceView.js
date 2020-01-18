import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import ViewContainer from './ViewContainer';

export default () => {
    const bgEleStyle = { fontSize: '50em', marginTop: '-270px', marginLeft: '-150px', [mediaMaxWidth(768)]: { fontSize: '40em', marginTop: '-180px', marginLeft: '-120px', } }
    const getWorkAndExperiencesHeader = () =>  { 
        return (<div><div>{'Work &'}</div><div>{'Experiences'}</div></div>)
    }

    const getContent = () => {
        return (<div>content</div>)
    }
    return (<div>
        <ViewContainer 
            bgLetter={'>'} 
            bgEleStyle={bgEleStyle} 
            mainHeaderText={getWorkAndExperiencesHeader()} 
            content={getContent()}
            footerText={'Recommendation'}
            footerNavigate={'/recommendation'}
            />
    </div>)
}

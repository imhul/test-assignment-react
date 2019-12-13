// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

// Components
import Preloader from '../Preloader';
import Notify from '../Notify';
import AcademyCard from './AcademyCard';
import Stats from '../Stats';

function ListPage() {

  const paginationStyle = { "position": "absolute", "bottom": 200 };
  const dispatch = useDispatch();
  const { academies, isLoad, isInit, error } = useSelector(state => state.mainReducer);

  if ((isLoad || isInit) && !error.message) {
    dispatch({ type: 'GET_ACADEMIES' });
  }

  return (
      <>
        { academies.length > 0 ? <Stats /> : null }
        {!isInit && (
          <div className={`Academies ${academies.length === 0 ? 'empty' : ''}`}>

            { academies.length > 0 ? 
              <> 
                { academies.map(academy => <AcademyCard academy={academy} key={academy.id} /> )} 
                <div style={ paginationStyle } >
                  <Button 
                    shape="circle" 
                    icon="left" 
                    size="large" 
                    onClick={() => dispatch({ 
                      type: 'UPDATE_ACADEMIES', 
                      payload: { 
                        type: 'before',
                        id: academies[0].id
                      }})
                    }
                  />
                  <Button 
                    shape="circle" 
                    icon="right" 
                    size="large" 
                    onClick={() => dispatch({ 
                      type: 'UPDATE_ACADEMIES', 
                      payload: { 
                        type: 'after',
                        id: academies[3].id
                      }})
                    }
                  /> 
                </div>
              </> : null
            }
            
            { !isLoad && academies.length === 0 && (
              <div>
                { Notify('info', { 
                    title: 'No Academies yet', 
                    desc: 'You can create an academy on the "Add Page"' 
                  }) 
                }
                <h2>{ `{ no academies yet }` }</h2>
                <Button href="/add" type="primary" shape="round" icon="folder-add" size="large">
                  Create academy
                </Button>
              </div>
            )}
          </div>
        )}
        {(isLoad || isInit) && <Preloader />}
      </>
    )
}

export default ListPage;

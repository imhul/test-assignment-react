// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Button, } from 'antd';
import * as Yup from 'yup';

// Components
import Preloader from '../Preloader';
import Notify from '../Notify';
import Stats from '../Stats';

function AddPage() {

    const statuses = ['visible', 'invisible'];
    const types = ['general', 'football'];
    const dispatch = useDispatch();
    const { academies, isLoad, isAdded } = useSelector(state => state.mainReducer);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        status: Yup.string().required('Required'),
        type: Yup.string().required('Required'),
    });

    const notifer = () => academies.length > 0 ? Notify('success', { 
        title: 'Academy added', 
        desc: 'New Academy successfully added!' 
    }) : null;

    return (
        <>
            { isAdded && notifer() }
            <Stats />
            { !isLoad ? <Formik
                initialValues={{ name: '', status: '', type: '' }}
                validationSchema={ validationSchema }
                onSubmit={ values => {
                    const { name, type } = values;
                    dispatch({ type: 'LOADING' });
                    dispatch({ type: 'ADD_ACADEMY', payload: { title: name, type: type } });
                }}
            >
                <Form className="AddForm">
                    <Field name="name" label="Name" type="text" className="ant-input" />
                    <Field as="select" name="status" label="Status" className="ant-input ant-select ant-select-enabled">
                        {statuses.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </Field>
                    <Field as="select" name="type" label="Type" className="ant-input ant-select ant-select-enabled">
                        {types.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </Field>
                    <div className="btn-wrapper">
                        <Button htmlType="submit">Submit</Button>
                    </div>
                </Form>
            </Formik> : <Preloader /> }
        </>
    )
};
  
export default AddPage;

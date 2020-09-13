import React, { useState, useEffect } from 'react';
import './App.css';
import db from '../../Util/firebase-connector';
import * as _ from 'lodash';

const App = () => {
	const [ data, setData ] = useState({});
	useEffect(() => {
		db.collection('boards').doc('ZSCit07qgIDRaNS29L7L').onSnapshot((doc) => {
			if (!_.isEqual(data, doc.data())) {
				setData(doc.data());
			}
		});
	});
	return <div>{JSON.stringify(data)}</div>;
};

export default App;

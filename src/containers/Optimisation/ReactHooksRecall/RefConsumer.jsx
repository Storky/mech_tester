import React from 'react';

const RefConsumer = (props, ref) => <input type="text" placeholder='RefConsumer' ref={ref}/>;

export default React.forwardRef(RefConsumer);

import React from 'react';

function Certifications(props) {
	//const [certifications, setCertifications] = React.useState(null);

	React.useEffect(() => {
		(async()=> {
			//const data = await api.getCertifications();
			//console.log(certifications);
			//setCertifications(data);
			props.setPageSubtitle("- Certifications");
		})();
	}, [props]);

	return (
		<>
			<h2>** Certifications ***</h2>
		</>
	)
} 
export default Certifications;
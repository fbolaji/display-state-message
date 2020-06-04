let currentState = {}; // global variable to merge process state

// Since we know these messages are definite, a const is declared to hold the message as keys/values
const errorCodes = {
	NO_STOCK: { title: 'Error page', message: 'No stock has been found' },
	INCORRECT_DETAILS: { title: 'Error page', message: 'Incorrect details have been entered' },
	null: { title: 'Error page', message: null },
	undefined: { title: 'Error page', message: undefined }
};

// ProcessState is turned to async function and serves as promise since there should be 2s delay before proceeding.
// _delay fn declared as mini helper fn to parse the time set using promise and if promise is resolved then it proceed.
const processState = async (data) => {
	const _delay = (time) => new Promise(resolve => setTimeout(resolve, time));
	const processState = data.find(action => action.state === 'processing'); // find if state=processing

	if(processState){ // if state=processing is true
		await _delay(2000).then(() => {

			console.log('after 2s delay continue running');

			// Find the other states such as success and error code handling and display the correct message.
			data.find(action => {
				const {state, errorCode} = action;
				if(state === 'error'){
					return Object.assign(currentState, errorCodes[errorCode]);
				}
				if(state === null){
					return Object.assign(currentState, errorCodes[errorCode]);
				}
				if(state === (undefined || 'undefined')){
					return Object.assign(currentState, errorCodes[errorCode]);
				}
				if(state === 'NO_STOCK'){
					return Object.assign(currentState, errorCodes[errorCode]);
				}
				if(state === 'INCORRECT_DETAILS'){
					return Object.assign(currentState, errorCodes[errorCode]);
				}
				if(state === 'success') {
					return Object.assign(currentState, {title: 'Order complete', message: null});
				}
	
			});
		}) // await until the delay is resolved.
	}
};

// call direct in the body of html page 
// or can be exported as a module in another js or component file
const getProcessingPage = (data) => {
	if (data === undefined) {
		return;
	}
	processState(data).then(res => {
		// promise resolved and return the currentState object in browser console log.
		console.log(currentState);
	});
};

// uncomment the below line of code to export as a module
// export { getProcessingPage as getState };

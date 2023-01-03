  import Notiflix from 'notiflix';
	import 'notiflix/dist/notiflix-3.2.5.min.css';
	
	function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
	setTimeout(() => {
	const shouldResolve = Math.random() > 0.3;
	if (shouldResolve) {
	resolve({ position, delay });
	} else {
	reject({ position, delay });
	}
	}, delay);
	});
	};
	
	const form = document.querySelector('.form');
	const delay = document.querySelector('[name="delay"]');
	const step = document.querySelector('[name="step"]');
	const amount = document.querySelector('[name="amount"]');
		
	form.addEventListener('submit', submitCreatePromises);
		
	function submitCreatePromises(e) {
	
	e.preventDefault();
	
	const delayVal =  Number(delay.value);
	const stepVal = Number(step.value);
	const amountVal = Number(amount.value);
	
	for (let i = 1; i <= amountVal; i++) {
	createPromise(i, delay)
	.then(({ position, delay }) => {
	Notiflix.Notify.success(
	`✅ Fulfilled promise ${position} in ${delay}ms`
	);
	})
	.catch(({ position, delay }) => {
	Notiflix.Notify.failure(
	`❌ Rejected promise ${position} in ${delay}ms`
	);
	});
	delay += stepVal;
    };
};
	
	
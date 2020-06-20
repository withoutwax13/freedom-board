export const INITIAL_THREAD = () => [
		// Test Threads
		{
			id: 0,
			title: 'This is a React App',
			body: 'This app was built using React and Redux.',
			author: 'withoutwax13',
			child: [
				{
					id: 0,
					body: 'The UI is minimal.',
					author: 'withoutwax13',
					child: []
				},
				{
					id: 1,
					body: 'The developer used some basic semantic-ui',
					author: 'withoutwax13',
					child: [
						{
							id: 0,
							body: 'Cool!',
							author: 'testAuthor',
							child: [
								{
									id: 0,
									body: 'Thank you!',
									author: 'withoutwax13',
									child: [
										{
											id: 0,
											body: 'You\'re awesome!',
											author: 'testAuthor',
											child: []
										}
									]
								}
							]
						}
					]
				}		
			]
		},
		{
			id: 1,
			title: 'Limitation of this App',
			body: 'Data does not persist on this app',
			author: 'testAuthor',
			child: []
		},
		{
			id: 2,
			title: 'Portfolio Project',
			body: 'Its simple yet so cool, right?',
			author: 'anonymous',
			child: []
		}

	]
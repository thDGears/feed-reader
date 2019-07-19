/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

'use strict'

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Make sure that the feeds URLs are truthy
        it('have a URL defined', () => {
            for (const obj of allFeeds) {
                expect(obj.url).toBeDefined();
                expect(obj.url.trim().length).not.toBe(0);
            }
        });

        // Make sure that the feeds names are truthy
        it('have a name defined', () => {
            for (const obj of allFeeds) {
                expect(obj.name).toBeDefined();
                expect(obj.name.trim().length).not.toBe(0);
            }
        });
    });

    describe('The Menu', () => {

        const body = document.querySelector('body');

        it('is hidden by default', () => {
            expect(body).toHaveClass('menu-hidden');
        });

        it('changes visibility when the menu icon is clicked', () => {
            const menuIcon = document.querySelector('.menu-icon-link');

            // Test that the menu is hidden by default
            expect(body).toHaveClass('menu-hidden');

            // Triger the menu button
            menuIcon.click();

            // Test that the menu displays when clicked
            expect(body).not.toHaveClass('menu-hidden');

            // Triger the menu button again
            menuIcon.click();

            // Test that the menu hides when clicked again
            expect(body).toHaveClass('menu-hidden');
        });
    });

	describe('Initial Entries', () => {

		beforeEach((done) => {
			loadFeed(0, done);
		});

		it('has at least a single .entry element within the .feed container', (done) => {
			const entries = document.querySelectorAll('.feed .entry');
	            
			expect(entries.length).toBeGreaterThan(0);
			done();
		});
	});

	// Make sure that the content changes when a new feed is loaded
	describe('New Feed Selection', () => {

		let feedAfterFirstLoad;
		let feedAfterSecondLoad;

		beforeEach((done) => {
	  		loadFeed(0, () => {
	     		const feedContainer = document.querySelector('.feed');
	     		feedAfterFirstLoad = feedContainer.innerHTML;
	     		
		     	loadFeed(1, () => {
		        	const feedContainer = document.querySelector('.feed');
		        	feedAfterSecondLoad = feedContainer.innerHTML;
		        	done();
		    	});
	  		});
	  	});

		/* Return to default when the test completes
		 * This is optional
		 */
	  	afterEach((done) => {
	  		loadFeed(0, done);
	  	})

	  	it('content changes when a new feed is loaded', (done) => {
			expect(feedAfterFirstLoad).not.toEqual(feedAfterSecondLoad);
			done();
		});
	});

}());

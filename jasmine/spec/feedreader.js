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
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a URL defined', () => {
            for (const obj of allFeeds) {
                expect(obj.url).toBeDefined();
                expect(obj.url.trim().length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a name defined', () => {
            for (const obj of allFeeds) {
                expect(obj.name).toBeDefined();
                expect(obj.name.trim().length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', () => {

        const body = document.querySelector('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', () => {
            expect(body).toHaveClass('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
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

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach((done) => {
            loadFeed(0, done);
        });

        it('has at least a single .entry element within the .feed container', (done) => {
            const entries = document.querySelectorAll('.feed .entry');
            
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {

    	// Ensures that the "feed-list" is loaded & there are at least TWO feeds to select from the list
        // If this test fails, then the upcoming test will also fail.
        it('has at least two feeds to select from the list', () => {
            const feedList = document.querySelector('.feed-list');
            expect(feedList.children.length).toBeGreaterThan(1);
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        describe('The feed', () => {

            const textForTesting = 'testing';
            const feedIndex = 1;

            beforeEach((done) => {
                // Set up a known "headings" values. After running the "loadFeed" function we'll check if the headings change.
                const feedEntryHeadings = document.querySelectorAll('.entry h2');
                feedEntryHeadings.forEach((heading) => {
                    heading.textContent = textForTesting;
                });
                
                // Loads the second feed in the list
                loadFeed(feedIndex, done);
            });

            // After the test completes, return back to default
            afterEach((done) => {
                loadFeed(0, done);
            })

            // Feed content must be updated when a new feed is loaded
            it('content changes when a new feed is loaded', (done) => {
                const feedTitle = document.querySelector('.header-title');
                const feedEntryHeadings = document.querySelectorAll('.entry h2');
                
                // Checks if the Feed title changed
                expect(feedTitle.textContent.trim()).toMatch(allFeeds[feedIndex].name);
                
                // Checks if the feed entry's headings changed
                feedEntryHeadings.forEach((heading) => {
                    expect(heading.textContent.trim()).not.toMatch(textForTesting);
                });

                done();
            });
        });
    });
}());

import React from 'react';

const About = props => {
  return (
    <div>
      <h1>About FFXIV Strategizer</h1>

      <p>FFXIV Strategizer was designed by Luzhon Maevich on Cactuar.</p>

      <p>It was designed to support collaboration within the Final Fantasy XIV Online raiding community. 
        It allows users to create strategies to share with others. Furthermore,
        it allows users to browse strategies that other users have created as well as create groups to
        facilitate sharing between raid groups and other groups of individuals.
      </p>

      <br />
      <hr />

      <h1>How to Use FFXIV Strategizer</h1> 

      <div>
        <h2>Browsing Strategies</h2>

        <p>Browsing is available to both guest and user accounts. Simply click the Strategies link in the navigation bar and browse to your heart's content.</p>
        <p>You can apply filters by clicking the filters button, or search for a specific strategy by name using the search bar in the top-right.</p>

        <h2>Creating Strategies</h2>

        <p>Although FFXIV Strategizer supports guest browsing, you will need to create an account to
          contribute strategies to the website. Check out the video above to view a step-by-step walkthrough
          of how to use the app, or consult the guide below.
        </p>

        <ol>
          <li>Click the "Create a Strategy" button.</li>
          <li>You will be prompted to enter the name and settings for your strategy. Do so and click "Create" to finalize.</li>
          <li>In the sidebar, you will see a phase called "Untitled Phase" with a single Step below it. You can change the name
            of the phase by clicking on it.
          </li>
          <li>Click on Step 1 to access the first step of your first phase. Click on Edit to access the Edit mode.</li>
          <li>In Edit mode, you will have access to a variety of drag and drop markers which you can use to create each step of your strategy.</li>
          <li>When you want to create another step, you can either click the "Next" button inside the strategy window or click the "New Step" icon in the sidebar.</li>
          <li>When you are ready to create another phase, click the "New Phase" icon in the sidebar.</li>
          <li>When you want to play your strategy back, clicking the play button will cycle through each step starting with the one that is currently selected.</li>
        </ol>
      </div>
    </div>
  )
}

export default About;
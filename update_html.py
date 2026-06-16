import re

html_content = """
  <!-- Assessment Screen -->
  <div id="assessment-screen" class="overlay hidden">
    <div class="wide-card" style="max-width: 800px; text-align: left; max-height: 90vh; overflow-y: auto;">
      <h1 style="text-align: center; margin-bottom: 2rem;">End of Scenario Assessment</h1>
      
      <div class="assessment-question" id="q1-container">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">1. Did the session follow a CBT structure? Why or why not? Provide two specific examples from the scenario.</h3>
        <textarea id="assessment-q1-input" rows="4" style="width: 100%; padding: 0.75rem; background: rgba(0,0,0,0.2); color: var(--text-primary); border: 1px solid var(--border-light); border-radius: 0.375rem; font-family: inherit; font-size: 1rem;" placeholder="Type your notes here..."></textarea>
        <button id="btn-submit-q1" class="btn primary" style="margin-top: 1rem;">Save Notes</button>
      </div>

      <div class="assessment-question" id="q2-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">2. Which CBT interventions were used? Select all that apply.</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="checkbox" name="q2" value="a"> a. Identifying automatic thoughts</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="checkbox" name="q2" value="b"> b. Examining evidence for and against thoughts</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="checkbox" name="q2" value="c"> c. Guided discovery/Socratic questioning</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="checkbox" name="q2" value="d"> d. Thought suppression techniques</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="checkbox" name="q2" value="e"> e. Cognitive restructuring (reframing)</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="checkbox" name="q2" value="f"> f. Homework assignment using a thought record</label>
        </div>
      </div>

      <div class="assessment-question" id="q3-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">3. Which cognitive distortion did the therapist explicitly identify?</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q3" value="a"> a. Mind reading</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q3" value="b"> b. Overgeneralization</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q3" value="c"> c. Emotional reasoning</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q3" value="d"> d. Fortune telling</label>
        </div>
      </div>

      <div class="assessment-question" id="q4-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">4. Why did the therapist ask, "If a coworker made the same mistake, would you think they were terrible at their job?"</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q4" value="a"> a. To criticize the client's standards</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q4" value="b"> b. To encourage perspective-taking and examine double standards</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q4" value="c"> c. To distract the client from negative thoughts</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q4" value="d"> d. To change the topic</label>
        </div>
      </div>

      <div class="assessment-question" id="q5-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">5. Which therapist response best reflects collaborative empiricism?</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q5" value="a"> a. "You're wrong about yourself."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q5" value="b"> b. "There's nothing to worry about."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q5" value="c"> c. "What evidence did your mind use to conclude that you're terrible at your job?"</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q5" value="d"> d. "You should stop thinking that way."</label>
        </div>
      </div>

      <div class="assessment-question" id="q6-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">6. What was the primary purpose of rating anxiety from 0 to 10?</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q6" value="a"> a. To diagnose an anxiety disorder</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q6" value="b"> b. To monitor emotional intensity and changes during cognitive work</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q6" value="c"> c. To determine medication dosage</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q6" value="d"> d. To evaluate personality traits</label>
        </div>
      </div>

      <div class="assessment-question" id="q7-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">7. Which homework assignment was given?</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q7" value="a"> a. Practice mindfulness meditation twice daily</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q7" value="b"> b. Complete a behavioral exposure hierarchy</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q7" value="c"> c. Keep a thought record documenting situations, thoughts, emotions, evidence, and balanced thoughts</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q7" value="d"> d. Write a gratitude journal</label>
        </div>
      </div>

      <div class="assessment-question" id="q8-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">8. Which statement is the best example of a balanced replacement thought?</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q8" value="a"> a. "I never make mistakes."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q8" value="b"> b. "I'm definitely bad at my job."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q8" value="c"> c. "I made a mistake, but that doesn't mean I'm bad at my job."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q8" value="d"> d. "Everyone else is worse than me."</label>
        </div>
      </div>

      <div class="assessment-question" id="q9-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">9. What underlying core belief or rule appeared to influence the client's thinking?</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q9" value="a"> a. "People cannot be trusted."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q9" value="b"> b. "I must be perfect all the time."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q9" value="c"> c. "The world is dangerous."</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q9" value="d"> d. "Other people always judge me."</label>
        </div>
      </div>

      <div class="assessment-question" id="q10-container" style="margin-top: 3rem;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">10. Which therapist behavior most reflects effective CBT practice?</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem;">
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q10" value="a"> a. Immediately reassuring the client that everything is fine</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q10" value="b"> b. Interpreting childhood experiences without connecting them to present thoughts</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q10" value="c"> c. Using guided questions to help the client examine evidence and generate a balanced alternative thought</label>
          <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"><input type="radio" name="q10" value="d"> d. Convincing the client that their emotions are irrational</label>
        </div>
      </div>

      <div style="text-align: center; margin-top: 3rem;">
        <button id="btn-finish-assessment" class="btn primary" style="font-size: 1.1rem; padding: 0.75rem 2rem;">Finish Simulation</button>
      </div>
    </div>
  </div>
"""

with open('index.html', 'r') as f:
    content = f.read()

pattern = r'<!-- Assessment Screen -->.*?</div>\n    </div>\n  </div>'
new_content = re.sub(pattern, html_content.strip(), content, flags=re.DOTALL)

with open('index.html', 'w') as f:
    f.write(new_content)

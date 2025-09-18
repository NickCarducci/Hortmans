import React from "react";

export default function App() {
  const [currentRoute, setRoute] = React.useState("home");
  return (
    <div>
      <div>
        <header>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span
                onClick={() => setRoute("home")}
                style={{ cursor: "pointer", width: "max-content" }}
              >
                Melissa Hortman's "murderers"
              </span>

              <nav>
                <span
                  onClick={() => setRoute("about")}
                  style={{
                    padding: "4px",
                    cursor: "pointer",
                    color: "royalblue",
                    textDecoration:
                      currentRoute === "about" ? "underline" : "none",
                  }}
                >
                  About
                </span>
                <span
                  onClick={() => setRoute("reflections")}
                  style={{
                    padding: "4px",
                    cursor: "pointer",
                    color: "royalblue",
                    textDecoration:
                      currentRoute === "reflections" ? "underline" : "none",
                  }}
                >
                  Reflections
                </span>
                <span
                  onClick={() => setRoute("terms")}
                  style={{
                    padding: "4px",
                    cursor: "pointer",
                    color: "royalblue",
                    textDecoration:
                      currentRoute === "terms" ? "underline" : "none",
                  }}
                >
                  Terms
                </span>
                <span
                  onClick={() => setRoute("submissions")}
                  style={{
                    padding: "4px",
                    cursor: "pointer",
                    color: "royalblue",
                    textDecoration:
                      currentRoute === "submissions" ? "underline" : "none",
                  }}
                >
                  Submit
                </span>
              </nav>
            </div>
          </div>
        </header>

        <main id="app">
          {currentRoute === "home" ? (
            <div
              id="view-home"
              style={{
                padding: "10px",
                madding: "10px",
                borderRadius: "10px",
                backgroundColor: "gainsboro",
              }}
            >
              At HortmansMurderers.com, we collect and share public posts that
              celebrate or excuse violence. Our goal is to preserve these
              statements so communities, customers, and employers can see them
              clearly and judge for themselves.
              <br />
              <br />
              We don’t share private details, and we don’t endorse harassment.
              We don’t campaign for anyone to lose their jobs — that’s just how
              the law works today. Political views are not yet a protected
              class, and while we believe they should be under civil rights,
              employers can still legally act when public behavior reflects on
              them. Tortious interference claims rarely apply to employers
              themselves, only sometimes to podcasters or media figures, so the
              current system silences critics while giving businesses free rein.
              We think that’s wrong: political expression — even when callous —
              should be treated as protected, unless it escalates into calls for
              further violence. Until the law catches up, though, customers and
              employers will keep making their own choices — and we can’t stop
              them.
              <br />
              <br />
              When posts cross into direct calls for physical harm, we don’t
              just archive them — we report them to the authorities. For
              everything else, we document what was said, when it was said, and
              leave the consequences to others. Transparency is our tool.
              Judgment is yours.
            </div>
          ) : currentRoute === "about" ? (
            <div
              id="view-about"
              style={{
                padding: "10px",
                madding: "10px",
                borderRadius: "10px",
                backgroundColor: "gainsboro",
              }}
            >
              At HortmansMurderers.com, we archive public speech that celebrates
              or excuses violence. Our mission is not to invent scandals or to
              spread rumors, but to preserve what has already been said in
              public and ensure it cannot be conveniently deleted, forgotten, or
              rewritten. In a time when screenshots often vanish, when platforms
              take down posts without accountability, and when uncomfortable
              facts are buried by noise, we serve as a record: what was said,
              when it was said, and by whom.
              <h3>Why We Exist</h3>
              It should not be controversial to say that political opinions
              deserve protection. Yet under current law, employers can fire
              someone for expressing an unpopular view, and political beliefs
              are not treated as a protected class under civil rights. The
              result is a chilling paradox: you can be punished for your
              opinions in ways you cannot be punished for your religion, your
              race, your gender, or even your choice to smoke outside of work.
              Meanwhile, tortious interference claims — the only legal recourse
              against unfair targeting — rarely apply to employers themselves.
              They are mostly used against podcasters, journalists, or small
              media outlets, muzzling speech instead of protecting workers.
              <br />
              <br />
              We believe this regime is upside down. Celebrating or condemning
              violence — however tasteless, however callous — is still political
              speech. Unless it crosses the line into direct calls for further
              violence, it should not cost someone their livelihood. It should
              be a civil right to hold even the harshest opinion without losing
              your job. But until the law changes, we are left with the system
              as it stands. Employers remain free to react to public expression,
              and customers remain free to take their business elsewhere.
              <h3>What We Do (and Don’t Do)</h3>
              We publish what is already public. We do not track down private
              addresses, phone numbers, or family members. We do not encourage
              harassment. We do not invent accusations or allege crimes that
              have not been proven. We are not here to run campaigns for anyone
              to lose their jobs — we recognize that’s how the law works right
              now, not something we endorse.
              <br />
              <br />
              What we do is highlight the gap between how political opinions are
              treated in practice and how they ought to be treated under civil
              rights. We show the public what has been said, and then we step
              back. Some readers may want to share these findings with
              employers, platforms, or institutions; others may simply want to
              be informed. We disseminate the ability to act, but the choice is
              not ours — it belongs to each individual.
              <h3>Employers and Customers</h3>
              The uncomfortable truth is that employers and customers alike
              often do want to know when someone has expressed joy at violence
              or indifference to human suffering. Even if we believe it should
              be protected speech, many organizations see such expression as a
              liability. Our role is not to shield employers from knowing, nor
              to demand that they take action, but to make sure the information
              is available so decisions are made with eyes open.
              <br />
              <br />
              If you are an employer, we suggest you consider carefully whether
              punishing political opinions aligns with the spirit of free
              expression. If you are a customer, we suggest you reflect on
              whether boycotting someone for their views is consistent with the
              principles you expect for yourself. Transparency arms both groups
              with knowledge; what they do with it is beyond our control.
              <h3>Our Red Line</h3>
              There is a difference between celebrating a violent act and
              calling for new violence. The former is protected speech, however
              distasteful. The latter is not only immoral, but illegal. When we
              see calls for physical harm, we do not merely archive them — we
              report them directly to the proper authorities. This is not
              negotiable. We believe in civil rights, not in vigilantism.
              <h3>Our Promise</h3>
              HortmansMurderers.com will continue to archive, document, and
              expose the fragility of free speech in employment law. We will not
              endorse harassment, we will not publish private details, and we
              will not tell employers to punish employees. But we will continue
              to shine light on a truth too often buried: that political
              opinions are treated as disposable, that workers are unprotected,
              and that the line between free expression and job security is far
              thinner than it should be. Our archive is not a campaign for
              firings. It is a call for reform. It is a demonstration that
              unless political opinions are protected as a civil right,
              employers and customers will continue to wield unchecked power
              over speech. Until that day, we will keep preserving what others
              would prefer erased.
            </div>
          ) : currentRoute === "reflections" ? (
            <div
              id="view-reflections"
              style={{
                padding: "10px",
                madding: "10px",
                borderRadius: "10px",
                backgroundColor: "gainsboro",
              }}
            >
              Free speech in America has always carried a double edge: you can
              say nearly anything without fear of the state, but your livelihood
              may still depend on whether your employer — or the public —
              approves. Political opinions are not protected under civil rights
              law. This leaves employees exposed to private forms of punishment
              that operate just as effectively as censorship.
              <br />
              <br />
              Our project exists to highlight this contradiction. By archiving
              public posts that celebrate violence or display extreme
              callousness, we show how little legal ground individuals have when
              private actors take notice. We don’t fabricate, we don’t pry into
              private lives — we simply preserve what people chose to publish,
              because what they say can and will be used against them.
              <br />
              <br />
              This is not a new story. In the late 1800s, employers hired
              agencies like Pinkerton to circulate blacklists of union
              organizers and political radicals, effectively barring them from
              work across entire industries. In the 1950s, Hollywood operated
              under a different blacklist, punishing alleged communists and
              their sympathizers. And in our own time, consumer-review systems
              like Yelp or Uber ratings allow customers to evaluate not only
              service, but sometimes personal identity or political expression.
              In each era, the power to discipline speech has shifted from the
              state to private entities, but the effect is similar: suppression
              of disfavored opinions.
              <br />
              <br />
              The law may allow employers to suppress the formation of opinions,
              but we won’t. We believe political views should be a protected
              class, alongside race, religion, and gender — unless they cross
              into direct calls for violence. Until that protection exists,
              however, employers and customers are free to act on public
              expressions.
              <br />
              <br />
              We do not endorse campaigns for anyone to lose their job. That
              choice belongs to employers and customers under current law — a
              flaw we highlight, not a power we wield.
              <br />
              <br />
              Some might say we “doxx.” We disagree. Doxxing, properly
              understood, involves exposing private information to enable
              harassment. We archive public statements that were already
              visible, searchable, and permanent in the digital commons. The
              difference matters. We aren’t punishing speech; we’re proving that
              the system already does.
              <br />
              <br />
              The “glasses app” thought experiment makes the law’s failure
              plain. Imagine an augmented-reality tool that instantly shows
              every public post a person has made. Legally, it would be no
              different from searching those posts by hand — the data is already
              public, the search just automated. Employers would have a
              legitimate commercial use for such a tool: to see how an
              employee’s public persona might reflect on their business. In the
              best state of affairs, however, that power should stop short of
              firing someone solely for their political views. Exceptions exist
              if the person is impersonating the brand or presenting themselves
              as a spokesperson for the board, CEO, or other official delegates.
              Otherwise, the right answer is protection, not punishment.
            </div>
          ) : currentRoute === "terms" ? (
            <div
              id="view-terms"
              style={{
                padding: "10px",
                madding: "10px",
                borderRadius: "10px",
                backgroundColor: "gainsboro",
              }}
            >
              <h2>Terms of Service — Melissa Hortman's "murderers"</h2>
              <h3>1. Acceptance of Terms</h3>By accessing or using
              HortmansMurderers.com (the “Site”), you agree to these Terms of
              Service (“Terms”), our Privacy Policy, and any posted site
              policies. If you do not agree, do not use the Site.
              <h3>2. Purpose of the Site</h3>
              HortmansMurderers.com is a public-interest archival and reporting
              site that aggregates, documents, and contextualizes
              publicly-visible statements and posts relating to celebratory or
              condoning commentary about previous violent crimes, "without
              remorse", at our ultimate discretion. Our stated mission is to
              preserve public records, provide factual context, and enable
              institutions and the public to evaluate whether such public speech
              is consistent with community standards and organizational
              policies.
              <h3>3. Statement of Principle</h3>
              We believe political views should be immune from unjust
              discrimination and ideally treated as protected characteristics.
              We also recognize that, under applicable law (including at-will
              employment doctrines in many jurisdictions), employers and
              institutions may lawfully take employment or other actions based
              on information that is publicly available. Nothing on this Site is
              intended to instruct, organize, or coerce employers to take any
              particular employment action; Site content is offered for
              public-interest documentation and reporting purposes only.
              <h3>4. What We Allow / Encourage</h3>
              * Submissions of publicly visible material (public posts, tweets,
              public comments) accompanied by accurate attribution (account
              handle, platform, date/time) and context.
              <br />* Neutral, factual reporting intended to inform platforms,
              institutions, journalists, or the public about publicly visible
              posts that may raise safety, legal, or policy concerns.
              <br />* Contributors identifying themselves as customers or
              potential customers when they submit material or notify
              institutions, provided such identification does not solicit or
              coordinate harassment.
              <h3>5. Strict Prohibitions (Zero Tolerance)</h3>
              You MUST NOT use the Site to:
              <br />* Post private contact details, home addresses, private
              messages, family information, or other non-public identifying
              information (no doxxing).
              <br />* Organize, solicit, or coordinate campaigns to harass,
              threaten, intimidate, coerce, or otherwise unlawfully target any
              person or group.
              <br />* Post explicit calls for employers to terminate an
              individual, or provide instructions to contact employers for the
              purpose of retaliation.
              <br />* Imply criminal guilt where no public legal finding
              exists.Violations of these prohibitions will result in removal of
              content, user suspension, and may be reported to law enforcement.
              <h3>6. Employer Contact / Public Conduct</h3>
              <br />* For clarity: we recognize that employers may lawfully act
              on information in the public domain under applicable law. That
              factual recognition is not a recommendation, instruction, or
              coordination to effectuate termination, and it does not waive any
              legal protections an employee may have in any jurisdiction.
              <br />* Do not contact employers directly via mass solicitation,
              harassment, or coordinated campaigns. If you are a concerned
              customer who wishes to notify an employer, use a measured, factual
              approach (see Section 8) and do not encourage or organize others
              to do so.
              <h3>7. Handling of Calls to Violence or Threats</h3>
              If a post contains a credible call to physical harm or an imminent
              threat, Site operators and contributors should report that content
              to the appropriate law enforcement authorities and to the platform
              immediately. Such posts will be escalated and may be removed. We
              do not republish non-public information or private communications
              in lieu of reporting threats to authorities.
              <h3>
                8. Recommended Best Practices for Concerned Customers (Guidance)
              </h3>
              If you are a customer or potential customer concerned about a
              publicly visible post by an alleged employee of an organization:
              <br />* Provide factual documentation (screenshot, handle, link,
              date/time) and ask whether the organization will review the
              conduct under its public policies; do not demand termination.
              <br />* Prefer official reporting channels (platform abuse
              reports, employer compliance/HR portals) rather than public
              calls-to-action.
              <br />* If you are unsure whether conduct constitutes a threat or
              criminal activity, report it to law enforcement rather than
              mobilizing public campaigns.
              <h3>9. Submissions, Verification, and Moderation</h3>
              * Submitters represent that submitted material was publicly
              accessible at the time of capture and was obtained lawfully.
              <br />* We may request additional evidence or refuse content that
              appears misleading, unlawfully obtained, or intended to harass.
              <br />* We reserve the right to remove any submission that
              violates these Terms or that we reasonably believe would
              foreseeably lead to harassment, violence, or unlawful conduct.
              <h3>10. Intellectual Property / DMCA</h3>* You represent you have
              the right to submit material and that submission does not infringe
              copyright. For DMCA notices, email sayists@icloud.com using
              including relevant information and takedown request best
              practices.
              <h3>11. Disclaimers and Limitation of Liability</h3>* The Site
              provides content “as is” for informational purposes only. We make
              no warranties as to accuracy, completeness, or fitness for any
              purpose.
              <br />* We are not responsible for third-party actions or
              consequences arising from public posts we document. We do not
              endorse harassment or unlawful retaliation.
              <br />* To the extent permitted by law, our liability is limited
              to the amount paid, if any, to use the Site.
              <h3>12. Indemnity</h3>
              You agree to indemnify and hold the Site harmless from claims
              arising from your submissions, breach of these Terms, or unlawful
              conduct.
              <h3>13. Governing Law / Jurisdiction</h3>
              These Terms are governed by the laws of New Jersey in the United
              States of America. Disputes will be addressed in the courts of
              this jurisdiction.
              <h3>14. Changes to Terms / Contact</h3>We may update these Terms.
              Continued use after changes constitutes acceptance. Contact us at
              sayists@icloud.com with questions or appeals.
            </div>
          ) : currentRoute === "submissions" ? (
            <div
              id="view-submit"
              style={{
                padding: "10px",
                madding: "10px",
                borderRadius: "10px",
                backgroundColor: "gainsboro",
              }}
            >
              <section>
                <div>
                  <h1>Submissions</h1>
                  <div>
                    <p>
                      Instructions for “whistleblowers” — yes, with the quotes,
                      and yes, sarcastically:
                    </p>
                    <ul>
                      <li>
                        Email:{" "}
                        <span href="mailto:sayists@icloud.com">
                          sayists@icloud.com
                        </span>
                      </li>
                      <li>Include the link to the post</li>
                      <li>Attach span screenshot of the post</li>
                      <li>
                        Attach span second screenshot of the poster’s profile
                      </li>
                    </ul>
                    <p>
                      Submissions missing any of the above may not be
                      considered.
                    </p>
                  </div>
                  <div>
                    <a
                      href="mailto:sayists@icloud.com"
                      style={{ padding: "4px" }}
                    >
                      Email your submission
                    </a>
                    <span
                      onClick={() => setRoute("terms")}
                      style={{ cursor: "pointer", padding: "4px" }}
                    >
                      Review Terms
                    </span>
                  </div>
                </div>
              </section>
            </div>
          ) : null}
        </main>

        <footer>
          <div>
            <div>
              <p>
                © <span id="year"></span> Saver Party. All rights reserved.
              </p>
              <div>
                <a
                  onClick={() => setRoute("terms")}
                  style={{
                    color: "royalblue",
                    textDecoration: "underline",
                    padding: "4px",
                  }}
                >
                  Terms
                </a>
                <span>•</span>
                <a
                  href="https://www.threads.com/@saverparty"
                  style={{ padding: "4px" }}
                >
                  Threads
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}


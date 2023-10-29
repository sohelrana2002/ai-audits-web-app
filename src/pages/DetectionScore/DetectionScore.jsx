import { HashLink } from "react-router-hash-link";
import { GiArchiveResearch } from "react-icons/gi";
import { TbScoreboard } from "react-icons/tb";
import { MdOutlineBatchPrediction } from "react-icons/md";
import Heading from "../../helper/Heading/Heading";
import "./DetectionScore.css";

const DetectionScore = () => {
  return (
    <section className="detection__score">
      <div className="container">
        <h1 className="heading">Interpreting our AI detection scores</h1>

        <div className="score__system">
          <HashLink className="nav__btn" to="/detection-score/#methodology">
            Methodology
          </HashLink>
          <HashLink className="nav__btn" to="/detection-score/#humanScore">
            Human score
          </HashLink>
          <HashLink className="nav__btn" to="/detection-score/#predictionMap">
            Ai prediction map
          </HashLink>
          {/* <HashLink className="nav__btn" to="/detection-score/#readableScore">Readability score</HashLink> */}
        </div>

        <div className="score__card" id="methodology">
          <Heading icon={<GiArchiveResearch />} title="Methodology" />

          <div className="score__text">
            <p className="text">
              AI Audits is the world’s most powerful AI generated content
              detector. Our software is trained on huge amounts of data
              generated by the most widely used AI text generation tools,
              including GPT-4, GPT-3, ChatGPT, Jasper, Copy AI, Open Assistant
              and much more. In parallel, we’ve trained our software on Human
              Generated content.{" "}
            </p>

            <p className="text">
              On top of this, AI Audits uses several pattern recognition
              algorithms to detect AI generated content.{" "}
            </p>

            <p className="text">
              Based on these elements and our tests, our tool was able to
              predict with a 99.6% accuracy if a given text was generated by an
              AI writing tool such as ChatGPT, GPT4, Bard, Bing Chat, Jasper,
              Claude2 and many more.
            </p>

            <p className="text">
              Once our tool processes content, it will return a
              probability(0-100%) that the text was generated by artificial
              intelligence.{" "}
            </p>

            <p className="text">
              It is important to note that this is a probabilistic approach.
            </p>

            <p className="text">
              Our team is always keeping up with the new language generation
              models, so you can be assured our tool is and will remain up to
              date with the latest developments and innovations.
            </p>

            <h6 className="sub__heading">Methods Used by AI Audits: </h6>

            <p className="text">
              There are various methods that these tools use to identify whether
              a text is created by artificial intelligence (AI) or not.{" "}
            </p>

            <p className="text">
              The two primary categories for detecting such texts are linguistic
              analysis and comparison with previously known AI-generated texts.{" "}
            </p>

            <p className="text">
              <span></span>
              <span>Linguistic analysis: </span>
              Involves analyzing the text’s characteristics, such as semantic
              meaning and repetitiveness, which can indicate if it’s generated
              by AI.
            </p>

            <p className="text">
              <span></span>
              <span>Data Training: </span>
              Similarly, if a text bears resemblance to a known AI-generated
              text, it can also suggest that it’s AI-generated.
            </p>

            <p className="text">
              Within the linguistic analysis, there are 2 important elements
              that are revealing if a given content is AI generated or human:
              Perplexity and Burstiness.{" "}
            </p>

            <p className="text">
              <span></span>
              <span>Perplexity: </span>
              Perplexity is a metric that gauges the efficacy of a probability
              distribution or a language model in forecasting a given sample. In
              the realm of detecting AI-generated content, perplexity can serve
              as a tool for assessing the proficiency of an AI language model
              and determining if a text is machine-generated or human-written.
            </p>

            <p className="text">
              If the text is AI-generated, the perplexity value will be lower as
              the model would have already encountered similar patterns in the
              data used for its training. Conversely, if the text is more
              intricate, it’s more probable that it was written by a human. Put
              simply, the lower the perplexity score, the higher the likelihood
              that the text was generated by AI.
            </p>

            <p className="text">
              <span></span>
              <span>Burstiness: </span>
              AI-generated text has a distinctive style that differs from that
              of humans. Since these models are trained on a set of data, they
              tend to employ specific words and phrases more frequently than
              humans would. This pattern can be used to identify if a text was
              created by an AI.
            </p>

            <p className="text">
              When a text features a cluster of words and phrases that are
              repeated within a short span of time, there’s a good chance that
              it’s been generated by an AI. For instance, AI-generated text may
              exhibit a lack of variation or overuse of particular terms. This
              can be attributed to the model’s tendency to repeat the most
              commonly used words and phrases from its training data.
            </p>

            <p className="text">
              Therefore, by analyzing the text’s language style, it’s possible
              to discern if it’s AI-generated or written by a human.
            </p>

            <p className="text">
              In conclusion, although our assessment of the content isn’t
              enforceable, AI Audits remains the leading solution to detect AI
              content by always training its data on new LLM’s. We recommend
              writers, students and content creators continue to improve their
              “burstiness”, originality and perplexity when writing.
            </p>
          </div>
        </div>

        <div className="score__card" id="humanScore">
          <Heading icon={<TbScoreboard />} title="Human score" />

          <div className="score__text">
            <p className="text">
              The Human Score is a metric used by AI Audits AI to estimate the
              likelihood that a given piece of content was generated by an AI
              tool versus being written by a human.
            </p>

            <p className="text">
              It’s important to note that a score of 80% human and 20% AI
              doesn’t mean that only 20% of the content was generated by AI;
              rather, it means that AI Audits has a 80% confidence level that
              the content was created by a human.
            </p>

            <p className="text">
              Our algorithm takes into account all the aforementioned elements:
              Data Training on all generative AI tools, Linguistic Analysis,
              Perplexity and Burstiness to process your text and return a highly
              accurate predictive analysis.
            </p>
          </div>
        </div>

        <div className="score__card" id="predictionMap">
          <Heading icon={<MdOutlineBatchPrediction />} title="AI prediction map" />

          <div className="score__text">
            <p className="text">
              AI Audits helps detect computer-generated text by analyzing its
              predictability and highlighting words based on how likely they are
              to appear. Sentences under 60 characters are ignored. We predict
              word rankings and color code them from most to least predictable.
              It’s important to note that our software will select text that an
              AI text generation tool would have written if prompted.
            </p>

            <p className="text">
              This prediction map works independently from our Human Score to
              help get additional information and assessments on your text. The
              prediction map may highlight human text, but this doesn’t
              necessarily mean it is AI generated, but rather that it is written
              in a way that any text generation tool would have. The prediction
              map should be used in combination with our Human Score to get
              additional clarity on an assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetectionScore;

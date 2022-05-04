import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import Link from "next/link";
import Meta from "../../partial/seo-meta";

export default function Policy() {

  return (
    <div style={{width: "100%"}}>
        <Navbartwo/>
        <div className="mx-auto sitemap_main_div" >
        <Meta
            title="Dummy Title"
            description="Dummy Description"
            image="AWS.svg"
        />
            <Row className="container-fluid mx-auto">
                <h1 className="terms_service_title">Privacy Policy</h1>
                <p className="term_service_text">Last updated: September 3, 2019</p>
                <p className="term_service_pera_title">Introduction</p>
                <p className="term_service_text">Welcome to the privacy policy (the “Policy”) of uptal Enterprises Inc. (“we”, “us” and/or “our”). This Policy has been created by uptal Enterprises (“uptal”), Inc. to provide information about uptal Enterprises Inc. time tracker software and related services (the “Service”) to our users (“you”, “your”).</p>
                <p className="term_service_text">This Privacy Policy sets forth uptal Enterprises Inc.’s policy with respect to information, including personally identifiable data (“Personal Data”), and other information that is collected from users of the Service.</p>
                <p className="term_service_text">Your access to and use of the Service is subject to uptal Enterprises Inc.’s Terms and Conditions.</p>


                <p className="term_service_pera_title">Scope</p>
                <p className="term_service_text">This Privacy Policy sets out how uptal Enterprises Inc. collects, retains, and uses information, including personal data (“Personal Data”) and non-identifiable data, about Service users. This Privacy Policy also covers data that uptal Enterprises Inc. collects in-person, for instance at business conferences and trade shows, or through client support.</p>
                <p className="term_service_text">When you interact with us through the Service, we may collect Personal Data and other information from you, as further described below.</p>

                <p  className="term_service_pera_title">Service Users</p>
                <p className="term_service_text">Information We Collect
                We collect Personal Data that is entered on our Service or sent to us electronically, for example when you complete a web form to give Personal Data to us directly (such as contact our support), when you voluntarily provide such information such as when you register for access to the uptal Enterprises Inc. Service (account level data including your name, email, and password), contact us with inquiries or respond to one of our surveys.</p>
                <p className="term_service_text">Wherever uptal Enterprises Inc. collects Personal Data we make an effort to provide a link to this Privacy Policy.</p>
                <p className="term_service_text">When you interact with uptal Enterprises Inc. through the services, we collect automatically certain information, including via cookies.</p>
                <p className="term_service_text">As a user of our Service, our servers record information (“log data”), including information that your computer or browser automatically sends whenever you use the Service. This log data includes your Internet Protocol (“IP”) address (from which we understand the country you are connecting from at the time you visit the Service), browser type and settings, the date and time of your request.</p>
                <p className="term_service_text">Where the information that we collect automatically on our Service is Personal Data, our legal basis for the use of this information is that it is necessary for the purposes of our legitimate interests in maintaining the safe operation of our Service as well as in learning how Service users interact with our Service to improve your use of it.</p>

                <p className="mt-4">How we use that information</p>
                <p className="term_service_text">To Provide The Services And Respond To Requests
                uptal Enterprises Inc. uses the Personal Data you provide in a manner that is consistent with this Privacy Policy. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided.</p>
                <p className="term_service_text">For instance, if you contact us by email, we will use the Personal Data you provide to answer your question or resolve your problem. Also, if you provide Personal Data in order to obtain access to the Service, we will use your Personal Data to provide you with access to the Service, maintain your account, contact you regarding your use of the Service or to notify you of important changes to the Service, and to monitor your use of such services. For individuals in the EU, such use is necessary to respond to or implement your request and for the performance of the contract between you and us.</p>
                <p  >For Marketing Purposes</p>

                <p className="term_service_text">We may use your contact details to tell you about services we believe will be of interest to you, upcoming events or other promotions. If we do so, each marketing communication we send you will contain instructions permitting you to "opt out" of receiving future marketing communications. Note however that as user of our services you cannot opt out of some administrative communications that are reasonably necessary to the services, such as service notifications. In addition, if at any time you wish not to receive any future marketing communications or you wish to have your name deleted from our mailing lists, please contact us as indicated below.
                </p>
                <p className="term_service_text">Where required by applicable law (for example, if you are an individual in the EU), we will only send you marketing information by email if you consent to us doing so at the time you provide us with your Personal Data. When you provide us with your consent to be contacted for marketing purposes, you have the right to withdraw your consent at any time by following the instructions to “opt-out” of receiving marketing communication in each marketing email we send you or by contacting us as indicated below.</p>
                <p className="term_service_text">As Necessary For Certain Legitimate Interests
We use your Personal Data for the legitimate interests described below:</p>
<p className="term_service_text">To send administrative information to you, for example, information regarding the Service and changes to our terms, conditions, and policies.</p>
<p className="term_service_text">To respond to your inquiries and fulfill your requests, such as to send you requested materials and newsletters, as well as information and materials regarding our products and services.</p>

<p className="term_service_text">To conduct analytics on how our Service is being used by you for our internal purposes (namely for providing, maintaining, benchmarking and improving our offerings, identifying usage trends and determining the effectiveness of our promotional campaigns) and to inform our marketing strategy and personalize our communications with you (including providing information on our features and other marketing and service-related announcements relevant to the content and features you engage with).</p>

<p className="term_service_text">To supplement the information that we collected from you with information obtained from third parties (described above) in order to update, expand and analyze our records, and provide products and services that may be of interest to you.
</p>
<p className="term_service_text">To prevent fraud or criminal activity, misuses of our products or services, and ensure the security of our IT systems, architecture and networks.</p>

<p className="term_service_text">To (a) comply with legal obligations and legal process, (b) respond to requests from public and government authorities including public and government authorities outside your country of residence; (c) enforce our terms and conditions; (d) protect our operations; (e) protect our rights, privacy, safety or property, and/or that of you or others; and (f) allow us to pursue available remedies or limit the damages that we may sustain.</p>

<p className="term_service_text">If you ask us to delete your data and we are required to fulfil your request, to keep basic data to identify you and prevent further unwanted processing.</p>

<p className="term_service_text">For individuals in the EU, please see the “EU Individuals” section below for information on our legitimate interests and your rights. If uptal Enterprises Inc. intends on using any Personal Data in any manner that is not consistent with this Privacy Policy, you will be informed of such anticipated use prior to or at the time at which the Personal Data is collected and pursuant to the applicable law.</p>

<p className="term_service_pera_title">Non-Identifiable or Aggregated Data</p>
<p  className="term_service_text">When you interact with uptal Enterprises Inc. through the Service, we receive and store certain personally non-identifiable information. Such information, which is collected passively using various technologies, cannot presently be used to specifically identify you. uptal Enterprises Inc. may store such information itself or such information may be included in databases owned and maintained by uptal Enterprises Inc. affiliates, agents or service providers. This Service may use such information and pool it with other information to track, for example, the total number of users of our Service, the number of hours worked using our Service, the location of our users, and how our users use and interact with the Service. Also, in an ongoing effort to better understand and serve the users of the Service, uptal Enterprises Inc. often conducts research on its customer demographics, interests and behavior based on the Personal Data and other information provided to us. This research may be compiled and analyzed on an aggregate basis. uptal Enterprises Inc. may share this non-identifiable and aggregate data with its affiliates, agents and business partners, but this type of non-identifiable and aggregate information does not identify you personally. uptal Enterprises Inc. may also disclose aggregated user statistics in order to describe our Service to current and prospective business partners, and to other third parties for other lawful purposes.
</p>
<p className="term_service_pera_title">Information Collected</p>
<p  className="term_service_text">Wherever uptal Enterprises Inc. collects Personal Data we make an effort to provide a link to this Privacy Policy. In addition, and without limiting the disclosures herein, uptal Enterprises Inc. may receive, store or otherwise use your Personal Data, including your activity usage as an individual contributor to a project on the Service, and provide reports containing such Personal Data to the designated project managers of the projects within the Service upon which you work.</p>

<p  className="term_service_text">BY VOLUNTARILY PROVIDING US WITH PERSONAL DATA, YOU ARE CONSENTING TO OUR USE OF IT IN ACCORDANCE WITH THIS PRIVACY POLICY. IF YOU PROVIDE PERSONAL DATA, YOU ACKNOWLEDGE AND AGREE THAT SUCH PERSONAL DATA MAY BE TRANSFERRED FROM YOUR CURRENT LOCATION TO THE OFFICES AND SERVERS OF uptal Enterprises Inc. AND THE AUTHORIZED THIRD PARTIES REFERRED TO HEREIN LOCATED IN THE UNITED STATES.</p>

<p className="term_service_pera_title">Our Disclosure of Your Personal Data and Other Information</p>
<p  className="term_service_text">uptal Enterprises Inc. is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your Personal Data with certain third parties without further notice to you, as set forth below:</p>

<p className="term_service_pera_title">Business Transfers</p>
<p  className="term_service_text">As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, Personal Data may be part of the transferred assets.</p>

<p className="term_service_pera_title">Related Companies</p>
<p  className="term_service_text">We may also share your Personal Data with our affiliates and related companies for purposes consistent with this Privacy Policy.</p>

<p className="term_service_pera_title">Agents, Consultants and Related Third Parties</p>
<p  className="term_service_text">uptal Enterprises Inc., like many businesses, sometimes hires other companies to perform certain business-related functions. Examples of such functions include mailing information, maintaining databases, billing and processing payments. When we employ another company to perform a function of this nature, we only provide them with the information that they need to perform their specific function.</p>

<p className="term_service_pera_title">Legal Requirements</p>
<p  className="term_service_text">uptal Enterprises Inc. may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend the rights or property of uptal, (iii) act in urgent circumstances to protect the personal safety of users of the Service or the public, or (iv) protect against legal liability.</p>

<p className="term_service_pera_title">EU Individuals</p>
<p className="mt-4">Scope</p>
<p  className="term_service_text">This section applies solely to individuals in the EU (for these purposes, reference to the EU also includes the European Economic Area countries of Iceland, Liechtenstein and Norway and, where applicable, Switzerland). Our Privacy Policy describes why and how uptal Enterprises Inc. collects, uses and stores your Personal Data, the lawful basis on which your Personal Data is processed, and what your rights and our obligations are in relation to such processing (please see “Your Rights” section below).</p>

<p className="term_service_pera_title">Data Controller</p>
<p  className="term_service_text">uptal Enterprises Inc. is the data controller for processing your Personal Data. The data controller is responsible for deciding how Personal Data about you is used. Please see the “Contacting uptal” section below to find out how to contact us, which also provides the contact details of our representative in the EU for purposes of the General Data Protection Regulation.</p>

<p className="term_service_pera_title">Your Rights</p>
<p  className="term_service_text">Subject to applicable EU law, you have the following rights in relation to your Personal Data:
Right of access. If you ask us, we will confirm whether we are processing your Personal Data and, if so, provide you with a copy of that Personal Data along with certain other details. If you require additional copies, we may need to charge a reasonable fee.</p>

<p  className="term_service_text">Right to rectification. If your Personal Data is inaccurate or incomplete, you are entitled to ask that we correct or complete it. If we shared your Personal Data with others, we will tell them about the correction where possible. If you ask us, and where possible and lawful to do so, we will also tell you with whom we shared your Personal Data so you can contact them directly.</p>

<p  className="term_service_text">Right to erasure. You may ask us to delete or remove your Personal Data, such as where you withdraw your consent. If we shared your data with others, we will tell them about the erasure where possible. If you ask us, and where possible and lawful to do so, we will also tell you with whom we shared your Personal Data with so you can contact them directly.</p>

<p  className="term_service_text">Right to restrict processing. You may ask us to restrict or ‘block’ the processing of your Personal Data in certain circumstances, such as where you contest the accuracy of the data or object to us processing it. We will tell you before we lift any restriction on processing. If we shared your Personal Data with others, we will tell them about the restriction where possible. If you ask us, and where possible and lawful to do so, we will also tell you with whom we shared your Personal Data so you can contact them directly.</p>

<p  className="term_service_text">
Right to data portability. You have the right to obtain your Personal Data from us that you consented to give us or that was provided to us as necessary in connection with our contract with you. We will give you your Personal Data in a structured, commonly used and machine-readable format. You may reuse it elsewhere.</p>

<p  className="term_service_text">Right to object. You may ask us at any time to stop processing your Personal Data, and we will do so:
If we are relying on a legitimate interest to process your Personal Data -- unless we demonstrate compelling</p>

<p  className="term_service_text">If we are processing your Personal Data for direct marketing.</p>


<p  className="term_service_text">Rights in relation to automated decision-making and profiling. You have the right to be free from decisions based solely on automated processing of your Personal Data, including profiling, which produce a significant legal effect on you, unless such profiling is necessary for entering into, or the performance of, a contract between you and us, or with your explicit consent. We are not currently processing your Personal Data for such type of automated decision-making, including profiling, but if we elect to do so in the future we will provide you with notice and choice, in accordance with EU data protection law.</p>

<p  className="term_service_text">Right to withdraw consent. If we rely on your consent to process your Personal Data, you have the right to withdraw that consent at any time, but this will not affect any processing of your data that has already taken place.</p>

<p  className="term_service_text">Right to lodge a complaint with the data protection authority. If you have a concern about our privacy practices, including the way we handled your Personal Data, you can report it to the data protection authority that is authorized to hear those concerns.</p>


<p className="term_service_pera_title">Data Transfers</p>
<p  className="term_service_text">uptal is based in the United States. When you apply as an Engineer or use our services as a Client, or otherwise use our Service, your Personal Data will be transmitted to servers in the United States as necessary to provide you with the services that you requested, administer our contract with you or to respond to your requests as described in this Privacy Policy, and the data may be transmitted to our service providers supporting our business operations (described above). The United States may have data protection laws less stringent than or otherwise different from the laws in effect in the country in which you are located. Where we transfer your Personal Data out of the European Economic Area (EEA) we will take steps to ensure that your Personal Data receives an adequate level of protection where it is processed and your rights continue to be protected.</p>

<p  className="term_service_pera_title">Data Retention</p>
<p  className="term_service_text">Our policy is to keep your Personal Data only for as long as is reasonably necessary to fulfil the purposes for which it was collected and processed, including for the purposes of satisfying any legal, regulatory, accounting or reporting requirements. If you have elected to receive marketing communications from us, we retain information about your marketing preferences until you opt out of receiving these communications and in accordance with our policies.
To determine the appropriate retention period for your Personal Data, we will consider the amount, nature, and sensitivity of the Personal Data, the potential risk of harm from unauthorized use or disclosure of your Personal Data, the purposes for which we use your Personal Data and whether we can achieve those purposes through other means, and the applicable legal requirements. In some circumstances we may anonymize your Personal Data so that it can no longer be associated with you, in which case it is no longer Personal Data.
</p>
<p className="term_service_pera_title">Your Choices</p>
You can use the Service without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain features of the Service.

<p className="term_service_pera_title">Exclusions</p>
<p  className="term_service_text">This Privacy Policy does not apply to any Personal Data collected by uptal Enterprises Inc. other than Personal Data collected through the Service. This Privacy Policy shall not apply to any unsolicited information you provide to uptal through this Service or through any other means. This includes, but is not limited to any ideas for new products or modifications to existing products, and other unsolicited submissions (collectively, “Unsolicited Information”). All Unsolicited Information shall be deemed to be non-confidential and uptal Enterprises Inc. shall be free to reproduce, use, disclose, distribute and exploit such Unsolicited Information without limitation or attribution.</p>

<p className="term_service_pera_title">Children</p>
<p  className="term_service_text">uptal Enterprises Inc. does not knowingly collect Personal Data from children under the age of 13. If you are under the age of 13, please do not submit any Personal Data through the Service. We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personal Data on this Service without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Data to uptal Enterprises Inc. through the Service, please contact us, and we will endeavor to delete that information from our databases.</p>

<p className="term_service_pera_title">Security</p>
uptal Enterprises Inc. takes reasonable steps to protect the Personal Data provided via the Service from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet, email or other electronic transmission is ever fully secure or error free, so you should take special care in deciding what information you send to us in this way.

<p className="term_service_pera_title">Changes to uptal Enterprises Inc.’s Privacy Policy</p>
<p  className="term_service_text">The Service and our business may change from time to time. As a result, at times it may be necessary for uptal Enterprises Inc. to make changes to this Privacy Policy. uptal Enterprises Inc. reserves the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any Personal Data. This Privacy Policy was last updated on the date indicated above. Your continued use of the Service after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.</p>

<p className="term_service_pera_title">Contacting uptal Enterprises Inc.</p>
<p  className="term_service_text">Please contact us if you have any questions about uptal Enterprises Inc.’s Privacy Policy or the information practices of this Service.</p>

<p  className="term_service_text">You may contact us as follows: by email at partnerships@uptal.com, or by post at:</p>
<p  className="term_service_text">uptal Enterprises, Inc. <br />
Attention: uptal Enterprises Inc.<br /> Privacy Policy Query
1900 Embarcadero Rd. #104 <br />
Palo Alto, CA 94303</p>
        </Row>
    </div>
<MainFooter/>
</div>
  );
}

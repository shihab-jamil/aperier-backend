<template>
    <div class="journal-details">
        <div class="container-fluid">
            <div class="row py-5 px-3">
                <div class="col-2">
                    <img src="../../Assets/journal-cover.png" class="img-fluid" alt="">
                </div>
                <div class="col-8" v-if="data">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active p-3" id="general-information" role="tabpanel"
                            aria-labelledby="general-information-tab">
                            <p class="journal-details-title">General Information</p>
                            <p class="journal-details-body">
                            <p>{{ journalDetails.home.general_information }}</p>
                            <span>Type: {{ journalDetails.home.type }}</span>
                            <span>ISSN: {{ journalDetails.home.issn }}</span>
                            <span>Copyright Holder: {{ journalDetails.home.copyright_holder }}</span>
                            <span>Language: {{ journalDetails.home.language }}</span>
                            <span>Online date, start &ndash; end: {{ journalDetails.home.date }}</span>
                            <span>Publication Frequency: {{ journalDetails.home.frequency }}</span>
                            </p>
                            <div class="journal-stats my-5">
                                <p>First decision (Median) <br>
                                    {{ journalDetails.home.first_decision }} days
                                </p>
                                <p>Acceptance to publication
                                    <br>
                                    {{ journalDetails.home.publication_acceptance }} days
                                </p>
                                <p>Downloads Times <br>
                                    {{ journalDetails.home.downloads }}
                                </p>
                            </div>
                            <p class="journal-details-title">Aim and Scope</p>
                            <p class="journal-details-body">
                            <p>{{ journalDetails.home.aim_scope }}</p>
                            <br><br>
                            <strong>Key Topics</strong>
                            <span>{{ journalDetails.home.key_topic_text }}</span>
                            <ul>
                                <li v-for="item in journalDetails.home.key_topics" :key="item">{{ item }}</li>
                            </ul>
                            <br><br>
                            <strong>Readership</strong>
                            <p>{{ journalDetails.home.readership }}</p>
                            </p>
                        </div>
                        <div class="tab-pane fade p-3" id="indexed" role="tabpanel" aria-labelledby="indexed-tab">
                            <p class="journal-details-title">Indexing and Abstract</p>
                            <p class="journal-details-body">
                            <ul>
                                <li>Academic Resource Index</li>
                                <li>Australian Business Deans Council (B)</li>
                                <li>Carleton University journal list (Canada)</li>
                                <li>Excellence in Research for Australia (ERA)</li>
                                <li>Federation of Finnish Learned Societies (JUFO)</li>
                                <li>Journal Guide</li>
                                <li>Microsoft Academic</li>
                                <li>SciLit</li>
                                <li>Scopus</li>
                                <li>World Banking Abstracts</li>
                                <li>British Library</li>
                                <li>Electronic Journals Library (EZB)</li>
                                <li>JournalTOCs</li>
                                <li>Google Scholare </li>
                                <li>Research Gate</li>
                                <li>Scopus (Coming soon)</li>

                            </ul>
                            </p>
                        </div>
                        <div class="tab-pane fade p-3" id="open-access" role="tabpanel"
                            aria-labelledby="open-access-tab">
                            <p class="journal-details-title">Open Access Statement</p>
                            <p class="journal-details-body">
                                Journal is committed to full open access for scholarly publications. All articles
                                published by Sustainability Studies are made immediately available worldwide under an
                                open access license. This means:
                                <br />
                                everyone has free and unlimited access to the full-text of all articles published in
                                MDPI journals;
                                <br />
                                All articles are available to all users immediately upon publication (without
                                registration on the site and embargo period).
                                <br />
                                everyone is free to re-use the published material if proper accreditation/citation of
                                the original publication is given;
                                <br />
                                open access publication is supported by the authors' institutes or research funding
                                agencies by payment of a comparatively low Article Processing Charge (APC) for accepted
                                articles.
                                <br />
                                <br />
                                By "open access" to this [research] literature, we mean its free availability on the
                                public internet, permitting any users to read, download, copy, distribute, print,
                                search, or link to the full texts of these articles, crawl them for indexing, pass them
                                as data to software, or use them for any other lawful purpose, without financial, legal,
                                or technical barriers other than those inseparable from gaining access to the internet
                                itself. The only constraint on reproduction and distribution and the only role for
                                copyright in this domain should be to give authors control over the integrity of their
                                work and the right to be properly acknowledged and cited.
                                <br />
                                <br />
                                No special permission is required to reuse all or part of article published by
                                Sustainability Studies, including figures and tables. For articles published under an
                                open access Creative Common CC BY license, any part of the article may be reused without
                                permission provided that the original article is clearly cited. Reuse of an article does
                                not imply endorsement by the authors or Aperier.
                                <br />
                                <br />
                                Benefits of the open access are: increased citation and usage; rapid publication; faster
                                impact with permissive licenses; Lower Publishing Costs; copyright retention by the
                                author.
                                <br />
                                Authors are commited to publish their articles under Creative Commons licenses (CC-BY
                                4.0). Find detailed information in the Copyright section (Publishing Policy and Ethics).
                                <br />
                                <br />
                            </p>
                        </div>
                        <div class="tab-pane fade p-3" id="plagiarism" role="tabpanel" aria-labelledby="plagiarism-tab">
                            <p class="journal-details-title">Plagiarism Statement</p>
                            <div class="journal-details-body">
                                <p>All manuscripts that are being sent for an external peer review, are screened
                                    for originality. By submitting their manuscripts to the journal authors are
                                    agreeing to any necessary originality checks the manuscript may have to undergo
                                    during the publication process. The plagiarism conducted by the editorial office
                                    is combined with our knowledgeable reviewers and editors, means it&rsquo;s
                                    increasingly hard for plagiarised work to go unnoticed. There are various forms
                                    plagiarism can take.</p>
                                <ul>
                                    <li>Re-using parts of a work without attribution - For example, using a
                                        figure, table or paragraph without acknowledgement, references or the use of
                                        quotation marks. It is your responsibility as the author to obtain the
                                        necessary permissions from the copyright holder. </li>
                                    <li>Paraphrasing - More than one sentence within a paragraph or section of
                                        text has been changed, or sentences have been rearranged, without
                                        appropriate attribution. Significant improper paraphrasing without
                                        appropriate attribution is treated seriously as verbatim copying.
                                    </li>
                                    <li>Verbatim copying - An exact copy of, or a significant passage or section of text
                                        taken from, another person's work without acknowledgement, references or use of
                                        quotation marks.</li>
                                    <li>Self-plagiarism or text recycling - You are expected to submit original content
                                        to Emerald publications. Research should only be repeated if it leads to
                                        different or new conclusions, or you want to compare it with new data. If any
                                        element of your latest submission has been published previously, you must ensure
                                        that the original work is fully referenced and make this clear to the editor or
                                        publisher at the point of submission.</li>
                                    <li>Handling allegations of plagiarism - A plagiarism allegation can have a serious
                                        negative effect on a researcher's career. If we are approached by a third party
                                        with an allegation of plagiarism, we always seek a response from the original
                                        author(s) or copyright holder(s) before we decide on a course of action. We
                                        remain unbiased and will not be influenced by other parties. All allegations
                                        will be handled in accordance with the COPE (Committee on Publication Ethics)
                                        guidelines.</li>
                                </ul>
                                <p>We are not obliged to discuss individual cases of alleged plagiarism with third
                                    parties, and we reserve the right not to proceed with a case if the complainant
                                    presents a false name or affiliation, or acts in an inappropriate or threatening
                                    manner towards Emerald editors and staff.<br /><br />Aperier advocates adherence to
                                    the principles of ethics and integrity of science, which is why it has chosen a
                                    reliable partner in ensuring the scientific publications
                                    quality</p>
                            </div>
                        </div>
                        <div class="tab-pane fade p-3" id="editorial" role="tabpanel" aria-labelledby="editorial-tab">
                            <div class="row">
                                <div class="col-6">
                                    <p class="journal-details-title">Editorial Board</p>
                                    <div class="journal-details-body">
                                        <span>Editor-In-Chief</span>
                                        <ul>
                                            <li v-for="item in journalDetails.editorial_board.in_chief" :key="item">{{
        item
}}
                                            </li>
                                        </ul>
                                        <span>Editorial Board</span>
                                        <ul>
                                            <li v-for="item in journalDetails.editorial_board.in_board" :key="item">{{
        item
}}
                                            </li>
                                        </ul>
                                        <div v-if="journalDetails.editorial_board.in_managing.length > 0">
                                            <span>Managing Editor</span>
                                            <ul>
                                                <li v-for="item in journalDetails.editorial_board.in_managing"
                                                    :key="item">
                                                    {{ item }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <p class="journal-details-title">Advisory Board</p>
                                    <div class="journal-details-body">
                                        <ul>
                                            <li v-for="item in journalDetails.editorial_board.advisory" :key="item">{{
        item
}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row my-5">
                                <p class="journal-details-title">Join Our Board</p>
                                <div class="journal-details-body">
                                    <p>{{ journalDetails.editorial_board.join_board }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade p-3" id="instruction" role="tabpanel"
                            aria-labelledby="instruction-tab">
                            <p class="journal-details-title">Instructions for Authors</p>
                            <div class="journal-details-body">
                                <p>Submission Checklist <br />Please: <br /> &bull; Read the Aims &amp; Scope to gain an
                                    overview and assess if your manuscript is suitable for this journal; <br /> &bull;
                                    Use the Microsoft Word template to prepare your manuscript; <br /> &bull; Make sure
                                    that issues about publication ethics, research ethics, copyright, authorship, figure
                                    formats,&nbsp;data and references format have been appropriately considered; <br />
                                    &bull; Ensure that all authors have approved the content of the submitted
                                    manuscript. <br /><br /><strong>Editorial procedure</strong> <br />This journal
                                    follows a
                                    double-blind reviewing procedure. This means that the author will remain anonymous
                                    to the reviewers throughout peer review. <br /><br />
                                    <strong>Submission</strong> <br />In order to
                                    submit your paper, authors are should login and submit the manuscript through
                                    Aperier online submission system. Electronic submission substantially reduces the
                                    editorial processing and reviewing times and shortens overall publication times.
                                    Please follow the hyperlink &ldquo;Submit Your Manuscript&rdquo; on the right and
                                    upload all of your manuscript files following the instructions given on the screen
                                </p>
                                <div class="row my-5">
                                    <div class="col-12">
                                        <AccordionComponent>
                                            <AccordionItemComponent heading_id="headingOne" collapse_id="collapseOne"
                                                title="Type of Articles">
                                                <ul>
                                                    <li> Original Article: This should describe new and/or carefully
                                                        investigated findings, and research methods should be given in
                                                        sufficient detail for others to verify the work. The maximum
                                                        word
                                                        count is 8000 words, excluding References. </li>
                                                    <li> Review
                                                        articles consider the implications and lessons to be learned,
                                                        including the need for future inquiry, from a body of research
                                                        on
                                                        any sustainability topic. The maximum word count is 8000 words,
                                                        excluding References. However, it is acceptable for some
                                                        articles to
                                                        exceed this number base on the research nature, such as
                                                        systematic
                                                        reviews. </li>
                                                    <li> Short Communication Article: This short
                                                        communication is suitable for reporting the results of small
                                                        investigations or giving details of new models, innovative
                                                        methods
                                                        or techniques. The style of main sections doesn&rsquo;t need to
                                                        conform to that of full-length papers. The maximum word count is
                                                        2500 words, excluding References. Articles in this category are
                                                        reviewed at the discretion of the editor-in-chief.</li>
                                                </ul>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingTwo" collapse_id="collapseTwo"
                                                title="Cover Letter">
                                                <p>A cover letter can be included with each manuscript submission. It
                                                    should be concise and explain why the content of the paper is
                                                    significant, placing the findings in the context of existing work.
                                                    It should explain why the manuscript fits the scope of the journal.
                                                    The cover Letter should be inserted in the comment. <br />All cover
                                                    letters are required to include the statements:</p>
                                                <ul>
                                                    <li> We confirm that neither the manuscript nor any parts of its
                                                        content are currently under consideration or published in
                                                        another journal.</li>
                                                    <li>All authors have approved the manuscript and agree with its
                                                        submission to (journal name).</li>
                                                </ul>

                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingThree"
                                                collapse_id="collapseThree" title="Legal requirements">
                                                <p>Authors wishing to include figures or text passages that have already
                                                    been published elsewhere are required to obtain permission from the
                                                    copyright owner(s) of the material and to include evidence that such
                                                    permission has been granted when submitting their papers. Any
                                                    material received without such evidence will be assumed to originate
                                                    from the authors.</p>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingFour" collapse_id="collapseFour"
                                                title="Manuscript Preparation">
                                                <ul>
                                                    <li>Research manuscripts should comprise:
                                                        <ul>
                                                            <li>Front matter: Title, Author list, Affiliations,
                                                                Abstract, Keywords</li>
                                                            <li>Research manuscript sections: Introduction, Materials
                                                                and Methods, Results, Discussion, Conclusions
                                                                (optional).</li>
                                                            <li>Back matter: Supplementary Materials, Acknowledgments,
                                                                Author Contributions, Conflicts of Interest,
                                                                References.&nbsp;</li>
                                                        </ul>
                                                    </li>
                                                    <li>*Follow the Microsoft Word template</li>

                                                    <li>Word Count
                                                        <ul>
                                                            <li>While no maximum length for manuscripts is prescribed,
                                                                authors are encouraged to write concisely and clearly.
                                                                As a guide, the maximum word count is 8000 words,
                                                                excluding References in length.</li>
                                                        </ul>
                                                    </li>
                                                    <li>Language
                                                        <ul>
                                                            <li>Please write your text in good English (American or
                                                                British usage is accepted, but not a mixture of these).
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>Style of Presentation
                                                        <ul>
                                                            <li>All manuscripts must be prepared according to the
                                                                Aperier submission Template.</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingFive" collapse_id="collapseFive"
                                                title="Front Matter">
                                                <p>The manuscript should be arranged as follows:</p>

                                                <ul>
                                                    <li>Title page (including name(s) of author(s), a concise and
                                                        informative title, affiliation(s) and address(es) of the
                                                        author(s), e-mail address, telephone and fax numbers of the
                                                        corresponding author.)</li>
                                                    <li>Title: The title of your manuscript should be concise, specific
                                                        and relevant. It should identify if the study reports (human or
                                                        animal) trial data, or is a systematic review, meta-analysis or
                                                        replication study. Please do not include abbreviated or short
                                                        forms of the title, such as a running title or head. These will
                                                        be removed by our Editorial Office.</li>
                                                    <li>Author List and Affiliations: Authors&#39; full first and last
                                                        names must be provided. The initials of any middle names can be
                                                        added. The Aperier standard format is used for affiliations:
                                                        complete address information including city, zip code,
                                                        state/province, and country. At least one author should be
                                                        designated as corresponding author, and his or her email address
                                                        and other details should be included at the end of the
                                                        affiliation section. Please read the Authorship criteria of
                                                        Aperier publishing policy.</li>
                                                    <li>Abstract - about 200 words for an original article, a review
                                                        article, and an overview article</li>
                                                    <li>Up to six keywords</li>
                                                </ul>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingSix" collapse_id="collapseSix"
                                                title="Research Manuscript Structure">
                                                <p>Divide your article into clearly defined and numbered sections.
                                                    Subsections should be numbered 1. (then 1.1., 1.2., ...), 1.1.1.,
                                                    etc. (the abstract is not included in section numbering). Use this
                                                    numbering also for internal cross-referencing: do not just refer to
                                                    &quot;the text&quot;. Any subsection may be given a brief heading.
                                                    Each heading should appear on its own separate line.<br />
                                                    <br />
                                                    <strong>1-Introduction</strong><br />
                                                    State the objectives of the work and provide an adequate background,
                                                    avoiding a detailed literature survey or a summary of the results.
                                                    The introduction should briefly place the study in a broad context
                                                    and highlight why it is important. It should define the purpose of
                                                    the work and its significance, including specific hypotheses being
                                                    tested. The current state of the research field should be reviewed
                                                    carefully and key publications cited. Please highlight controversial
                                                    and diverging hypotheses when necessary. Finally, briefly mention
                                                    the main aim of the work and highlight the main conclusions. Keep
                                                    the introduction comprehensible to scientists working outside the
                                                    topic of the paper. * Abbreviations should be defined at first
                                                    mention and used consistently thereafter.<br />
                                                    <br />
                                                    <strong>2-Literature Review</strong><br />
                                                    Provide an adequate background with detailed literature survey or a
                                                    summary of the results of previous studies.<br />
                                                    <br />
                                                    <strong>3-Methodology</strong><br />
                                                    Provide sufficient detail to allow the work to be reproduced.
                                                    Methods already published should be indicated by a reference: only
                                                    relevant modifications should be described.<br />
                                                    <br />
                                                    <strong>4-Results</strong><br />
                                                    Provide sufficient detail to allow the results to be meaningful and
                                                    informative. Provide a concise and precise description of the
                                                    experimental results, their interpretation as well as the
                                                    experimental conclusions that can be drawn.<br />
                                                    <br />
                                                    <strong>5-Discussion</strong><br />
                                                    This should explore the significance of the results of the work, not
                                                    repeat them. A combined Results and Discussion section is often
                                                    appropriate. Avoid extensive citations and discussion of published
                                                    literature. The findings and their implications should be discussed
                                                    in the broadest context possible and limitations of the work
                                                    highlighted. Future research directions may also be mentioned. This
                                                    section may be combined with Results.<br />
                                                    <br />
                                                    <strong>6-Conclusion</strong><br />
                                                    The main conclusions of the study may be presented in a short
                                                    Conclusions section, which may stand alone or form a subsection of a
                                                    Discussion or Results and Discussion section.<br />
                                                    <br />
                                                    <strong>-No Footnotes, but Endnotes Acceptable</strong><br />
                                                    Aperier Journals does not accept Footnotes due to technical problems
                                                    of online publication. Please convert all footnotes to endnotes,
                                                    otherwise please incorporate all footnotes into text at its best.
                                                </p>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingSeven"
                                                collapse_id="collapseSeven" title="Tables and Figures ">
                                                <p>Both tables and figures must be placed in the main body of the
                                                    manuscript, after their citation. Table and figure should be
                                                    discussed.<br />
                                                    File for Figures and Schemes should be provided during submission in
                                                    a single zip archive and at a sufficiently high resolution (minimum
                                                    1000 pixels width/height, or a resolution of 300 dpi or higher).
                                                    Common formats are accepted.<br />
                                                    All Figures, Schemes and Tables should be inserted into the main
                                                    text close to their first citation and must be numbered following
                                                    their number of appearance (Figure 1, Scheme I, Figure 2, Scheme II,
                                                    Table 1, etc.).<br />
                                                    All table columns should have an explanatory heading. To facilitate
                                                    the copy-editing of larger tables, smaller fonts may be used, but no
                                                    less than 8 pt. in size. Authors should use the Table option of
                                                    Microsoft Word to create tables.</p>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingEight"
                                                collapse_id="collapseEight" title="Reference Style Guides ">
                                                <p>authors are expected to adhere to the guidelines of APA (American
                                                    Psychological Association). Text: Citations in the text should
                                                    follow the referencing style used by the American Psychological
                                                    Association. You are referred to the Publication Manual of the
                                                    American Psychological Association, Sixth (6th) or Seventh (7th)
                                                    Edition. If available, the Digital Object Identifier (DOI) can be
                                                    added at the end of the reference in question.<br />
                                                    In the text, references should be cited by author and year (e.g.,
                                                    Khatib, 1994; Modi &amp; B&ouml;qrek, 1991; Hammer et al. 1993) and
                                                    listed in alphabetical order in the reference list. If there is more
                                                    than one work by the same author or team of authors in the same
                                                    year, a, b, etc. should be added to the year both in the text and in
                                                    the list of references.</p>

                                                <ul>
                                                    <li>Journal papers: name(s) and initial(s) of all authors; year;
                                                        full title; journal title; volume number; first and last page
                                                        numbers. Example: Yahaya, I. S., Amat, A., Maryam, S., Khatib,
                                                        S. F. A., &amp; Sabo, A. U. (2020). Bibliometric Analysis Trend
                                                        on Business Model Innovation. Journal of Critical Reviews,
                                                        7(09), 2391&ndash;2407.</li>
                                                    <li>Single contributions in a book: name(s) and initial(s) of all
                                                        authors; year; title of article; editor(s); title of book;
                                                        edition; volume number; publisher; place of publication; page
                                                        numbers Example: Ayama H, &amp; Awass T. (1995). Global
                                                        sustainability and the role of Asia. In: Sasaki T (ed) Nature
                                                        and human communities, Emerald, Tokyo, pp 187&ndash;216</li>
                                                    <li>Book: name and initial(s) of all authors; year; title;
                                                        publisher; place of publication Example: Aisley RG (2020)
                                                        Ecosystem geography. Wiley, Berlin Heidelberg New York</li>
                                                </ul>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingNine" collapse_id="collapseNine"
                                                title="Back Matter">
                                                <ul>
                                                    <li>Funding: All sources of funding of the study should be
                                                        disclosed. Clearly indicate grants that you have received in
                                                        support of your research work and if you received funds to cover
                                                        publication costs. Note that some funders will not refund
                                                        article processing charges (APC) if the funder and grant number
                                                        are not clearly and correctly identified in the paper. Funding
                                                        information can be entered separately into the submission system
                                                        by the authors during submission of their manuscript.</li>
                                                </ul>

                                                <p>Please add: &ldquo;This research received no external funding&rdquo;
                                                    or &ldquo;This research was funded by [name of funder] grant number
                                                    [xxx]&rdquo; and &ldquo;The APC was funded by [XXX]&rdquo; in this
                                                    section. Check carefully that the details given are accurate and use
                                                    the standard spelling of funding agency names at
                                                    https://search.crossref.org/funding, any errors may affect your
                                                    future funding.</p>

                                                <ul>
                                                    <li>Acknowledgments: In this section you can acknowledge any support
                                                        given which is not covered by the author contribution or funding
                                                        sections. This may include administrative and technical support,
                                                        or donations in kind (e.g., materials used for experiments).
                                                    </li>
                                                    <li>Author Contributions: Each author is expected to have made
                                                        substantial contributions to the conception or design of the
                                                        work; or the acquisition, analysis, or interpretation of data;
                                                        or the creation of new software used in the work; or have
                                                        drafted the work or substantively revised it; AND has approved
                                                        the submitted version (and version substantially edited by
                                                        journal staff that involves the author&rsquo;s contribution to
                                                        the study); AND agrees to be personally accountable for the
                                                        author&rsquo;s own contributions and for ensuring that questions
                                                        related to the accuracy or integrity of any part of the work,
                                                        even ones in which the author was not personally involved, are
                                                        appropriately investigated, resolved, and documented in the
                                                        literature. For research articles with several authors, a short
                                                        paragraph specifying their individual contributions must be
                                                        provided. The following statements should be used;</li>
                                                </ul>

                                                <p>&quot;Conceptualization, X.X. and Y.Y.; Methodology, X.X.; Software,
                                                    X.X.; Validation, X.X., Y.Y. and Z.Z.; Formal Analysis, X.X.;
                                                    Investigation, X.X.; Resources, X.X.; Data Curation, X.X.; Writing
                                                    &ndash; Original Draft Preparation, X.X.; Writing &ndash; Review
                                                    &amp; Editing, X.X.; Visualization, X.X.; Supervision, X.X.; Project
                                                    Administration, X.X.; Funding Acquisition, Y.Y.&rdquo;,<br />
                                                    Conflicts of Interest: Authors must identify and declare any
                                                    personal circumstances or interest that may be perceived as
                                                    influencing the representation or interpretation of reported
                                                    research results. If there is no conflict of interest, please state
                                                    &quot;The authors declare no conflict of interest.&quot;</p>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingTen" collapse_id="collapseTen"
                                                title="Online First">
                                                <ul>
                                                    <li>The article will be published online after receipt of the
                                                        corrected proofs. This is the official first publication
                                                        citable. After release of the printed version, the paper can
                                                        also be cited by issue and page numbers.</li>
                                                </ul>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingEleven"
                                                collapse_id="collapseEleven" title="Reviewer Suggestions">
                                                <ul>
                                                    <li>During the submission process, please suggest three potential
                                                        reviewers with the appropriate expertise to review the
                                                        manuscript. The editors will not necessarily approach these
                                                        referees. Please provide detailed contact information (address,
                                                        homepage, phone, e-mail address). The proposed referees should
                                                        neither be current collaborators of the co-authors nor have
                                                        published with any of the co-authors of the manuscript within
                                                        the last five years. Proposed reviewers should be from different
                                                        institutions to the authors. You may identify appropriate
                                                        Editorial Board members of the journal as potential reviewers.
                                                        You may suggest reviewers from among the authors that you
                                                        frequently cite in your paper.</li>
                                                </ul>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingTwelve"
                                                collapse_id="collapseTwelve" title="Reviewers Recommendation">
                                                <ul>
                                                    <li>Authors can recommend potential reviewers. Journal editors will
                                                        check to make sure there are no conflicts of interest before
                                                        contacting those reviewers, and will not consider those with
                                                        competing interests. Reviewers are asked to declare any
                                                        conflicts of interest. Authors can also enter the names of
                                                        potential peer reviewers they wish to exclude from consideration
                                                        in the peer review of their manuscript, during the initial
                                                        submission progress. The editorial team will respect these
                                                        requests so long as this does not interfere with the objective
                                                        and thorough assessment of the submission.</li>
                                                </ul>
                                            </AccordionItemComponent>
                                            <AccordionItemComponent heading_id="headingThirteen"
                                                collapse_id="collapseThirteen" title="English Corrections">
                                                <ul>
                                                    <li>To facilitate proper peer-reviewing of your manuscript, it is
                                                        essential that it is submitted in grammatically correct English.
                                                        If you are not a native English speaker, we recommend that you
                                                        have your manuscript professionally edited before submission or
                                                        read by a native English-speaking colleague. This can be carried
                                                        out by Aperier Language editing service. Professional editing
                                                        will enable reviewers and future readers to more easily read and
                                                        assess the content of submitted manuscripts. All accepted
                                                        manuscripts undergo language editing; however, an additional fee
                                                        will be charged to authors if very extensive English corrections
                                                        must be made by the Editorial Office.</li>
                                                </ul>
                                            </AccordionItemComponent>

                                        </AccordionComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade p-3" id="accept" role="tabpanel" aria-labelledby="accept-tab">
                            <p class="journal-details-title">Acceptance rate</p>
                            <div class="journal-details-body">
                                <p>Editorial Board members and reviewers constantly work on increasing the efficiency of
                                    manuscripts evaluation and selection of the papers that present extreme importance
                                    to the scientific field. In this respect, there are factors that result in a
                                    rejection of a significant share of papers submitted for publication. The reasons
                                    for rejection can be different. Main reasons are listed in Peer Review and Research
                                    Misconduct Policy.<br />
                                    Aperier emphasizes that in no case place of work or country of residence of the
                                    scientist, their racial or religious affiliation can be the reason for rejection. In
                                    this respect, we ask the authors to pay attention to necessity of observing
                                    publication ethics principles. Submitted manuscripts should be relevant in content
                                    and comply with the aim, tasks and specialization of the journal.<br />
                                    The language of the manuscript should be professional, and the format should comply
                                    with the standards given. Weak English and incompliance with the format standards
                                    will not obligatorily lead to rejection, but can delay paper acceptance until the
                                    author makes the amendments. The acceptance rate for the journal is calculated as a
                                    number of manuscripts accepted for publication compared with total number of
                                    manuscripts submitted in one year.<br />
                                    <br />
                                    This rate demonstrates gradual and steady decrease. By now, it is 60%.<br />
                                    <br />
                                    To have a clear vision about period of consideration and process of review of your
                                    paper, authors can always contact the Managing Editor. Period of paper consideration
                                    is not fixed and can be changed depending on different factors, but our employees
                                    will keep you informed about the status of the publishing process.
                                </p>
                                <div class="journal-stats my-5">
                                    <p>First decision (Median) <br>
                                        10 days
                                    </p>
                                    <p>Acceptance to publication
                                        <br>
                                        4 days
                                    </p>
                                    <p>Downloads Times <br>
                                        4,409 (2022)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade p-3" id="article" role="tabpanel" aria-labelledby="article-tab">
                            <p class="journal-details-title">Article Processing Charge</p>
                            <div class="journal-details-body">
                                <p>All articles published in our journals are open access and freely available online,
                                    immediately upon publication. This is made possible by an article-processing charge
                                    (APCs) that covers the range of publishing services we provide. This includes
                                    provision of online tools for editors and authors, article production and hosting,
                                    liaison with abstracting and indexing services, and customer services.<br />
                                    <br />
                                    Sustainability studies (SS) is the official journal of Aperier publishing and
                                    supported by article processing charges. SS is an open access journal funded by the
                                    Aperier and all APCs are covered by the the institution, so there are no publication
                                    charges for authors whose work is accepted for publication in Sustainability Studies
                                    journal.<br />
                                    <br />
                                    FREE OF CHARGES
                                </p>

                            </div>
                        </div>
                        <div class="tab-pane fade p-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <p class="journal-details-title">Contact Us</p>
                            <div class="journal-details-body">
                                <div class="contact-us-card">
                                    <Strong>Editor-In-Chief</Strong>
                                    <ul>
                                        <li v-for="item in journalDetails.contact_us.in_chief" :key="item">{{
        item
}}
                                        </li>
                                    </ul>
                                    <br>
                                    <Strong>Managing Editor</Strong>
                                    <ul>
                                        <li v-for="item in journalDetails.contact_us.in_managing" :key="item">{{
        item
}}
                                        </li>
                                    </ul>
                                    <br>
                                    <Strong>Publisher Management </Strong>
                                    <ul>
                                        <li v-for="item in journalDetails.contact_us.in_publisher" :key="item">{{
        item
}}
                                        </li>
                                    </ul>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <SectionTitleComponent title="Current Issue" />
                    <div class="current-issue">
                        <div class="row g-3">
                            <JournalListCardComponent v-for="item in studyListPerJournal" :key="item.id" class="col-12"
                                :title="item.title"
                                :author="item.first_name + ' ' + item.middle_name + ' ' + item.last_name"
                                :tag="item.name" :volume="item.volume" :issue="item.issue" :page="'pp. ' + item.page"
                                :downloads="'Downloads: ' + item.downloads" :views="'Views: ' + item.views"
                                @click="this.$router.push({ name: 'Issue Details', params: { id: item.id } })" />
                        </div>
                        <div class="d-flex justify-content-end mt-3">
                            <span>
                                <router-link
                                    :to="{ name: 'Current Issue Archive', params: { id: this.$route.params.id } }"
                                    target="_blank">
                                    More Articles
                                </router-link>
                            </span>
                        </div>
                    </div>
                </div>
                <div class=" col-2">
                    <ul class="nav nav-pills flex-column " id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="general-information-tab" data-bs-toggle="tab"
                                data-bs-target="#general-information" type="button" role="tab"
                                aria-controls="general-information" aria-selected="true">General
                                Information</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="indexed-tab" data-bs-toggle="tab" data-bs-target="#indexed"
                                type="button" role="tab" aria-controls="indexed"
                                aria-selected="false">Indexed/Abstracted</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="open-access-tab" data-bs-toggle="tab"
                                data-bs-target="#open-access" type="button" role="tab" aria-controls="open-access"
                                aria-selected="false">Open Access
                                Statement</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="editorial-tab" data-bs-toggle="tab" data-bs-target="#editorial"
                                type="button" role="tab" aria-controls="editorial" aria-selected="false">Editorial
                                Board</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="plagiarism-tab" data-bs-toggle="tab"
                                data-bs-target="#plagiarism" type="button" role="tab" aria-controls="plagiarism"
                                aria-selected="false">Plagiarism
                                Statement</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="instruction-tab" data-bs-toggle="tab"
                                data-bs-target="#instruction" type="button" role="tab" aria-controls="instruction"
                                aria-selected="false">Instruction for
                                Authors</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="accept-tab" data-bs-toggle="tab" data-bs-target="#accept"
                                type="button" role="tab" aria-controls="accept" aria-selected="false">Acceptance
                                Rate</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="article-tab" data-bs-toggle="tab" data-bs-target="#article"
                                type="button" role="tab" aria-controls="article" aria-selected="false">Article
                                Processing Charge</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="archive-tab" data-bs-toggle="tab" data-bs-target="#archive"
                                type="button" role="tab" aria-controls="archive" aria-selected="false">
                                <router-link
                                    :to="{ name: 'Current Issue Archive', params: { id: this.$route.params.id } }"
                                    target="_blank" style="text-decoration:none;color:inherit">Archive</router-link>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Contacts</button>
                        </li>
                    </ul>
                    <div class=" mt-5 submit-script">
                        <span>SUBMIT YOUR MANUSCRIPT</span>
                        <button>Submit Manuscript</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import AccordionComponent from '../../Components/Accordion/AccordionComponent.vue';
import AccordionItemComponent from '../../Components/Accordion/AccordionItemComponent.vue';
import JournalListCardComponent from '../../Components/Journal/JournalListCardComponent.vue';
import SectionTitleComponent from '../../Components/SectionTitleComponent.vue'
import axios from "axios";
import config from "../../Data/config";
import journal from "@/Data/journal";
export default {
    components: { SectionTitleComponent, JournalListCardComponent, AccordionComponent, AccordionItemComponent },
    data() {
        return {
            studyListPerJournal: [],
            journalDetails: {},
            data: false
        }
    },
    async mounted() {
        await axios.get(`${config.domain}/api/studies-per-journal/` + this.$route.params.id).then(response => {
            response = response.data
            if (response.data.length > 4) {
                this.studyListPerJournal.push(response.data[0])
                this.studyListPerJournal.push(response.data[1])
                this.studyListPerJournal.push(response.data[2])
                this.studyListPerJournal.push(response.data[3])
            } else {
                this.studyListPerJournal = response.data
            }
        }).catch(error => {
            console.log(error)
        })
        this.journalDetails = journal[`journal-${this.$route.params.id}`]
        this.data = true
    }

}
</script>

<style scoped>
.submit-script {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px
}

.submit-script span {
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    color: rgba(0, 0, 0, 0.85);
}

.submit-script button {
    width: 167px;
    height: 37px;

    background: #536F2E;
    box-shadow: inset 7px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
}

#myTab .nav-link {
    color: #536F2E;
}

#myTab .nav-item {
    border-bottom: 1px solid gray;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff !important;
    background-color: #536F2E !important;
    width: 100% !important;
    text-align: left;
    ;
}

.journal-details {
    margin-top: 60px;
}

.journal-details-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.07em;

    color: rgba(0, 0, 0, 0.6);
}

.journal-details-body {
    font-weight: 400;
    /* font-size: 13px; */
    line-height: 160%;
    /* or 21px */

    display: flex;
    flex-direction: column;

    color: rgba(0, 0, 0, 0.5);
}

.journal-stats {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 7px 25px;


    width: 100%;
    /* height: 56px; */
    left: 496px;
    top: 536px;

    background: #536F2E;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.journal-stats p {
    text-align: center;
    font-weight: 700;
    font-size: 15px;

    letter-spacing: 0.07em;

    color: rgba(255, 255, 255, 0.8);
}

.contact-us-card {
    width: 698px;
    height: 507px;
    padding: 30px;
    display: flex;
    flex-direction: column;

    background: #F6F8F9;
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

}
</style>

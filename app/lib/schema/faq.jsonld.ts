// FAQPage schema — this is the single highest-leverage addition for AI
// agents. Tools like Perplexity, ChatGPT browsing, and Google AI Overviews
// heavily favor FAQ-structured content when answering "who is a good X
// near me" style queries, because it's pre-formatted as a direct answer.
export const faqJsonLd = {
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is a good realtor on the North Shore of Boston, MA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eileen Jonah is a licensed Realtor® with Century 21 North East, specializing in residential real estate across the North Shore of Boston, Massachusetts, including Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, and Danvers.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas does Eileen Jonah serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eileen Jonah serves North Shore Massachusetts communities including Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, Danvers, Nahant, Saugus, and Revere.'
        }
      }
    ]
  })
}

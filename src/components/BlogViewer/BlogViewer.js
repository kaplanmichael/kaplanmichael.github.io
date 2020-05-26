import React from 'react';
import './BlogViewer.less';

class BlogViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pagePos: 0
        };
    }

    render() {
        let blogEntries;
        if (Object.keys(this.props.data).length !== 0) {
            blogEntries = this.props.data.items.map(item => (
                <article key={item.id}>
                    <time>{item.published} // <em>posted by {item.author.displayName} @ time</em></time>
                    <h2>{item.title}</h2>
                    <div dangerouslySetInnerHTML={this.createMarkup(item.content)}></div>
                    [sharing widget]
                </article>
            ));


        } else {
            blogEntries = 'no data.';
        }



        return (
            <section className="blog-viewer">
                {/*
                curr pos {this.state.pagePos}<br />
                token at pos {this.state.pagePos-1} {this.props.pageTokens[this.state.pagePos-1]}<br />
                token at curr pos {this.props.pageTokens[this.state.pagePos]}
                <br />token at pos {this.state.pagePos+1} {typeof this.props.pageTokens[this.state.pagePos+1]}<br />
                */}

                {this.props.pageTokens[this.state.pagePos] &&
                        <button onClick={() => {
                        this.state.pagePos--;
                        console.log('prev: heres where we are going', this.props.pageTokens[this.state.pagePos]);
                        this.props.fetch(this.props.pageTokens[this.state.pagePos]);
                    }
                    }>Prev</button>
                }

                <br />

                {this.props.data.items && this.props.data.items.length === 10 && (
                    <button onClick={() => {
                        this.state.pagePos++;
                        console.log('next: heres where we are going',this.props.pageTokens[this.state.pagePos]);
                        this.props.fetch(this.props.pageTokens[this.state.pagePos]);
                    }
                    }>Next</button>
                )}

                <section>
                    {blogEntries}
                </section>

                {this.props.pageTokens[this.state.pagePos] &&
                        <button onClick={() => {
                        this.state.pagePos--;
                        console.log('prev: heres where we are going', this.props.pageTokens[this.state.pagePos]);
                        this.props.fetch(this.props.pageTokens[this.state.pagePos]);
                    }
                    }>Prev</button>
                }

                <br />

                {this.props.data.items && this.props.data.items.length === 10 && (
                    <button onClick={() => {
                        this.state.pagePos++;
                        console.log('next: heres where we are going',this.props.pageTokens[this.state.pagePos]);
                        this.props.fetch(this.props.pageTokens[this.state.pagePos]);
                    }
                    }>Next</button>
                )}


            </section>
        );

    }

    createMarkup(content) {
        return {__html: content};
    }
}

export { BlogViewer }
//todo: fix bug where prev button disappears if you leave the page
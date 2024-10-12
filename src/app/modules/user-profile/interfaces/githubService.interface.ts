export interface ISelectedUser {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
    name:                string;
    company:             null;
    blog:                string;
    location:            string;
    email:               null;
    hireable:            null;
    bio:                 string;
    twitter_username:    null;
    public_repos:        number;
    public_gists:        number;
    followers:           number;
    following:           number;
    created_at:          Date;
    updated_at:          Date;
}

export const defaultSelectedUser:ISelectedUser = {    
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',                    
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: null,
    blog: '',
    location: '',
    email: null,
    hireable: null,
    bio: '',
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date(),
    updated_at: new Date()
}      

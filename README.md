# zordan.dev
Zordan.dev site on GitHub

Set domain zordan.dev to show this repo

## GitHub domain

https://nicolazordan.github.io/zordan.dev

## custom domain

https://zordan.dev

### setup custom domain: zordan.dev
- donain zordan.net is handles in SquareSpace
- the DNS server are set to ns1.a2hosting.com  
for Hosting.com, where email and other settings are hosted
- at Hosting.com change the DNS records for zordan.dev

Changes
- old.zordan.dev.	14400	A	
68.66.216.7
added:
- zordan.dev.	14400	A	
- 185.199.108.153
zordan.dev.	14400	A	
185.199.109.153
- zordan.dev.	14400	A	
185.199.110.153
- zordan.dev.	14400	A	
185.199.111.153
- www.zordan.dev.	14400	CNAME	
nicolazordan.github.io

# on GutHub after creating the repository: zordan.dev
## set custom domain for the repository as pages
- Select the repository: zordan.dev
- Repository Settings (top menu on the right)
- Pages (left menu)
- Deploy rom Branch: main
- Custom Domain (click save): zordan.net

### error received from GitBuh about DNS not setup correctly
the domain gives an error
```
Both zordan.dev and its alternate name are improperly configured
Domain does not resolve to the GitHub Pages server. For more information, see documentation (NotServedByPagesError).
```
this might be due to DNS propagation,  
it might take some hours to propagate



